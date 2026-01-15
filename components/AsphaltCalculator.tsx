'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calculator, Ruler, Package, Save, Printer, ArrowRight, RefreshCw } from 'lucide-react';
import {
  type LengthUnit,
  lengthUnits,
  calculateVolume,
  calculateArea,
  calculateTonnage,
  cubicMetersToYards,
  squareMetersToFeet,
  tonsToPounds,
  formatNumber,
  ASPHALT_DENSITY,
} from '@/lib/calculator';

interface AsphaltFormData {
  length: number;
  width: number;
  thickness: number;
  unit: LengthUnit;
  density: number;
}

interface CalculationResult {
  volumeM3: number;
  volumeYd3: number;
  areaM2: number;
  areaSqFt: number;
  tonnage: number;
  pounds: number;
}

export default function AsphaltCalculator() {
  const [result, setResult] = useState<CalculationResult | null>(null);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<AsphaltFormData>({
    defaultValues: {
      length: 20,
      width: 10,
      thickness: 3,
      unit: 'ft',
      density: ASPHALT_DENSITY.standard,
    },
  });

  const watchedValues = watch();

  const onSubmit = (data: AsphaltFormData) => {
    const volumeM3 = calculateVolume(data.length, data.width, data.thickness, data.unit);
    const areaM2 = calculateArea(data.length, data.width, data.unit);
    const tonnage = calculateTonnage(volumeM3, data.density);

    setResult({
      volumeM3,
      volumeYd3: cubicMetersToYards(volumeM3),
      areaM2,
      areaSqFt: squareMetersToFeet(areaM2),
      tonnage,
      pounds: tonsToPounds(tonnage),
    });
  };

  const handleSave = () => {
    if (result) {
      const data = {
        inputs: watchedValues,
        results: result,
        timestamp: new Date().toISOString(),
      };
      localStorage.setItem('asphalt-calculation', JSON.stringify(data));
      alert('Calculation saved successfully!');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleReset = () => {
    reset();
    setResult(null);
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 overflow-hidden border border-slate-100">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 md:p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-inner">
            <Calculator className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Asphalt Calculator</h2>
            <p className="text-blue-100 mt-1 font-medium opacity-90">Calculate volume, tonnage, and area instantly</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Unit Selection */}
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
            <label className="block text-sm font-bold text-slate-700 mb-3 uppercase tracking-wider">
              Measurement Unit
            </label>
            <div className="relative">
              <select
                {...register('unit')}
                className="w-full pl-4 pr-10 py-3.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow appearance-none cursor-pointer"
              >
                {Object.entries(lengthUnits).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value.name}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                  <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Dimensions */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">1</span>
              Dimensions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Length
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    {...register('length', { required: true, min: 0.01 })}
                    className={`w-full pl-10 pr-4 py-3.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium ${
                      errors.length ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="20"
                  />
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
                {errors.length && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">Length is required</p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Width
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    {...register('width', { required: true, min: 0.01 })}
                    className={`w-full pl-10 pr-4 py-3.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium ${
                      errors.width ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="10"
                  />
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
                {errors.width && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">Width is required</p>
                )}
              </div>

              <div className="relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Thickness
                </label>
                <div className="relative">
                  <input
                    type="number"
                    step="0.01"
                    {...register('thickness', { required: true, min: 0.01 })}
                    className={`w-full pl-10 pr-4 py-3.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all font-medium ${
                      errors.thickness ? 'border-red-300 focus:ring-red-200' : 'border-slate-300'
                    }`}
                    placeholder="3"
                  />
                  <Ruler className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
                {errors.thickness && (
                  <p className="text-red-500 text-xs mt-1.5 font-medium ml-1">Thickness is required</p>
                )}
              </div>
            </div>
          </div>

          {/* Density Selection */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm">2</span>
              Material Details
            </h3>
            <div className="relative">
              <label className="block text-sm font-semibold text-slate-600 mb-2">
                Asphalt Density (kg/m³)
              </label>
              <div className="relative">
                <select
                  {...register('density', { valueAsNumber: true })}
                  className="w-full pl-10 pr-10 py-3.5 bg-white border border-slate-300 rounded-lg text-slate-700 font-medium focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow appearance-none cursor-pointer"
                >
                  <option value={ASPHALT_DENSITY.light}>Light Mix (2200 kg/m³)</option>
                  <option value={ASPHALT_DENSITY.standard}>Standard Mix (2400 kg/m³)</option>
                  <option value={ASPHALT_DENSITY.heavy}>Dense Mix (2500 kg/m³)</option>
                </select>
                <Package className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                  <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/30 transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5"
            >
              <Calculator size={22} />
              Calculate Results
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-4 bg-slate-100 text-slate-600 rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center gap-2"
              title="Reset Form"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        </form>

        {/* Results */}
        {result && (
          <div className="mt-10 animate-fade-in">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900">Estimated Requirements</h3>
              <div className="flex gap-2">
                <button 
                  onClick={handleSave}
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Save Calculation"
                >
                  <Save size={20} />
                </button>
                <button 
                  onClick={handlePrint}
                  className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                  title="Print Results"
                >
                  <Printer size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Tonnage - Primary Result */}
              <div className="col-span-1 md:col-span-2 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-2xl border border-amber-200 shadow-sm relative overflow-hidden group">
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-200/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
                
                <h4 className="text-amber-800 font-semibold mb-2 uppercase tracking-wide text-sm">Total Tonnage Required</h4>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold text-slate-900 tracking-tight">
                    {formatNumber(result.tonnage)}
                  </span>
                  <span className="text-xl font-bold text-amber-700">Tons</span>
                </div>
                <p className="text-slate-500 mt-2 text-sm font-medium">
                  Approx. {formatNumber(result.pounds)} lbs
                </p>
              </div>

              {/* Volume */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="text-blue-500" size={20} />
                  <span className="font-semibold text-slate-700">Total Volume</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-2xl font-bold text-slate-900">{formatNumber(result.volumeM3)}</span>
                    <span className="text-sm font-medium text-slate-500">m³</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-slate-200 pt-1 mt-1">
                    <span className="text-lg font-semibold text-slate-700">{formatNumber(result.volumeYd3)}</span>
                    <span className="text-xs font-medium text-slate-500">cubic yards</span>
                  </div>
                </div>
              </div>

              {/* Area */}
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-2 mb-3">
                  <Ruler className="text-blue-500" size={20} />
                  <span className="font-semibold text-slate-700">Surface Area</span>
                </div>
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <span className="text-2xl font-bold text-slate-900">{formatNumber(result.areaM2)}</span>
                    <span className="text-sm font-medium text-slate-500">m²</span>
                  </div>
                  <div className="flex justify-between items-baseline border-t border-slate-200 pt-1 mt-1">
                    <span className="text-lg font-semibold text-slate-700">{formatNumber(result.areaSqFt)}</span>
                    <span className="text-xs font-medium text-slate-500">sq. ft.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 flex items-start gap-3">
              <div className="mt-1">
                <div className="w-5 h-5 rounded-full bg-blue-200 text-blue-700 flex items-center justify-center font-bold text-xs">i</div>
              </div>
              <p className="text-sm text-blue-800 leading-relaxed">
                <strong>Note:</strong> We recommend ordering 5-10% extra material to account for waste, uneven subgrade, and compaction. 
                <span className="block mt-1">
                  Recommended order: <strong>{formatNumber(result.tonnage * 1.05)} - {formatNumber(result.tonnage * 1.10)} Tons</strong>
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
