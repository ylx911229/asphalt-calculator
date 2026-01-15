// Unit conversion utilities
export const lengthUnits = {
  in: { name: 'Inches', toMeters: 0.0254 },
  ft: { name: 'Feet', toMeters: 0.3048 },
  yd: { name: 'Yards', toMeters: 0.9144 },
  cm: { name: 'Centimeters', toMeters: 0.01 },
  m: { name: 'Meters', toMeters: 1 },
} as const;

export type LengthUnit = keyof typeof lengthUnits;

// Convert length to meters
export function convertToMeters(value: number, unit: LengthUnit): number {
  return value * lengthUnits[unit].toMeters;
}

// Convert meters to specific unit
export function convertFromMeters(meters: number, unit: LengthUnit): number {
  return meters / lengthUnits[unit].toMeters;
}

// Asphalt density constants (kg/m³)
export const ASPHALT_DENSITY = {
  standard: 2400, // Standard hot mix asphalt
  light: 2200,    // Lighter mixes
  heavy: 2500,    // Dense graded mixes
} as const;

// Calculate volume in cubic meters
export function calculateVolume(
  length: number,
  width: number,
  thickness: number,
  unit: LengthUnit
): number {
  const lengthM = convertToMeters(length, unit);
  const widthM = convertToMeters(width, unit);
  const thicknessM = convertToMeters(thickness, unit);
  return lengthM * widthM * thicknessM;
}

// Calculate area in square meters
export function calculateArea(
  length: number,
  width: number,
  unit: LengthUnit
): number {
  const lengthM = convertToMeters(length, unit);
  const widthM = convertToMeters(width, unit);
  return lengthM * widthM;
}

// Calculate tonnage
export function calculateTonnage(
  volumeM3: number,
  density: number = ASPHALT_DENSITY.standard
): number {
  return (volumeM3 * density) / 1000; // Convert kg to metric tons
}

// Calculate cubic yards from cubic meters
export function cubicMetersToYards(m3: number): number {
  return m3 * 1.30795;
}

// Calculate square feet from square meters
export function squareMetersToFeet(m2: number): number {
  return m2 * 10.7639;
}

// Calculate pounds from metric tons
export function tonsToPounds(tons: number): number {
  return tons * 2204.62;
}

// Calculate cost
export interface CostCalculation {
  materialCost: number;
  laborCost: number;
  baseCost: number;
  totalCost: number;
}

export function calculateCost(
  tonnage: number,
  pricePerTon: number,
  laborCostPerSqFt: number = 0,
  baseCostPerSqFt: number = 0,
  areaM2: number = 0
): CostCalculation {
  const materialCost = tonnage * pricePerTon;
  const areaSqFt = squareMetersToFeet(areaM2);
  const laborCost = laborCostPerSqFt * areaSqFt;
  const baseCost = baseCostPerSqFt * areaSqFt;
  const totalCost = materialCost + laborCost + baseCost;

  return {
    materialCost,
    laborCost,
    baseCost,
    totalCost,
  };
}

// Thickness recommendations (in inches)
export const thicknessRecommendations = {
  residential: {
    driveway: { min: 2, recommended: 3, max: 4 },
    walkway: { min: 2, recommended: 2.5, max: 3 },
  },
  commercial: {
    parking: { min: 3, recommended: 4, max: 5 },
    heavyTraffic: { min: 6, recommended: 8, max: 10 },
  },
} as const;

// Format currency
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

// Format number with commas
export function formatNumber(num: number, decimals: number = 2): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(num);
}
