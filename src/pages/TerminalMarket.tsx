import MarketPageLayout from "@/components/MarketPageLayout";

export default function TerminalMarket() {
  return (
    <MarketPageLayout
      emoji="🏬"
      title="Terminal Market"
      subtitle="Super Market of Iloilo"
      description="The grandest of Iloilo City's public markets, redeveloped in partnership with SM Prime Holdings into a world-class commercial and cultural hub."
      history="The Terminal Market, popularly known as 'Super Market,' has long been the commercial heart of Iloilo City. Strategically located near the central transportation hub, it serves hundreds of thousands of residents daily. Its recent redevelopment in partnership with SM Prime Holdings transformed it into a modern multi-story facility while preserving its identity as the premier public market of Western Visayas. The market features dedicated sections for fresh produce, meat, seafood, dry goods, clothing, and specialty Ilonggo products — all modernized with improved sanitation, fire safety, and accessibility features."
      stats={[
        { label: "Market Stalls", value: "1,200+" },
        { label: "Daily Visitors", value: "50,000+" },
        { label: "Product Categories", value: "30+" },
        { label: "Years in Operation", value: "80+" },
      ]}
      vendors={[
        { name: "Aling Nena's Bangus", category: "Fresh Seafood" },
        { name: "Visayas Delicacies", category: "Local Pasalubong" },
        { name: "Ilonggo Weaves", category: "Textiles & Fabrics" },
        { name: "Farm Fresh Veggies", category: "Produce" },
        { name: "SM Supermarket Wing", category: "Grocery" },
        { name: "Iloilo Longganisa Hub", category: "Meats & Charcuterie" },
      ]}
      highlights={[
        "Redeveloped in partnership with SM Prime Holdings as a world-class public market.",
        "Features dedicated wet market, dry goods, and commercial retail zones.",
        "Modern fire safety systems, improved ventilation, and sanitation facilities.",
        "Accessible design with ramps, elevators, and facilities for PWDs.",
        "Houses over 1,200 vendor stalls across multiple floors.",
        "Central location near the Iloilo City transportation terminal.",
      ]}
    />
  );
}
