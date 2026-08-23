export interface SimulatorInputs {
  industry: string;
  monthlyLeads: number;
  conversionRate: number; // in % (e.g. 5)
  customerValue: number; // in INR
  followupHoursWeekly: number; // in hours
  monthlyAdSpend: number; // in INR
}

export interface SimulatorOutputs {
  currentMonthlyCustomers: number;
  currentMonthlyRevenue: number;
  currentAnnualRevenue: number;
  cpl: number;
  cac: number;
  leadsLostMonthly: number;
  lostRevenueMonthly: number;
  lostRevenueAnnual: number;
  lostFollowupsMonthly: number;
  hoursWastedMonthly: number;
  productivitySavingsMonthly: number;
  projectedMonthlyRevenue: number;
  projectedAnnualRevenue: number;
  projectedRevenueIncreasePercent: number;
  projectedTimeSavedMonthly: number;
  projectedMonthlyProfitIncrease: number;
  projectedRoiPercent: number;
  growthScore: number;
  businessIqScore: number;
  efficiencyPercent: number;
  healthStatus: "RED" | "YELLOW" | "GREEN";
  healthLabel: string;
  subScores: {
    marketingScore: number;
    salesScore: number;
    automationScore: number;
    leadManagementScore: number;
    followupScore: number;
    productivityScore: number;
  };
  recommendations: string[];
  badges: string[];
}

export const INDUSTRY_CONFIGS: Record<
  string,
  {
    name: string;
    icon: string;
    description: string;
    avgLeadMultiplier: number;
    avgTicket: number;
    followupMultiplier: number;
  }
> = {
  fitness: {
    name: "Health & Fitness",
    icon: "Dumbbell",
    description: "Gyms, Yoga studios, Wellness centers, Personal trainers",
    avgLeadMultiplier: 1.2,
    avgTicket: 15000,
    followupMultiplier: 1.3,
  },
  coaches: {
    name: "Coaches & Trainers",
    icon: "GraduationCap",
    description: "Executive, Life, Business coaches, Course creators",
    avgLeadMultiplier: 1.1,
    avgTicket: 45000,
    followupMultiplier: 1.4,
  },
  realestate: {
    name: "Real Estate",
    icon: "Building2",
    description: "Property brokers, Developers, Real estate agencies",
    avgLeadMultiplier: 0.9,
    avgTicket: 150000,
    followupMultiplier: 1.6,
  },
  schools: {
    name: "Schools & Institutes",
    icon: "School",
    description: "K-12, Coaching institutes, Skill development academies",
    avgLeadMultiplier: 1.15,
    avgTicket: 60000,
    followupMultiplier: 1.25,
  },
  insurance: {
    name: "Insurance & Finance",
    icon: "ShieldCheck",
    description: "Insurance advisors, Wealth planners, Tax consultants",
    avgLeadMultiplier: 1.0,
    avgTicket: 35000,
    followupMultiplier: 1.5,
  },
  agency: {
    name: "Agencies & Consultants",
    icon: "Briefcase",
    description: "Digital agencies, Growth consultants, Creative studios",
    avgLeadMultiplier: 1.05,
    avgTicket: 85000,
    followupMultiplier: 1.35,
  },
  msme: {
    name: "MSMEs & Enterprises",
    icon: "Store",
    description: "Manufacturers, Traders, Local retailers, Service firms",
    avgLeadMultiplier: 1.0,
    avgTicket: 50000,
    followupMultiplier: 1.2,
  },
};

