export const products = [
  {
    id: 1,
    name: "Alpine Trail Runner",
    category: "running",
    price: 159.99,
    originalPrice: 199.99,
    description: "Engineered for rugged mountain trails with advanced grip technology and cushioned support for long-distance adventures.",
    features: ["Vibram® Megagrip outsole", "EVA midsole cushioning", "Waterproof Gore-Tex lining", "Reinforced toe cap"],
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800"
    ],
    colors: ["#1a1a2e", "#4a4a6a", "#8b4513"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    rating: 4.8,
    reviews: 256,
    inStock: true,
    badge: "Best Seller"
  },
  {
    id: 2,
    name: "Urban Street Classic",
    category: "casual",
    price: 129.99,
    originalPrice: null,
    description: "Timeless street style meets modern comfort. Perfect for everyday wear with premium leather construction.",
    features: ["Full-grain leather upper", "Memory foam insole", "Flexible rubber outsole", "Padded collar"],
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
    ],
    colors: ["#ffffff", "#000000", "#8b7355"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    rating: 4.6,
    reviews: 189,
    inStock: true,
    badge: null
  },
  {
    id: 3,
    name: "Summit Hiking Boot",
    category: "hiking",
    price: 219.99,
    originalPrice: 269.99,
    description: "Conquer any terrain with our premium hiking boot featuring ankle support and all-weather protection.",
    features: ["Full leather upper", "Vibram® outsole", "Waterproof membrane", "Steel shank support"],
    images: [
      "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=800",
      "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800",
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800"
    ],
    colors: ["#5d4e37", "#2f2f2f", "#654321"],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12, 13],
    rating: 4.9,
    reviews: 342,
    inStock: true,
    badge: "Top Rated"
  },
  {
    id: 4,
    name: "CloudWalk Comfort",
    category: "casual",
    price: 89.99,
    originalPrice: null,
    description: "Experience walking on clouds with our innovative foam technology and breathable mesh design.",
    features: ["Breathable mesh upper", "Cloud foam midsole", "Slip-resistant outsole", "Lightweight design"],
    images: [
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800",
      "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800",
      "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800"
    ],
    colors: ["#e8e8e8", "#1e90ff", "#ff6b6b"],
    sizes: [6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
    rating: 4.5,
    reviews: 178,
    inStock: true,
    badge: null
  },
  {
    id: 5,
    name: "Velocity Pro Racer",
    category: "running",
    price: 189.99,
    originalPrice: 229.99,
    description: "Elite performance running shoe with carbon fiber plate and responsive cushioning for record-breaking runs.",
    features: ["Carbon fiber plate", "Nitrogen-infused foam", "Engineered mesh upper", "Race-day performance"],
    images: [
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800",
      "https://images.unsplash.com/photo-1582588678413-dbf45f4823e9?w=800",
      "https://images.unsplash.com/photo-1605408499391-6368c628ef42?w=800"
    ],
    colors: ["#ff4757", "#2ed573", "#1e90ff"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11],
    rating: 4.7,
    reviews: 234,
    inStock: true,
    badge: "New Arrival"
  },
  {
    id: 6,
    name: "Wilderness Explorer",
    category: "hiking",
    price: 179.99,
    originalPrice: null,
    description: "Versatile mid-height hiking shoe perfect for day hikes and light backpacking adventures.",
    features: ["Suede and mesh upper", "TrailGuard protection", "Quick-dry lining", "Eco-friendly materials"],
    images: [
      "https://images.unsplash.com/photo-1606890658317-7d14490b76fd?w=800",
      "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
    ],
    colors: ["#708090", "#2e8b57", "#8b4513"],
    sizes: [7, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    rating: 4.4,
    reviews: 156,
    inStock: true,
    badge: "Eco-Friendly"
  },
  {
    id: 7,
    name: "Metro Slip-On",
    category: "casual",
    price: 99.99,
    originalPrice: 119.99,
    description: "Effortless style with our easy slip-on design. Perfect for commuters and busy lifestyles.",
    features: ["Elastic side panels", "Cushioned footbed", "Canvas upper", "Easy on/off design"],
    images: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800"
    ],
    colors: ["#2f2f2f", "#f5f5dc", "#800020"],
    sizes: [6, 7, 7.5, 8, 8.5, 9, 9.5, 10, 11],
    rating: 4.3,
    reviews: 98,
    inStock: true,
    badge: null
  },
  {
    id: 8,
    name: "Marathon Elite",
    category: "running",
    price: 169.99,
    originalPrice: null,
    description: "Built for long-distance runners who demand the perfect balance of cushioning and responsiveness.",
    features: ["DNA Loft cushioning", "3D Fit Print upper", "Segmented crash pad", "Extended heel counter"],
    images: [
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800"
    ],
    colors: ["#4169e1", "#ffa500", "#32cd32"],
    sizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 12],
    rating: 4.8,
    reviews: 287,
    inStock: true,
    badge: "Staff Pick"
  }
]

export const categories = [
  {
    id: "running",
    name: "Running",
    description: "High-performance footwear for every runner",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800"
  },
  {
    id: "hiking",
    name: "Hiking",
    description: "Durable boots for outdoor adventures",
    image: "https://images.unsplash.com/photo-1520219306100-ec4afeeefe58?w=800"
  },
  {
    id: "casual",
    name: "Casual",
    description: "Everyday comfort and style",
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800"
  }
]

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id))
}

export const getProductsByCategory = (category) => {
  if (!category) return products
  return products.filter(product => product.category === category)
}

export const getFeaturedProducts = () => {
  return products.filter(product => product.badge)
}
