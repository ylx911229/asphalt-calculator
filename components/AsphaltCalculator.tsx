'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calculator, Ruler, Package, DollarSign, Save, Printer } from 'lucide-react';
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
  const { register, handleSubmit, watch, formState: { errors } } = useForm<AsphaltFormData>({
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-blue-100 p-3 rounded-lg">
          <Calculator className="text-blue-600" size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Asphalt Calculator</h2>
          <p className="text-gray-600 text-sm">Calculate volume, tonnage, and area</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Unit Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Measurement Unit
          </label>
          <select
            {...register('unit')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {Object.entries(lengthUnits).map(([key, value]) => (
              <option key={key} value={key}>
                {value.name}
              </option>
            ))}
          </select>
        </div>

        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Ruler className="inline mr-1" size={16} />
              Length
            </label>
            <input
              type="number"
              step="0.01"
              {...register('length', { required: true, min: 0.01 })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter length"
            />
            {errors.length && (
              <p className="text-red-500 text-xs mt-1">Length is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Ruler className="inline mr-1" size={16} />
              Width
            </label>
            <input
              type="number"
              step="0.01"
              {...register('width', { required: true, min: 0.01 })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter width"
            />
            {errors.width && (
              <p className="text-red-500 text-xs mt-1">Width is required</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              <Ruler className="inline mr-1" size={16} />
              Thickness
            </label>
            <input
              type="number"
              step="0.01"
              {...register('thickness', { required: true, min: 0.01 })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter thickness"
            />
            {errors.thickness && (
              <p className="text-red-500 text-xs mt-1">Thickness is required</p>
            )}
          </div>
        </div>

        {/* Density Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            <Package className="inline mr-1" size={16} />
            Asphalt Density (kg/m³)
          </label>
          <select
            {...register('density', { valueAsNumber: true })}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value={ASPHALT_DENSITY.light}>Light Mix (2200 kg/m³)</option>
            <option value={ASPHALT_DENSITY.standard}>Standard Mix (2400 kg/m³)</option>
            <option value={ASPHALT_DENSITY.heavy}>Dense Mix (2500 kg/m³)</option>
          </select>
        </div>

        {/* Calculate Button */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 text-lg"
        >
          <Calculator size={20} />
          Calculate Asphalt Requirements
        </button>
      </form>

      {/* Results */}
      {result && (
        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Calculation Results</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Volume */}
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <Package className="text-blue-600" size={20} />
                <h4 className="font-semibold text-gray-900">Volume Required</h4>
              </div>
              <p className="text-3xl font-bold text-blue-600">
                {formatNumber(result.volumeYd3)} yd³
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ({formatNumber(result.volumeM3)} m³)
              </p>
            </div>

            {/* Tonnage */}
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-green-600" size={20} />
                <h4 className="font-semibold text-gray-900">Weight Required</h4>
              </div>
              <p className="text-3xl font-bold text-green-600">
                {formatNumber(result.tonnage)} tons
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ({formatNumber(result.pounds, 0)} lbs)
              </p>
            </div>

            {/* Area */}
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <Ruler className="text-purple-600" size={20} />
                <h4 className="font-semibold text-gray-900">Coverage Area</h4>
              </div>
              <p className="text-3xl font-bold text-purple-600">
                {formatNumber(result.areaSqFt)} ft²
              </p>
              <p className="text-sm text-gray-600 mt-1">
                ({formatNumber(result.areaM2)} m²)
              </p>
            </div>

            {/* Cost Estimate Placeholder */}
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="text-amber-600" size={20} />
                <h4 className="font-semibold text-gray-900">Estimated Cost</h4>
              </div>
              <p className="text-lg text-gray-700">
                Use our <a href="/cost-calculator" className="text-blue-600 hover:underline font-semibold">Cost Calculator</a> for detailed pricing
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleSave}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Save size={18} />
              Save Calculation
            </button>
            <button
              onClick={handlePrint}
              className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Printer size={18} />
              Print Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
