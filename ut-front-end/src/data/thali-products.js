// Thali products data based on the menu image
export const thaliProducts = [
  {
    id: 1,
    title: "Mini Urban Thali",
    subtitle: "Mini",
    rating: 4.5,
    prepTime: "15 min",
    servings: "1 serving",
    price: 139,
    image: "/assets/img/product/collection/collection-1.jpg",
    description: "Perfect for a light meal or when you want just a taste of our authentic flavors",
    category: "thali",
    cuisine: "Indian, Thali, Traditional",
    status: "in-stock",
    quantity: 100,
    items: [
      "1 Veg Curry (Dal/Chole/Rajma – choice of the day)",
      "Steamed Rice / 2 Roti",
      "Salad + Papad"
    ],
    features: [
      "Freshly prepared daily",
      "Authentic Indian spices",
      "Perfect portion for one",
      "Quick preparation time"
    ]
  },
  {
    id: 2,
    title: "Everyday Thali",
    subtitle: "Everyday",
    rating: 4.6,
    prepTime: "20 min",
    servings: "2 servings",
    price: 169,
    image: "/assets/img/product/collection/collection-2.jpg",
    description: "Our most popular choice for daily meals, offering great value and authentic taste",
    category: "thali",
    cuisine: "Indian, Thali, Traditional",
    status: "in-stock",
    quantity: 100,
    items: [
      "2 Veg Curries (Dal + Seasonal Veg)",
      "2 Roti + Steamed Rice",
      "Salad + Pickle"
    ],
    features: [
      "Balanced nutrition",
      "Seasonal vegetables",
      "Traditional preparation",
      "Great for sharing"
    ]
  },
  {
    id: 3,
    title: "Urban Premium Thali",
    subtitle: "Premium",
    rating: 4.7,
    prepTime: "25 min",
    servings: "2 servings",
    price: 199,
    image: "/assets/img/product/collection/collection-3.jpg",
    description: "Elevate your dining experience with our premium selection featuring paneer and special accompaniments",
    category: "thali",
    cuisine: "Indian, Thali, Traditional",
    status: "in-stock",
    quantity: 100,
    items: [
      "2 Veg Curries (Dal + Paneer/Seasonal Veg)",
      "2 Roti / 2 Parathas + Steamed Rice",
      "Curd + Salad + Sweet"
    ],
    features: [
      "Premium ingredients",
      "Paneer included",
      "Sweet dessert",
      "Enhanced experience"
    ]
  },
  {
    id: 4,
    title: "Urban Feast Thali",
    subtitle: "Feast",
    rating: 4.8,
    prepTime: "30 min",
    servings: "2-3 servings",
    price: 249,
    image: "/assets/img/product/collection/collection-1.jpg",
    description: "A grand feast with multiple curries, special rice, and all the accompaniments for a complete meal",
    category: "thali",
    cuisine: "Indian, Thali, Traditional",
    status: "in-stock",
    quantity: 100,
    items: [
      "3 Veg Curries (Dal + Paneer + Seasonal Veg)",
      "4 Roti / 2 paratha+ Jeera Rice",
      "Salad + Papad + Pickle + Sweet"
    ],
    features: [
      "Multiple curries",
      "Jeera rice included",
      "Complete meal experience",
      "Perfect for celebrations"
    ]
  },
  {
    id: 5,
    title: "Maharaja Urban Thali",
    subtitle: "Maharaja",
    rating: 4.9,
    prepTime: "35 min",
    servings: "3-4 servings",
    price: 299,
    image: "/assets/img/product/collection/collection-2.jpg",
    description: "Our royal offering with the most comprehensive selection of dishes, perfect for special occasions",
    category: "thali",
    cuisine: "Indian, Thali, Traditional",
    status: "in-stock",
    quantity: 100,
    items: [
      "4 Veg Curries (Dal + Paneer + Chhole/Rajma + Seasonal Veg)",
      "4 Roti / 2 Naan / 2 parathas + Pulao/Jeera Rice",
      "Raita + Salad + Papad + 2 Sweets"
    ],
    features: [
      "Royal experience",
      "Maximum variety",
      "Naan bread included",
      "Two desserts",
      "Perfect for sharing"
    ]
  }
];

export const getThaliById = (id) => {
  return thaliProducts.find(thali => thali.id === parseInt(id));
};
