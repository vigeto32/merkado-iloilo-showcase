import MarketPageLayout from "@/components/MarketPageLayout";

export default function LaPazMarket() {
  return (
    <MarketPageLayout
      emoji="🌿"
      title="La Paz Public Market"
      subtitle="₱100M Rehabilitation Project"
      description="Rehabilitated with a ₱100 million investment — improved sanitation, modern accessibility features, and a welcoming shopping environment for all."
      history="La Paz Public Market has long been the commercial center of the La Paz district, serving as the primary marketplace for residents of one of Iloilo City's most vibrant communities. The ₱100 million rehabilitation project transformed the aging facility into a modern, accessible, and sanitary marketplace. The rehabilitation focused on key areas: complete sanitation system overhaul, new vendor stalls with proper drainage, improved roof and ventilation systems, accessibility ramps and facilities for senior citizens and PWDs, and enhanced fire safety infrastructure. The project also addressed the market's immediate surroundings — improved pedestrian walkways, better lighting, and dedicated parking zones — creating a safer and more pleasant shopping environment."
      stats={[
        { label: "Investment", value: "₱100M" },
        { label: "Vendor Stalls", value: "600+" },
        { label: "Accessibility Score", value: "A+" },
        { label: "Daily Visitors", value: "20,000+" },
      ]}
      vendors={[
        { name: "La Paz Batchoy Originals", category: "Famous Local Cuisine" },
        { name: "District Vegetable Hub", category: "Fresh Produce" },
        { name: "La Paz Handicrafts", category: "Handmade Goods" },
        { name: "Community Bakery", category: "Bread & Pastries" },
        { name: "Native Fruits Stand", category: "Tropical Fruits" },
        { name: "Spice & Condiment Row", category: "Condiments" },
      ]}
      highlights={[
        "Complete rehabilitation with ₱100 million in government investment.",
        "Full sanitation system overhaul including modern drainage and waste management.",
        "Universal accessibility design: ramps, wide walkways, and PWD-friendly facilities.",
        "New vendor stalls with standardized fixtures and proper drainage systems.",
        "Improved fire safety infrastructure: sprinklers, extinguishers, and emergency exits.",
        "Enhanced market perimeter with better lighting, signage, and parking facilities.",
      ]}
    />
  );
}
