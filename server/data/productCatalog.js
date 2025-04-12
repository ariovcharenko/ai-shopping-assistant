const productCatalog = [
  {
    "id": 1,
    "name": "High-Waisted Skinny Jeans",
    "category": "women",
    "subcategory": "bottoms",
    "product_type": "jeans",
    "attributes": [
      "high-waisted",
      "skinny",
      "denim",
      "stretchy",
      "blue"
    ],
    "price": 49.99,
    "image": "high-waisted-jeans.jpg"
  },
  {
    "id": 2,
    "name": "Relaxed Fit Jeans",
    "category": "men",
    "subcategory": "bottoms",
    "product_type": "jeans",
    "attributes": [
      "relaxed-fit",
      "denim",
      "casual",
      "blue"
    ],
    "price": 45.99,
    "image": "relaxed-fit-jeans.jpg"
  },
  {
    "id": 3,
    "name": "Slim Fit Dress Shirt",
    "category": "men",
    "subcategory": "tops",
    "product_type": "shirt",
    "attributes": [
      "slim-fit",
      "dress",
      "formal",
      "cotton",
      "white"
    ],
    "price": 39.99,
    "image": "slim-fit-shirt.jpg"
  },
  {
    "id": 4,
    "name": "Floral Print Sundress",
    "category": "women",
    "subcategory": "dresses",
    "product_type": "dress",
    "attributes": [
      "floral",
      "sundress",
      "summer",
      "casual",
      "cotton"
    ],
    "price": 59.99,
    "image": "floral-sundress.jpg"
  },
  {
    "id": 5,
    "name": "Athletic Performance T-Shirt",
    "category": "unisex",
    "subcategory": "tops",
    "product_type": "t-shirt",
    "attributes": [
      "athletic",
      "performance",
      "moisture-wicking",
      "breathable"
    ],
    "price": 29.99,
    "image": "athletic-tshirt.jpg"
  },
  {
    "id": 6,
    "name": "Leather Ankle Boots",
    "category": "women",
    "subcategory": "footwear",
    "product_type": "boots",
    "attributes": [
      "leather",
      "ankle",
      "black",
      "heeled"
    ],
    "price": 89.99,
    "image": "leather-ankle-boots.jpg"
  },
  {
    "id": 7,
    "name": "Wireless Bluetooth Headphones",
    "category": "unisex",
    "subcategory": "electronics",
    "product_type": "headphones",
    "attributes": [
      "wireless",
      "bluetooth",
      "noise-cancelling",
      "over-ear"
    ],
    "price": 129.99,
    "image": "wireless-headphones.jpg"
  },
  {
    "id": 8,
    "name": "Smart Fitness Watch",
    "category": "unisex",
    "subcategory": "electronics",
    "product_type": "watch",
    "attributes": [
      "smart",
      "fitness",
      "heart-rate-monitor",
      "waterproof"
    ],
    "price": 199.99,
    "image": "fitness-watch.jpg"
  },
  {
    "id": 9,
    "name": "Yoga Mat",
    "category": "unisex",
    "subcategory": "fitness",
    "product_type": "mat",
    "attributes": [
      "yoga",
      "non-slip",
      "eco-friendly",
      "lightweight"
    ],
    "price": 24.99,
    "image": "yoga-mat.jpg"
  },
  {
    "id": 10,
    "name": "Stainless Steel Water Bottle",
    "category": "unisex",
    "subcategory": "accessories",
    "product_type": "bottle",
    "attributes": [
      "stainless-steel",
      "insulated",
      "leak-proof",
      "eco-friendly"
    ],
    "price": 19.99,
    "image": "water-bottle.jpg"
  },
  {
    "id": 11,
    "name": "Leather Wallet",
    "category": "men",
    "subcategory": "accessories",
    "product_type": "wallet",
    "attributes": [
      "leather",
      "bifold",
      "brown",
      "slim"
    ],
    "price": 34.99,
    "image": "leather-wallet.jpg"
  },
  {
    "id": 12,
    "name": "Crossbody Bag",
    "category": "women",
    "subcategory": "accessories",
    "product_type": "bag",
    "attributes": [
      "crossbody",
      "leather",
      "adjustable-strap",
      "black"
    ],
    "price": 49.99,
    "image": "crossbody-bag.jpg"
  },
  {
    "id": 13,
    "name": "Polarized Sunglasses",
    "category": "unisex",
    "subcategory": "accessories",
    "product_type": "sunglasses",
    "attributes": [
      "polarized",
      "UV-protection",
      "aviator",
      "metal-frame"
    ],
    "price": 79.99,
    "image": "polarized-sunglasses.jpg"
  },
  {
    "id": 14,
    "name": "Winter Parka Jacket",
    "category": "unisex",
    "subcategory": "outerwear",
    "product_type": "jacket",
    "attributes": [
      "winter",
      "parka",
      "insulated",
      "waterproof",
      "hooded"
    ],
    "price": 149.99,
    "image": "winter-parka.jpg"
  },
  {
    "id": 15,
    "name": "Denim Jacket",
    "category": "unisex",
    "subcategory": "outerwear",
    "product_type": "jacket",
    "attributes": [
      "denim",
      "casual",
      "button-up",
      "blue"
    ],
    "price": 69.99,
    "image": "denim-jacket.jpg"
  },
  {
    "id": 16,
    "name": "Running Shoes",
    "category": "unisex",
    "subcategory": "footwear",
    "product_type": "shoes",
    "attributes": [
      "running",
      "athletic",
      "cushioned",
      "breathable"
    ],
    "price": 89.99,
    "image": "running-shoes.jpg"
  },
  {
    "id": 17,
    "name": "Formal Dress Shoes",
    "category": "men",
    "subcategory": "footwear",
    "product_type": "shoes",
    "attributes": [
      "formal",
      "dress",
      "leather",
      "black"
    ],
    "price": 99.99,
    "image": "formal-shoes.jpg"
  },
  {
    "id": 18,
    "name": "Casual Sneakers",
    "category": "unisex",
    "subcategory": "footwear",
    "product_type": "sneakers",
    "attributes": [
      "casual",
      "comfortable",
      "canvas",
      "white"
    ],
    "price": 54.99,
    "image": "casual-sneakers.jpg"
  },
  {
    "id": 19,
    "name": "Wool Beanie Hat",
    "category": "unisex",
    "subcategory": "accessories",
    "product_type": "hat",
    "attributes": [
      "wool",
      "beanie",
      "winter",
      "warm"
    ],
    "price": 19.99,
    "image": "wool-beanie.jpg"
  },
  {
    "id": 20,
    "name": "Baseball Cap",
    "category": "unisex",
    "subcategory": "accessories",
    "product_type": "hat",
    "attributes": [
      "baseball",
      "adjustable",
      "cotton",
      "casual"
    ],
    "price": 17.99,
    "image": "baseball-cap.jpg"
  }
];

module.exports = productCatalog;
