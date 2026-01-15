'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DollarSign, Calculator, Ruler, Package, Save, Printer, RefreshCw } from 'lucide-react';
import {
  type LengthUnit,
  lengthUnits,
  calculateVolume,
  calculateArea,
  calculateTonnage,
  calculateCost,
  formatCurrency,
  formatNumber,
  ASPHALT_DENSITY,
} from '@/lib/calculator';

interface CostFormData {
  length: number;
  width: number;
  thickness: number;
  unit: LengthUnit;
  density: number;
  pricePerTon: number;
  laborCostPerSqFt: number;
  baseCostPerSqFt: number;
}

interface CostResult {
  materialCost: number;
  laborCost: number;
  baseCost: number;
  totalCost: number;
  tonnage: number;
  areaM2: number;
}

export default function CostCalculator() {
  const [result, setResult] = useState<CostResult | null>(null);
  const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<CostFormData>({
    defaultValues: {
      length: 20,
      width: 10,
      thickness: 3,
      unit: 'ft',
      density: ASPHALT_DENSITY.standard,
      pricePerTon: 85,
      laborCostPerSqFt: 2.5,
      baseCostPerSqFt: 1.5,
    },
  });

  const watchedValues = watch();

  const onSubmit = (data: CostFormData) => {
    const volumeM3 = calculateVolume(data.length, data.width, data.thickness, data.unit);
    const areaM2 = calculateArea(data.length, data.width, data.unit);
    const tonnage = calculateTonnage(volumeM3, data.density);
    const costs = calculateCost(
      tonnage,
      data.pricePerTon,
      data.laborCostPerSqFt,
      data.baseCostPerSqFt,
      areaM2
    );

    setResult({
      ...costs,
      tonnage,
      areaM2,
    });
  };

  const handleSave = () => {
    if (result) {
      localStorage.setItem('asphalt-cost-calculation', JSON.stringify({ inputs: watchedValues, results: result }));
      alert('Calculation saved!');
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
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 p-6 md:p-8 text-white">
        <div className="flex items-center gap-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl shadow-inner">
            <DollarSign className="text-white" size={32} />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Project Cost Estimator</h2>
            <p className="text-emerald-100 mt-1 font-medium opacity-90">Calculate material, labor, and total project costs</p>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Dimensions Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">1</span>
              Project Dimensions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="col-span-1 md:col-span-1">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Unit</label>
                <div className="relative">
                  <select 
                    {...register('unit')} 
                    className="w-full pl-3 pr-8 py-3 bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-shadow appearance-none cursor-pointer"
                  >
                    {Object.entries(lengthUnits).map(([key, value]) => (
                      <option key={key} value={key}>{value.name}</option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="col-span-1 md:col-span-1 relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Length</label>
                <input 
                  type="number" 
                  step="0.01" 
                  {...register('length', { required: true, min: 0.01 })} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                  placeholder="20"
                />
              </div>

              <div className="col-span-1 md:col-span-1 relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Width</label>
                <input 
                  type="number" 
                  step="0.01" 
                  {...register('width', { required: true, min: 0.01 })} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                  placeholder="10"
                />
              </div>

              <div className="col-span-1 md:col-span-1 relative">
                <label className="block text-sm font-semibold text-slate-600 mb-2">Thickness</label>
                <input 
                  type="number" 
                  step="0.01" 
                  {...register('thickness', { required: true, min: 0.01 })} 
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all" 
                  placeholder="3"
                />
              </div>
            </div>
          </div>

          {/* Cost Factors Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-sm">2</span>
              Cost Factors
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Asphalt Price ($/Ton)
                  <span className="text-slate-400 cursor-help" title="Average price per ton of asphalt material">ⓘ</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('pricePerTon', { required: true, min: 0 })}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Labor Cost ($/Sq.Ft)
                  <span className="text-slate-400 cursor-help" title="Estimated labor cost per square foot">ⓘ</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('laborCostPerSqFt', { min: 0 })}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-600 mb-2 flex items-center gap-1">
                  Base Prep ($/Sq.Ft)
                  <span className="text-slate-400 cursor-help" title="Cost for grading and base preparation per square foot">ⓘ</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-slate-500">$</span>
                  </div>
                  <input
                    type="number"
                    step="0.01"
                    {...register('baseCostPerSqFt', { min: 0 })}
                    className="w-full pl-8 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-bold hover:bg-emerald-700 hover:shadow-lg hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2 text-lg transform hover:-translate-y-0.5"
            >
              <Calculator size={22} />
              Calculate Costs
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
              <h3 className="text-2xl font-bold text-slate-900">Estimated Project Cost</h3>
              <div className="flex gap-2">
                <button 
                  onClick={handleSave}
                  className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Save Calculation"
                >
                  <Save size={20} />
                </button>
                <button 
                  onClick={handlePrint}
                  className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
                  title="Print Results"
                >
                  <Printer size={20} />
                </button>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 md:p-8 mb-8 shadow-xl relative overflow-hidden border border-slate-700">
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-emerald-500 rounded-full opacity-20 blur-3xl"></div>
              <div className="relative z-10 text-center">
                <p className="text-slate-300 font-medium mb-2 uppercase tracking-wider text-sm">Total Estimated Cost</p>
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tight">
                  {formatCurrency(result.totalCost)}
                </div>
                <p className="text-emerald-400 font-medium">
                  ~ {formatCurrency(result.totalCost / result.tonnage)} per ton installed
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Package className="text-blue-500" size={18} />
                  Materials
                </h4>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold text-slate-900">{formatCurrency(result.materialCost)}</span>
                  <span className="text-xs text-slate-500 mb-1">{formatNumber(result.tonnage)} tons</span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <DollarSign className="text-emerald-500" size={18} />
                  Labor
                </h4>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold text-slate-900">{formatCurrency(result.laborCost)}</span>
                </div>
              </div>

              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
                <h4 className="font-semibold text-slate-700 mb-3 flex items-center gap-2">
                  <Ruler className="text-amber-500" size={18} />
                  Base Prep
                </h4>
                <div className="flex justify-between items-end">
                  <span className="text-2xl font-bold text-slate-900">{formatCurrency(result.baseCost)}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-amber-50 border border-amber-100 rounded-lg text-sm text-amber-800">
              <strong>Disclaimer:</strong> This is a rough estimate. Actual costs vary by region, contractor availability, site conditions, and material price fluctuations. Always get quotes from local licensed contractors.
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
