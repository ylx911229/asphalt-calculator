export const siteConfig = {
  name: 'Asphalt Calculator',
  description: 'Free asphalt calculator for paving projects. Calculate material costs, tonnage, and compare asphalt vs concrete for driveways and parking lots.',
  url: 'https://asphalt-calculator.net',
  ogImage: '/logo.png',
  keywords: [
    'asphalt calculator',
    'asphalt driveway cost calculator',
    'cost of asphalt driveway calculator',
    'asphalt vs concrete driveway cost calculator',
    'asphalt tonnage calculator',
    'asphalt ton calculator',
    'paving calculator',
    'driveway cost estimator',
    'asphalt material calculator',
    'asphalt thickness calculator'
  ]
};

export interface PageSEO {
  title: string;
  description: string;
  keywords: string[];
  canonical?: string;
}

export const pageSEO: Record<string, PageSEO> = {
  home: {
    title: 'Asphalt Calculator - Free Paving Cost Estimator',
    description: 'Calculate asphalt material, tonnage, and costs for your paving project. Free online calculator with instant results for driveways, parking lots, and roads.',
    keywords: [
      'asphalt calculator',
      'paving calculator',
      'asphalt cost calculator',
      'driveway calculator'
    ]
  },
  cost: {
    title: 'Asphalt Driveway Cost Calculator - Estimate Paving',
    description: 'Estimate your asphalt driveway cost with our free calculator. Get accurate material and labor cost breakdowns for residential and commercial paving projects.',
    keywords: [
      'asphalt driveway cost calculator',
      'cost of asphalt driveway calculator',
      'paving cost estimator',
      'driveway cost calculator'
    ]
  },
  comparison: {
    title: 'Asphalt vs Concrete Calculator - Compare Costs',
    description: 'Compare asphalt and concrete driveway costs side-by-side. Calculate initial installation, maintenance costs, and long-term value for your paving project.',
    keywords: [
      'asphalt vs concrete driveway cost calculator',
      'asphalt vs concrete comparison',
      'driveway material comparison',
      'paving cost comparison'
    ]
  },
  tonnage: {
    title: 'Asphalt Tonnage Calculator - Calculate Weight',
    description: 'Calculate asphalt tonnage for your paving project. Accurate weight estimates based on area, thickness, and asphalt density for material ordering.',
    keywords: [
      'asphalt tonnage calculator',
      'asphalt ton calculator',
      'asphalt weight calculator',
      'tonnage estimator'
    ]
  },
  guide: {
    title: 'Asphalt Paving Guide - Tips and Best Practices',
    description: 'Complete guide to asphalt paving including thickness recommendations, cost factors, maintenance tips, and installation best practices for driveways.',
    keywords: [
      'asphalt paving guide',
      'asphalt thickness guide',
      'paving tips',
      'driveway installation'
    ]
  },
  faq: {
    title: 'Asphalt Calculator FAQ - Common Questions Answered',
    description: 'Find answers to frequently asked questions about asphalt calculations, costs, installation, and maintenance for residential and commercial paving projects.',
    keywords: [
      'asphalt calculator faq',
      'asphalt questions',
      'paving faq',
      'driveway questions'
    ]
  }
};
