import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { SimulatorInputs, SimulatorOutputs, INDUSTRY_CONFIGS } from "./simulator-calc";
import { formatINR } from "./utils";

export interface AuditLeadData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  teamSize: string;
  monthlyRevenue: string;
}

export function generateAuditPDF(
  lead: AuditLeadData,
  inputs: SimulatorInputs,
  results: SimulatorOutputs
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const primaryGreen = [24, 179, 0]; // #18B300
  const gold = [244, 200, 0]; // #F4C800
  const darkBg = [10, 10, 10]; // #0A0A0A
  const textWhite = [255, 255, 255];
  const textMuted = [160, 160, 160];

  // Background Header Bar
  doc.setFillColor(10, 10, 10);
  doc.rect(0, 0, 210, 297, "F");

  // Top Neon Accent Line
  doc.setFillColor(24, 179, 0);
  doc.rect(0, 0, 210, 3, "F");

  // Header Title
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(255, 255, 255);
  doc.text("AUTOMATAIZ", 14, 18);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(24, 179, 0);
  doc.text("AI-POWERED BUSINESS OPERATING SYSTEM", 14, 24);

  // Document Type & Date
  doc.setFontSize(10);
  doc.setTextColor(244, 200, 0);
  doc.text("CONFIDENTIAL BUSINESS AUDIT", 196, 18, { align: "right" });
  doc.setFontSize(8);
  doc.setTextColor(180, 180, 180);
  doc.text(`Generated: ${new Date().toLocaleDateString("en-IN")}`, 196, 24, {
    align: "right",
  });

  // Divider
  doc.setDrawColor(40, 40, 40);
  doc.line(14, 28, 196, 28);

  // Business Profile Box
  doc.setFillColor(18, 18, 18);
  doc.roundedRect(14, 32, 182, 28, 2, 2, "F");

  doc.setFontSize(11);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(lead.businessName || "Your Enterprise", 20, 41);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(180, 180, 180);
  doc.text(`Leader: ${lead.name} | Phone: ${lead.phone}`, 20, 47);
  doc.text(
    `Industry: ${INDUSTRY_CONFIGS[inputs.industry]?.name || inputs.industry} | Team Size: ${lead.teamSize}`,
    20,
    53
  );

  // Score Highlight Badge
  doc.setFillColor(24, 179, 0);
  doc.roundedRect(145, 36, 45, 20, 2, 2, "F");
  doc.setFontSize(8);
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.text("GROWTH SCORE", 167.5, 43, { align: "center" });
  doc.setFontSize(15);
  doc.text(`${results.growthScore}/100`, 167.5, 52, { align: "center" });

  // 1. Executive Summary Table
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("1. Executive Revenue & Leakage Telemetry", 14, 68);

  autoTable(doc, {
    startY: 72,
    head: [["Metric Category", "Current Baseline", "Projected With Automataiz", "Impact Delta"]],
    body: [
      [
        "Monthly Generated Revenue",
        formatINR(results.currentMonthlyRevenue),
        formatINR(results.projectedMonthlyRevenue),
        `+${results.projectedRevenueIncreasePercent}%`,
      ],
      [
        "Monthly Revenue Leakage",
        formatINR(results.lostRevenueMonthly),
        "₹0 (System Guarded)",
        `Recover ${formatINR(results.lostRevenueMonthly * 0.7)}/mo`,
      ],
      [
        "Leads Lost / Slow Follow-Up",
        `${results.leadsLostMonthly} leads/mo`,
        "Automated Nurture (<5m)",
        "Zero Lead Loss",
      ],
      [
        "Manual Follow-up Time",
        `${results.hoursWastedMonthly} hrs/mo wasted`,
        `${results.hoursWastedMonthly - results.projectedTimeSavedMonthly} hrs/mo`,
        `Save ${results.projectedTimeSavedMonthly} hrs/mo`,
      ],
      [
        "Projected Return on Investment",
        "-",
        `${results.projectedRoiPercent}% Annualized`,
        `+${formatINR(results.projectedMonthlyProfitIncrease)}/mo Profit`,
      ],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [24, 179, 0],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },
    styles: {
      fillColor: [18, 18, 18],
      textColor: [240, 240, 240],
      fontSize: 8.5,
      cellPadding: 3,
    },
    alternateRowStyles: {
      fillColor: [24, 24, 24],
    },
  });

  // 2. 4-Pillar Health Scorecard
  const finalY1 = (doc as any).lastAutoTable.finalY || 130;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("2. Four-Pillar Business OS Audit Breakdown", 14, finalY1 + 10);

  autoTable(doc, {
    startY: finalY1 + 14,
    head: [["Pillar", "Score", "Health Status", "Diagnosed Bottleneck & Solution"]],
    body: [
      [
        "Marketing OS",
        `${results.subScores.marketingScore}/100`,
        results.subScores.marketingScore > 60 ? "OPTIMIZED" : "ATTENTION",
        "Scattered lead capture. Solution: Centralized funnels, AI Social & Ad Launcher.",
      ],
      [
        "Sales OS",
        `${results.subScores.salesScore}/100`,
        results.subScores.salesScore > 60 ? "OPTIMIZED" : "CRITICAL LEAK",
        "Delayed follow-ups. Solution: AI Lead Scoring, Instant WhatsApp WABA & AI SDR.",
      ],
      [
        "Operations OS",
        `${results.subScores.productivityScore}/100`,
        results.subScores.productivityScore > 60 ? "STABLE" : "OVERBURDENED",
        "Manual repetitive tasks. Solution: Visual Workflow Builder & AI Digital Workers.",
      ],
      [
        "Finance OS",
        `${results.businessIqScore}/100`,
        "TRACKABLE",
        "Lack of real-time CAC/LTV visibility. Solution: Unified CEO Dashboard.",
      ],
    ],
    theme: "grid",
    headStyles: {
      fillColor: [244, 200, 0],
      textColor: [0, 0, 0],
      fontStyle: "bold",
    },
    styles: {
      fillColor: [18, 18, 18],
      textColor: [240, 240, 240],
      fontSize: 8.5,
      cellPadding: 3,
    },
  });

  // 3. AI Strategic Recommendations
  const finalY2 = (doc as any).lastAutoTable.finalY || 190;
  doc.setFontSize(12);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("3. Actionable AI Recommendations", 14, finalY2 + 10);

  doc.setFontSize(9);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(210, 210, 210);

  let currentY = finalY2 + 17;
  results.recommendations.forEach((rec, idx) => {
    doc.setFillColor(24, 179, 0);
    doc.circle(16, currentY - 1, 1.5, "F");
    doc.text(rec, 21, currentY, { maxWidth: 175 });
    currentY += 8;
  });

  // 4. Footer & Founder Verification
  doc.setDrawColor(40, 40, 40);
  doc.line(14, 265, 196, 265);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("AUTOMATAIZ HQ - BHUBANESWAR, ODISHA", 14, 272);

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 160, 160);
  doc.text(
    "Founder & CEO: Debasish Kabi | Om City, Mancheswar, Bhubaneswar - 751017",
    14,
    277
  );
  doc.text(
    "Web: automataiz.com | Email: hello@automataiz.com | Phone: +91 8338091603",
    14,
    282
  );

  doc.setTextColor(24, 179, 0);
  doc.setFont("helvetica", "bold");
  doc.text("The Future of Business. Automated.", 196, 277, { align: "right" });

  doc.save(`${lead.businessName || "Automataiz"}-AI-Business-Audit.pdf`);
}
