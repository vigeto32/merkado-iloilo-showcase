import MarketPageLayout from "@/components/MarketPageLayout";

export default function CentralMarket() {
  return (
    <MarketPageLayout
      emoji="🏛️"
      title="Central Market"
      subtitle="Tienda Mayor — The Mayor's Store"
      description="The iconic 'Tienda Mayor' of Iloilo City, modernized as a premier cultural and commercial landmark in the historic downtown district."
      history="Known as 'Tienda Mayor' or the Mayor's Store, the Central Market has been a cornerstone of Iloilo City's economic and cultural life for over a century. Located in the heart of the city's commercial district, it has served generations of Ilonggos — from vendors selling fresh produce to artisans offering handwoven piña cloth and native delicacies. The recent modernization project preserved its heritage character while introducing modern market infrastructure, improved vendor facilities, food courts, and cultural exhibit spaces. Today, Central Market stands as a vibrant symbol of Iloilo's identity: a place where history, commerce, and community converge."
      stats={[
        { label: "Market Stalls", value: "800+" },
        { label: "Daily Visitors", value: "30,000+" },
        { label: "Heritage Age", value: "100+ Yrs" },
        { label: "Cultural Zones", value: "5" },
      ]}
      vendors={[
        { name: "Piña Weavers Cooperative", category: "Heritage Textiles" },
        { name: "Molo Pancit Station", category: "Local Food" },
        { name: "Iloilo Biscocho House", category: "Bakery & Sweets" },
        { name: "Antique Pottery Corner", category: "Arts & Crafts" },
        { name: "La Paz Batchoy Original", category: "Local Cuisine" },
        { name: "Heritage Spice Market", category: "Condiments & Spices" },
      ]}
      highlights={[
        "Over 100 years of continuous operation as a civic and commercial landmark.",
        "Dedicated heritage and cultural zones showcasing Ilonggo crafts and traditions.",
        "Modernized vendor stalls with improved storage, display, and sanitation.",
        "Food court featuring authentic Ilonggo cuisine including batchoy and pancit molo.",
        "Cultural exhibit spaces celebrating Iloilo's history and the market's heritage.",
        "Enhanced pedestrian access and connectivity to the downtown commercial district.",
      ]}
    />
  );
}
