'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { DollarSign, Calculator, TrendingUp, Save, Printer } from 'lucide-react';
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

export default function CostCalculator() {
  const [result, setResult] = useState<any>(null);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CostFormData>({
    defaultValues: {
      length: 20,
      width: 10,
      thickness: 3,
      unit: 'ft',
      density: ASPHALT_DENSITY.standard,
      pricePerTon: 60,
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

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-green-100 p-3 rounded-lg">
          <DollarSign className="text-green-600" size={28} />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Asphalt Cost Calculator</h2>
          <p className="text-gray-600 text-sm">Calculate total project costs including materials and labor</p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Dimensions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Unit</label>
            <select {...register('unit')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500">
              {Object.entries(lengthUnits).map(([key, value]) => (
                <option key={key} value={key}>{value.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Length</label>
            <input type="number" step="0.01" {...register('length', { required: true, min: 0.01 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Width</label>
            <input type="number" step="0.01" {...register('width', { required: true, min: 0.01 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Thickness</label>
            <input type="number" step="0.01" {...register('thickness', { required: true, min: 0.01 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
        </div>

        {/* Pricing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Price per Ton ($)</label>
            <input type="number" step="0.01" {...register('pricePerTon', { required: true, min: 0 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Labor Cost ($/sq ft)</label>
            <input type="number" step="0.01" {...register('laborCostPerSqFt', { required: true, min: 0 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Base Prep ($/sq ft)</label>
            <input type="number" step="0.01" {...register('baseCostPerSqFt', { required: true, min: 0 })} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500" />
          </div>
        </div>

        <button type="submit" className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2 text-lg">
          <Calculator size={20} />
          Calculate Total Cost
        </button>
      </form>

      {result && (
        <div className="mt-8 border-t pt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Cost Breakdown</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-2">Material Cost</h4>
              <p className="text-3xl font-bold text-blue-600">{formatCurrency(result.materialCost)}</p>
              <p className="text-sm text-gray-600 mt-1">{formatNumber(result.tonnage)} tons @ ${watchedValues.pricePerTon}/ton</p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Labor Cost</h4>
              <p className="text-3xl font-bold text-green-600">{formatCurrency(result.laborCost)}</p>
              <p className="text-sm text-gray-600 mt-1">Installation and compaction</p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
              <h4 className="font-semibold text-gray-900 mb-2">Base Preparation</h4>
              <p className="text-3xl font-bold text-purple-600">{formatCurrency(result.baseCost)}</p>
              <p className="text-sm text-gray-600 mt-1">Grading and base material</p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
              <h4 className="font-semibold text-gray-900 mb-2">Total Project Cost</h4>
              <p className="text-3xl font-bold text-amber-600">{formatCurrency(result.totalCost)}</p>
              <p className="text-sm text-gray-600 mt-1">Complete installation</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <button onClick={handleSave} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Save size={18} />
              Save Calculation
            </button>
            <button onClick={() => window.print()} className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
              <Printer size={18} />
              Print Results
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
