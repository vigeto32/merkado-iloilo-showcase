import MarketPageLayout from "@/components/MarketPageLayout";

export default function JaroMarket() {
  return (
    <MarketPageLayout
      emoji="🏗️"
      title="Jaro Big Market"
      subtitle="New Two-Level Modern Facility"
      description="A brand-new two-level market facility in the Jaro district, featuring 547 kiosks and expanded vendor capacity for over 840 vendors."
      history="The Jaro Big Market serves the largest and most populous district of Iloilo City. The new facility represents one of the most ambitious public market construction projects in Western Visayas, replacing the aging structure with a modern two-level building purpose-built for efficiency, safety, and vendor comfort. With 547 kiosks and a total vendor capacity exceeding 840, the Jaro Big Market is designed to accommodate the district's rapid commercial growth. The facility features dedicated floors for different product categories — fresh produce and wet goods on the ground floor, and dry goods, clothing, and specialty items on the second level — making it one of the most organized public markets in the region."
      stats={[
        { label: "Kiosks", value: "547" },
        { label: "Vendor Capacity", value: "840+" },
        { label: "Market Floors", value: "2" },
        { label: "District Population", value: "250K+" },
      ]}
      vendors={[
        { name: "Jaro Organic Farms", category: "Fresh Produce" },
        { name: "District Seafood Hub", category: "Fish & Seafood" },
        { name: "Jaro Livestock Market", category: "Meat & Poultry" },
        { name: "RTW Fashion Zone", category: "Ready-to-Wear" },
        { name: "Native Kakanin Stall", category: "Local Delicacies" },
        { name: "Hardware & Tools Corner", category: "Home & Garden" },
      ]}
      highlights={[
        "Brand-new two-level building designed specifically for modern market operations.",
        "547 individual kiosks with standardized sizing and modern fixtures.",
        "Expanded vendor capacity to accommodate over 840 vendors from the district.",
        "Ground floor dedicated to wet market: produce, fish, and meat sections.",
        "Second level for dry goods, clothing, electronics, and specialty products.",
        "Modern fire suppression systems, CCTV, and 24/7 security coverage.",
      ]}
    />
  );
}