export function calculateSimulatorResults(
  inputs: SimulatorInputs
): SimulatorOutputs {
  const {
    industry,
    monthlyLeads,
    conversionRate,
    customerValue,
    followupHoursWeekly,
    monthlyAdSpend,
  } = inputs;

  const currentMonthlyCustomers = Math.max(
    0,
    (monthlyLeads * (conversionRate / 100))
  );
  const currentMonthlyRevenue = currentMonthlyCustomers * customerValue;
  const currentAnnualRevenue = currentMonthlyRevenue * 12;

  const cpl = monthlyLeads > 0 ? monthlyAdSpend / monthlyLeads : 0;
  const cac =
    currentMonthlyCustomers > 0
      ? monthlyAdSpend / currentMonthlyCustomers
      : 0;

  // Leakage calculations based on market research
  const unConvertedLeads = Math.max(0, monthlyLeads - currentMonthlyCustomers);
  // Uncaptured recoverable leads due to follow-up delays (typically ~35-50% of lost leads can be recovered)
  const recoverableConversionRate = Math.min(
    0.4,
    (conversionRate / 100) * 1.65
  );
  const leadsLostMonthly = Math.round(unConvertedLeads * 0.42);
  const lostRevenueMonthly = Math.round(
    leadsLostMonthly * recoverableConversionRate * customerValue
  );
  const lostRevenueAnnual = lostRevenueMonthly * 12;

  const lostFollowupsMonthly = Math.round(monthlyLeads * 0.48);
  const hoursWastedMonthly = Math.round(followupHoursWeekly * 4.33);
  const hourlyRate = 650; // Average cost per employee hour
  const productivitySavingsMonthly = Math.round(
    hoursWastedMonthly * hourlyRate * 0.75
  );

  // Projected outcomes with Automataiz BOS
  const projectedConversionRate = Math.min(
    55,
    conversionRate * 1.85 + (monthlyLeads > 500 ? 3 : 1.5)
  );
  const projectedCustomers = (monthlyLeads * projectedConversionRate) / 100;
  const projectedMonthlyRevenue = Math.round(
    projectedCustomers * customerValue
  );
  const projectedAnnualRevenue = projectedMonthlyRevenue * 12;
  const projectedRevenueIncreasePercent =
    currentMonthlyRevenue > 0
      ? Math.round(
          ((projectedMonthlyRevenue - currentMonthlyRevenue) /
            currentMonthlyRevenue) *
            100
        )
      : 250;

  const projectedTimeSavedMonthly = Math.round(hoursWastedMonthly * 0.85);
  const automationSavings = Math.round(
    productivitySavingsMonthly + monthlyAdSpend * 0.18
  );
  const projectedMonthlyProfitIncrease = Math.round(
    Math.max(0, projectedMonthlyRevenue - currentMonthlyRevenue) +
      automationSavings
  );

  const softwareCost = 7999; // Standard monthly plan
  const projectedRoiPercent = Math.round(
    (projectedMonthlyProfitIncrease / softwareCost) * 100
  );

  // Gamification Scores (0-100)
  let rawScore = 30;
  if (conversionRate > 8) rawScore += 15;
  else if (conversionRate > 4) rawScore += 8;

  if (followupHoursWeekly < 15) rawScore += 20;
  else if (followupHoursWeekly < 35) rawScore += 10;
  else rawScore -= 5;

  if (monthlyLeads > 200) rawScore += 15;
  else if (monthlyLeads > 50) rawScore += 8;

  if (monthlyAdSpend > 0 && cpl < 300) rawScore += 15;

  const growthScore = Math.max(18, Math.min(95, Math.round(rawScore)));
  const efficiencyPercent = Math.max(
    28,
    Math.min(88, Math.round(growthScore * 0.85 + 10))
  );
  const businessIqScore = Math.max(
    25,
    Math.min(96, Math.round(growthScore * 0.9 + 5))
  );

  let healthStatus: "RED" | "YELLOW" | "GREEN" = "RED";
  let healthLabel = "Business At Risk";
  if (growthScore >= 75) {
    healthStatus = "GREEN";
    healthLabel = "High Potential";
  } else if (growthScore >= 45) {
    healthStatus = "YELLOW";
    healthLabel = "Growth Opportunity";
  }

  const subScores = {
    marketingScore: Math.min(
      95,
      Math.round(growthScore * 0.95 + (monthlyLeads > 100 ? 5 : -5))
    ),
    salesScore: Math.min(
      95,
      Math.round(growthScore * 0.9 + (conversionRate > 6 ? 8 : -8))
    ),
    automationScore: Math.min(
      95,
      Math.max(
        15,
        Math.round(90 - followupHoursWeekly * 0.9)
      )
    ),
    leadManagementScore: Math.min(
      95,
      Math.round(growthScore * 0.88 + 5)
    ),
    followupScore: Math.max(
      20,
      Math.min(95, Math.round(85 - followupHoursWeekly * 0.8))
    ),
    productivityScore: Math.max(
      25,
      Math.min(95, Math.round(100 - followupHoursWeekly * 0.75))
    ),
  };

  // Dynamic AI Recommendations
  const recommendations: string[] = [];
  if (lostRevenueMonthly > 50000) {
    recommendations.push(
      `You are losing approximately ₹${new Intl.NumberFormat("en-IN").format(
        lostRevenueMonthly
      )}/month due to delayed follow-ups and uncontacted leads.`
    );
  }
  if (followupHoursWeekly > 15) {
    recommendations.push(
      `Your team spends ${followupHoursWeekly} hrs/week manually following up. Automataiz WhatsApp & Email Workflows will reclaim ${Math.round(
        followupHoursWeekly * 0.8
      )} hrs/week.`
    );
  }
  recommendations.push(
    `Deploying Nova AI & the AI SDR can increase your lead conversion from ${conversionRate}% to projected ${Math.round(
      projectedConversionRate
    )}%.`
  );
  if (monthlyAdSpend > 20000) {
    recommendations.push(
      `Centralized Vibe Prospecting and CRM attribution will reduce your blended CAC by ~28%.`
    );
  }

  // Achievement Badges
  const badges: string[] = ["AI Powered Business"];
  if (growthScore > 70) badges.push("Growth Master");
  if (monthlyLeads > 300) badges.push("Lead Magnet");
  if (conversionRate > 10) badges.push("Sales Ninja");
  if (followupHoursWeekly < 20) badges.push("Automation Champion");

  return {
    currentMonthlyCustomers: Math.round(currentMonthlyCustomers * 10) / 10,
    currentMonthlyRevenue,
    currentAnnualRevenue,
    cpl: Math.round(cpl),
    cac: Math.round(cac),
    leadsLostMonthly,
    lostRevenueMonthly,
    lostRevenueAnnual,
    lostFollowupsMonthly,
    hoursWastedMonthly,
    productivitySavingsMonthly,
    projectedMonthlyRevenue,
    projectedAnnualRevenue,
    projectedRevenueIncreasePercent,
    projectedTimeSavedMonthly,
    projectedMonthlyProfitIncrease,
    projectedRoiPercent,
    growthScore,
    businessIqScore,
    efficiencyPercent,
    healthStatus,
    healthLabel,
    subScores,
    recommendations,
    badges,
  };
}
