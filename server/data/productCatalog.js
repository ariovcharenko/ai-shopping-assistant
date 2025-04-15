const productCatalog = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Noise-Cancelling Headphones",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["wireless", "noise-cancelling", "over-ear", "bluetooth"]
  },
  {
    id: 2,
    name: "Zinus 12 Inch Green Tea Memory Foam Queen Mattress",
    category: "furniture",
    subcategory: "bedroom",
    product_type: "mattress",
    filters: ["queen size", "memory foam", "firm support"]
  },
  {
    id: 3,
    name: "Columbia Newton Ridge Plus Waterproof Hiking Boots (Men's Size 11)",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "hiking boots",
    filters: ["waterproof", "men's", "size 11"]
  },
  {
    id: 4,
    name: "All-Clad Stainless Steel Nonstick Frying Pan 10-Inch",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["stainless steel", "nonstick", "10 inch"]
  },
  {
    id: 5,
    name: "Hanes Men's Cotton T-Shirts (Pack of 3, Size L)",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["cotton", "pack of 3", "men's", "size L"]
  },
  {
    id: 6,
    name: "TaoTronics LED Desk Lamp with USB Charging Port",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["adjustable", "usb charging", "LED"]
  },
  {
    id: 7,
    name: "Blue Buffalo Life Protection Formula Chicken & Brown Rice (15lb)",
    category: "pet supplies",
    subcategory: "dog food",
    product_type: "dry dog food",
    filters: ["chicken", "15lb", "grain free"]
  },
  {
    id: 8,
    name: "Seagate Portable 2TB External Hard Drive USB-C",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "external hard drive",
    filters: ["2tb", "usb-c", "portable"]
  },
  {
    id: 9,
    name: "Gaiam Essentials Premium 6mm Thick Yoga Mat",
    category: "sports",
    subcategory: "fitness",
    product_type: "yoga mat",
    filters: ["non slip", "6mm thick"]
  },
  {
    id: 10,
    name: "Seventh Generation Free & Clear Liquid Laundry Detergent",
    category: "household",
    subcategory: "laundry",
    product_type: "laundry detergent",
    filters: ["liquid", "fragrance free"]
  },
  {
    id: 11,
    name: "Apple 20W USB-C Power Adapter",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "phone charger",
    filters: ["20W", "usb-c"]
  },
  {
    id: 12,
    name: "Goodr OG Sunglasses – Polarized & Budget-Friendly",
    category: "accessories",
    subcategory: "eyewear",
    product_type: "sunglasses",
    filters: ["under $15", "polarized"]
  },
  {
    id: 13,
    name: "Ninja Compact Blender with Pulse and Travel Cup",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "blender",
    filters: ["under $50", "compact", "travel cup"]
  },
  {
    id: 14,
    name: "Burt’s Bees Baby Organic Onesies (0–3 Months, 3-Pack)",
    category: "baby",
    subcategory: "clothing",
    product_type: "onesies",
    filters: ["0-3 months", "organic", "pack of 3"]
  },
  {
    id: 15,
    name: "AmazonBasics Striped Shower Curtain with Hooks",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower curtain",
    filters: ["striped", "polyester", "with hooks"]
  },
  {
    id: 16,
    name: "TP-Link AC1750 Smart WiFi Router (Covers 1500 Sq Ft)",
    category: "electronics",
    subcategory: "networking",
    product_type: "wifi router",
    filters: ["coverage 1500 sq ft", "dual band"]
  },
  {
    id: 17,
    name: "Thug Kitchen: The Official Vegan Cookbook",
    category: "books",
    subcategory: "cooking",
    product_type: "cookbook",
    filters: ["vegan", "beginners"]
  },
  {
    id: 18,
    name: "Schwinn Loop Foldable Bike – Lightweight 20-Inch Frame",
    category: "sports",
    subcategory: "cycling",
    product_type: "bicycle",
    filters: ["foldable", "under 30 lbs"]
  },
  {
    id: 19,
    name: "Anker Soundcore Life Q20 Bluetooth Headphones",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["bluetooth", "under $50", "noise-cancelling"]
  },
  {
    id: 20,
    name: "Brooks Ghost 14 Men's Running Shoes (Size 10 Wide)",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "size 10", "wide"]
  },
  {
    id: 21,
    name: "Lodge 12-Inch Cast Iron Skillet Pre-Seasoned",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "skillet",
    filters: ["cast iron", "12 inch", "pre-seasoned"]
  },
  {
    id: 22,
    name: "Logitech G305 Wireless Gaming Mouse – Black",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse",
    filters: ["wireless", "gaming"]
  },
  {
    id: 23,
    name: "NICETOWN Blackout Curtains 84-Inch Length (Set of 2)",
    category: "home",
    subcategory: "window treatments",
    product_type: "curtains",
    filters: ["blackout", "84 inch", "set of 2"]
  },
  {
    id: 24,
    name: "Columbia Women's Arcadia Waterproof Winter Jacket (Small)",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "jacket",
    filters: ["winter", "waterproof", "women's", "small"]
  },
  {
    id: 25,
    name: "Amazon Basics HDMI Cable 10ft – 4K Ready",
    category: "electronics",
    subcategory: "cables",
    product_type: "HDMI cable",
    filters: ["10 ft", "4K"]
  },
  {
    id: 26,
    name: "Western Chief Kids Rain Boots – Size 13",
    category: "footwear",
    subcategory: "children's",
    product_type: "rain boots",
    filters: ["kids", "size 13"]
  },
  {
    id: 27,
    name: "La Jolie Muse Ceramic Plant Pot 8-Inch with Drainage",
    category: "garden",
    subcategory: "planters",
    product_type: "plant pot",
    filters: ["ceramic", "8 inch", "drainage hole"]
  },
  {
    id: 28,
    name: "Globe Electric Modern Desk Lamp with USB Port",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["usb port", "modern"]
  },
  {
    id: 29,
    name: "Samsonite Freeform Carry-On Spinner Suitcase",
    category: "travel",
    subcategory: "luggage",
    product_type: "suitcase",
    filters: ["carry-on size", "lightweight"]
  },
  {
    id: 30,
    name: "Osprey Talon 22 Hiking Backpack – Waterproof",
    category: "outdoor",
    subcategory: "hiking gear",
    product_type: "backpack",
    filters: ["22L", "waterproof", "hiking"]
  },
  {
    id: 31,
    name: "Graco Dream Suite Portable Bassinet for Newborns",
    category: "baby",
    subcategory: "furniture",
    product_type: "bassinet",
    filters: ["newborn", "portable"]
  },
  {
    id: 32,
    name: "Clarks Women's Breeze Sea Leather Sandals – Size 8",
    category: "footwear",
    subcategory: "women's",
    product_type: "sandals",
    filters: ["size 8", "leather", "women's"]
  },
  {
    id: 33,
    name: "Baratza Encore Electric Burr Coffee Grinder – Black",
    category: "kitchen",
    subcategory: "small appliances",
    product_type: "coffee grinder",
    filters: ["electric", "burr"]
  },
  {
    id: 34,
    name: "Levoit HEPA Air Purifier for Allergies and Pets",
    category: "home",
    subcategory: "air quality",
    product_type: "air purifier",
    filters: ["HEPA", "for allergies"]
  },
  {
    id: 35,
    name: "Speedo Men's Quick-Dry Swim Trunks – Medium",
    category: "clothing",
    subcategory: "swimwear",
    product_type: "swim trunks",
    filters: ["men's", "quick dry", "medium"]
  },
  {
    id: 36,
    name: "Amazon Fire 7 Kids Tablet – 16GB, Under $200",
    category: "electronics",
    subcategory: "tablets",
    product_type: "tablet",
    filters: ["for kids", "under $200"]
  },
  {
    id: 37,
    name: "Ergonomic Mesh Office Chair with Adjustable Armrests",
    category: "furniture",
    subcategory: "office",
    product_type: "chair",
    filters: ["ergonomic", "adjustable armrests"]
  },
  {
    id: 38,
    name: "Hydro Flask 24oz Blender Bottle – Dishwasher Safe",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "blender bottle",
    filters: ["24oz", "dishwasher safe"]
  },
  {
    id: 39,
    name: "Anker 65W USB-C GaN Fast Charger",
    category: "electronics",
    subcategory: "charging",
    product_type: "charger",
    filters: ["65W", "usb-c", "gan"]
  },
  {
    id: 40,
    name: "Etekcity Digital Kitchen Scale – Grams & Ounces",
    category: "kitchen",
    subcategory: "tools",
    product_type: "kitchen scale",
    filters: ["digital", "measures grams", "measures ounces"]
  },
  {
    id: 41,
    name: "Fruit of the Loom Men's Boxer Briefs – Pack of 6, Microfiber",
    category: "clothing",
    subcategory: "underwear",
    product_type: "boxer briefs",
    filters: ["men's", "pack of 6", "microfiber"]
  },
  {
    id: 42,
    name: "Nalgene Wide Mouth Water Bottle – 32oz",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth"]
  },
  {
    id: 43,
    name: "Blueberry Pet Adjustable Reflective Dog Collar – Medium",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog collar",
    filters: ["adjustable", "reflective", "medium"]
  },
  {
    id: 44,
    name: "LG 27” 4K UHD Monitor with HDMI – Black",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["27 inch", "4K", "HDMI"]
  },
  {
    id: 45,
    name: "Cuisinart 15-Piece Stainless Steel Knife Set with Block",
    category: "kitchen",
    subcategory: "cutlery",
    product_type: "knife set",
    filters: ["stainless steel", "with block"]
  },
  {
    id: 46,
    name: "ThinOptics Folding Reading Glasses – +1.5 Strength",
    category: "eyewear",
    subcategory: "reading glasses",
    product_type: "reading glasses",
    filters: ["1.5 strength", "folding"]
  },
  {
    id: 47,
    name: "Instant Pot Pro 6 Quart Stainless Steel Pressure Cooker",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "pressure cooker",
    filters: ["6 quart", "stainless"]
  },
  {
    id: 48,
    name: "Columbia Women's Packable Rain Jacket with Hood",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["women's", "packable", "with hood"]
  },
  {
    id: 49,
    name: "SimpleHouseware Black Metal Mesh Desk Organizer",
    category: "office",
    subcategory: "desk accessories",
    product_type: "desk organizer",
    filters: ["mesh", "metal", "black"]
  },
  {
    id: 50,
    name: "Optimum Nutrition Vanilla Protein Powder – 2lb Tub",
    category: "health",
    subcategory: "supplements",
    product_type: "protein powder",
    filters: ["vanilla", "2lb"]
  },
  {
    id: 51,
    name: "Rugable Washable Area Rug – 5x7 Low Pile, Neutral Design",
    category: "home",
    subcategory: "flooring",
    product_type: "area rug",
    filters: ["washable", "5x7", "low pile"]
  },
  {
    id: 52,
    name: "AquaBliss Handheld Shower Head Filter – Chrome",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower head",
    filters: ["filter", "handheld"]
  },
  {
    id: 53,
    name: "Crockpot 7-Quart Programmable Slow Cooker – Stainless Steel",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "slow cooker",
    filters: ["programmable", "7 quart"]
  },
  {
    id: 54,
    name: "Philips Sonicare Rechargeable Electric Toothbrush with Timer",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "rechargeable", "timer"]
  },
  {
    id: 55,
    name: "Kryptonite U-Lock Bike Lock with Cable – Heavy Duty",
    category: "sports",
    subcategory: "cycling",
    product_type: "bike lock",
    filters: ["u-lock", "with cable"]
  },
  {
    id: 56,
    name: "Levi's High-Waisted Women's Skinny Jeans – Black, Size 6",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "jeans",
    filters: ["high-waisted", "skinny", "size 6"]
  },
  {
    id: 57,
    name: "Bose QuietComfort Wireless Noise-Cancelling Headphones",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["wireless", "noise-cancelling"]
  },
  {
    id: 58,
    name: "AmazonBasics Mesh Office Chair – Ergonomic with Armrests",
    category: "furniture",
    subcategory: "office",
    product_type: "chair",
    filters: ["ergonomic", "armrests"]
  },
  {
    id: 59,
    name: "KitchenAid Artisan 5-Quart Stand Mixer – Red",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "stand mixer",
    filters: ["5 quart", "red"]
  },
  {
    id: 60,
    name: "Fitbit Charge 5 Fitness Tracker – Graphite/Black",
    category: "electronics",
    subcategory: "wearables",
    product_type: "fitness tracker",
    filters: ["fitness tracking", "black"]
  },
  {
    id: 61,
    name: "Hydro Flask Wide Mouth Water Bottle – 32oz, Flex Cap",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth"]
  },
  {
    id: 62,
    name: "Carhartt Men's Work Gloves – Waterproof, Insulated, Size L",
    category: "clothing",
    subcategory: "accessories",
    product_type: "gloves",
    filters: ["men's", "waterproof", "insulated", "size L"]
  },
  {
    id: 63,
    name: "Anker PowerCore 10000mAh Portable Charger – USB-C Input",
    category: "electronics",
    subcategory: "power banks",
    product_type: "portable charger",
    filters: ["10000mAh", "usb-c"]
  },
  {
    id: 64,
    name: "ThermoPro Digital Meat Thermometer – Instant Read",
    category: "kitchen",
    subcategory: "tools",
    product_type: "thermometer",
    filters: ["digital", "instant read"]
  },
  {
    id: 65,
    name: "Garnier Fructis Moisture Lock Shampoo – 12.5 fl oz",
    category: "beauty",
    subcategory: "hair care",
    product_type: "shampoo",
    filters: ["moisturizing", "12.5 fl oz"]
  },
  {
    id: 66,
    name: "Nintendo Switch Lite – Turquoise Handheld Console",
    category: "electronics",
    subcategory: "gaming",
    product_type: "console",
    filters: ["handheld", "turquoise"]
  },
  {
    id: 67,
    name: "Contigo Autoseal Travel Mug – 20oz, Stainless Steel",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["20oz", "stainless steel"]
  },
  {
    id: 68,
    name: "Coleman Camping Chair with Cooler – Blue",
    category: "outdoor",
    subcategory: "furniture",
    product_type: "camping chair",
    filters: ["with cooler", "blue"]
  },
  {
    id: 69,
    name: "Crocs Women's Classic Clogs – Size 8, White",
    category: "footwear",
    subcategory: "casual",
    product_type: "clogs",
    filters: ["women's", "size 8", "white"]
  },
  {
    id: 70,
    name: "Samsung 27-Inch Curved Gaming Monitor – 144Hz, HDMI",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["27 inch", "144Hz", "HDMI"]
  },
  {
    id: 71,
    name: "Lasko 16-Inch Oscillating Pedestal Fan – Adjustable Height",
    category: "home",
    subcategory: "climate control",
    product_type: "fan",
    filters: ["16 inch", "oscillating", "adjustable height"]
  },
  {
    id: 72,
    name: "Revlon One-Step Volumizer Hair Dryer – Pink",
    category: "beauty",
    subcategory: "styling tools",
    product_type: "hair dryer",
    filters: ["volumizer", "pink"]
  },
  {
    id: 73,
    name: "Graco Pack 'n Play Portable Playard – Gray",
    category: "baby",
    subcategory: "furniture",
    product_type: "playard",
    filters: ["portable", "gray"]
  },
  {
    id: 74,
    name: "Bose SoundLink Micro Bluetooth Speaker – Waterproof",
    category: "electronics",
    subcategory: "audio",
    product_type: "bluetooth speaker",
    filters: ["waterproof", "portable"]
  },
  {
    id: 75,
    name: "Timberland PRO Men's Steel Toe Work Boots – Size 10",
    category: "footwear",
    subcategory: "workwear",
    product_type: "work boots",
    filters: ["men's", "steel toe", "size 10"]
  },
  {
    id: 76,
    name: "OXO Good Grips 3-Piece Mixing Bowl Set – Non-Slip Base",
    category: "kitchen",
    subcategory: "prep tools",
    product_type: "mixing bowls",
    filters: ["3-piece", "non-slip"]
  },
  {
    id: 77,
    name: "Canon PIXMA Wireless Inkjet Printer – AirPrint Enabled",
    category: "electronics",
    subcategory: "printers",
    product_type: "printer",
    filters: ["wireless", "inkjet", "AirPrint"]
  },
  {
    id: 78,
    name: "Columbia Women's Arcadia Rain Jacket – Small, Black",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["women's", "small", "black", "waterproof"]
  },
  {
    id: 79,
    name: "Himalayan Salt Lamp with Dimmer – Natural Pink Rock",
    category: "home",
    subcategory: "lighting",
    product_type: "salt lamp",
    filters: ["dimmable", "pink"]
  },
  {
    id: 80,
    name: "Hanes Men's Tagless Boxer Briefs – Pack of 6, Cotton",
    category: "clothing",
    subcategory: "underwear",
    product_type: "boxer briefs",
    filters: ["men's", "pack of 6", "cotton"]
  },
  {
    id: 81,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker – 6 Quart",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "pressure cooker",
    filters: ["6 quart", "7-in-1", "electric"]
  },
  {
    id: 82,
    name: "Under Armour Men's Charged Assert 9 Running Shoes – Size 11",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "size 11", "black"]
  },
  {
    id: 83,
    name: "T-fal Nonstick Frying Pan Set – 8 and 10 Inch",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["nonstick", "set of 2"]
  },
  {
    id: 84,
    name: "Acer Aspire 5 Slim Laptop – 15.6'' Full HD, 8GB RAM",
    category: "electronics",
    subcategory: "computers",
    product_type: "laptop",
    filters: ["15.6 inch", "8GB RAM", "slim"]
  },
  {
    id: 85,
    name: "Yeti Rambler 30 oz Tumbler – Stainless Steel, Straw Lid",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "tumbler",
    filters: ["30 oz", "stainless steel", "with straw lid"]
  },
  {
    id: 86,
    name: "HP DeskJet 2755e All-in-One Wireless Printer – Color Inkjet",
    category: "electronics",
    subcategory: "printers",
    product_type: "printer",
    filters: ["wireless", "color", "inkjet"]
  },
  {
    id: 87,
    name: "LEGO Classic Bricks and Animals Set – 1500 Pieces",
    category: "toys",
    subcategory: "building sets",
    product_type: "lego set",
    filters: ["1500 pieces", "animals"]
  },
  {
    id: 88,
    name: "Samsung 27-Inch Curved Monitor – 1080p Full HD",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["27 inch", "curved", "1080p"]
  },
  {
    id: 89,
    name: "Gildan Men's Heavy Cotton T-Shirt – Pack of 5, Gray",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["men's", "pack of 5", "gray"]
  },
  {
    id: 90,
    name: "Everlasting Comfort Lumbar Support Pillow – Memory Foam",
    category: "home",
    subcategory: "comfort",
    product_type: "lumbar pillow",
    filters: ["memory foam", "ergonomic"]
  },
  {
    id: 91,
    name: "Columbia Women's Benton Springs Fleece Jacket – Medium",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "fleece jacket",
    filters: ["women's", "medium", "fleece"]
  },
  {
    id: 92,
    name: "Purell Advanced Hand Sanitizer – 2-Pack, 12 oz Each",
    category: "health",
    subcategory: "personal care",
    product_type: "hand sanitizer",
    filters: ["pack of 2", "12 oz"]
  },
  {
    id: 93,
    name: "Anker PowerCore 10000 Portable Charger – USB-C, Black",
    category: "electronics",
    subcategory: "power banks",
    product_type: "portable charger",
    filters: ["10000mAh", "usb-c", "black"]
  },
  {
    id: 94,
    name: "Contigo Autoseal Water Bottle – 24 oz, Leak-Proof",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["24 oz", "leak-proof", "autoseal"]
  },
  {
    id: 95,
    name: "Keurig K-Mini Coffee Maker – Single Serve, Matte Black",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "coffee maker",
    filters: ["single serve", "mini", "black"]
  },
  {
    id: 96,
    name: "Crocs Unisex Classic Clogs – Size 8, White",
    category: "footwear",
    subcategory: "casual",
    product_type: "clogs",
    filters: ["unisex", "size 8", "white"]
  },
  {
    id: 97,
    name: "Sony WH-CH520 Wireless On-Ear Headphones – Bluetooth",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["wireless", "on-ear", "bluetooth"]
  },
  {
    id: 98,
    name: "Melissa & Doug Wooden Puzzle Set – Alphabet & Numbers",
    category: "toys",
    subcategory: "educational",
    product_type: "puzzle",
    filters: ["wooden", "alphabet", "numbers"]
  },
  {
    id: 99,
    name: "Mainstays Room Darkening Curtains – 84-Inch, Navy",
    category: "home",
    subcategory: "window treatments",
    product_type: "curtains",
    filters: ["84 inch", "darkening", "navy"]
  },
  {
    id: 100,
    name: "Apple AirTag 4 Pack – Item Tracker, Bluetooth",
    category: "electronics",
    subcategory: "tracking devices",
    product_type: "airtag",
    filters: ["pack of 4", "bluetooth"]
  },
  {
    id: 101,
    name: "Yeti Rambler 20 oz Tumbler – Stainless Steel, Seafoam",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "tumbler",
    filters: ["20 oz", "stainless steel", "seafoam"]
  },
  {
    id: 102,
    name: "ASICS Gel-Venture 8 Men's Running Shoes – Size 10, Grey",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "size 10", "grey"]
  },
  {
    id: 103,
    name: "Skip Hop Diaper Bag Backpack – Grey, with Changing Pad",
    category: "baby",
    subcategory: "travel gear",
    product_type: "diaper bag",
    filters: ["grey", "with changing pad", "backpack style"]
  },
  {
    id: 104,
    name: "Amazon Basics Multipurpose Copy Paper – 500 Sheets, Letter Size",
    category: "office",
    subcategory: "paper products",
    product_type: "copy paper",
    filters: ["500 sheets", "letter size", "white"]
  },
  {
    id: 105,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker – 6 Quart",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "pressure cooker",
    filters: ["7-in-1", "6 quart", "electric"]
  },
  {
    id: 106,
    name: "Furinno 3-Tier Open Shelf Bookcase – Espresso",
    category: "furniture",
    subcategory: "storage",
    product_type: "bookcase",
    filters: ["3-tier", "open shelf", "espresso"]
  },
  {
    id: 107,
    name: "Fossil Women's RFID Leather Wallet – Rose Gold",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["RFID", "leather", "rose gold"]
  },
  {
    id: 108,
    name: "Philips Sonicare 4100 Electric Toothbrush – Rechargeable",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "rechargeable", "sonic"]
  },
  {
    id: 109,
    name: "Gildan Men's V-Neck T-Shirts – 5-Pack, Cotton, Black",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["men's", "pack of 5", "black", "cotton"]
  },
  {
    id: 110,
    name: "Logitech M510 Wireless Mouse – Ergonomic, USB Receiver",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse",
    filters: ["wireless", "ergonomic", "USB"]
  },
  {
    id: 111,
    name: "Hydro Flask Wide Mouth Water Bottle – 32oz, Pacific",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "pacific"]
  },
  {
    id: 112,
    name: "Columbia Women's Benton Springs Fleece Jacket – Size M, Navy",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "jacket",
    filters: ["women's", "medium", "fleece", "navy"]
  },
  {
    id: 113,
    name: "TP-Link AC1750 Smart WiFi Router – Dual Band, 1500 Sq Ft Coverage",
    category: "electronics",
    subcategory: "networking",
    product_type: "wifi router",
    filters: ["dual band", "AC1750", "1500 sq ft"]
  },
  {
    id: 114,
    name: "Black+Decker Cordless Handheld Vacuum – Lithium Battery, Blue",
    category: "home",
    subcategory: "cleaning",
    product_type: "handheld vacuum",
    filters: ["cordless", "lithium battery", "blue"]
  },
  {
    id: 115,
    name: "Adidas Women's Cloudfoam Pure 2.0 Sneakers – Size 8, White",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["women's", "size 8", "white"]
  },
  {
    id: 116,
    name: "Pampers Swaddlers Diapers – Size 2, 84 Count",
    category: "baby",
    subcategory: "diapers",
    product_type: "diapers",
    filters: ["size 2", "pack of 84"]
  },
  {
    id: 117,
    name: "OXO Good Grips Salad Spinner – Large, BPA Free",
    category: "kitchen",
    subcategory: "tools",
    product_type: "salad spinner",
    filters: ["large", "BPA free"]
  },
  {
    id: 118,
    name: "Samsung EVO Select MicroSD Card – 128GB, U3, with Adapter",
    category: "electronics",
    subcategory: "memory",
    product_type: "microSD card",
    filters: ["128GB", "U3", "with adapter"]
  },
  {
    id: 119,
    name: "Mainstays Blackout Curtains – 84 inch, Navy, 2 Panels",
    category: "home",
    subcategory: "window treatments",
    product_type: "curtains",
    filters: ["blackout", "84 inch", "navy", "2 panels"]
  },
  {
    id: 120,
    name: "KitchenAid Classic Mixing Bowl Set – 3-Pack, Red",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "mixing bowls",
    filters: ["set of 3", "red", "plastic"]
  },
  {
    id: 121,
    name: "Levi's Men's 511 Slim Fit Jeans – 32x32, Dark Indigo",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "jeans",
    filters: ["men's", "slim fit", "32x32", "dark indigo"]
  },
  {
    id: 122,
    name: "Apple Lightning to USB Cable – 1 Meter, White",
    category: "electronics",
    subcategory: "cables",
    product_type: "charging cable",
    filters: ["lightning", "1 meter", "white"]
  },
  {
    id: 123,
    name: "Hamilton Beach Programmable Slow Cooker – 6 Quart, Stainless Steel",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "slow cooker",
    filters: ["6 quart", "programmable", "stainless steel"]
  },
  {
    id: 124,
    name: "The North Face Borealis Backpack – 28L, Black",
    category: "bags",
    subcategory: "backpacks",
    product_type: "daypack",
    filters: ["28L", "black", "padded straps"]
  },
  {
    id: 125,
    name: "Crayola Washable Markers – 10 Count, Classic Colors",
    category: "office",
    subcategory: "art supplies",
    product_type: "markers",
    filters: ["washable", "10 count", "classic colors"]
  },
  {
    id: 126,
    name: "iDesign Plastic Shower Caddy – Rustproof, Hanging, Clear",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower caddy",
    filters: ["rustproof", "hanging", "clear"]
  },
  {
    id: 127,
    name: "VTech Kidizoom Smartwatch DX2 – Blue, Ages 4–12",
    category: "electronics",
    subcategory: "wearables",
    product_type: "smartwatch",
    filters: ["kids", "blue", "ages 4-12"]
  },
  {
    id: 128,
    name: "Gaiam Essentials Yoga Block – Set of 2, EVA Foam, Purple",
    category: "sports",
    subcategory: "yoga",
    product_type: "yoga block",
    filters: ["set of 2", "EVA foam", "purple"]
  },
  {
    id: 129,
    name: "T-fal Nonstick Frying Pan – 10 Inch, Dishwasher Safe",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["nonstick", "10 inch", "dishwasher safe"]
  },
  {
    id: 130,
    name: "Hanes Women's Cotton Briefs – Pack of 6, Size M, Assorted Colors",
    category: "clothing",
    subcategory: "underwear",
    product_type: "briefs",
    filters: ["women's", "pack of 6", "size M", "cotton"]
  },
  {
    id: 131,
    name: "Samsung 32\" Curved Monitor – Full HD, HDMI, White",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["32 inch", "curved", "HDMI", "white"]
  },
  {
    id: 132,
    name: "Adidas Men's Performance T-Shirt – Size L, Black",
    category: "clothing",
    subcategory: "activewear",
    product_type: "t-shirt",
    filters: ["men's", "performance", "size L", "black"]
  },
  {
    id: 133,
    name: "Rubbermaid 13 Gallon Step-On Trash Can – Black",
    category: "home",
    subcategory: "kitchen",
    product_type: "trash can",
    filters: ["13 gallon", "step-on", "black"]
  },
  {
    id: 134,
    name: "Sony WH-1000XM5 Wireless Noise Cancelling Headphones – Silver",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["wireless", "noise cancelling", "silver"]
  },
  {
    id: 135,
    name: "Cuisinart Classic 12-Piece Knife Set – Color Coded",
    category: "kitchen",
    subcategory: "cutlery",
    product_type: "knife set",
    filters: ["12-piece", "color coded"]
  },
  {
    id: 136,
    name: "Nike Brasilia Training Duffel Bag – Medium, Blue",
    category: "bags",
    subcategory: "gym bags",
    product_type: "duffel bag",
    filters: ["medium", "blue", "training"]
  },
  {
    id: 137,
    name: "Aveeno Daily Moisturizing Lotion – 18oz, Fragrance Free",
    category: "beauty",
    subcategory: "skincare",
    product_type: "lotion",
    filters: ["18oz", "fragrance free"]
  },
  {
    id: 138,
    name: "OXO Good Grips Salad Spinner – Large, BPA-Free",
    category: "kitchen",
    subcategory: "tools",
    product_type: "salad spinner",
    filters: ["large", "BPA-free"]
  },
  {
    id: 139,
    name: "Patagonia Men's Nano Puff Jacket – Medium, Forge Grey",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "jacket",
    filters: ["men's", "medium", "forge grey", "nano puff"]
  },
  {
    id: 140,
    name: "Melissa & Doug Wooden Building Blocks – 100 Piece Set",
    category: "toys",
    subcategory: "building toys",
    product_type: "building blocks",
    filters: ["wooden", "100 pieces"]
  },
  {
    id: 141,
    name: "Bose SoundLink Micro Bluetooth Speaker – Waterproof, Black",
    category: "electronics",
    subcategory: "audio",
    product_type: "bluetooth speaker",
    filters: ["waterproof", "black", "micro"]
  },
  {
    id: 142,
    name: "Columbia Women's Hiking Boots – Waterproof, Size 8",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "hiking boots",
    filters: ["women's", "size 8", "waterproof"]
  },
  {
    id: 143,
    name: "HP 65XL Ink Cartridge – Black, High Yield",
    category: "office",
    subcategory: "printing",
    product_type: "ink cartridge",
    filters: ["black", "high yield"]
  },
  {
    id: 144,
    name: "Instant Pot Duo 7-in-1 Electric Pressure Cooker – 6 Quart",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "pressure cooker",
    filters: ["7-in-1", "6 quart", "electric"]
  },
  {
    id: 145,
    name: "Utopia Towels – Bath Towels Set of 6, 100% Cotton, White",
    category: "home",
    subcategory: "bath",
    product_type: "bath towels",
    filters: ["set of 6", "100% cotton", "white"]
  },
  {
    id: 146,
    name: "Timex Easy Reader Watch – Leather Band, White Dial",
    category: "accessories",
    subcategory: "watches",
    product_type: "watch",
    filters: ["leather band", "white dial", "analog"]
  },
  {
    id: 147,
    name: "Mainstays Fleece Throw Blanket – 50x60 Inches, Grey",
    category: "home",
    subcategory: "bedding",
    product_type: "blanket",
    filters: ["fleece", "50x60", "grey"]
  },
  {
    id: 148,
    name: "Hydro Flask Water Bottle – 32oz, Wide Mouth, Pacific Blue",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "pacific blue"]
  },
  {
    id: 149,
    name: "LEGO Classic Bricks and Animals – 1500 Piece Set",
    category: "toys",
    subcategory: "building toys",
    product_type: "LEGO set",
    filters: ["1500 pieces", "classic", "animals"]
  },
  {
    id: 150,
    name: "Lysol Disinfecting Wipes – Lemon Scent, Pack of 3 (240 Wipes)",
    category: "household",
    subcategory: "cleaning",
    product_type: "disinfecting wipes",
    filters: ["lemon scent", "pack of 3", "240 wipes"]
  },
  {
    id: 151,
    name: "Hanes Women's Cotton Brief Underwear – Pack of 6, Size M",
    category: "clothing",
    subcategory: "underwear",
    product_type: "briefs",
    filters: ["women's", "cotton", "pack of 6", "size M"]
  },
  {
    id: 152,
    name: "JBL Flip 6 Portable Bluetooth Speaker – 12h Battery, Red",
    category: "electronics",
    subcategory: "audio",
    product_type: "bluetooth speaker",
    filters: ["portable", "12 hour battery", "red"]
  },
  {
    id: 153,
    name: "Delta Shower Head with Handheld Spray – Chrome, 5 Settings",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower head",
    filters: ["handheld", "chrome", "5 settings"]
  },
  {
    id: 154,
    name: "Champion Men's Joggers – Fleece, Black, Size L",
    category: "clothing",
    subcategory: "activewear",
    product_type: "joggers",
    filters: ["men's", "fleece", "black", "size L"]
  },
  {
    id: 155,
    name: "Logitech M510 Wireless Mouse – Ergonomic, USB Receiver",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse",
    filters: ["wireless", "ergonomic", "USB receiver"]
  },
  {
    id: 156,
    name: "Crockpot 7-Quart Slow Cooker – Manual Controls, Stainless Steel",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "slow cooker",
    filters: ["7 quart", "manual", "stainless steel"]
  },
  {
    id: 157,
    name: "LEGO Friends Heartlake City Shopping Mall – 1232 Pieces",
    category: "toys",
    subcategory: "building toys",
    product_type: "LEGO set",
    filters: ["1232 pieces", "shopping mall"]
  },
  {
    id: 158,
    name: "Pure Enrichment MistAire Ultrasonic Cool Mist Humidifier – 1.5L",
    category: "home",
    subcategory: "air quality",
    product_type: "humidifier",
    filters: ["cool mist", "1.5L", "ultrasonic"]
  },
  {
    id: 159,
    name: "Keurig K-Mini Coffee Maker – Single Serve, Matte Black",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "coffee maker",
    filters: ["single serve", "matte black", "K-cup"]
  },
  {
    id: 160,
    name: "PUMA Women's Athletic Sneakers – Size 7, Rose Gold",
    category: "footwear",
    subcategory: "athletic",
    product_type: "sneakers",
    filters: ["women's", "size 7", "rose gold"]
  },
  {
    id: 161,
    name: "Amazon Basics Mesh Office Chair – Ergonomic, Black",
    category: "furniture",
    subcategory: "office",
    product_type: "office chair",
    filters: ["mesh", "ergonomic", "black"]
  },
  {
    id: 162,
    name: "iDesign Plastic Stackable Bin – Clear, 10x6x5 Inches",
    category: "home",
    subcategory: "storage",
    product_type: "storage bin",
    filters: ["clear", "stackable", "10x6x5"]
  },
  {
    id: 163,
    name: "Under Armour Boys' Short Sleeve Shirt – HeatGear, Blue, Size M",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["boys'", "HeatGear", "blue", "size M"]
  },
  {
    id: 164,
    name: "Gaiam Essentials Yoga Mat – 1/4 Inch Thick, Purple",
    category: "sports",
    subcategory: "fitness",
    product_type: "yoga mat",
    filters: ["1/4 inch", "purple"]
  },
  {
    id: 165,
    name: "Apple 20W USB-C Power Adapter – Compact Wall Charger",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "power adapter",
    filters: ["20W", "USB-C"]
  },
  {
    id: 166,
    name: "Gerber Baby Onesies – 5 Pack, Organic Cotton, 0–3 Months",
    category: "baby",
    subcategory: "clothing",
    product_type: "onesies",
    filters: ["organic", "pack of 5", "0–3 months"]
  },
  {
    id: 167,
    name: "Sterilite 3 Drawer Wide Cart – White Frame, Clear Drawers",
    category: "home",
    subcategory: "storage",
    product_type: "storage cart",
    filters: ["3 drawers", "white", "wide"]
  },
  {
    id: 168,
    name: "Ray-Ban Classic Aviator Sunglasses – Gold Frame, Green Lens",
    category: "accessories",
    subcategory: "eyewear",
    product_type: "sunglasses",
    filters: ["aviator", "gold frame", "green lens"]
  },
  {
    id: 169,
    name: "L.O.L. Surprise! Color Change Dolls – Pack of 2",
    category: "toys",
    subcategory: "dolls",
    product_type: "color change dolls",
    filters: ["pack of 2", "color change"]
  },
  {
    id: 170,
    name: "Bamboo Charcuterie Board Set – With Knife Set and Bowls",
    category: "kitchen",
    subcategory: "serveware",
    product_type: "charcuterie board",
    filters: ["bamboo", "knife set", "bowls"]
  },
  {
    id: 171,
    name: "Columbia Men's Watertight II Jacket – Waterproof, Size L",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["men's", "waterproof", "size L"]
  },
  {
    id: 172,
    name: "Hydro Flask Wide Mouth Bottle with Flex Cap – 32oz, Black",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "black"]
  },
  {
    id: 173,
    name: "TP-Link AC1750 Smart WiFi Router – Dual Band, Coverage 1500 sq ft",
    category: "electronics",
    subcategory: "networking",
    product_type: "wifi router",
    filters: ["AC1750", "dual band", "1500 sq ft coverage"]
  },
  {
    id: 174,
    name: "Melissa & Doug Wooden Building Blocks Set – 100 Pieces",
    category: "toys",
    subcategory: "building toys",
    product_type: "building blocks",
    filters: ["wooden", "100 pieces"]
  },
  {
    id: 175,
    name: "Samsonite Omni PC Hardside Luggage – Carry-On, 20 Inch, Teal",
    category: "travel",
    subcategory: "luggage",
    product_type: "carry-on suitcase",
    filters: ["20 inch", "hardside", "teal"]
  },
  {
    id: 176,
    name: "OXO Good Grips Nonstick Pro Baking Sheet – Set of 2",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking sheet",
    filters: ["nonstick", "set of 2"]
  },
  {
    id: 177,
    name: "Aveeno Daily Moisturizing Lotion – Fragrance-Free, 18oz",
    category: "beauty",
    subcategory: "skincare",
    product_type: "body lotion",
    filters: ["fragrance-free", "18oz"]
  },
  {
    id: 178,
    name: "Sony WH-CH720N Noise Canceling Wireless Headphones – Over-Ear, White",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["noise cancelling", "wireless", "white", "over-ear"]
  },
  {
    id: 179,
    name: "Himalayan Glow Natural Salt Lamp – Dimmer Switch, Wood Base",
    category: "home",
    subcategory: "lighting",
    product_type: "salt lamp",
    filters: ["dimmer switch", "wood base"]
  },
  {
    id: 180,
    name: "Burt’s Bees Baby Wash & Shampoo – Tear-Free, 12oz",
    category: "baby",
    subcategory: "bath",
    product_type: "baby shampoo",
    filters: ["tear-free", "12oz"]
  },
  {
    id: 181,
    name: "adidas Men’s Cloudfoam Running Shoes – Size 10, Navy",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "size 10", "navy"]
  },
  {
    id: 182,
    name: "Rubbermaid Brilliance Food Storage Containers – 10 Piece Set",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food container",
    filters: ["plastic", "10 piece set", "leak-proof"]
  },
  {
    id: 183,
    name: "Contigo AUTOSEAL Travel Mug – 16oz, Vacuum Insulated, Gunmetal",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["autoseal", "vacuum insulated", "16oz"]
  },
  {
    id: 184,
    name: "Furinno Turn-N-Tube 3-Tier Storage Shelf – Espresso/Black",
    category: "furniture",
    subcategory: "shelving",
    product_type: "storage shelf",
    filters: ["3-tier", "espresso", "black"]
  },
  {
    id: 185,
    name: "YETI Roadie 24 Cooler – Charcoal, Portable",
    category: "outdoor",
    subcategory: "coolers",
    product_type: "portable cooler",
    filters: ["24 quart", "charcoal", "portable"]
  },
  {
    id: 186,
    name: "Cuisinart 5-Speed Hand Mixer – Brushed Chrome",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "hand mixer",
    filters: ["5 speed", "brushed chrome"]
  },
  {
    id: 187,
    name: "Mainstays Reversible Microfiber Comforter – Twin, Navy/Gray",
    category: "home",
    subcategory: "bedding",
    product_type: "comforter",
    filters: ["reversible", "twin size", "navy", "gray"]
  },
  {
    id: 188,
    name: "Tide PODS Laundry Detergent – Free & Gentle, 96 Count",
    category: "household",
    subcategory: "laundry",
    product_type: "laundry pods",
    filters: ["free & gentle", "96 count"]
  },
  {
    id: 189,
    name: "Skip Hop Diaper Backpack – Grey, USB Port, Stroller Straps",
    category: "baby",
    subcategory: "travel gear",
    product_type: "diaper bag",
    filters: ["backpack", "USB port", "stroller straps"]
  },
  {
    id: 190,
    name: "Lasko Ceramic Tower Heater – Remote Control, 1500W",
    category: "home",
    subcategory: "climate control",
    product_type: "space heater",
    filters: ["ceramic", "tower", "remote control", "1500W"]
  },
  {
    id: 191,
    name: "Levi's Women's 721 High Rise Skinny Jeans – Black, Size 6",
    category: "clothing",
    subcategory: "pants",
    product_type: "jeans",
    filters: ["women's", "high rise", "skinny", "black", "size 6"]
  },
  {
    id: 192,
    name: "Hamilton Beach Smoothie Blender – 40oz Glass Jar, 700W",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "blender",
    filters: ["700W", "40oz", "glass jar"]
  },
  {
    id: 193,
    name: "3M WorkTunes Connect Hearing Protector – Bluetooth, Over-Ear",
    category: "tools",
    subcategory: "safety",
    product_type: "hearing protection",
    filters: ["bluetooth", "over-ear"]
  },
  {
    id: 194,
    name: "ASUS 24” Full HD Gaming Monitor – 75Hz, HDMI, Eye Care",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["24 inch", "1080p", "75Hz", "HDMI", "eye care"]
  },
  {
    id: 195,
    name: "Revlon One-Step Hair Dryer and Volumizer – Pink/Black",
    category: "beauty",
    subcategory: "hair tools",
    product_type: "hair dryer",
    filters: ["volumizer", "one-step", "pink/black"]
  },
  {
    id: 196,
    name: "Speedo Men's Swim Trunks – Quick Dry, Size M, Blue Palm Print",
    category: "clothing",
    subcategory: "swimwear",
    product_type: "swim trunks",
    filters: ["men's", "quick dry", "size M", "blue palm print"]
  },
  {
    id: 197,
    name: "Keter Resin Rolling Tool Chest – 7 Drawers, Lockable, Black/Gray",
    category: "tools",
    subcategory: "storage",
    product_type: "tool chest",
    filters: ["resin", "7 drawers", "lockable"]
  },
  {
    id: 198,
    name: "Philips Sonicare 4100 Electric Toothbrush – Rechargeable, White",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "rechargeable", "white"]
  },
  {
    id: 199,
    name: "Nike Men's Revolution 6 Running Shoes – Black, Size 11",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "black", "size 11"]
  },
  {
    id: 200,
    name: "Simple Modern Insulated Tumbler with Straw Lid – 24oz, Rose Gold",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "tumbler",
    filters: ["24oz", "insulated", "with straw", "rose gold"]
  },
  {
    id: 201,
    name: "AmazonBasics Mesh Desk Organizer – 6 Compartments, Black",
    category: "office",
    subcategory: "desk accessories",
    product_type: "desk organizer",
    filters: ["mesh", "6 compartments", "black"]
  },
  {
    id: 202,
    name: "Pampers Baby Dry Diapers – Size 3, 168 Count, Leak Protection",
    category: "baby",
    subcategory: "diapers",
    product_type: "baby diapers",
    filters: ["size 3", "168 count", "leak protection"]
  },
  {
    id: 203,
    name: "Chefman Air Fryer – 4.5 Quart, Dishwasher Safe Basket, Matte Black",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "air fryer",
    filters: ["4.5 quart", "dishwasher safe", "matte black"]
  },
  {
    id: 204,
    name: "Igloo MaxCold Rolling Cooler – 50 Quart, Blue/White",
    category: "outdoor",
    subcategory: "coolers",
    product_type: "rolling cooler",
    filters: ["50 quart", "blue", "wheels"]
  },
  {
    id: 205,
    name: "Fossil Women's RFID Zip Wallet – Leather, Black",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["women's", "RFID", "leather", "black"]
  },
  {
    id: 206,
    name: "Hanes Men's Tagless Cotton T-Shirts – Pack of 6, White, Size XL",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["men's", "pack of 6", "white", "size XL"]
  },
  {
    id: 207,
    name: "Canon PIXMA MG3620 Wireless Inkjet Printer – Black",
    category: "electronics",
    subcategory: "printers",
    product_type: "printer",
    filters: ["wireless", "inkjet", "black"]
  },
  {
    id: 208,
    name: "Allen Sports Deluxe 2-Bike Hitch Rack – Fits 1.25 & 2 Inch Receivers",
    category: "sports",
    subcategory: "cycling accessories",
    product_type: "bike rack",
    filters: ["2-bike", "hitch mount", "universal fit"]
  },
  {
    id: 209,
    name: "Tommy Hilfiger Men's Leather Belt – Reversible, Black/Brown, Size 34",
    category: "accessories",
    subcategory: "belts",
    product_type: "belt",
    filters: ["leather", "reversible", "black", "brown", "size 34"]
  },
  {
    id: 210,
    name: "GreenLife Ceramic Nonstick Cookware Set – 16-Piece, Turquoise",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "cookware set",
    filters: ["ceramic", "nonstick", "16-piece", "turquoise"]
  },
  {
    id: 211,
    name: "Columbia Women's Arcadia II Rain Jacket – Waterproof, Size M",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["women's", "waterproof", "size M"]
  },
  {
    id: 212,
    name: "TP-Link AC1750 Smart WiFi Router – Dual Band, Gigabit, Alexa Compatible",
    category: "electronics",
    subcategory: "networking",
    product_type: "wifi router",
    filters: ["dual band", "gigabit", "Alexa compatible"]
  },
  {
    id: 213,
    name: "Rubbermaid Brilliance Food Storage Containers – 10-Piece, BPA-Free",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food storage",
    filters: ["10-piece", "BPA-free", "airtight"]
  },
  {
    id: 214,
    name: "Adidas Men's Cloudfoam Running Shoes – Size 10, Navy",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "cloudfoam", "size 10", "navy"]
  },
  {
    id: 215,
    name: "Melissa & Doug Wooden Building Blocks Set – 100 Pieces",
    category: "toys",
    subcategory: "building sets",
    product_type: "building blocks",
    filters: ["wooden", "100 pieces"]
  },
  {
    id: 216,
    name: "HP 15.6” Laptop – Intel i5, 8GB RAM, 256GB SSD, Silver",
    category: "electronics",
    subcategory: "computers",
    product_type: "laptop",
    filters: ["15.6 inch", "Intel i5", "8GB RAM", "256GB SSD"]
  },
  {
    id: 217,
    name: "Contigo Autoseal Travel Mug – 16oz, Stainless Steel, Leak-Proof",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["16oz", "leak-proof", "stainless steel"]
  },
  {
    id: 218,
    name: "Ninja Foodi 8-Quart Pressure Cooker & Air Fryer – Stainless Finish",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "pressure cooker",
    filters: ["8-quart", "air fryer", "stainless finish"]
  },
  {
    id: 219,
    name: "Gaiam Essentials Yoga Mat – 1/2 Inch Thick, Carry Strap Included",
    category: "sports",
    subcategory: "fitness",
    product_type: "yoga mat",
    filters: ["1/2 inch thick", "carry strap"]
  },
  {
    id: 220,
    name: "Under Armour Boys' Pullover Hoodie – Fleece, Size L",
    category: "clothing",
    subcategory: "tops",
    product_type: "hoodie",
    filters: ["boys'", "fleece", "size L"]
  },
  {
    id: 221,
    name: "Amazon Fire HD 10 Tablet – 32GB, Black, 10.1” Display",
    category: "electronics",
    subcategory: "tablets",
    product_type: "tablet",
    filters: ["10.1 inch", "32GB", "black"]
  },
  {
    id: 222,
    name: "VTech Kidizoom Smartwatch DX3 – Blue, Educational Games Included",
    category: "toys",
    subcategory: "wearables",
    product_type: "kids smartwatch",
    filters: ["blue", "educational games"]
  },
  {
    id: 223,
    name: "Bissell CleanView Upright Vacuum – Bagless, Multi-Cyclonic",
    category: "household",
    subcategory: "cleaning",
    product_type: "vacuum cleaner",
    filters: ["bagless", "multi-cyclonic"]
  },
  {
    id: 224,
    name: "Crocs Classic Clogs – Unisex, White, Size 9",
    category: "footwear",
    subcategory: "casual",
    product_type: "clogs",
    filters: ["unisex", "white", "size 9"]
  },
  {
    id: 225,
    name: "Ring Indoor Cam – Compact Plug-In HD Security Camera, White",
    category: "electronics",
    subcategory: "smart home",
    product_type: "security camera",
    filters: ["HD", "plug-in", "white"]
  },
  {
    id: 226,
    name: "Hydro Flask Wide Mouth Water Bottle – 32oz, Flex Cap, Black",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "black"]
  },
  {
    id: 227,
    name: "T-fal Ultimate Hard Anodized Nonstick Fry Pan – 12”, Oven Safe",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["12 inch", "hard anodized", "nonstick"]
  },
  {
    id: 228,
    name: "PetSafe ScoopFree Self-Cleaning Litter Box – For Multiple Cats",
    category: "pet supplies",
    subcategory: "cat care",
    product_type: "litter box",
    filters: ["self-cleaning", "for multiple cats"]
  },
  {
    id: 229,
    name: "The North Face Borealis Backpack – 28L, Laptop Sleeve, Navy",
    category: "bags",
    subcategory: "backpacks",
    product_type: "backpack",
    filters: ["28L", "laptop sleeve", "navy"]
  },
  {
    id: 230,
    name: "Cricut Joy Cutting Machine – Bluetooth, DIY Crafts & Labels",
    category: "electronics",
    subcategory: "crafting",
    product_type: "cutting machine",
    filters: ["bluetooth", "DIY", "crafting"]
  },
  {
    id: 231,
    name: "OXO Good Grips Salad Spinner – Large, BPA-Free",
    category: "kitchen",
    subcategory: "tools",
    product_type: "salad spinner",
    filters: ["large", "BPA-free"]
  },
  {
    id: 232,
    name: "Samsung Galaxy Buds2 – Wireless Noise-Cancelling Earbuds, Graphite",
    category: "electronics",
    subcategory: "audio",
    product_type: "earbuds",
    filters: ["wireless", "noise-cancelling", "graphite"]
  },
  {
    id: 233,
    name: "Graco Pack 'n Play Travel Dome LX Playard – Bassinet & Storage Included",
    category: "baby",
    subcategory: "furniture",
    product_type: "playard",
    filters: ["bassinet", "portable", "with storage"]
  },
  {
    id: 234,
    name: "Everlast Pro Style Training Boxing Gloves – 14oz, Black",
    category: "sports",
    subcategory: "boxing",
    product_type: "boxing gloves",
    filters: ["14oz", "black"]
  },
  {
    id: 235,
    name: "Yankee Candle Large Jar – Vanilla Cupcake Scent, 22oz",
    category: "home",
    subcategory: "decor",
    product_type: "candle",
    filters: ["vanilla cupcake", "22oz"]
  },
  {
    id: 236,
    name: "LEGO Classic Bricks and Animals Set – 1500 Pieces",
    category: "toys",
    subcategory: "building sets",
    product_type: "LEGO set",
    filters: ["1500 pieces", "animal-themed"]
  },
  {
    id: 237,
    name: "Calvin Klein Men's Cotton Boxer Briefs – Pack of 5, Assorted Colors",
    category: "clothing",
    subcategory: "underwear",
    product_type: "boxer briefs",
    filters: ["men's", "cotton", "pack of 5"]
  },
  {
    id: 238,
    name: "Etekcity Digital Body Weight Bathroom Scale – Backlit Display, 400lb Capacity",
    category: "health",
    subcategory: "personal care",
    product_type: "bathroom scale",
    filters: ["digital", "backlit", "400lb capacity"]
  },
  {
    id: 239,
    name: "Cuisinart 5-in-1 Griddler – Panini Press & Grill, Stainless Steel",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "grill",
    filters: ["5-in-1", "panini press", "stainless steel"]
  },
  {
    id: 240,
    name: "Apple 20W USB-C Power Adapter – Fast Charging Compatible",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "power adapter",
    filters: ["USB-C", "20W", "fast charging"]
  },
  {
    id: 241,
    name: "Bounty Quick-Size Paper Towels – 8 Family Rolls",
    category: "household",
    subcategory: "paper products",
    product_type: "paper towels",
    filters: ["quick-size", "8 rolls"]
  },
  {
    id: 242,
    name: "Skechers Women's Go Walk Joy Sneakers – Lightweight, Size 7",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["women's", "lightweight", "size 7"]
  },
  {
    id: 243,
    name: "Purell Advanced Hand Sanitizer – Pump Bottle, 12oz",
    category: "health",
    subcategory: "sanitation",
    product_type: "hand sanitizer",
    filters: ["pump bottle", "12oz"]
  },
  {
    id: 244,
    name: "Puma Men's Athletic T-Shirt – Moisture-Wicking, Size L",
    category: "clothing",
    subcategory: "activewear",
    product_type: "t-shirt",
    filters: ["men's", "moisture-wicking", "size L"]
  },
  {
    id: 245,
    name: "Brita Standard Water Filter Pitcher – 6-Cup, BPA-Free, White",
    category: "home",
    subcategory: "kitchenware",
    product_type: "water pitcher",
    filters: ["6-cup", "BPA-free", "white"]
  },
  {
    id: 246,
    name: "Melissa & Doug Magnetic Responsibility Chart – Wooden Frame",
    category: "toys",
    subcategory: "educational",
    product_type: "responsibility chart",
    filters: ["magnetic", "wooden frame"]
  },
  {
    id: 247,
    name: "Utopia Bedding Zippered Pillow Protectors – Queen Size, Set of 2",
    category: "home",
    subcategory: "bedroom",
    product_type: "pillow protectors",
    filters: ["queen size", "set of 2", "zippered"]
  },
  {
    id: 248,
    name: "Fitbit Charge 5 Fitness Tracker – Built-in GPS, Stress Management",
    category: "electronics",
    subcategory: "wearables",
    product_type: "fitness tracker",
    filters: ["GPS", "stress tracking"]
  },
  {
    id: 249,
    name: "Keurig K-Classic Coffee Maker – Single Serve, Black",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "coffee maker",
    filters: ["single serve", "black"]
  },
  {
    id: 250,
    name: "Ray-Ban RB2132 New Wayfarer Sunglasses – Tortoise Frame, Green Lens",
    category: "accessories",
    subcategory: "eyewear",
    product_type: "sunglasses",
    filters: ["wayfarer", "tortoise frame", "green lens"]
  },
  {
    id: 251,
    name: "Contigo AUTOSEAL West Loop Travel Mug – 16oz, Stainless Steel",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["16oz", "stainless steel", "autoseal"]
  },
  {
    id: 252,
    name: "Canon PIXMA TR4720 All-in-One Wireless Inkjet Printer",
    category: "electronics",
    subcategory: "printers",
    product_type: "printer",
    filters: ["wireless", "inkjet", "all-in-one"]
  },
  {
    id: 253,
    name: "Amazon Basics Mesh Wastebasket – 4.5 Gallon, Black",
    category: "office",
    subcategory: "desk accessories",
    product_type: "wastebasket",
    filters: ["mesh", "4.5 gallon", "black"]
  },
  {
    id: 254,
    name: "Timberland PRO Men's Work Boots – Waterproof, Size 10",
    category: "footwear",
    subcategory: "workwear",
    product_type: "work boots",
    filters: ["men's", "waterproof", "size 10"]
  },
  {
    id: 255,
    name: "Simple Joys by Carter's Baby Sleep and Play – 3-Pack, 0-3 Months",
    category: "baby",
    subcategory: "clothing",
    product_type: "sleep and play",
    filters: ["3-pack", "0-3 months", "cotton"]
  },
  {
    id: 256,
    name: "Gildan Men's Fleece Hoodie – Heavy Blend, Size M, Red",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "hoodie",
    filters: ["men's", "medium", "red"]
  },
  {
    id: 257,
    name: "Apple Watch Series 8 – GPS, 45mm, Midnight Aluminum Case",
    category: "electronics",
    subcategory: "wearables",
    product_type: "smartwatch",
    filters: ["GPS", "45mm", "midnight"]
  },
  {
    id: 258,
    name: "Philips Sonicare ProtectiveClean 4100 – Electric Toothbrush, White",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "white"]
  },
  {
    id: 259,
    name: "Vasagle Industrial Ladder Shelf – 4-Tier, Rustic Brown",
    category: "home",
    subcategory: "furniture",
    product_type: "ladder shelf",
    filters: ["4-tier", "rustic brown", "industrial"]
  },
  {
    id: 260,
    name: "Speedo Women's One Piece Swimsuit – PowerFlex, Size 6, Navy",
    category: "clothing",
    subcategory: "swimwear",
    product_type: "swimsuit",
    filters: ["women's", "size 6", "navy"]
  },
  {
    id: 261,
    name: "North Face Borealis Backpack – 28L, Black",
    category: "bags",
    subcategory: "backpacks",
    product_type: "backpack",
    filters: ["28L", "black", "padded straps"]
  },
  {
    id: 262,
    name: "Hanes Boys' Tagless T-Shirts – Pack of 10, White, Size M",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["boys'", "pack of 10", "size M"]
  },
  {
    id: 263,
    name: "Logitech C920x HD Pro Webcam – 1080p, Built-in Microphone",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "webcam",
    filters: ["1080p", "microphone", "plug and play"]
  },
  {
    id: 264,
    name: "Under Armour Undeniable Duffle 4.0 Gym Bag – Medium, Gray",
    category: "sports",
    subcategory: "fitness",
    product_type: "duffle bag",
    filters: ["medium", "gray", "water-resistant"]
  },
  {
    id: 265,
    name: "Ring Video Doorbell – 1080p HD, Wi-Fi Enabled, Satin Nickel",
    category: "electronics",
    subcategory: "home security",
    product_type: "video doorbell",
    filters: ["1080p", "wifi", "satin nickel"]
  },
  {
    id: 266,
    name: "Columbia Women's Arcadia II Rain Jacket – Waterproof, Size S",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["women's", "waterproof", "size S"]
  },
  {
    id: 267,
    name: "Zinus Green Tea Memory Foam Mattress – Full Size, 8 Inch",
    category: "furniture",
    subcategory: "bedroom",
    product_type: "mattress",
    filters: ["full size", "8 inch", "memory foam"]
  },
  {
    id: 268,
    name: "JBL Clip 4 Portable Speaker – Waterproof, Teal",
    category: "electronics",
    subcategory: "audio",
    product_type: "portable speaker",
    filters: ["waterproof", "teal", "bluetooth"]
  },
  {
    id: 269,
    name: "OXO Good Grips 3-in-1 Avocado Slicer – Dishwasher Safe",
    category: "kitchen",
    subcategory: "tools",
    product_type: "avocado slicer",
    filters: ["3-in-1", "dishwasher safe"]
  },
  {
    id: 270,
    name: "Skil 20V Cordless Drill Driver Kit – 1/2 Inch Chuck, Battery Included",
    category: "tools",
    subcategory: "power tools",
    product_type: "drill",
    filters: ["20V", "cordless", "battery included"]
  },
  {
    id: 271,
    name: "Hydro Flask Wide Mouth Water Bottle – 32oz, Flex Cap",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "flex cap"]
  },
  {
    id: 272,
    name: "Britax B-Lively Lightweight Stroller – Black",
    category: "baby",
    subcategory: "travel gear",
    product_type: "stroller",
    filters: ["lightweight", "black", "foldable"]
  },
  {
    id: 273,
    name: "Fujifilm Instax Mini 11 Instant Camera – Ice White",
    category: "electronics",
    subcategory: "cameras",
    product_type: "instant camera",
    filters: ["instant", "ice white", "auto exposure"]
  },
  {
    id: 274,
    name: "Keurig K-Mini Single Serve Coffee Maker – Oasis",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "coffee maker",
    filters: ["single serve", "compact", "oasis color"]
  },
  {
    id: 275,
    name: "Nike Men's Revolution 6 Running Shoes – Size 11, Black",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "black", "size 11"]
  },
  {
    id: 276,
    name: "Revlon One-Step Hair Dryer and Volumizer – Hot Air Brush",
    category: "beauty",
    subcategory: "hair care",
    product_type: "hot air brush",
    filters: ["hair dryer", "volumizer", "black"]
  },
  {
    id: 277,
    name: "Anker PowerCore 10000 Portable Charger – USB-A, Compact",
    category: "electronics",
    subcategory: "power banks",
    product_type: "portable charger",
    filters: ["10000mAh", "USB-A", "compact"]
  },
  {
    id: 278,
    name: "Melissa & Doug Wooden Building Blocks Set – 100 Pieces",
    category: "toys",
    subcategory: "educational",
    product_type: "building blocks",
    filters: ["100 pieces", "wooden", "for kids"]
  },
  {
    id: 279,
    name: "Therm-a-Rest RidgeRest Classic Foam Camping Pad – Regular",
    category: "outdoor",
    subcategory: "camping",
    product_type: "camping pad",
    filters: ["foam", "classic", "regular"]
  },
  {
    id: 280,
    name: "Ray-Ban RB2132 New Wayfarer Sunglasses – Tortoise",
    category: "accessories",
    subcategory: "eyewear",
    product_type: "sunglasses",
    filters: ["tortoise", "polarized", "unisex"]
  },
  {
    id: 281,
    name: "GreenLife Soft Grip Ceramic Nonstick Frying Pan – 12 Inch, Turquoise",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["12 inch", "ceramic", "turquoise"]
  },
  {
    id: 282,
    name: "Cricut Explore Air 2 – Mint, Bluetooth Enabled",
    category: "crafts",
    subcategory: "tools",
    product_type: "cutting machine",
    filters: ["bluetooth", "mint", "DIY"]
  },
  {
    id: 283,
    name: "Crocs Unisex Classic Clog – Navy, Size 8",
    category: "footwear",
    subcategory: "casual",
    product_type: "clogs",
    filters: ["unisex", "navy", "size 8"]
  },
  {
    id: 284,
    name: "Panasonic Cordless Phone with Answering Machine – KX-TGD563M",
    category: "electronics",
    subcategory: "phones",
    product_type: "cordless phone",
    filters: ["answering machine", "cordless", "3 handsets"]
  },
  {
    id: 285,
    name: "Bose SoundLink Micro Bluetooth Speaker – Waterproof, Orange",
    category: "electronics",
    subcategory: "audio",
    product_type: "bluetooth speaker",
    filters: ["waterproof", "orange", "portable"]
  },
  {
    id: 286,
    name: "Umbra Triflora Hanging Planter for Indoor Plants – White",
    category: "home",
    subcategory: "decor",
    product_type: "hanging planter",
    filters: ["white", "indoor", "set of 3"]
  },
  {
    id: 287,
    name: "Colgate Optic White Advanced Toothpaste – 3.2oz, 2-Pack",
    category: "health",
    subcategory: "oral care",
    product_type: "toothpaste",
    filters: ["3.2oz", "2-pack", "whitening"]
  },
  {
    id: 288,
    name: "Everlane The ’90s Cheeky Straight Jean – Bone, Size 27",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "jeans",
    filters: ["women's", "straight", "size 27"]
  },
  {
    id: 289,
    name: "Vornado 630 Mid-Size Whole Room Air Circulator Fan – Black",
    category: "home",
    subcategory: "climate control",
    product_type: "fan",
    filters: ["mid-size", "black", "whole room"]
  },
  {
    id: 290,
    name: "Spalding NBA Street Outdoor Basketball – Size 7",
    category: "sports",
    subcategory: "basketball",
    product_type: "basketball",
    filters: ["outdoor", "size 7", "rubber"]
  },
  {
    id: 291,
    name: "Contigo Autoseal West Loop Travel Mug – 16oz, Stainless Steel",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["16oz", "autoseal", "stainless steel"]
  },
  {
    id: 292,
    name: "LG 27UL500-W 27-Inch 4K UHD Monitor – HDMI, IPS",
    category: "electronics",
    subcategory: "computer peripherals",
    product_type: "monitor",
    filters: ["27 inch", "4K UHD", "HDMI"]
  },
  {
    id: 293,
    name: "Adidas Women's Cloudfoam Pure Running Shoes – Black, Size 9",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["women's", "black", "size 9"]
  },
  {
    id: 294,
    name: "YETI Rambler Tumbler with MagSlider Lid – 20oz, Navy",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "tumbler",
    filters: ["20oz", "navy", "MagSlider lid"]
  },
  {
    id: 295,
    name: "Hanes Men’s Tagless Boxer Briefs – Pack of 6, Black",
    category: "clothing",
    subcategory: "underwear",
    product_type: "boxer briefs",
    filters: ["men's", "pack of 6", "tagless"]
  },
  {
    id: 296,
    name: "iRobot Roomba 692 Robot Vacuum – Wi-Fi Connected",
    category: "home",
    subcategory: "cleaning",
    product_type: "robot vacuum",
    filters: ["Wi-Fi", "robotic", "self-charging"]
  },
  {
    id: 297,
    name: "Samsonite Freeform Hardside Spinner Suitcase – Carry-On",
    category: "travel",
    subcategory: "luggage",
    product_type: "suitcase",
    filters: ["carry-on", "hardside", "spinner wheels"]
  },
  {
    id: 298,
    name: "Bluey Wooden Puzzle Set – 3-Pack, Ages 3+",
    category: "toys",
    subcategory: "puzzles",
    product_type: "puzzle set",
    filters: ["wooden", "3-pack", "ages 3+"]
  },
  {
    id: 299,
    name: "Lasko 18-Inch Pedestal Fan with Remote – White",
    category: "home",
    subcategory: "climate control",
    product_type: "fan",
    filters: ["18 inch", "remote control", "pedestal"]
  },
  {
    id: 300,
    name: "Coleman Sundome Camping Tent – 4 Person, Green",
    category: "outdoor",
    subcategory: "camping",
    product_type: "tent",
    filters: ["4 person", "green", "weatherproof"]
  },
  {
    id: 301,
    name: "Amazon Basics Microfiber Sheet Set – Queen, Light Gray",
    category: "home",
    subcategory: "bedding",
    product_type: "sheet set",
    filters: ["queen", "microfiber", "light gray"]
  },
  {
    id: 302,
    name: "Craftsman 12-Gallon Wet/Dry Vac – Red, Heavy Duty",
    category: "tools",
    subcategory: "cleaning tools",
    product_type: "wet/dry vacuum",
    filters: ["12 gallon", "red", "heavy duty"]
  },
  {
    id: 303,
    name: "KitchenAid 5-Speed Ultra Power Hand Mixer – Empire Red",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "hand mixer",
    filters: ["5-speed", "red", "corded"]
  },
  {
    id: 304,
    name: "Canon PIXMA MG3620 Wireless All-In-One Printer – Black",
    category: "electronics",
    subcategory: "printers",
    product_type: "printer",
    filters: ["wireless", "all-in-one", "black"]
  },
  {
    id: 305,
    name: "JBL Clip 4 Portable Bluetooth Speaker – Teal",
    category: "electronics",
    subcategory: "audio",
    product_type: "bluetooth speaker",
    filters: ["portable", "teal", "clip-on"]
  },
  {
    id: 306,
    name: "Zinus 12-Inch Green Tea Memory Foam Mattress – King",
    category: "furniture",
    subcategory: "bedroom",
    product_type: "mattress",
    filters: ["king", "12 inch", "memory foam"]
  },
  {
    id: 307,
    name: "Apple Lightning to USB Cable – 1 Meter",
    category: "electronics",
    subcategory: "cables",
    product_type: "charging cable",
    filters: ["1 meter", "Lightning", "USB"]
  },
  {
    id: 308,
    name: "Levi’s Men's 511 Slim Fit Jeans – Dark Indigo, Size 34x32",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "jeans",
    filters: ["men's", "slim fit", "size 34x32"]
  },
  {
    id: 309,
    name: "BIC Round Stic Xtra Life Ballpoint Pens – Black, 60 Count",
    category: "office",
    subcategory: "writing instruments",
    product_type: "ballpoint pens",
    filters: ["black ink", "60 count", "medium point"]
  },
  {
    id: 310,
    name: "Lodge Cast Iron Skillet – 10.25 Inch, Pre-Seasoned",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "skillet",
    filters: ["cast iron", "10.25 inch", "pre-seasoned"]
  },
  {
    id: 311,
    name: "Crocs Classic Clog – Women's Size 7, White",
    category: "footwear",
    subcategory: "casual",
    product_type: "clogs",
    filters: ["women's", "size 7", "white"]
  },
  {
    id: 312,
    name: "Kindle Paperwhite – 6.8” Display, 8GB, Black",
    category: "electronics",
    subcategory: "e-readers",
    product_type: "e-reader",
    filters: ["6.8 inch", "black", "8GB"]
  },
  {
    id: 313,
    name: "Columbia Men’s Watertight II Jacket – Medium, Navy",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "jacket",
    filters: ["men's", "waterproof", "medium"]
  },
  {
    id: 314,
    name: "OXO Good Grips 3-Piece Peeler Set – Assorted Colors",
    category: "kitchen",
    subcategory: "tools",
    product_type: "peeler set",
    filters: ["3-piece", "non-slip", "colorful"]
  },
  {
    id: 315,
    name: "Colgate Extra Clean Toothbrushes – Soft, Pack of 6",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["soft", "pack of 6", "manual"]
  },
  {
    id: 316,
    name: "TCL 32-Inch Class 3-Series HD Smart Roku TV",
    category: "electronics",
    subcategory: "televisions",
    product_type: "smart TV",
    filters: ["32 inch", "HD", "Roku"]
  },
  {
    id: 317,
    name: "Nalgene Tritan Wide Mouth Water Bottle – 32oz, Blue",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["32oz", "wide mouth", "blue"]
  },
  {
    id: 318,
    name: "CeraVe Daily Moisturizing Lotion – 12oz, Fragrance Free",
    category: "beauty",
    subcategory: "skincare",
    product_type: "moisturizer",
    filters: ["12oz", "fragrance free", "daily"]
  },
  {
    id: 319,
    name: "Amazon Basics 8-Sheet Cross-Cut Paper Shredder",
    category: "office",
    subcategory: "equipment",
    product_type: "paper shredder",
    filters: ["8-sheet", "cross-cut", "black"]
  },
  {
    id: 320,
    name: "Asics Gel-Contend 7 Running Shoes – Women's Size 8, Gray",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["women's", "size 8", "gray"]
  },
  {
    id: 321,
    name: "Silicone Baking Mat Non-Stick Reusable",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["silicone", "non-stick", "reusable"]
  },
  {
    id: 322,
    name: "Women's Flannel Pajama Set - Blue Plaid",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["women's", "flannel", "blue plaid"]
  },
  {
    id: 323,
    name: "Leather Office Chair Adjustable High Back",
    category: "furniture",
    subcategory: "office",
    product_type: "office chair",
    filters: ["leather", "adjustable", "high back"]
  },
  {
    id: 324,
    name: "Children's Picture Book - Animal Friends",
    category: "books",
    subcategory: "children's",
    product_type: "picture book",
    filters: ["children's", "animal", "illustrated"]
  },
  {
    id: 325,
    name: "Men's Hiking Socks 3-Pack Wool Blend",
    category: "clothing",
    subcategory: "socks",
    product_type: "hiking socks",
    filters: ["men's", "wool blend", "3-pack"]
  },
  {
    id: 326,
    name: "16-Piece Dinnerware Set - Stoneware White",
    category: "kitchen",
    subcategory: "dining",
    product_type: "dinnerware set",
    filters: ["16-piece", "stoneware", "white"]
  },
  {
    id: 327,
    name: "Over-Ear Bluetooth Headphones Noise Cancelling",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["over-ear", "bluetooth", "noise cancelling"]
  },
  {
    id: 328,
    name: "Non-Slip Yoga Towel for Hot Yoga",
    category: "sports",
    subcategory: "fitness",
    product_type: "yoga towel",
    filters: ["non-slip", "hot yoga", "quick-dry"]
  },
  {
    id: 329,
    name: "Portable Space Heater Electric Ceramic",
    category: "home",
    subcategory: "climate control",
    product_type: "space heater",
    filters: ["portable", "electric", "ceramic"]
  },
  {
    id: 330,
    name: "Men's Slim Fit Jeans - Dark Wash",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "jeans",
    filters: ["men's", "slim fit", "dark wash"]
  },
  {
    id: 331,
    name: "LED Desk Lamp with Wireless Charging",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "wireless charging", "adjustable"]
  },
  {
    id: 332,
    name: "Cat Scratching Post with Sisal Rope",
    category: "pet supplies",
    subcategory: "cat furniture",
    product_type: "scratching post",
    filters: ["cat", "sisal rope", "durable"]
  },
  {
    id: 333,
    name: "Men's Athletic Shorts 2-Pack - Black & Gray",
    category: "clothing",
    subcategory: "activewear",
    product_type: "athletic shorts",
    filters: ["men's", "2-pack", "moisture wicking"]
  },
  {
    id: 334,
    name: "Rechargeable Electric Toothbrush with 3 Modes",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["rechargeable", "3 modes", "soft bristles"]
  },
  {
    id: 335,
    name: "Bluetooth Shower Speaker Waterproof",
    category: "electronics",
    subcategory: "audio",
    product_type: "shower speaker",
    filters: ["bluetooth", "waterproof", "suction cup"]
  },
  {
    id: 336,
    name: "16oz Insulated Travel Mug with Lid",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["16oz", "insulated", "spill-proof"]
  },
  {
    id: 337,
    name: "LED Strip Lights 16ft with Remote",
    category: "home",
    subcategory: "lighting",
    product_type: "LED strip lights",
    filters: ["16ft", "remote-controlled", "multicolor"]
  },
  {
    id: 338,
    name: "Toddler Learning Table Educational Toy",
    category: "toys",
    subcategory: "educational",
    product_type: "learning table",
    filters: ["toddler", "interactive", "music"]
  },
  {
    id: 339,
    name: "Large Picnic Blanket Waterproof Foldable",
    category: "outdoor",
    subcategory: "leisure",
    product_type: "picnic blanket",
    filters: ["large", "waterproof", "foldable"]
  },
  {
    id: 340,
    name: "Smartphone Tripod with Wireless Remote",
    category: "electronics",
    subcategory: "photography",
    product_type: "tripod",
    filters: ["smartphone", "wireless remote", "extendable"]
  },
  {
    id: 341,
    name: "Women's Knit Infinity Scarf - Gray",
    category: "clothing",
    subcategory: "accessories",
    product_type: "scarf",
    filters: ["women's", "knit", "gray"]
  },
  {
    id: 342,
    name: "Men's Wool Coat Button-Up - Charcoal",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "coat",
    filters: ["men's", "wool", "charcoal"]
  },
  {
    id: 343,
    name: "Ceramic Teapot with Infuser 32oz",
    category: "kitchen",
    subcategory: "tea",
    product_type: "teapot",
    filters: ["ceramic", "infuser", "32oz"]
  },
  {
    id: 344,
    name: "Foldable Storage Ottoman with Lid",
    category: "home",
    subcategory: "storage",
    product_type: "ottoman",
    filters: ["foldable", "storage", "with lid"]
  },
  {
    id: 345,
    name: "Baby Bibs Waterproof 5-Pack with Snaps",
    category: "baby",
    subcategory: "feeding",
    product_type: "baby bibs",
    filters: ["waterproof", "5-pack", "snap closure"]
  },
  {
    id: 346,
    name: "Car Windshield Sunshade Foldable UV Protection",
    category: "automotive",
    subcategory: "accessories",
    product_type: "sunshade",
    filters: ["UV protection", "foldable", "universal fit"]
  },
  {
    id: 347,
    name: "Men's Casual Sneakers - Navy Blue",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["men's", "navy blue", "lace-up"]
  },
  {
    id: 348,
    name: "Organic Cotton Bath Towels Set of 4",
    category: "home",
    subcategory: "bath",
    product_type: "bath towels",
    filters: ["organic cotton", "set of 4", "quick-dry"]
  },
  {
    id: 349,
    name: "Stainless Steel Mixing Bowls 3-Piece",
    category: "kitchen",
    subcategory: "tools",
    product_type: "mixing bowls",
    filters: ["stainless steel", "3-piece", "non-slip base"]
  },
  {
    id: 350,
    name: "Wireless Charging Stand for iPhone & Android",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "charging stand",
    filters: ["wireless", "iPhone", "Android compatible"]
  },
  {
    id: 351,
    name: "Electric Milk Frother Handheld with Stand",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "milk frother",
    filters: ["electric", "handheld", "with stand"]
  },
  {
    id: 352,
    name: "Women's Seamless Sports Bra - Black Medium",
    category: "clothing",
    subcategory: "activewear",
    product_type: "sports bra",
    filters: ["women's", "seamless", "black", "medium"]
  },
  {
    id: 353,
    name: "Camping Lantern Rechargeable USB",
    category: "outdoor",
    subcategory: "camping",
    product_type: "lantern",
    filters: ["rechargeable", "USB", "LED"]
  },
  {
    id: 354,
    name: "Digital Meat Thermometer Instant Read",
    category: "kitchen",
    subcategory: "tools",
    product_type: "meat thermometer",
    filters: ["digital", "instant read", "water-resistant"]
  },
  {
    id: 355,
    name: "Kids Water Bottle with Straw 14oz",
    category: "home",
    subcategory: "drinkware",
    product_type: "water bottle",
    filters: ["kids", "straw", "14oz"]
  },
  {
    id: 356,
    name: "Men's Winter Gloves Touchscreen Fleece Lined",
    category: "clothing",
    subcategory: "accessories",
    product_type: "winter gloves",
    filters: ["men's", "touchscreen", "fleece lined"]
  },
  {
    id: 357,
    name: "Bluetooth Car FM Transmitter with USB Charger",
    category: "automotive",
    subcategory: "electronics",
    product_type: "FM transmitter",
    filters: ["bluetooth", "USB charger", "hands-free"]
  },
  {
    id: 358,
    name: "Adjustable Laptop Stand Aluminum Portable",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop stand",
    filters: ["adjustable", "aluminum", "portable"]
  },
  {
    id: 359,
    name: "Men's Leather Dress Belt - Brown 36",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["men's", "leather", "brown", "size 36"]
  },
  {
    id: 360,
    name: "Non-Stick Silicone Muffin Pan 12-Cup",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "muffin pan",
    filters: ["non-stick", "silicone", "12-cup"]
  },
  {
    id: 361,
    name: "Pet Grooming Brush for Cats and Dogs",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "grooming brush",
    filters: ["pet", "grooming", "for cats and dogs"]
  },
  {
    id: 362,
    name: "Adjustable Dumbbell 25lb Single",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbell",
    filters: ["adjustable", "25lb", "single"]
  },
  {
    id: 363,
    name: "Portable Folding Step Stool 9 Inch",
    category: "home",
    subcategory: "utility",
    product_type: "step stool",
    filters: ["portable", "folding", "9 inch"]
  },
  {
    id: 364,
    name: "Women's Rain Boots Mid-Calf Waterproof",
    category: "footwear",
    subcategory: "women's",
    product_type: "rain boots",
    filters: ["women's", "mid-calf", "waterproof"]
  },
  {
    id: 365,
    name: "Baby Swaddle Blankets 3-Pack Organic Cotton",
    category: "baby",
    subcategory: "bedding",
    product_type: "swaddle blankets",
    filters: ["organic cotton", "3-pack", "baby"]
  },
  {
    id: 366,
    name: "Wireless Security Camera Outdoor 1080p",
    category: "electronics",
    subcategory: "security",
    product_type: "security camera",
    filters: ["wireless", "outdoor", "1080p"]
  },
  {
    id: 367,
    name: "Stainless Steel Water Bottle 32oz Insulated",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["stainless steel", "32oz", "insulated"]
  },
  {
    id: 368,
    name: "Men's Henley Long Sleeve Shirt - Navy",
    category: "clothing",
    subcategory: "tops",
    product_type: "henley shirt",
    filters: ["men's", "long sleeve", "navy"]
  },
  {
    id: 369,
    name: "Cotton Shower Curtain 72x72 with Hooks",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower curtain",
    filters: ["cotton", "72x72", "with hooks"]
  },
  {
    id: 370,
    name: "Women’s Crossbody Bag with Zipper Pockets",
    category: "accessories",
    subcategory: "bags",
    product_type: "crossbody bag",
    filters: ["women's", "zipper pockets", "adjustable strap"]
  },
  {
    id: 371,
    name: "Garden Hose 50ft Expandable with Nozzle",
    category: "garden",
    subcategory: "watering",
    product_type: "garden hose",
    filters: ["50ft", "expandable", "with nozzle"]
  },
  {
    id: 372,
    name: "Women's High-Rise Yoga Leggings - Black",
    category: "clothing",
    subcategory: "activewear",
    product_type: "yoga leggings",
    filters: ["women's", "high-rise", "black"]
  },
  {
    id: 373,
    name: "Non-Slip Bath Mat for Tub 16x28 Gray",
    category: "home",
    subcategory: "bathroom",
    product_type: "bath mat",
    filters: ["non-slip", "gray", "16x28"]
  },
  {
    id: 374,
    name: "Cordless Electric Screwdriver Rechargeable",
    category: "tools",
    subcategory: "power tools",
    product_type: "electric screwdriver",
    filters: ["cordless", "rechargeable", "USB charging"]
  },
  {
    id: 375,
    name: "Canvas Art Wall Decor - Abstract 3-Piece Set",
    category: "home",
    subcategory: "decor",
    product_type: "canvas art",
    filters: ["abstract", "3-piece", "ready to hang"]
  },
  {
    id: 376,
    name: "Dog Harness No Pull Adjustable Medium",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog harness",
    filters: ["no pull", "adjustable", "medium"]
  },
  {
    id: 377,
    name: "Bluetooth Smart Scale Body Fat Analyzer",
    category: "health",
    subcategory: "monitoring",
    product_type: "smart scale",
    filters: ["bluetooth", "body fat", "digital"]
  },
  {
    id: 378,
    name: "Women's Knit Beanie Hat with Pom Pom",
    category: "clothing",
    subcategory: "accessories",
    product_type: "beanie",
    filters: ["women's", "knit", "pom pom"]
  },
  {
    id: 379,
    name: "Glass Food Storage Containers with Lids 5-Pack",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["glass", "with lids", "5-pack"]
  },
  {
    id: 380,
    name: "Children's Dinosaur Puzzle 60-Piece",
    category: "toys",
    subcategory: "educational",
    product_type: "puzzle",
    filters: ["children's", "dinosaur", "60-piece"]
  },
  {
    id: 381,
    name: "Men’s Baseball Cap Adjustable - Black",
    category: "clothing",
    subcategory: "accessories",
    product_type: "baseball cap",
    filters: ["men's", "adjustable", "black"]
  },
  {
    id: 382,
    name: "Portable USB Fan Clip-On Rechargeable",
    category: "electronics",
    subcategory: "personal care",
    product_type: "USB fan",
    filters: ["clip-on", "portable", "rechargeable"]
  },
  {
    id: 383,
    name: "Memory Foam Lumbar Support Cushion for Office Chair",
    category: "home",
    subcategory: "comfort",
    product_type: "lumbar cushion",
    filters: ["memory foam", "lumbar support", "adjustable strap"]
  },
  {
    id: 384,
    name: "Women's Faux Leather Jacket - Zipper Closure",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "leather jacket",
    filters: ["women's", "faux leather", "zipper closure"]
  },
  {
    id: 385,
    name: "Men's Swim Shorts Quick Dry - Blue",
    category: "clothing",
    subcategory: "swimwear",
    product_type: "swim shorts",
    filters: ["men's", "quick dry", "blue"]
  },
  {
    id: 386,
    name: "Smart LED Light Bulb Color Changing E26",
    category: "home",
    subcategory: "lighting",
    product_type: "smart bulb",
    filters: ["LED", "color changing", "E26 base"]
  },
  {
    id: 387,
    name: "Compact Umbrella Windproof Auto Open",
    category: "accessories",
    subcategory: "weather",
    product_type: "umbrella",
    filters: ["compact", "windproof", "auto open"]
  },
  {
    id: 388,
    name: "Stainless Steel French Press Coffee Maker 1L",
    category: "kitchen",
    subcategory: "coffee",
    product_type: "french press",
    filters: ["stainless steel", "1L", "insulated"]
  },
  {
    id: 389,
    name: "Toddler Learning Flash Cards Alphabet & Numbers",
    category: "toys",
    subcategory: "educational",
    product_type: "flash cards",
    filters: ["toddler", "alphabet", "numbers"]
  },
  {
    id: 390,
    name: "Wireless Charging Mouse Pad with LED Lights",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse pad",
    filters: ["wireless charging", "LED", "non-slip"]
  },
  {
    id: 391,
    name: "Non-Slip Kitchen Rugs Set of 2 - Gray",
    category: "home",
    subcategory: "flooring",
    product_type: "kitchen rugs",
    filters: ["non-slip", "set of 2", "gray"]
  },
  {
    id: 392,
    name: "Women's Denim Skirt High Waist Button Front",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "denim skirt",
    filters: ["women's", "high waist", "button front"]
  },
  {
    id: 393,
    name: "Adjustable Dumbbell Set 40lb with Storage Rack",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbell set",
    filters: ["adjustable", "40lb", "with rack"]
  },
  {
    id: 394,
    name: "Men's Graphic Tee Cotton Short Sleeve",
    category: "clothing",
    subcategory: "tops",
    product_type: "graphic tee",
    filters: ["men's", "cotton", "short sleeve"]
  },
  {
    id: 395,
    name: "Scented Soy Candle 3-Wick Lavender Vanilla",
    category: "home",
    subcategory: "decor",
    product_type: "candle",
    filters: ["scented", "soy", "lavender vanilla"]
  },
  {
    id: 396,
    name: "Women's Tote Bag Canvas with Zipper",
    category: "accessories",
    subcategory: "bags",
    product_type: "tote bag",
    filters: ["women's", "canvas", "zipper closure"]
  },
  {
    id: 397,
    name: "Electric Kettle Glass 1.7L LED Light",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "electric kettle",
    filters: ["glass", "1.7L", "LED light"]
  },
  {
    id: 398,
    name: "Men's Boxer Briefs 5-Pack Cotton Blend",
    category: "clothing",
    subcategory: "underwear",
    product_type: "boxer briefs",
    filters: ["men's", "cotton blend", "5-pack"]
  },
  {
    id: 399,
    name: "Kid's Night Light LED Moon and Stars",
    category: "home",
    subcategory: "lighting",
    product_type: "night light",
    filters: ["LED", "moon and stars", "children's"]
  },
  {
    id: 400,
    name: "Digital Kitchen Timer Magnetic Back",
    category: "kitchen",
    subcategory: "tools",
    product_type: "kitchen timer",
    filters: ["digital", "magnetic", "countdown"]
  },
  {
    id: 401,
    name: "Wireless Bluetooth Earbuds with Charging Case",
    category: "electronics",
    subcategory: "audio",
    product_type: "earbuds",
    filters: ["wireless", "bluetooth", "charging case"]
  },
  {
    id: 402,
    name: "Men's Running Shoes Lightweight Size 11",
    category: "footwear",
    subcategory: "athletic",
    product_type: "running shoes",
    filters: ["men's", "lightweight", "size 11"]
  },
  {
    id: 403,
    name: "Adjustable Office Chair Ergonomic Lumbar Support",
    category: "furniture",
    subcategory: "office",
    product_type: "office chair",
    filters: ["adjustable", "ergonomic", "lumbar support"]
  },
  {
    id: 404,
    name: "Women's Cotton Pajama Set Long Sleeve",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["women's", "cotton", "long sleeve"]
  },
  {
    id: 405,
    name: "Portable Mini Projector for Home Theater",
    category: "electronics",
    subcategory: "video",
    product_type: "projector",
    filters: ["portable", "mini", "home theater"]
  },
  {
    id: 406,
    name: "Kids Backpack Dinosaur Print for School",
    category: "bags",
    subcategory: "backpacks",
    product_type: "kids backpack",
    filters: ["dinosaur print", "school", "children's"]
  },
  {
    id: 407,
    name: "Reusable Grocery Tote Bags Foldable Set of 5",
    category: "home",
    subcategory: "storage",
    product_type: "shopping bags",
    filters: ["reusable", "foldable", "set of 5"]
  },
  {
    id: 408,
    name: "Pet Carrier Backpack for Small Dogs & Cats",
    category: "pet supplies",
    subcategory: "travel",
    product_type: "pet carrier",
    filters: ["backpack", "small pets", "breathable"]
  },
  {
    id: 409,
    name: "Electric Toothbrush Rechargeable with Timer",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "rechargeable", "timer"]
  },
  {
    id: 410,
    name: "LED Desk Lamp with USB Charging Port",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "USB port", "adjustable arm"]
  },
  {
    id: 411,
    name: "Non-Stick Baking Pan Set 3-Piece Carbon Steel",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking pan",
    filters: ["non-stick", "3-piece", "carbon steel"]
  },
  {
    id: 412,
    name: "Women's Faux Fur Slippers Indoor Size 8",
    category: "footwear",
    subcategory: "slippers",
    product_type: "slippers",
    filters: ["women's", "faux fur", "size 8"]
  },
  {
    id: 413,
    name: "Men's Fleece Hoodie Zip-Up Black Large",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "hoodie",
    filters: ["men's", "fleece", "zip-up", "black", "large"]
  },
  {
    id: 414,
    name: "Electric Hand Mixer 5-Speed with Beaters",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "hand mixer",
    filters: ["electric", "5-speed", "with beaters"]
  },
  {
    id: 415,
    name: "Yoga Mat 6mm Thick Non-Slip with Strap",
    category: "sports",
    subcategory: "fitness",
    product_type: "yoga mat",
    filters: ["6mm thick", "non-slip", "with strap"]
  },
  {
    id: 416,
    name: "Smartphone Tripod Stand with Remote Control",
    category: "electronics",
    subcategory: "camera accessories",
    product_type: "tripod",
    filters: ["smartphone", "remote control", "adjustable height"]
  },
  {
    id: 417,
    name: "Men's Chino Pants Slim Fit Khaki Size 34",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "chino pants",
    filters: ["men's", "slim fit", "khaki", "size 34"]
  },
  {
    id: 418,
    name: "Digital Alarm Clock with LED Display",
    category: "home",
    subcategory: "bedroom",
    product_type: "alarm clock",
    filters: ["digital", "LED display", "snooze function"]
  },
  {
    id: 419,
    name: "Women's Wool Scarf Winter Oversized Plaid",
    category: "clothing",
    subcategory: "accessories",
    product_type: "scarf",
    filters: ["women's", "wool", "oversized", "plaid"]
  },
  {
    id: 420,
    name: "Insulated Lunch Bag for Work Leakproof",
    category: "home",
    subcategory: "storage",
    product_type: "lunch bag",
    filters: ["insulated", "leakproof", "for work"]
  },
  {
    id: 421,
    name: "Adjustable TV Wall Mount Bracket 32-65 Inch",
    category: "electronics",
    subcategory: "mounts",
    product_type: "TV mount",
    filters: ["adjustable", "32-65 inch", "wall bracket"]
  },
  {
    id: 422,
    name: "Rechargeable Flashlight 1000 Lumens Waterproof",
    category: "tools",
    subcategory: "lighting",
    product_type: "flashlight",
    filters: ["rechargeable", "1000 lumens", "waterproof"]
  },
  {
    id: 423,
    name: "Men's Leather Wallet RFID Blocking Bifold",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["men's", "leather", "RFID", "bifold"]
  },
  {
    id: 424,
    name: "Cordless Handheld Vacuum Cleaner Lightweight",
    category: "home",
    subcategory: "cleaning",
    product_type: "handheld vacuum",
    filters: ["cordless", "lightweight", "rechargeable"]
  },
  {
    id: 425,
    name: "Women's Maxi Dress Floral Print Summer",
    category: "clothing",
    subcategory: "dresses",
    product_type: "maxi dress",
    filters: ["women's", "floral print", "summer"]
  },
  {
    id: 426,
    name: "Children's Art Easel Double-Sided with Paper Roll",
    category: "toys",
    subcategory: "creative play",
    product_type: "art easel",
    filters: ["children's", "double-sided", "paper roll"]
  },
  {
    id: 427,
    name: "Cat Scratching Post with Toy Ball",
    category: "pet supplies",
    subcategory: "cat accessories",
    product_type: "scratching post",
    filters: ["cat", "toy ball", "sturdy base"]
  },
  {
    id: 428,
    name: "Men’s Thermal Underwear Set Long Sleeve",
    category: "clothing",
    subcategory: "underwear",
    product_type: "thermal underwear",
    filters: ["men's", "thermal", "long sleeve"]
  },
  {
    id: 429,
    name: "Portable Picnic Blanket Waterproof Foldable",
    category: "outdoor",
    subcategory: "camping",
    product_type: "picnic blanket",
    filters: ["waterproof", "foldable", "portable"]
  },
  {
    id: 430,
    name: "Wireless Gaming Mouse RGB Lighting",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "gaming mouse",
    filters: ["wireless", "RGB", "programmable buttons"]
  },
  {
    id: 431,
    name: "Women's Tote Purse Vegan Leather Beige",
    category: "accessories",
    subcategory: "bags",
    product_type: "tote purse",
    filters: ["women's", "vegan leather", "beige"]
  },
  {
    id: 432,
    name: "Indoor Plant Pot Ceramic 6 Inch Drainage",
    category: "home",
    subcategory: "decor",
    product_type: "plant pot",
    filters: ["ceramic", "6 inch", "with drainage"]
  },
  {
    id: 433,
    name: "Men's Canvas Sneakers Low-Top Navy Size 10",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["men's", "low-top", "navy", "size 10"]
  },
  {
    id: 434,
    name: "Baby Diaper Bag Backpack Waterproof",
    category: "baby",
    subcategory: "travel gear",
    product_type: "diaper bag",
    filters: ["backpack", "waterproof", "multiple pockets"]
  },
  {
    id: 435,
    name: "Silicone Baking Mats Non-Stick Set of 3",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mats",
    filters: ["silicone", "non-stick", "set of 3"]
  },
  {
    id: 436,
    name: "Women's Sandals Flat Open Toe Size 7",
    category: "footwear",
    subcategory: "casual",
    product_type: "sandals",
    filters: ["women's", "flat", "open toe", "size 7"]
  },
  {
    id: 437,
    name: "Rechargeable Headlamp LED Waterproof Adjustable",
    category: "tools",
    subcategory: "lighting",
    product_type: "headlamp",
    filters: ["rechargeable", "LED", "adjustable strap"]
  },
  {
    id: 438,
    name: "Wireless Bluetooth Keyboard for Tablets",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "keyboard",
    filters: ["wireless", "bluetooth", "tablet compatible"]
  },
  {
    id: 439,
    name: "Men's Crew Neck T-Shirt 3-Pack Gray",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["men's", "crew neck", "3-pack", "gray"]
  },
  {
    id: 440,
    name: "Folding Drying Rack for Laundry White Steel",
    category: "home",
    subcategory: "laundry",
    product_type: "drying rack",
    filters: ["folding", "white", "steel frame"]
  },
  {
    id: 441,
    name: "Women's Sports Watch Digital Waterproof",
    category: "accessories",
    subcategory: "watches",
    product_type: "sports watch",
    filters: ["women's", "digital", "waterproof"]
  },
  {
    id: 442,
    name: "Silicone Baby Bibs with Food Catcher 2-Pack",
    category: "baby",
    subcategory: "feeding",
    product_type: "baby bibs",
    filters: ["silicone", "food catcher", "2-pack"]
  },
  {
    id: 443,
    name: "Electric Rice Cooker 6-Cup with Steamer",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "rice cooker",
    filters: ["electric", "6-cup", "with steamer"]
  },
  {
    id: 444,
    name: "Men's Athletic Socks Cushioned 6-Pack",
    category: "clothing",
    subcategory: "socks",
    product_type: "athletic socks",
    filters: ["men's", "cushioned", "6-pack"]
  },
  {
    id: 445,
    name: "Car Phone Holder Dashboard and Windshield Mount",
    category: "automotive",
    subcategory: "phone accessories",
    product_type: "phone holder",
    filters: ["dashboard", "windshield", "adjustable arm"]
  },
  {
    id: 446,
    name: "Women's Button Down Shirt Linen White",
    category: "clothing",
    subcategory: "tops",
    product_type: "button down shirt",
    filters: ["women's", "linen", "white"]
  },
  {
    id: 447,
    name: "Adjustable Monitor Stand with Drawer",
    category: "home",
    subcategory: "office",
    product_type: "monitor stand",
    filters: ["adjustable", "with drawer", "ergonomic"]
  },
  {
    id: 448,
    name: "Men's Puffer Jacket Lightweight Hooded",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "puffer jacket",
    filters: ["men's", "lightweight", "hooded"]
  },
  {
    id: 449,
    name: "Microwave Plate Cover BPA-Free Clear",
    category: "kitchen",
    subcategory: "tools",
    product_type: "microwave cover",
    filters: ["BPA-free", "clear", "vented"]
  },
  {
    id: 450,
    name: "Dog Treat Pouch Training Bag with Clip",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "training pouch",
    filters: ["dog", "clip-on", "treat storage"]
  },
  {
    id: 451,
    name: "Stainless Steel Kitchen Tongs with Silicone Tips",
    category: "kitchen",
    subcategory: "tools",
    product_type: "tongs",
    filters: ["stainless steel", "silicone tips", "heat resistant"]
  },
  {
    id: 452,
    name: "Women's Sports Bra High Impact Medium Size",
    category: "clothing",
    subcategory: "activewear",
    product_type: "sports bra",
    filters: ["women's", "high impact", "medium"]
  },
  {
    id: 453,
    name: "Bluetooth Shower Speaker Waterproof with Suction Cup",
    category: "electronics",
    subcategory: "audio",
    product_type: "shower speaker",
    filters: ["bluetooth", "waterproof", "suction cup"]
  },
  {
    id: 454,
    name: "Ceramic Soap Dispenser for Bathroom Counter",
    category: "home",
    subcategory: "bathroom",
    product_type: "soap dispenser",
    filters: ["ceramic", "refillable", "countertop"]
  },
  {
    id: 455,
    name: "Portable Camping Stove with Butane Adapter",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "camping stove",
    filters: ["portable", "butane adapter", "compact"]
  },
  {
    id: 456,
    name: "Women's Slip-On Canvas Shoes Size 7",
    category: "footwear",
    subcategory: "casual",
    product_type: "canvas shoes",
    filters: ["women's", "slip-on", "size 7"]
  },
  {
    id: 457,
    name: "Nonstick Muffin Pan 12-Cup Carbon Steel",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "muffin pan",
    filters: ["nonstick", "12-cup", "carbon steel"]
  },
  {
    id: 458,
    name: "Adjustable Resistance Bands for Workout Set of 5",
    category: "sports",
    subcategory: "fitness",
    product_type: "resistance bands",
    filters: ["adjustable", "set of 5", "home workout"]
  },
  {
    id: 459,
    name: "Men's Windbreaker Jacket Lightweight Waterproof",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "windbreaker",
    filters: ["men's", "lightweight", "waterproof"]
  },
  {
    id: 460,
    name: "LED Strip Lights 32ft Color Changing with Remote",
    category: "home",
    subcategory: "lighting",
    product_type: "LED strip lights",
    filters: ["color changing", "remote controlled", "32ft"]
  },
  {
    id: 461,
    name: "Wireless Charging Pad Fast Charge 15W",
    category: "electronics",
    subcategory: "charging",
    product_type: "wireless charger",
    filters: ["15W", "fast charge", "USB-C"]
  },
  {
    id: 462,
    name: "Toddler Bath Toy Suction Wall Spinner Set",
    category: "toys",
    subcategory: "bath",
    product_type: "bath toy",
    filters: ["toddler", "suction", "spinner set"]
  },
  {
    id: 463,
    name: "Kitchen Drawer Organizer for Utensils Bamboo",
    category: "home",
    subcategory: "storage",
    product_type: "drawer organizer",
    filters: ["bamboo", "adjustable", "utensils"]
  },
  {
    id: 464,
    name: "Women's Yoga Pants with Pockets High Waist",
    category: "clothing",
    subcategory: "activewear",
    product_type: "yoga pants",
    filters: ["women's", "pockets", "high waist"]
  },
  {
    id: 465,
    name: "Outdoor Garden Hose 50ft Expandable with Nozzle",
    category: "garden",
    subcategory: "watering",
    product_type: "garden hose",
    filters: ["50ft", "expandable", "with nozzle"]
  },
  {
    id: 466,
    name: "Men's Leather Belt Adjustable Black Size 36",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["men's", "leather", "black", "size 36"]
  },
  {
    id: 467,
    name: "Baby Washcloths Soft Cotton 10-Pack",
    category: "baby",
    subcategory: "bath",
    product_type: "washcloths",
    filters: ["cotton", "soft", "10-pack"]
  },
  {
    id: 468,
    name: "Cordless Electric Screwdriver with USB Charging",
    category: "tools",
    subcategory: "power tools",
    product_type: "electric screwdriver",
    filters: ["cordless", "USB charging", "compact"]
  },
  {
    id: 469,
    name: "Women's Rain Boots Mid Calf Size 8 Black",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "rain boots",
    filters: ["women's", "black", "mid calf", "size 8"]
  },
  {
    id: 470,
    name: "Foldable Travel Duffel Bag Lightweight Waterproof",
    category: "bags",
    subcategory: "travel",
    product_type: "duffel bag",
    filters: ["foldable", "waterproof", "lightweight"]
  },
  {
    id: 471,
    name: "Men’s Henley Shirt Long Sleeve Cotton Navy",
    category: "clothing",
    subcategory: "tops",
    product_type: "henley shirt",
    filters: ["men's", "long sleeve", "cotton", "navy"]
  },
  {
    id: 472,
    name: "Ceramic Coffee Mug with Lid and Spoon",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "coffee mug",
    filters: ["ceramic", "with lid", "with spoon"]
  },
  {
    id: 473,
    name: "Wireless Over-Ear Headphones Noise Cancelling",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["wireless", "over-ear", "noise cancelling"]
  },
  {
    id: 474,
    name: "Adjustable Baby High Chair with Tray Foldable",
    category: "baby",
    subcategory: "feeding",
    product_type: "high chair",
    filters: ["adjustable", "with tray", "foldable"]
  },
  {
    id: 475,
    name: "Digital Kitchen Timer Magnetic LCD Display",
    category: "kitchen",
    subcategory: "tools",
    product_type: "kitchen timer",
    filters: ["digital", "magnetic", "LCD display"]
  },
  {
    id: 476,
    name: "Women's Knitted Infinity Scarf Winter Warm",
    category: "clothing",
    subcategory: "accessories",
    product_type: "scarf",
    filters: ["women's", "knitted", "winter"]
  },
  {
    id: 477,
    name: "Rechargeable Book Light Clip-On Adjustable",
    category: "home",
    subcategory: "lighting",
    product_type: "book light",
    filters: ["rechargeable", "clip-on", "adjustable"]
  },
  {
    id: 478,
    name: "Cat Litter Mat Waterproof Easy Clean Large",
    category: "pet supplies",
    subcategory: "cat accessories",
    product_type: "litter mat",
    filters: ["waterproof", "easy clean", "large"]
  },
  {
    id: 479,
    name: "Toddler Sippy Cups Leak-Proof 2-Pack",
    category: "baby",
    subcategory: "feeding",
    product_type: "sippy cup",
    filters: ["leak-proof", "toddler", "2-pack"]
  },
  {
    id: 480,
    name: "Adjustable Dumbbells 25lb Pair with Stand",
    category: "sports",
    subcategory: "strength training",
    product_type: "dumbbells",
    filters: ["adjustable", "25lb", "with stand"]
  },
  {
    id: 481,
    name: "Memory Foam Travel Pillow Neck Support",
    category: "travel",
    subcategory: "accessories",
    product_type: "travel pillow",
    filters: ["memory foam", "neck support", "washable cover"]
  },
  {
    id: 482,
    name: "Men's Trench Coat Double Breasted Tan",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "trench coat",
    filters: ["men's", "double breasted", "tan"]
  },
  {
    id: 483,
    name: "Women's Leggings Fleece Lined Black Medium",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "leggings",
    filters: ["women's", "fleece lined", "black", "medium"]
  },
  {
    id: 484,
    name: "Electric Wine Opener with Foil Cutter",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "wine opener",
    filters: ["electric", "with foil cutter", "rechargeable"]
  },
  {
    id: 485,
    name: "Solar Garden Lights Outdoor Waterproof 8-Pack",
    category: "garden",
    subcategory: "lighting",
    product_type: "solar lights",
    filters: ["solar", "outdoor", "8-pack"]
  },
  {
    id: 486,
    name: "Bamboo Cutting Board Set with Juice Groove",
    category: "kitchen",
    subcategory: "tools",
    product_type: "cutting board",
    filters: ["bamboo", "juice groove", "set of 3"]
  },
  {
    id: 487,
    name: "Foldable Storage Bins Fabric with Lids 4-Pack",
    category: "home",
    subcategory: "storage",
    product_type: "storage bins",
    filters: ["foldable", "fabric", "4-pack"]
  },
  {
    id: 488,
    name: "Women's Crop Top Ribbed Stretch Sleeveless",
    category: "clothing",
    subcategory: "tops",
    product_type: "crop top",
    filters: ["women's", "ribbed", "stretch", "sleeveless"]
  },
  {
    id: 489,
    name: "Laptop Sleeve Case 15.6 Inch Water Resistant",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop sleeve",
    filters: ["15.6 inch", "water resistant", "zippered"]
  },
  {
    id: 490,
    name: "Men's Flip Flops Memory Foam Navy Size 10",
    category: "footwear",
    subcategory: "casual",
    product_type: "flip flops",
    filters: ["men's", "memory foam", "navy", "size 10"]
  },
  {
    id: 491,
    name: "Wall Clock Silent Quartz 12 Inch Modern",
    category: "home",
    subcategory: "decor",
    product_type: "wall clock",
    filters: ["silent", "quartz", "12 inch"]
  },
  {
    id: 492,
    name: "USB Desk Fan Mini Adjustable Speed Black",
    category: "electronics",
    subcategory: "cooling",
    product_type: "desk fan",
    filters: ["USB powered", "mini", "adjustable speed"]
  },
  {
    id: 493,
    name: "Waterproof Picnic Blanket Foldable Carry Handle",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "picnic blanket",
    filters: ["waterproof", "foldable", "with handle"]
  },
  {
    id: 494,
    name: "Women's Cardigan Long Open Front Knit Beige",
    category: "clothing",
    subcategory: "tops",
    product_type: "cardigan",
    filters: ["women's", "open front", "beige", "knit"]
  },
  {
    id: 495,
    name: "Electric Milk Frother Handheld Battery Operated",
    category: "kitchen",
    subcategory: "tools",
    product_type: "milk frother",
    filters: ["electric", "handheld", "battery operated"]
  },
  {
    id: 496,
    name: "Dog Bed Washable Plush Orthopedic Small",
    category: "pet supplies",
    subcategory: "dog beds",
    product_type: "dog bed",
    filters: ["washable", "plush", "small"]
  },
  {
    id: 497,
    name: "Men’s Graphic T-Shirt 100% Cotton White",
    category: "clothing",
    subcategory: "tops",
    product_type: "t-shirt",
    filters: ["men's", "graphic print", "white", "cotton"]
  },
  {
    id: 498,
    name: "Non-Slip Bathtub Mat PVC Machine Washable",
    category: "home",
    subcategory: "bathroom",
    product_type: "bath mat",
    filters: ["non-slip", "PVC", "machine washable"]
  },
  {
    id: 499,
    name: "Adjustable Bike Helmet for Adults Reflective",
    category: "sports",
    subcategory: "cycling",
    product_type: "bike helmet",
    filters: ["adjustable", "adult", "reflective"]
  },
  {
    id: 500,
    name: "Kids Umbrella with Dinosaur Print Auto Open",
    category: "accessories",
    subcategory: "weather",
    product_type: "umbrella",
    filters: ["kids", "dinosaur print", "auto open"]
  },
  {
    id: 501,
    name: "Women’s Faux Leather Tote Bag with Zipper",
    category: "bags",
    subcategory: "handbags",
    product_type: "tote bag",
    filters: ["women's", "faux leather", "zipper"]
  },
  {
    id: 502,
    name: "Digital Bathroom Scale Glass Top with Backlight",
    category: "home",
    subcategory: "bathroom",
    product_type: "bathroom scale",
    filters: ["digital", "glass top", "backlit display"]
  },
  {
    id: 503,
    name: "Camping Lantern Rechargeable 1000 Lumens",
    category: "outdoor",
    subcategory: "lighting",
    product_type: "lantern",
    filters: ["camping", "rechargeable", "1000 lumens"]
  },
  {
    id: 504,
    name: "Women's Running Shorts with Liner Pink Small",
    category: "clothing",
    subcategory: "activewear",
    product_type: "running shorts",
    filters: ["women's", "with liner", "small"]
  },
  {
    id: 505,
    name: "Compact Hair Dryer Travel Size with Diffuser",
    category: "beauty",
    subcategory: "hair care",
    product_type: "hair dryer",
    filters: ["compact", "travel size", "diffuser"]
  },
  {
    id: 506,
    name: "Laptop Stand Adjustable Aluminum Portable",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop stand",
    filters: ["adjustable", "aluminum", "portable"]
  },
  {
    id: 507,
    name: "Nonstick Griddle Pan for Stovetop 11 Inch",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "griddle pan",
    filters: ["nonstick", "11 inch", "stovetop compatible"]
  },
  {
    id: 508,
    name: "Kids Night Light Star Projector Rechargeable",
    category: "home",
    subcategory: "lighting",
    product_type: "night light",
    filters: ["kids", "star projector", "rechargeable"]
  },
  {
    id: 509,
    name: "Men’s Stretch Dress Pants Slim Fit Charcoal",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "dress pants",
    filters: ["men's", "slim fit", "charcoal"]
  },
  {
    id: 510,
    name: "Reusable Grocery Bags Foldable Set of 6",
    category: "home",
    subcategory: "storage",
    product_type: "grocery bags",
    filters: ["reusable", "foldable", "set of 6"]
  },
  {
    id: 511,
    name: "Silicone Baking Mats Nonstick Set of 2",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["silicone", "nonstick", "set of 2"]
  },
  {
    id: 512,
    name: "Wireless Doorbell Kit with LED Indicator",
    category: "home",
    subcategory: "security",
    product_type: "doorbell",
    filters: ["wireless", "LED indicator", "kit"]
  },
  {
    id: 513,
    name: "Cat Scratching Post with Hanging Toy",
    category: "pet supplies",
    subcategory: "cat furniture",
    product_type: "scratching post",
    filters: ["hanging toy", "durable", "vertical"]
  },
  {
    id: 514,
    name: "Women’s Quilted Puffer Vest Lightweight",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "puffer vest",
    filters: ["women's", "lightweight", "quilted"]
  },
  {
    id: 515,
    name: "Men’s Casual Sneakers Canvas Lace-Up Gray",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["men's", "canvas", "gray"]
  },
  {
    id: 516,
    name: "Electric Toothbrush Travel Case Included",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["electric", "with case", "rechargeable"]
  },
  {
    id: 517,
    name: "Foldable Laptop Desk with Cup Holder",
    category: "furniture",
    subcategory: "office",
    product_type: "lap desk",
    filters: ["foldable", "with cup holder", "portable"]
  },
  {
    id: 518,
    name: "Toddler Training Pants 4T Cotton 5-Pack",
    category: "baby",
    subcategory: "clothing",
    product_type: "training pants",
    filters: ["4T", "cotton", "5-pack"]
  },
  {
    id: 519,
    name: "Wall Mounted Spice Rack 4-Tier Black Metal",
    category: "kitchen",
    subcategory: "storage",
    product_type: "spice rack",
    filters: ["wall mounted", "4-tier", "black"]
  },
  {
    id: 520,
    name: "LED Desk Lamp Touch Control 5 Brightness Levels",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "touch control", "adjustable"]
  },
  {
    id: 521,
    name: "Baby Diaper Caddy Organizer with Handles",
    category: "baby",
    subcategory: "storage",
    product_type: "diaper caddy",
    filters: ["with handles", "portable", "felt"]
  },
  {
    id: 522,
    name: "Men's Lightweight Hoodie Pullover Navy",
    category: "clothing",
    subcategory: "tops",
    product_type: "hoodie",
    filters: ["men's", "lightweight", "pullover"]
  },
  {
    id: 523,
    name: "Non-Slip Yoga Socks with Grips for Women",
    category: "clothing",
    subcategory: "socks",
    product_type: "yoga socks",
    filters: ["non-slip", "with grips", "women's"]
  },
  {
    id: 524,
    name: "Kitchen Trash Can with Step Pedal 13 Gallon",
    category: "home",
    subcategory: "cleaning",
    product_type: "trash can",
    filters: ["13 gallon", "step pedal", "kitchen"]
  },
  {
    id: 525,
    name: "Adjustable Tablet Stand for Desk Aluminum",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "tablet stand",
    filters: ["adjustable", "aluminum", "desk"]
  },
  {
    id: 526,
    name: "Dog Harness with Reflective Straps Size Medium",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog harness",
    filters: ["reflective", "medium", "adjustable"]
  },
  {
    id: 527,
    name: "Stainless Steel Measuring Cups and Spoons Set",
    category: "kitchen",
    subcategory: "tools",
    product_type: "measuring set",
    filters: ["stainless steel", "set", "with ring"]
  },
  {
    id: 528,
    name: "Men’s Waterproof Hiking Pants Zipper Pockets",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "hiking pants",
    filters: ["men's", "waterproof", "zipper pockets"]
  },
  {
    id: 529,
    name: "Insulated Lunch Box for Kids with Strap",
    category: "home",
    subcategory: "storage",
    product_type: "lunch box",
    filters: ["insulated", "for kids", "with strap"]
  },
  {
    id: 530,
    name: "Portable Neck Fan USB Rechargeable Hands-Free",
    category: "electronics",
    subcategory: "cooling",
    product_type: "neck fan",
    filters: ["portable", "USB rechargeable", "hands-free"]
  },
  {
    id: 531,
    name: "Women’s Satin Robe Knee Length Tie Waist",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "robe",
    filters: ["women's", "satin", "tie waist"]
  },
  {
    id: 532,
    name: "Double Walled Glass Coffee Mug Set of 2",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "coffee mug",
    filters: ["double walled", "glass", "set of 2"]
  },
  {
    id: 533,
    name: "Outdoor Patio Furniture Cover Waterproof",
    category: "outdoor",
    subcategory: "covers",
    product_type: "furniture cover",
    filters: ["waterproof", "UV resistant", "tie down"]
  },
  {
    id: 534,
    name: "Reusable Ice Packs for Lunch Boxes Slim Set of 4",
    category: "home",
    subcategory: "kitchen accessories",
    product_type: "ice pack",
    filters: ["reusable", "slim", "set of 4"]
  },
  {
    id: 535,
    name: "Men’s Crewneck Sweatshirt Fleece Lined Black",
    category: "clothing",
    subcategory: "tops",
    product_type: "sweatshirt",
    filters: ["men's", "fleece lined", "black"]
  },
  {
    id: 536,
    name: "Over the Door Shoe Organizer 24 Pockets Clear",
    category: "home",
    subcategory: "storage",
    product_type: "shoe organizer",
    filters: ["over the door", "24 pockets", "clear"]
  },
  {
    id: 537,
    name: "Foldable Camping Chair with Cup Holder Blue",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "camping chair",
    filters: ["foldable", "cup holder", "blue"]
  },
  {
    id: 538,
    name: "Women’s Maternity Leggings Over Belly Black",
    category: "clothing",
    subcategory: "maternity",
    product_type: "leggings",
    filters: ["over belly", "stretchy", "black"]
  },
  {
    id: 539,
    name: "Indoor Plant Stand 3-Tier Metal Black",
    category: "home",
    subcategory: "decor",
    product_type: "plant stand",
    filters: ["3-tier", "metal", "black"]
  },
  {
    id: 540,
    name: "Smart LED Light Bulb Color Changing Wi-Fi",
    category: "electronics",
    subcategory: "smart home",
    product_type: "smart bulb",
    filters: ["color changing", "Wi-Fi", "E26"]
  },
  {
    id: 541,
    name: "Baby Hooded Towel Organic Cotton Gray",
    category: "baby",
    subcategory: "bath",
    product_type: "hooded towel",
    filters: ["organic cotton", "hooded", "gray"]
  },
  {
    id: 542,
    name: "Men’s Slip-On Loafers Casual Lightweight",
    category: "footwear",
    subcategory: "casual",
    product_type: "loafers",
    filters: ["men's", "slip-on", "lightweight"]
  },
  {
    id: 543,
    name: "Wall Calendar 2025 Monthly Planner Spiral Bound",
    category: "office",
    subcategory: "organization",
    product_type: "calendar",
    filters: ["monthly", "spiral bound", "2025"]
  },
  {
    id: 544,
    name: "Women's Denim Jacket Distressed Light Wash",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "denim jacket",
    filters: ["women's", "distressed", "light wash"]
  },
  {
    id: 545,
    name: "Expandable Drawer Dividers Bamboo Set of 4",
    category: "home",
    subcategory: "storage",
    product_type: "drawer divider",
    filters: ["expandable", "bamboo", "set of 4"]
  },
  {
    id: 546,
    name: "Bluetooth Sleep Headphones Eye Mask",
    category: "electronics",
    subcategory: "audio",
    product_type: "sleep headphones",
    filters: ["bluetooth", "eye mask", "soft fabric"]
  },
  {
    id: 547,
    name: "Electric Kettle Stainless Steel 1.7L Auto Shut-Off",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "electric kettle",
    filters: ["stainless steel", "1.7L", "auto shut-off"]
  },
  {
    id: 548,
    name: "Women’s Faux Fur Slippers Memory Foam",
    category: "footwear",
    subcategory: "indoor",
    product_type: "slippers",
    filters: ["women's", "faux fur", "memory foam"]
  },
  {
    id: 549,
    name: "LED Makeup Mirror with Magnification and Lights",
    category: "beauty",
    subcategory: "tools",
    product_type: "makeup mirror",
    filters: ["LED", "magnification", "adjustable"]
  },
  {
    id: 550,
    name: "Pet Hair Remover Roller Reusable for Furniture",
    category: "home",
    subcategory: "cleaning",
    product_type: "hair remover",
    filters: ["pet hair", "reusable", "for furniture"]
  },
  {
    id: 551,
    name: "Men’s Waterproof Hiking Boots Leather Size 10",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "hiking boots",
    filters: ["men's", "waterproof", "leather", "size 10"]
  },
  {
    id: 552,
    name: "Glass Food Storage Containers with Lids Set of 8",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["glass", "with lids", "set of 8"]
  },
  {
    id: 553,
    name: "Travel Toiletry Bag Hanging with Compartments",
    category: "travel",
    subcategory: "accessories",
    product_type: "toiletry bag",
    filters: ["hanging", "compartments", "water-resistant"]
  },
  {
    id: 554,
    name: "Electric Wine Opener with Foil Cutter",
    category: "kitchen",
    subcategory: "barware",
    product_type: "wine opener",
    filters: ["electric", "with foil cutter", "battery operated"]
  },
  {
    id: 555,
    name: "Children’s Drawing Tablet LCD Reusable 8.5 Inch",
    category: "electronics",
    subcategory: "educational",
    product_type: "drawing tablet",
    filters: ["children", "LCD", "8.5 inch"]
  },
  {
    id: 556,
    name: "Weighted Blanket Queen Size 15lbs Gray",
    category: "home",
    subcategory: "bedding",
    product_type: "weighted blanket",
    filters: ["queen size", "15lbs", "gray"]
  },
  {
    id: 557,
    name: "Men’s Compression Shorts for Running Black",
    category: "clothing",
    subcategory: "activewear",
    product_type: "compression shorts",
    filters: ["men's", "running", "black"]
  },
  {
    id: 558,
    name: "Bamboo Cheese Board with Slide-Out Drawer",
    category: "kitchen",
    subcategory: "serveware",
    product_type: "cheese board",
    filters: ["bamboo", "with drawer", "cheese knives included"]
  },
  {
    id: 559,
    name: "Baby Bottle Warmer Fast Heating Auto Shut-Off",
    category: "baby",
    subcategory: "feeding",
    product_type: "bottle warmer",
    filters: ["fast heating", "auto shut-off", "BPA-free"]
  },
  {
    id: 560,
    name: "Yoga Wheel Back Roller for Stretching",
    category: "sports",
    subcategory: "yoga",
    product_type: "yoga wheel",
    filters: ["stretching", "back support", "foam padding"]
  },
  {
    id: 561,
    name: "Wireless Charging Pad for iPhone and AirPods",
    category: "electronics",
    subcategory: "charging",
    product_type: "charging pad",
    filters: ["wireless", "iPhone", "AirPods compatible"]
  },
  {
    id: 562,
    name: "Dog Treat Pouch with Waste Bag Dispenser",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "treat pouch",
    filters: ["with dispenser", "adjustable strap", "training"]
  },
  {
    id: 563,
    name: "Women’s High Waist Biker Shorts Pocket Black",
    category: "clothing",
    subcategory: "activewear",
    product_type: "biker shorts",
    filters: ["high waist", "with pocket", "black"]
  },
  {
    id: 564,
    name: "Cordless Electric Screwdriver Rechargeable USB",
    category: "tools",
    subcategory: "power tools",
    product_type: "screwdriver",
    filters: ["cordless", "USB rechargeable", "lightweight"]
  },
  {
    id: 565,
    name: "Inflatable Pool Float Lounge Chair with Cup Holders",
    category: "outdoor",
    subcategory: "pool gear",
    product_type: "pool float",
    filters: ["inflatable", "lounge", "with cup holders"]
  },
  {
    id: 566,
    name: "Kitchen Towel Set Cotton Absorbent Pack of 6",
    category: "kitchen",
    subcategory: "textiles",
    product_type: "kitchen towels",
    filters: ["cotton", "absorbent", "pack of 6"]
  },
  {
    id: 567,
    name: "Women’s Long Sleeve Pajama Set Soft Cotton",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["long sleeve", "cotton", "women's"]
  },
  {
    id: 568,
    name: "Mesh Laundry Bags Set of 5 Zippered",
    category: "home",
    subcategory: "laundry",
    product_type: "laundry bags",
    filters: ["mesh", "zippered", "set of 5"]
  },
  {
    id: 569,
    name: "Toddler Bed Rail Guard Foldable Safety Rail",
    category: "baby",
    subcategory: "furniture",
    product_type: "bed rail",
    filters: ["toddler", "foldable", "safety"]
  },
  {
    id: 570,
    name: "Women’s Crossbody Bag with RFID Blocking",
    category: "bags",
    subcategory: "handbags",
    product_type: "crossbody bag",
    filters: ["women's", "RFID blocking", "adjustable strap"]
  },
  {
    id: 571,
    name: "Electric Hand Mixer 5 Speed Stainless Beaters",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "hand mixer",
    filters: ["electric", "5 speed", "stainless steel beaters"]
  },
  {
    id: 572,
    name: "Adjustable Dumbbell Set for Home Gym 40lbs",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbells",
    filters: ["adjustable", "40lbs", "home gym"]
  },
  {
    id: 573,
    name: "Men’s Wool Winter Gloves Touchscreen Compatible",
    category: "clothing",
    subcategory: "accessories",
    product_type: "gloves",
    filters: ["wool", "touchscreen", "men's"]
  },
  {
    id: 574,
    name: "LED Closet Light Motion Sensor Rechargeable",
    category: "home",
    subcategory: "lighting",
    product_type: "closet light",
    filters: ["LED", "motion sensor", "rechargeable"]
  },
  {
    id: 575,
    name: "Foldable Suitcase Luggage with Spinner Wheels",
    category: "travel",
    subcategory: "luggage",
    product_type: "suitcase",
    filters: ["foldable", "spinner wheels", "lightweight"]
  },
  {
    id: 576,
    name: "Ceramic Planter Pot Set Indoor White Matte",
    category: "garden",
    subcategory: "planters",
    product_type: "planter",
    filters: ["ceramic", "set", "white"]
  },
  {
    id: 577,
    name: "Wireless Gaming Mouse RGB 6 Buttons USB",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "gaming mouse",
    filters: ["wireless", "RGB", "USB"]
  },
  {
    id: 578,
    name: "Nonstick Cake Pan 9x13 Inch with Lid",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "cake pan",
    filters: ["nonstick", "9x13 inch", "with lid"]
  },
  {
    id: 579,
    name: "Kids Water Bottle with Straw and Handle 12oz",
    category: "home",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["kids", "with straw", "12oz"]
  },
  {
    id: 580,
    name: "Women’s Fleece Joggers with Drawstring Gray",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "joggers",
    filters: ["women's", "fleece", "gray"]
  },
  {
    id: 581,
    name: "Smart Plug Wi-Fi Alexa Compatible 2-Pack",
    category: "electronics",
    subcategory: "smart home",
    product_type: "smart plug",
    filters: ["Wi-Fi", "Alexa compatible", "2-pack"]
  },
  {
    id: 582,
    name: "Portable Air Compressor Tire Inflator 12V",
    category: "automotive",
    subcategory: "tools",
    product_type: "air compressor",
    filters: ["portable", "tire inflator", "12V"]
  },
  {
    id: 583,
    name: "Women’s Wool Coat Double Breasted Camel",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "wool coat",
    filters: ["women's", "double breasted", "camel"]
  },
  {
    id: 584,
    name: "USB C Hub Adapter 6-in-1 with HDMI and SD Slot",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "USB hub",
    filters: ["USB-C", "HDMI", "SD slot"]
  },
  {
    id: 585,
    name: "Stainless Steel Shower Caddy Corner Rack 3-Tier",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower caddy",
    filters: ["stainless steel", "corner", "3-tier"]
  },
  {
    id: 586,
    name: "Insulated Cooler Backpack 30 Can Capacity",
    category: "outdoor",
    subcategory: "coolers",
    product_type: "cooler backpack",
    filters: ["insulated", "30 can", "backpack"]
  },
  {
    id: 587,
    name: "Children’s Alarm Clock with Night Light Bunny",
    category: "home",
    subcategory: "decor",
    product_type: "alarm clock",
    filters: ["children's", "night light", "bunny"]
  },
  {
    id: 588,
    name: "Men’s Quick Dry Swim Trunks with Pockets",
    category: "clothing",
    subcategory: "swimwear",
    product_type: "swim trunks",
    filters: ["men's", "quick dry", "pockets"]
  },
  {
    id: 589,
    name: "Handheld Milk Frother Battery Operated Silver",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "milk frother",
    filters: ["handheld", "battery operated", "silver"]
  },
  {
    id: 590,
    name: "Women’s Faux Wrap Dress Floral Midi Sleeveless",
    category: "clothing",
    subcategory: "dresses",
    product_type: "wrap dress",
    filters: ["faux wrap", "floral", "midi"]
  },
  {
    id: 591,
    name: "Folding Utility Wagon with Telescoping Handle",
    category: "outdoor",
    subcategory: "garden tools",
    product_type: "utility wagon",
    filters: ["folding", "telescoping handle", "heavy duty"]
  },
  {
    id: 592,
    name: "Wall Mounted Dry Erase Board 36x24 Inch",
    category: "office",
    subcategory: "supplies",
    product_type: "whiteboard",
    filters: ["wall mounted", "36x24 inch", "dry erase"]
  },
  {
    id: 593,
    name: "Silicone Ice Cube Tray with Lid Set of 2",
    category: "kitchen",
    subcategory: "tools",
    product_type: "ice tray",
    filters: ["silicone", "with lid", "set of 2"]
  },
  {
    id: 594,
    name: "Men’s Leather Belt Classic Buckle Black",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["leather", "classic buckle", "black"]
  },
  {
    id: 595,
    name: "Travel Neck Pillow Memory Foam Gray",
    category: "travel",
    subcategory: "comfort",
    product_type: "neck pillow",
    filters: ["memory foam", "travel", "gray"]
  },
  {
    id: 596,
    name: "Toddler Sippy Cup Leak Proof Silicone Spout",
    category: "baby",
    subcategory: "feeding",
    product_type: "sippy cup",
    filters: ["leak proof", "silicone", "toddler"]
  },
  {
    id: 597,
    name: "Magnetic Knife Strip Stainless Steel 16 Inch",
    category: "kitchen",
    subcategory: "storage",
    product_type: "knife strip",
    filters: ["magnetic", "stainless steel", "16 inch"]
  },
  {
    id: 598,
    name: "Bluetooth Shower Speaker Waterproof with Suction Cup",
    category: "electronics",
    subcategory: "audio",
    product_type: "shower speaker",
    filters: ["bluetooth", "waterproof", "suction cup"]
  },
  {
    id: 599,
    name: "Foldable Storage Ottoman Cube Faux Leather",
    category: "home",
    subcategory: "furniture",
    product_type: "ottoman",
    filters: ["foldable", "faux leather", "cube"]
  },
  {
    id: 600,
    name: "LED Vanity Mirror with Touch Sensor and Magnifier",
    category: "beauty",
    subcategory: "tools",
    product_type: "vanity mirror",
    filters: ["LED", "touch sensor", "magnifier"]
  },
  {
    id: 601,
    name: "Adjustable Laptop Stand Aluminum Foldable",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop stand",
    filters: ["adjustable", "foldable", "aluminum"]
  },
  {
    id: 602,
    name: "Women’s Lightweight Rain Jacket with Hood",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["lightweight", "with hood", "women's"]
  },
  {
    id: 603,
    name: "Silicone Baking Mats Set of 2 Nonstick",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["silicone", "nonstick", "set of 2"]
  },
  {
    id: 604,
    name: "Baby Changing Pad Waterproof Portable Foldable",
    category: "baby",
    subcategory: "diapering",
    product_type: "changing pad",
    filters: ["waterproof", "portable", "foldable"]
  },
  {
    id: 605,
    name: "Smart LED Light Bulb Multicolor Wi-Fi",
    category: "home",
    subcategory: "lighting",
    product_type: "smart bulb",
    filters: ["multicolor", "Wi-Fi", "LED"]
  },
  {
    id: 606,
    name: "Men’s Running Shorts Lightweight with Liner",
    category: "clothing",
    subcategory: "activewear",
    product_type: "running shorts",
    filters: ["men's", "lightweight", "with liner"]
  },
  {
    id: 607,
    name: "Electric Can Opener One Touch Battery Operated",
    category: "kitchen",
    subcategory: "tools",
    product_type: "can opener",
    filters: ["electric", "one touch", "battery operated"]
  },
  {
    id: 608,
    name: "Wall Mounted Coat Rack with 5 Hooks",
    category: "home",
    subcategory: "storage",
    product_type: "coat rack",
    filters: ["wall mounted", "5 hooks", "wooden"]
  },
  {
    id: 609,
    name: "Pet Grooming Gloves Deshedding Brush Tool",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "grooming gloves",
    filters: ["deshedding", "brush", "for pets"]
  },
  {
    id: 610,
    name: "Portable Picnic Blanket Waterproof Foldable",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "picnic blanket",
    filters: ["portable", "waterproof", "foldable"]
  },
  {
    id: 611,
    name: "Bluetooth Sleep Headphones Soft Headband",
    category: "electronics",
    subcategory: "audio",
    product_type: "sleep headphones",
    filters: ["bluetooth", "soft headband", "wireless"]
  },
  {
    id: 612,
    name: "Dish Drying Rack Over the Sink Expandable",
    category: "kitchen",
    subcategory: "storage",
    product_type: "drying rack",
    filters: ["expandable", "over the sink", "steel"]
  },
  {
    id: 613,
    name: "Insulated Stainless Steel Travel Mug 16oz",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["insulated", "stainless steel", "16oz"]
  },
  {
    id: 614,
    name: "Women’s Sports Bra Padded Medium Support",
    category: "clothing",
    subcategory: "activewear",
    product_type: "sports bra",
    filters: ["padded", "medium support", "women's"]
  },
  {
    id: 615,
    name: "Digital Luggage Scale Portable Backlit Display",
    category: "travel",
    subcategory: "accessories",
    product_type: "luggage scale",
    filters: ["digital", "portable", "backlit display"]
  },
  {
    id: 616,
    name: "Standing Desk Converter Adjustable Height",
    category: "office",
    subcategory: "furniture",
    product_type: "desk converter",
    filters: ["adjustable height", "standing desk", "ergonomic"]
  },
  {
    id: 617,
    name: "Ceramic Mixing Bowls Set of 3 with Lids",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "mixing bowls",
    filters: ["ceramic", "with lids", "set of 3"]
  },
  {
    id: 618,
    name: "Kids Art Easel Double Sided with Storage",
    category: "toys",
    subcategory: "art supplies",
    product_type: "easel",
    filters: ["kids", "double sided", "storage tray"]
  },
  {
    id: 619,
    name: "Rechargeable Hand Warmer Portable 5200mAh",
    category: "outdoor",
    subcategory: "gear",
    product_type: "hand warmer",
    filters: ["rechargeable", "5200mAh", "portable"]
  },
  {
    id: 620,
    name: "LED Desk Lamp with USB Charging Port Dimmable",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "USB port", "dimmable"]
  },
  {
    id: 621,
    name: "Men’s Classic Fit Polo Shirt Cotton Navy",
    category: "clothing",
    subcategory: "tops",
    product_type: "polo shirt",
    filters: ["classic fit", "cotton", "men's"]
  },
  {
    id: 622,
    name: "Pet Feeding Mat Waterproof Non Slip Silicone",
    category: "pet supplies",
    subcategory: "feeding",
    product_type: "feeding mat",
    filters: ["waterproof", "non slip", "silicone"]
  },
  {
    id: 623,
    name: "Magnetic Screen Door Heavy Duty Mesh Hands-Free",
    category: "home",
    subcategory: "entry",
    product_type: "screen door",
    filters: ["magnetic", "mesh", "hands-free"]
  },
  {
    id: 624,
    name: "Mini Projector Portable 1080p Compatible HDMI",
    category: "electronics",
    subcategory: "video",
    product_type: "projector",
    filters: ["portable", "1080p", "HDMI"]
  },
  {
    id: 625,
    name: "Cotton Bathrobe Unisex Lightweight with Pockets",
    category: "clothing",
    subcategory: "loungewear",
    product_type: "bathrobe",
    filters: ["unisex", "lightweight", "with pockets"]
  },
  {
    id: 626,
    name: "Bike Phone Mount Handlebar Adjustable",
    category: "sports",
    subcategory: "cycling",
    product_type: "phone mount",
    filters: ["handlebar", "adjustable", "bike"]
  },
  {
    id: 627,
    name: "Drawer Organizer Bins Set of 10 Plastic Clear",
    category: "home",
    subcategory: "storage",
    product_type: "drawer organizer",
    filters: ["plastic", "clear", "set of 10"]
  },
  {
    id: 628,
    name: "Inflatable Neck Pillow for Airplane Travel Gray",
    category: "travel",
    subcategory: "comfort",
    product_type: "neck pillow",
    filters: ["inflatable", "gray", "for airplane"]
  },
  {
    id: 629,
    name: "Electric Pencil Sharpener Battery Powered Auto Stop",
    category: "office",
    subcategory: "supplies",
    product_type: "pencil sharpener",
    filters: ["electric", "auto stop", "battery powered"]
  },
  {
    id: 630,
    name: "Women’s Lightweight Cardigan Open Front Long Sleeve",
    category: "clothing",
    subcategory: "tops",
    product_type: "cardigan",
    filters: ["lightweight", "long sleeve", "women's"]
  },
  {
    id: 631,
    name: "Reusable Silicone Food Bags Leakproof 4-Pack",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food bags",
    filters: ["silicone", "leakproof", "4-pack"]
  },
  {
    id: 632,
    name: "Cordless Hair Clippers for Men with LED Display",
    category: "beauty",
    subcategory: "grooming",
    product_type: "hair clippers",
    filters: ["cordless", "LED display", "men's"]
  },
  {
    id: 633,
    name: "Set of 6 Resistance Bands for Workout and Therapy",
    category: "sports",
    subcategory: "fitness",
    product_type: "resistance bands",
    filters: ["set of 6", "workout", "therapy"]
  },
  {
    id: 634,
    name: "Acrylic Makeup Organizer with Drawers Clear",
    category: "beauty",
    subcategory: "storage",
    product_type: "makeup organizer",
    filters: ["acrylic", "with drawers", "clear"]
  },
  {
    id: 635,
    name: "Gaming Keyboard RGB Backlit Mechanical Feel",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "keyboard",
    filters: ["gaming", "RGB", "mechanical feel"]
  },
  {
    id: 636,
    name: "Hiking Backpack 50L with Rain Cover Lightweight",
    category: "outdoor",
    subcategory: "gear",
    product_type: "backpack",
    filters: ["50L", "rain cover", "lightweight"]
  },
  {
    id: 637,
    name: "Wooden Picture Frame Set of 5 Rustic Style",
    category: "home",
    subcategory: "decor",
    product_type: "picture frame",
    filters: ["wooden", "set of 5", "rustic"]
  },
  {
    id: 638,
    name: "Women’s Yoga Tank Top Racerback Moisture Wicking",
    category: "clothing",
    subcategory: "activewear",
    product_type: "tank top",
    filters: ["racerback", "moisture wicking", "women's"]
  },
  {
    id: 639,
    name: "USB Car Charger Dual Port Fast Charging 24W",
    category: "automotive",
    subcategory: "accessories",
    product_type: "car charger",
    filters: ["dual port", "fast charging", "24W"]
  },
  {
    id: 640,
    name: "Portable Humidifier for Desk USB Quiet Operation",
    category: "home",
    subcategory: "air quality",
    product_type: "humidifier",
    filters: ["portable", "USB", "quiet"]
  },
  {
    id: 641,
    name: "Men’s Casual Canvas Belt Adjustable Buckle",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["canvas", "adjustable", "men's"]
  },
  {
    id: 642,
    name: "Collapsible Water Bottle BPA-Free 20oz",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["collapsible", "BPA-free", "20oz"]
  },
  {
    id: 643,
    name: "Night Light Plug-In Dusk to Dawn Sensor LED",
    category: "home",
    subcategory: "lighting",
    product_type: "night light",
    filters: ["plug-in", "dusk to dawn", "LED"]
  },
  {
    id: 644,
    name: "Magnetic Spice Rack for Refrigerator Set of 2",
    category: "kitchen",
    subcategory: "storage",
    product_type: "spice rack",
    filters: ["magnetic", "refrigerator", "set of 2"]
  },
  {
    id: 645,
    name: "Women’s Ankle Boots Low Heel Suede Black",
    category: "footwear",
    subcategory: "women's",
    product_type: "ankle boots",
    filters: ["low heel", "suede", "black"]
  },
  {
    id: 646,
    name: "LED Strip Lights 32ft with Remote Multicolor",
    category: "electronics",
    subcategory: "decor",
    product_type: "LED strip lights",
    filters: ["32ft", "multicolor", "with remote"]
  },
  {
    id: 647,
    name: "Soft Throw Blanket Fleece 50x60 Inch",
    category: "home",
    subcategory: "bedding",
    product_type: "throw blanket",
    filters: ["soft", "fleece", "50x60 inch"]
  },
  {
    id: 648,
    name: "Electric Kettle 1.7L Glass with LED Indicator",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "electric kettle",
    filters: ["1.7L", "glass", "LED"]
  },
  {
    id: 649,
    name: "Rechargeable Nose Hair Trimmer Waterproof",
    category: "beauty",
    subcategory: "grooming",
    product_type: "trimmer",
    filters: ["rechargeable", "waterproof", "nose hair"]
  },
  {
    id: 650,
    name: "Over Door Hook Rack for Clothes Stainless Steel",
    category: "home",
    subcategory: "storage",
    product_type: "door hook rack",
    filters: ["over door", "stainless steel", "clothes"]
  },
  {
    id: 651,
    name: "Wireless Ergonomic Vertical Mouse Rechargeable",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse",
    filters: ["wireless", "ergonomic", "rechargeable"]
  },
  {
    id: 652,
    name: "Men’s Waterproof Hiking Boots with Ankle Support",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "hiking boots",
    filters: ["men's", "waterproof", "ankle support"]
  },
  {
    id: 653,
    name: "Electric Milk Frother Handheld with Stand",
    category: "kitchen",
    subcategory: "tools",
    product_type: "milk frother",
    filters: ["electric", "handheld", "with stand"]
  },
  {
    id: 654,
    name: "Expandable Drawer Dividers Bamboo Spring-Loaded",
    category: "home",
    subcategory: "storage",
    product_type: "drawer dividers",
    filters: ["expandable", "bamboo", "spring-loaded"]
  },
  {
    id: 655,
    name: "USB Desk Fan Quiet Operation 3 Speed Settings",
    category: "home",
    subcategory: "climate control",
    product_type: "desk fan",
    filters: ["USB", "quiet", "3 speed"]
  },
  {
    id: 656,
    name: "Foldable Step Stool for Adults 300lb Capacity",
    category: "home",
    subcategory: "tools",
    product_type: "step stool",
    filters: ["foldable", "300lb capacity", "non-slip"]
  },
  {
    id: 657,
    name: "Stainless Steel Water Bottle 32oz with Straw Lid",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["stainless steel", "32oz", "straw lid"]
  },
  {
    id: 658,
    name: "Kids’ Waterproof Lunch Box with Compartments",
    category: "baby",
    subcategory: "feeding",
    product_type: "lunch box",
    filters: ["kids", "waterproof", "with compartments"]
  },
  {
    id: 659,
    name: "LED Vanity Mirror with Touch Sensor and Lights",
    category: "beauty",
    subcategory: "tools",
    product_type: "vanity mirror",
    filters: ["LED", "touch sensor", "with lights"]
  },
  {
    id: 660,
    name: "Smart Plug Wi-Fi Compatible with Alexa and Google",
    category: "electronics",
    subcategory: "smart home",
    product_type: "smart plug",
    filters: ["Wi-Fi", "Alexa compatible", "Google compatible"]
  },
  {
    id: 661,
    name: "Baby Soft Swaddle Blankets 3-Pack Organic Cotton",
    category: "baby",
    subcategory: "bedding",
    product_type: "swaddle blankets",
    filters: ["3-pack", "organic cotton", "soft"]
  },
  {
    id: 662,
    name: "Nonstick Muffin Pan 12 Cup Dishwasher Safe",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "muffin pan",
    filters: ["nonstick", "12 cup", "dishwasher safe"]
  },
  {
    id: 663,
    name: "Pet Carrier Airline Approved Soft Sided",
    category: "pet supplies",
    subcategory: "travel",
    product_type: "pet carrier",
    filters: ["airline approved", "soft sided", "portable"]
  },
  {
    id: 664,
    name: "Men’s Slim Fit Chino Pants Stretch Khaki",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "chino pants",
    filters: ["men's", "slim fit", "stretch"]
  },
  {
    id: 665,
    name: "Outdoor Solar String Lights Waterproof 72ft",
    category: "home",
    subcategory: "lighting",
    product_type: "string lights",
    filters: ["solar", "waterproof", "72ft"]
  },
  {
    id: 666,
    name: "Electric Nose and Ear Hair Trimmer for Men",
    category: "beauty",
    subcategory: "grooming",
    product_type: "trimmer",
    filters: ["electric", "nose", "ear"]
  },
  {
    id: 667,
    name: "Portable Electric Space Heater for Indoor Use",
    category: "home",
    subcategory: "climate control",
    product_type: "space heater",
    filters: ["portable", "electric", "indoor"]
  },
  {
    id: 668,
    name: "Adjustable Dog Harness Reflective No Pull",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog harness",
    filters: ["adjustable", "reflective", "no pull"]
  },
  {
    id: 669,
    name: "Double Wall Insulated Glass Coffee Mugs Set of 2",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "coffee mugs",
    filters: ["double wall", "insulated", "set of 2"]
  },
  {
    id: 670,
    name: "Wall Clock Silent Non-Ticking Modern Design",
    category: "home",
    subcategory: "decor",
    product_type: "wall clock",
    filters: ["silent", "non-ticking", "modern"]
  },
  {
    id: 671,
    name: "Women’s Knit Infinity Scarf Soft Lightweight",
    category: "clothing",
    subcategory: "accessories",
    product_type: "scarf",
    filters: ["women's", "knit", "infinity"]
  },
  {
    id: 672,
    name: "Electric Bug Zapper Indoor UV Light Trap",
    category: "home",
    subcategory: "pest control",
    product_type: "bug zapper",
    filters: ["electric", "UV light", "indoor"]
  },
  {
    id: 673,
    name: "Folding Camping Chair with Cup Holder and Bag",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "camping chair",
    filters: ["folding", "with cup holder", "carry bag"]
  },
  {
    id: 674,
    name: "Women’s Sleeveless Workout Tank Moisture Wicking",
    category: "clothing",
    subcategory: "activewear",
    product_type: "tank top",
    filters: ["women's", "sleeveless", "moisture wicking"]
  },
  {
    id: 675,
    name: "Plastic Storage Bins with Lids Stackable Set of 4",
    category: "home",
    subcategory: "storage",
    product_type: "storage bins",
    filters: ["plastic", "with lids", "set of 4"]
  },
  {
    id: 676,
    name: "Men’s Leather Dress Belt Reversible Black and Brown",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["men's", "leather", "reversible"]
  },
  {
    id: 677,
    name: "Electric Heated Blanket Twin Size Auto Shut Off",
    category: "home",
    subcategory: "bedding",
    product_type: "heated blanket",
    filters: ["electric", "twin size", "auto shut off"]
  },
  {
    id: 678,
    name: "Bamboo Charcoal Air Purifying Bags 4-Pack",
    category: "home",
    subcategory: "air quality",
    product_type: "air purifying bags",
    filters: ["bamboo charcoal", "odor absorber", "4-pack"]
  },
  {
    id: 679,
    name: "LED Flashlight Waterproof Zoomable 1000 Lumens",
    category: "tools",
    subcategory: "lighting",
    product_type: "flashlight",
    filters: ["LED", "waterproof", "zoomable"]
  },
  {
    id: 680,
    name: "Women’s Slippers Memory Foam Anti-Skid Sole",
    category: "footwear",
    subcategory: "indoor",
    product_type: "slippers",
    filters: ["women's", "memory foam", "anti-skid"]
  },
  {
    id: 681,
    name: "Cord Organizer for Appliances Adhesive 6-Pack",
    category: "home",
    subcategory: "tools",
    product_type: "cord organizer",
    filters: ["adhesive", "appliances", "6-pack"]
  },
  {
    id: 682,
    name: "Reusable Ice Packs for Lunch Boxes Gel Leakproof",
    category: "kitchen",
    subcategory: "cooling",
    product_type: "ice packs",
    filters: ["reusable", "gel", "leakproof"]
  },
  {
    id: 683,
    name: "Women’s Sleepwear Pajama Set Cotton Short Sleeve",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["cotton", "short sleeve", "women's"]
  },
  {
    id: 684,
    name: "Wireless Charging Pad Fast Charge 15W",
    category: "electronics",
    subcategory: "charging",
    product_type: "wireless charger",
    filters: ["fast charge", "15W", "Qi compatible"]
  },
  {
    id: 685,
    name: "Men’s Slim Wallet RFID Blocking Minimalist",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["RFID blocking", "minimalist", "men's"]
  },
  {
    id: 686,
    name: "Car Windshield Sunshade Foldable Reflective",
    category: "automotive",
    subcategory: "accessories",
    product_type: "sunshade",
    filters: ["foldable", "reflective", "windshield"]
  },
  {
    id: 687,
    name: "Stackable Shoe Rack 3-Tier Metal Black",
    category: "home",
    subcategory: "storage",
    product_type: "shoe rack",
    filters: ["stackable", "3-tier", "metal"]
  },
  {
    id: 688,
    name: "Women’s Casual Maxi Dress with Pockets",
    category: "clothing",
    subcategory: "dresses",
    product_type: "maxi dress",
    filters: ["casual", "with pockets", "women's"]
  },
  {
    id: 689,
    name: "Pet Water Fountain with Filter Automatic",
    category: "pet supplies",
    subcategory: "feeding",
    product_type: "pet water fountain",
    filters: ["automatic", "with filter", "quiet"]
  },
  {
    id: 690,
    name: "Digital Alarm Clock with USB Charger and Dimmable Display",
    category: "electronics",
    subcategory: "clocks",
    product_type: "alarm clock",
    filters: ["USB charger", "dimmable", "digital"]
  },
  {
    id: 691,
    name: "Fleece Throw Blanket Lightweight Soft 60x80 Inch",
    category: "home",
    subcategory: "bedding",
    product_type: "throw blanket",
    filters: ["fleece", "lightweight", "60x80 inch"]
  },
  {
    id: 692,
    name: "Adjustable Dumbbells Set for Home Workout 25lb Each",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbells",
    filters: ["adjustable", "25lb", "home"]
  },
  {
    id: 693,
    name: "Electric Hot Water Bottle Rechargeable Plush Cover",
    category: "health",
    subcategory: "pain relief",
    product_type: "hot water bottle",
    filters: ["electric", "rechargeable", "plush cover"]
  },
  {
    id: 694,
    name: "Wall Mounted Floating Shelf Set of 3 Rustic Wood",
    category: "home",
    subcategory: "decor",
    product_type: "floating shelf",
    filters: ["wall mounted", "set of 3", "rustic"]
  },
  {
    id: 695,
    name: "Microwave Safe Glass Food Containers with Lids",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["microwave safe", "glass", "with lids"]
  },
  {
    id: 696,
    name: "Over-the-Door Shoe Organizer 24 Pockets Fabric",
    category: "home",
    subcategory: "storage",
    product_type: "shoe organizer",
    filters: ["over-the-door", "24 pockets", "fabric"]
  },
  {
    id: 697,
    name: "Women’s Winter Gloves Touchscreen Fleece Lined",
    category: "clothing",
    subcategory: "accessories",
    product_type: "gloves",
    filters: ["winter", "touchscreen", "fleece lined"]
  },
  {
    id: 698,
    name: "Kitchen Tongs Set of 2 Stainless Steel Silicone Tips",
    category: "kitchen",
    subcategory: "tools",
    product_type: "tongs",
    filters: ["set of 2", "stainless steel", "silicone tips"]
  },
  {
    id: 699,
    name: "Bluetooth Shower Speaker Waterproof with Suction Cup",
    category: "electronics",
    subcategory: "audio",
    product_type: "shower speaker",
    filters: ["bluetooth", "waterproof", "suction cup"]
  },
  {
    id: 700,
    name: "Compression Packing Cubes for Travel 6 Piece Set",
    category: "travel",
    subcategory: "organizers",
    product_type: "packing cubes",
    filters: ["compression", "6 piece", "travel"]
  },
  {
    id: 701,
    name: "Cordless Handheld Vacuum Cleaner for Car and Home",
    category: "home",
    subcategory: "cleaning",
    product_type: "vacuum cleaner",
    filters: ["cordless", "handheld", "for car"]
  },
  {
    id: 702,
    name: "Nonstick Silicone Baking Mat Set of 3 Half Sheet",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["nonstick", "silicone", "set of 3"]
  },
  {
    id: 703,
    name: "Men’s Waterproof Windbreaker Jacket Lightweight",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "windbreaker",
    filters: ["men's", "waterproof", "lightweight"]
  },
  {
    id: 704,
    name: "Stackable Acrylic Makeup Organizer Drawers Clear",
    category: "beauty",
    subcategory: "storage",
    product_type: "makeup organizer",
    filters: ["stackable", "acrylic", "drawers"]
  },
  {
    id: 705,
    name: "Electric Griddle with Removable Plates and Drip Tray",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "griddle",
    filters: ["electric", "removable plates", "drip tray"]
  },
  {
    id: 706,
    name: "Pet Hair Remover Brush Reusable for Furniture",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "hair remover",
    filters: ["reusable", "for furniture", "pet hair"]
  },
  {
    id: 707,
    name: "Outdoor Camping Hammock with Mosquito Net",
    category: "outdoor",
    subcategory: "camping gear",
    product_type: "hammock",
    filters: ["with mosquito net", "camping", "portable"]
  },
  {
    id: 708,
    name: "Men’s Athletic Shorts with Zipper Pockets 2-Pack",
    category: "clothing",
    subcategory: "activewear",
    product_type: "shorts",
    filters: ["men's", "zipper pockets", "2-pack"]
  },
  {
    id: 709,
    name: "Insulated Reusable Grocery Bags Heavy Duty Large",
    category: "home",
    subcategory: "storage",
    product_type: "grocery bags",
    filters: ["insulated", "reusable", "large"]
  },
  {
    id: 710,
    name: "Electric Coffee Grinder Stainless Steel 200W",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "coffee grinder",
    filters: ["electric", "stainless steel", "200W"]
  },
  {
    id: 711,
    name: "Waterproof Bike Cover for 2 Bikes with Lock Holes",
    category: "outdoor",
    subcategory: "cycling",
    product_type: "bike cover",
    filters: ["waterproof", "for 2 bikes", "lock holes"]
  },
  {
    id: 712,
    name: "Baby Diaper Caddy Organizer with Handles",
    category: "baby",
    subcategory: "storage",
    product_type: "diaper caddy",
    filters: ["with handles", "baby", "portable"]
  },
  {
    id: 713,
    name: "Rechargeable LED Headlamp with Adjustable Strap",
    category: "tools",
    subcategory: "lighting",
    product_type: "headlamp",
    filters: ["LED", "rechargeable", "adjustable strap"]
  },
  {
    id: 714,
    name: "Desktop Monitor Stand Riser with Drawer Organizer",
    category: "office",
    subcategory: "furniture",
    product_type: "monitor stand",
    filters: ["with drawer", "riser", "desktop"]
  },
  {
    id: 715,
    name: "Set of 2 Stainless Steel Mixing Bowls with Lids",
    category: "kitchen",
    subcategory: "tools",
    product_type: "mixing bowls",
    filters: ["stainless steel", "set of 2", "with lids"]
  },
  {
    id: 716,
    name: "Women’s Sports Bra Medium Support Moisture Wicking",
    category: "clothing",
    subcategory: "activewear",
    product_type: "sports bra",
    filters: ["women's", "medium support", "moisture wicking"]
  },
  {
    id: 717,
    name: "Electric Wine Opener with Foil Cutter Rechargeable",
    category: "kitchen",
    subcategory: "tools",
    product_type: "wine opener",
    filters: ["electric", "rechargeable", "foil cutter"]
  },
  {
    id: 718,
    name: "Magnetic Knife Strip Wall Mount Stainless Steel",
    category: "kitchen",
    subcategory: "storage",
    product_type: "knife strip",
    filters: ["magnetic", "wall mount", "stainless steel"]
  },
  {
    id: 719,
    name: "Noise Cancelling Over-Ear Headphones Wireless",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["noise cancelling", "over-ear", "wireless"]
  },
  {
    id: 720,
    name: "Bamboo Cutting Board Set of 3 with Juice Groove",
    category: "kitchen",
    subcategory: "tools",
    product_type: "cutting board",
    filters: ["bamboo", "set of 3", "juice groove"]
  },
  {
    id: 721,
    name: "Wireless Charging Station for Phone, Watch, and Earbuds",
    category: "electronics",
    subcategory: "charging",
    product_type: "charging station",
    filters: ["wireless", "multi-device", "fast charge"]
  },
  {
    id: 722,
    name: "Adjustable Folding Laptop Stand Portable Aluminum",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop stand",
    filters: ["adjustable", "folding", "aluminum"]
  },
  {
    id: 723,
    name: "Set of 6 Silicone Food Storage Lids Reusable",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food lids",
    filters: ["silicone", "reusable", "set of 6"]
  },
  {
    id: 724,
    name: "Women’s Lightweight Raincoat with Hood Waterproof",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "raincoat",
    filters: ["women's", "waterproof", "with hood"]
  },
  {
    id: 725,
    name: "Large Picnic Blanket Waterproof Fleece Foldable",
    category: "outdoor",
    subcategory: "leisure",
    product_type: "picnic blanket",
    filters: ["waterproof", "fleece", "foldable"]
  },
  {
    id: 726,
    name: "Over-The-Sink Dish Drying Rack Stainless Steel",
    category: "kitchen",
    subcategory: "storage",
    product_type: "dish drying rack",
    filters: ["over-the-sink", "stainless steel", "foldable"]
  },
  {
    id: 727,
    name: "Digital Luggage Scale Portable Backlit Display",
    category: "travel",
    subcategory: "accessories",
    product_type: "luggage scale",
    filters: ["digital", "portable", "backlit display"]
  },
  {
    id: 728,
    name: "Men’s Athletic Sneakers Breathable Lightweight",
    category: "footwear",
    subcategory: "athletic",
    product_type: "sneakers",
    filters: ["men's", "breathable", "lightweight"]
  },
  {
    id: 729,
    name: "Electric Facial Cleansing Brush Waterproof with 3 Speeds",
    category: "beauty",
    subcategory: "skincare",
    product_type: "facial brush",
    filters: ["electric", "waterproof", "3 speeds"]
  },
  {
    id: 730,
    name: "LED Desk Lamp with USB Port and Adjustable Arm",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "USB port", "adjustable arm"]
  },
  {
    id: 731,
    name: "Men’s Leather Wallet with RFID Blocking",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["men's", "leather", "RFID blocking"]
  },
  {
    id: 732,
    name: "Ceramic Plant Pots with Drainage Tray Set of 2",
    category: "home",
    subcategory: "decor",
    product_type: "plant pot",
    filters: ["ceramic", "drainage tray", "set of 2"]
  },
  {
    id: 733,
    name: "USB Flash Drive 128GB 3.0 High Speed",
    category: "electronics",
    subcategory: "storage",
    product_type: "flash drive",
    filters: ["128GB", "USB 3.0", "high speed"]
  },
  {
    id: 734,
    name: "Kids Hooded Towel 100% Cotton Animal Design",
    category: "baby",
    subcategory: "bath",
    product_type: "hooded towel",
    filters: ["kids", "cotton", "animal design"]
  },
  {
    id: 735,
    name: "Wall-Mounted Coat Rack with 5 Hooks Rustic Wood",
    category: "home",
    subcategory: "storage",
    product_type: "coat rack",
    filters: ["wall-mounted", "5 hooks", "rustic wood"]
  },
  {
    id: 736,
    name: "Electric Hot Water Bottle Rechargeable with Cover",
    category: "health",
    subcategory: "comfort",
    product_type: "hot water bottle",
    filters: ["electric", "rechargeable", "with cover"]
  },
  {
    id: 737,
    name: "Women’s Winter Scarf Cashmere Feel Plaid",
    category: "clothing",
    subcategory: "accessories",
    product_type: "scarf",
    filters: ["women's", "winter", "plaid"]
  },
  {
    id: 738,
    name: "Over-the-Door Shoe Organizer 24 Pockets",
    category: "home",
    subcategory: "storage",
    product_type: "shoe organizer",
    filters: ["over-the-door", "24 pockets", "hanging"]
  },
  {
    id: 739,
    name: "Smart Light Bulb WiFi LED Compatible with Alexa",
    category: "home",
    subcategory: "lighting",
    product_type: "smart bulb",
    filters: ["WiFi", "LED", "Alexa compatible"]
  },
  {
    id: 740,
    name: "Men’s Thermal Long Sleeve Base Layer Shirt",
    category: "clothing",
    subcategory: "base layers",
    product_type: "thermal shirt",
    filters: ["men's", "thermal", "long sleeve"]
  },
  {
    id: 741,
    name: "Non-Slip Bathtub Mat with Suction Cups and Drain Holes",
    category: "home",
    subcategory: "bathroom",
    product_type: "bath mat",
    filters: ["non-slip", "drain holes", "suction cups"]
  },
  {
    id: 742,
    name: "Gaming Mouse Pad XL Extended Size with Stitched Edges",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse pad",
    filters: ["XL size", "stitched edges", "gaming"]
  },
  {
    id: 743,
    name: "Compact Makeup Mirror with LED Lights Travel Size",
    category: "beauty",
    subcategory: "tools",
    product_type: "makeup mirror",
    filters: ["LED lights", "compact", "travel size"]
  },
  {
    id: 744,
    name: "Dog Harness No Pull Adjustable Reflective",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog harness",
    filters: ["no pull", "adjustable", "reflective"]
  },
  {
    id: 745,
    name: "Water Bottle with Time Marker 32oz Leakproof",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["time marker", "32oz", "leakproof"]
  },
  {
    id: 746,
    name: "Wooden Picture Frame 8x10 Rustic Brown",
    category: "home",
    subcategory: "decor",
    product_type: "picture frame",
    filters: ["wooden", "8x10", "rustic"]
  },
  {
    id: 747,
    name: "Portable Power Bank 20000mAh USB-C PD Fast Charging",
    category: "electronics",
    subcategory: "power banks",
    product_type: "power bank",
    filters: ["20000mAh", "USB-C", "fast charging"]
  },
  {
    id: 748,
    name: "Men’s Leather Dress Shoes Oxford Style Black",
    category: "footwear",
    subcategory: "formal",
    product_type: "dress shoes",
    filters: ["leather", "oxford", "black"]
  },
  {
    id: 749,
    name: "Silicone Baby Bib Waterproof Easy Clean Set of 2",
    category: "baby",
    subcategory: "feeding",
    product_type: "baby bib",
    filters: ["silicone", "waterproof", "set of 2"]
  },
  {
    id: 750,
    name: "Wireless Security Camera Indoor Motion Detection",
    category: "electronics",
    subcategory: "smart home",
    product_type: "security camera",
    filters: ["wireless", "indoor", "motion detection"]
  },
  {
    id: 751,
    name: "Women’s Crossbody Purse with Adjustable Strap",
    category: "accessories",
    subcategory: "bags",
    product_type: "crossbody purse",
    filters: ["women's", "adjustable strap", "compact"]
  },
  {
    id: 752,
    name: "Car Phone Mount Air Vent Magnetic Holder",
    category: "automotive",
    subcategory: "phone accessories",
    product_type: "phone mount",
    filters: ["air vent", "magnetic", "adjustable"]
  },
  {
    id: 753,
    name: "Stackable Storage Bins with Lids Clear Plastic",
    category: "home",
    subcategory: "organization",
    product_type: "storage bins",
    filters: ["stackable", "clear", "with lids"]
  },
  {
    id: 754,
    name: "Handheld Milk Frother Battery Operated Stainless Steel",
    category: "kitchen",
    subcategory: "tools",
    product_type: "milk frother",
    filters: ["handheld", "battery operated", "stainless steel"]
  },
  {
    id: 755,
    name: "Yoga Block High Density Foam Lightweight",
    category: "sports",
    subcategory: "yoga",
    product_type: "yoga block",
    filters: ["foam", "high density", "lightweight"]
  },
  {
    id: 756,
    name: "Electric Can Opener One Touch Automatic Kitchen Tool",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "can opener",
    filters: ["electric", "one touch", "automatic"]
  },
  {
    id: 757,
    name: "LED Night Light Plug In with Dusk to Dawn Sensor",
    category: "home",
    subcategory: "lighting",
    product_type: "night light",
    filters: ["LED", "dusk to dawn", "plug-in"]
  },
  {
    id: 758,
    name: "Women’s Faux Leather Leggings High Waist Black",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "leggings",
    filters: ["faux leather", "high waist", "black"]
  },
  {
    id: 759,
    name: "Pet Grooming Glove Deshedding Brush for Dogs and Cats",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "grooming glove",
    filters: ["deshedding", "reusable", "for dogs and cats"]
  },
  {
    id: 760,
    name: "Digital Meat Thermometer Instant Read Waterproof",
    category: "kitchen",
    subcategory: "tools",
    product_type: "meat thermometer",
    filters: ["digital", "instant read", "waterproof"]
  },
  {
    id: 761,
    name: "Memory Foam Seat Cushion for Office Chair",
    category: "office",
    subcategory: "accessories",
    product_type: "seat cushion",
    filters: ["memory foam", "for office chair", "ergonomic"]
  },
  {
    id: 762,
    name: "Electric Kettle Stainless Steel Fast Boil 1.7L",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "kettle",
    filters: ["electric", "fast boil", "1.7L"]
  },
  {
    id: 763,
    name: "Pack of 6 Glass Food Storage Containers with Lids",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["glass", "with lids", "set of 6"]
  },
  {
    id: 764,
    name: "Folding Step Stool Lightweight for Adults and Kids",
    category: "home",
    subcategory: "tools",
    product_type: "step stool",
    filters: ["folding", "lightweight", "non-slip"]
  },
  {
    id: 765,
    name: "Bluetooth Smartwatch with Fitness Tracker and Notifications",
    category: "electronics",
    subcategory: "wearables",
    product_type: "smartwatch",
    filters: ["bluetooth", "fitness tracker", "notifications"]
  },
  {
    id: 766,
    name: "Men’s Pajama Set Cotton Long Sleeve with Pants",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["men's", "cotton", "long sleeve"]
  },
  {
    id: 767,
    name: "Electric Toothbrush Sonic Rechargeable 5 Modes",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["sonic", "rechargeable", "5 modes"]
  },
  {
    id: 768,
    name: "Adjustable Desktop Phone Stand Foldable Aluminum",
    category: "electronics",
    subcategory: "phone accessories",
    product_type: "phone stand",
    filters: ["adjustable", "foldable", "aluminum"]
  },
  {
    id: 769,
    name: "Laptop Backpack 15.6 inch Water Resistant USB Port",
    category: "bags",
    subcategory: "backpacks",
    product_type: "laptop backpack",
    filters: ["15.6 inch", "USB port", "water resistant"]
  },
  {
    id: 770,
    name: "Pack of 3 Dish Drying Towels Super Absorbent Microfiber",
    category: "kitchen",
    subcategory: "linens",
    product_type: "dish towels",
    filters: ["super absorbent", "microfiber", "pack of 3"]
  },
  {
    id: 771,
    name: "Wool Blend Throw Blanket 50x60 Reversible",
    category: "home",
    subcategory: "bedding",
    product_type: "throw blanket",
    filters: ["wool blend", "reversible", "50x60"]
  },
  {
    id: 772,
    name: "Women’s Slip-On Sneakers Memory Foam Sole",
    category: "footwear",
    subcategory: "casual",
    product_type: "sneakers",
    filters: ["women's", "slip-on", "memory foam"]
  },
  {
    id: 773,
    name: "Glass Electric Wine Opener with Foil Cutter",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "wine opener",
    filters: ["electric", "glass body", "with foil cutter"]
  },
  {
    id: 774,
    name: "Hiking Poles Collapsible Lightweight Aluminum",
    category: "sports",
    subcategory: "outdoor gear",
    product_type: "hiking poles",
    filters: ["collapsible", "lightweight", "aluminum"]
  },
  {
    id: 775,
    name: "Adjustable Standing Desk Converter with Keyboard Tray",
    category: "office",
    subcategory: "desks",
    product_type: "standing desk",
    filters: ["adjustable", "keyboard tray", "converter"]
  },
  {
    id: 776,
    name: "Non-Stick Silicone Baking Mat Set of 2",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["non-stick", "silicone", "set of 2"]
  },
  {
    id: 777,
    name: "Men’s Fleece Joggers with Zipper Pockets",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "joggers",
    filters: ["men's", "fleece", "zipper pockets"]
  },
  {
    id: 778,
    name: "Wireless Charging Pad 15W Fast Charge",
    category: "electronics",
    subcategory: "charging",
    product_type: "charging pad",
    filters: ["wireless", "15W", "fast charge"]
  },
  {
    id: 779,
    name: "Magnetic Dry Erase Board 18x24 with Marker and Eraser",
    category: "office",
    subcategory: "supplies",
    product_type: "whiteboard",
    filters: ["magnetic", "18x24", "with eraser"]
  },
  {
    id: 780,
    name: "Portable Bluetooth Karaoke Microphone with Echo",
    category: "electronics",
    subcategory: "audio",
    product_type: "karaoke microphone",
    filters: ["portable", "bluetooth", "echo effect"]
  },
  {
    id: 781,
    name: "Women’s Rain Boots Mid-Calf Waterproof Rubber",
    category: "footwear",
    subcategory: "rain gear",
    product_type: "rain boots",
    filters: ["women's", "mid-calf", "waterproof"]
  },
  {
    id: 782,
    name: "Baby Crib Mattress Waterproof Hypoallergenic",
    category: "baby",
    subcategory: "bedding",
    product_type: "crib mattress",
    filters: ["waterproof", "hypoallergenic", "standard size"]
  },
  {
    id: 783,
    name: "Adjustable Dumbbells 5-25lbs with Dial System",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbells",
    filters: ["adjustable", "5-25lbs", "dial system"]
  },
  {
    id: 784,
    name: "Indoor Plant Stand Bamboo Tiered Shelf",
    category: "home",
    subcategory: "decor",
    product_type: "plant stand",
    filters: ["bamboo", "tiered", "indoor"]
  },
  {
    id: 785,
    name: "Kids Drawing Tablet LCD 10 Inch with Stylus",
    category: "electronics",
    subcategory: "tablets",
    product_type: "drawing tablet",
    filters: ["kids", "LCD", "with stylus"]
  },
  {
    id: 786,
    name: "Shower Organizer Corner Shelf Rustproof Aluminum",
    category: "home",
    subcategory: "bathroom",
    product_type: "shower shelf",
    filters: ["corner", "rustproof", "aluminum"]
  },
  {
    id: 787,
    name: "Women’s Flannel Pajama Pants Plaid Drawstring",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama pants",
    filters: ["women's", "flannel", "drawstring"]
  },
  {
    id: 788,
    name: "LED String Lights 100ft Outdoor Waterproof",
    category: "home",
    subcategory: "lighting",
    product_type: "string lights",
    filters: ["LED", "100ft", "outdoor"]
  },
  {
    id: 789,
    name: "Glass Measuring Cups Set of 3 Microwave Safe",
    category: "kitchen",
    subcategory: "tools",
    product_type: "measuring cups",
    filters: ["glass", "microwave safe", "set of 3"]
  },
  {
    id: 790,
    name: "Pet Carrier Backpack Ventilated with Mesh Windows",
    category: "pet supplies",
    subcategory: "carriers",
    product_type: "pet backpack",
    filters: ["ventilated", "mesh windows", "adjustable straps"]
  },
  {
    id: 791,
    name: "Compact Folding Camping Chair with Carry Bag",
    category: "outdoor",
    subcategory: "furniture",
    product_type: "camping chair",
    filters: ["compact", "folding", "carry bag"]
  },
  {
    id: 792,
    name: "Men’s Short Sleeve Golf Polo Moisture Wicking",
    category: "clothing",
    subcategory: "tops",
    product_type: "golf polo",
    filters: ["men's", "moisture wicking", "short sleeve"]
  },
  {
    id: 793,
    name: "Rechargeable Headlamp 1200 Lumens Waterproof",
    category: "tools",
    subcategory: "lighting",
    product_type: "headlamp",
    filters: ["rechargeable", "1200 lumens", "waterproof"]
  },
  {
    id: 794,
    name: "Collapsible Storage Ottoman Cube with Lid",
    category: "home",
    subcategory: "storage",
    product_type: "ottoman",
    filters: ["collapsible", "storage", "with lid"]
  },
  {
    id: 795,
    name: "Hair Dryer with Diffuser and Cool Shot Button",
    category: "beauty",
    subcategory: "hair care",
    product_type: "hair dryer",
    filters: ["diffuser", "cool shot", "lightweight"]
  },
  {
    id: 796,
    name: "Ceramic Travel Mug with Silicone Lid 16oz",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "travel mug",
    filters: ["ceramic", "16oz", "with lid"]
  },
  {
    id: 797,
    name: "Adjustable Dumbbell Bench Foldable for Home Gym",
    category: "sports",
    subcategory: "fitness",
    product_type: "bench",
    filters: ["adjustable", "foldable", "home gym"]
  },
  {
    id: 798,
    name: "Kids Waterproof School Backpack with Reflective Strips",
    category: "bags",
    subcategory: "backpacks",
    product_type: "school backpack",
    filters: ["kids", "waterproof", "reflective"]
  },
  {
    id: 799,
    name: "Electric Fabric Shaver Rechargeable with 3 Blades",
    category: "home",
    subcategory: "maintenance",
    product_type: "fabric shaver",
    filters: ["electric", "rechargeable", "3 blades"]
  },
  {
    id: 800,
    name: "Women’s Cross Training Shoes Lightweight Cushioned",
    category: "footwear",
    subcategory: "training",
    product_type: "training shoes",
    filters: ["women's", "lightweight", "cushioned"]
  },
  {
    id: 871,
    name: "Non-Slip Bath Mat with Suction Cups Gray",
    category: "home",
    subcategory: "bathroom",
    product_type: "bath mat",
    filters: ["non-slip", "gray", "suction cups"]
  },
  {
    id: 872,
    name: "Men’s Leather Belt Reversible Black Brown",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["men's", "leather", "reversible"]
  },
  {
    id: 873,
    name: "Wireless Mechanical Keyboard RGB Backlit",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "keyboard",
    filters: ["wireless", "mechanical", "RGB"]
  },
  {
    id: 874,
    name: "Reusable Grocery Bags Foldable Set of 5",
    category: "home",
    subcategory: "storage",
    product_type: "grocery bags",
    filters: ["reusable", "foldable", "set of 5"]
  },
  {
    id: 875,
    name: "Cast Iron Dutch Oven 6 Quart Enamel Coated",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "dutch oven",
    filters: ["cast iron", "6 quart", "enamel coated"]
  },
  {
    id: 876,
    name: "Girls' Tulle Skirt Sparkly Elastic Waist",
    category: "clothing",
    subcategory: "children's",
    product_type: "skirt",
    filters: ["girls'", "tulle", "elastic waist"]
  },
  {
    id: 877,
    name: "Wall-Mounted Coat Rack 5 Hooks Rustic Wood",
    category: "home",
    subcategory: "entryway",
    product_type: "coat rack",
    filters: ["wall-mounted", "5 hooks", "rustic"]
  },
  {
    id: 878,
    name: "Rechargeable Hand Warmer Double-Sided Heat",
    category: "sports",
    subcategory: "outdoor gear",
    product_type: "hand warmer",
    filters: ["rechargeable", "double-sided", "compact"]
  },
  {
    id: 879,
    name: "Women’s Sleep Shirt Cotton Short Sleeve",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "sleep shirt",
    filters: ["women's", "cotton", "short sleeve"]
  },
  {
    id: 880,
    name: "Silicone Spatula Set Heat Resistant Multicolor",
    category: "kitchen",
    subcategory: "tools",
    product_type: "spatula",
    filters: ["silicone", "heat resistant", "set"]
  },
  {
    id: 881,
    name: "Adjustable Monitor Riser with Storage Drawer",
    category: "office",
    subcategory: "furniture",
    product_type: "monitor riser",
    filters: ["adjustable", "with drawer", "plastic"]
  },
  {
    id: 882,
    name: "Men’s Running Jacket Windbreaker Lightweight",
    category: "clothing",
    subcategory: "activewear",
    product_type: "jacket",
    filters: ["men's", "windbreaker", "lightweight"]
  },
  {
    id: 883,
    name: "Smart WiFi Plug Works with Alexa Google Home",
    category: "electronics",
    subcategory: "smart home",
    product_type: "smart plug",
    filters: ["WiFi", "Alexa compatible", "Google Home"]
  },
  {
    id: 884,
    name: "Pet Grooming Glove Deshedding Tool for Cats Dogs",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "grooming glove",
    filters: ["deshedding", "cats", "dogs"]
  },
  {
    id: 885,
    name: "Glass Storage Containers with Lids 10 Piece Set",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["glass", "10 piece", "with lids"]
  },
  {
    id: 886,
    name: "LED Clip-On Book Light Rechargeable",
    category: "electronics",
    subcategory: "lighting",
    product_type: "book light",
    filters: ["clip-on", "LED", "rechargeable"]
  },
  {
    id: 887,
    name: "Women’s Ankle Boots Faux Suede Zipper",
    category: "footwear",
    subcategory: "boots",
    product_type: "ankle boots",
    filters: ["women's", "faux suede", "zipper"]
  },
  {
    id: 888,
    name: "Yoga Resistance Bands Set of 5 with Storage Bag",
    category: "sports",
    subcategory: "fitness",
    product_type: "resistance bands",
    filters: ["yoga", "set of 5", "storage bag"]
  },
  {
    id: 889,
    name: "Folding Step Stool 13 Inch with Handle",
    category: "home",
    subcategory: "utility",
    product_type: "step stool",
    filters: ["folding", "13 inch", "with handle"]
  },
  {
    id: 890,
    name: "Men’s Formal Dress Shirt Slim Fit Cotton",
    category: "clothing",
    subcategory: "formalwear",
    product_type: "dress shirt",
    filters: ["men's", "slim fit", "cotton"]
  },
  {
    id: 891,
    name: "Glass French Press Coffee Maker 34oz Stainless Filter",
    category: "kitchen",
    subcategory: "coffee",
    product_type: "french press",
    filters: ["glass", "34oz", "stainless steel filter"]
  },
  {
    id: 892,
    name: "Outdoor Patio Umbrella 9ft with Crank and Tilt",
    category: "outdoor",
    subcategory: "furniture",
    product_type: "patio umbrella",
    filters: ["9ft", "with crank", "tilt"]
  },
  {
    id: 893,
    name: "Wireless Mouse Silent Click Ergonomic",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "mouse",
    filters: ["wireless", "silent click", "ergonomic"]
  },
  {
    id: 894,
    name: "Toddler Sippy Cup Spill Proof BPA-Free",
    category: "baby",
    subcategory: "feeding",
    product_type: "sippy cup",
    filters: ["spill proof", "toddler", "BPA-free"]
  },
  {
    id: 895,
    name: "Acrylic Nail Kit with UV Lamp and Gel Polish",
    category: "beauty",
    subcategory: "nail care",
    product_type: "nail kit",
    filters: ["UV lamp", "gel polish", "acrylic"]
  },
  {
    id: 896,
    name: "Dog Harness No Pull Reflective Adjustable",
    category: "pet supplies",
    subcategory: "walking",
    product_type: "dog harness",
    filters: ["no pull", "reflective", "adjustable"]
  },
  {
    id: 897,
    name: "Women’s Leather Tote Bag with Zipper Closure",
    category: "bags",
    subcategory: "handbags",
    product_type: "tote bag",
    filters: ["leather", "women's", "zipper closure"]
  },
  {
    id: 898,
    name: "Rechargeable Electric Toothbrush with Timer",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush",
    filters: ["rechargeable", "electric", "timer"]
  },
  {
    id: 899,
    name: "Floor Mirror Full Length Leaning Shatterproof",
    category: "home",
    subcategory: "decor",
    product_type: "floor mirror",
    filters: ["full length", "shatterproof", "leaning"]
  },
  {
    id: 900,
    name: "Portable Cooler Bag 24 Can Capacity Insulated",
    category: "outdoor",
    subcategory: "coolers",
    product_type: "cooler bag",
    filters: ["portable", "24 can", "insulated"]
  },
  {
    id: 901,
    name: "Kids Backpack Dinosaur Design Lightweight",
    category: "bags",
    subcategory: "backpacks",
    product_type: "kids backpack",
    filters: ["lightweight", "dinosaur", "children"]
  },
  {
    id: 902,
    name: "Nonstick Muffin Pan 12-Cup Dishwasher Safe",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "muffin pan",
    filters: ["nonstick", "12-cup", "dishwasher safe"]
  },
  {
    id: 903,
    name: "Wireless Gaming Headset Surround Sound",
    category: "electronics",
    subcategory: "audio",
    product_type: "gaming headset",
    filters: ["wireless", "surround sound", "with mic"]
  },
  {
    id: 904,
    name: "Women’s Maxi Dress Floral Bohemian Style",
    category: "clothing",
    subcategory: "dresses",
    product_type: "maxi dress",
    filters: ["floral", "bohemian", "women's"]
  },
  {
    id: 905,
    name: "Foldable Laundry Basket with Handles Grey",
    category: "home",
    subcategory: "laundry",
    product_type: "laundry basket",
    filters: ["foldable", "with handles", "grey"]
  },
  {
    id: 906,
    name: "Bluetooth Car Adapter FM Transmitter Dual USB",
    category: "automotive",
    subcategory: "accessories",
    product_type: "car adapter",
    filters: ["Bluetooth", "FM transmitter", "dual USB"]
  },
  {
    id: 907,
    name: "Men’s Waterproof Hiking Shoes Breathable",
    category: "footwear",
    subcategory: "outdoor",
    product_type: "hiking shoes",
    filters: ["waterproof", "men's", "breathable"]
  },
  {
    id: 908,
    name: "Ceramic Vase Set of 3 Modern Minimalist",
    category: "home",
    subcategory: "decor",
    product_type: "vase",
    filters: ["ceramic", "set of 3", "minimalist"]
  },
  {
    id: 909,
    name: "Adjustable Dumbbell Set 25lb Pair for Home Gym",
    category: "sports",
    subcategory: "fitness",
    product_type: "dumbbells",
    filters: ["adjustable", "25lb", "home gym"]
  },
  {
    id: 910,
    name: "Baby Diaper Bag Backpack with Changing Pad",
    category: "baby",
    subcategory: "gear",
    product_type: "diaper bag",
    filters: ["backpack", "changing pad", "multi-pocket"]
  },
  {
    id: 911,
    name: "Electric Grill Indoor Smokeless Nonstick",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "electric grill",
    filters: ["indoor", "nonstick", "smokeless"]
  },
  {
    id: 912,
    name: "Laptop Sleeve 15.6 Inch Water-Resistant",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "laptop sleeve",
    filters: ["15.6 inch", "water-resistant", "zipper"]
  },
  {
    id: 913,
    name: "Men’s Beanie Hat Wool Knit Winter Warm",
    category: "clothing",
    subcategory: "accessories",
    product_type: "beanie",
    filters: ["wool", "winter", "men's"]
  },
  {
    id: 914,
    name: "LED Vanity Mirror with Touch Sensor Light",
    category: "beauty",
    subcategory: "accessories",
    product_type: "vanity mirror",
    filters: ["LED", "touch sensor", "adjustable"]
  },
  {
    id: 915,
    name: "Cat Litter Mat Waterproof Trapping Design",
    category: "pet supplies",
    subcategory: "cat accessories",
    product_type: "litter mat",
    filters: ["waterproof", "trapping design", "easy clean"]
  },
  {
    id: 916,
    name: "Smartphone Tripod Stand Flexible with Remote",
    category: "electronics",
    subcategory: "mobile accessories",
    product_type: "tripod",
    filters: ["flexible", "remote", "universal"]
  },
  {
    id: 917,
    name: "Women’s Yoga Tank Top Moisture Wicking",
    category: "clothing",
    subcategory: "activewear",
    product_type: "tank top",
    filters: ["yoga", "moisture wicking", "women's"]
  },
  {
    id: 918,
    name: "Silicone Baking Mats Set of 2 Reusable",
    category: "kitchen",
    subcategory: "bakeware",
    product_type: "baking mat",
    filters: ["silicone", "reusable", "set of 2"]
  },
  {
    id: 919,
    name: "Rechargeable Lantern with USB Port 1000 Lumen",
    category: "tools",
    subcategory: "lighting",
    product_type: "lantern",
    filters: ["rechargeable", "USB port", "1000 lumen"]
  },
  {
    id: 920,
    name: "Bamboo Cutting Board with Juice Groove Set",
    category: "kitchen",
    subcategory: "tools",
    product_type: "cutting board",
    filters: ["bamboo", "set", "juice groove"]
  },
  {
    id: 921,
    name: "Car Vacuum Cleaner Handheld High Power",
    category: "automotive",
    subcategory: "cleaning",
    product_type: "car vacuum",
    filters: ["handheld", "high power", "cordless"]
  },
  {
    id: 922,
    name: "Women’s Leather Wallet RFID Blocking",
    category: "accessories",
    subcategory: "wallets",
    product_type: "wallet",
    filters: ["leather", "RFID blocking", "women's"]
  },
  {
    id: 923,
    name: "Magnetic Whiteboard Calendar for Fridge Dry Erase",
    category: "office",
    subcategory: "organization",
    product_type: "calendar",
    filters: ["magnetic", "whiteboard", "dry erase"]
  },
  {
    id: 924,
    name: "Wireless Doorbell Waterproof with LED Indicator",
    category: "electronics",
    subcategory: "home security",
    product_type: "doorbell",
    filters: ["wireless", "LED indicator", "waterproof"]
  },
  {
    id: 925,
    name: "Men’s Cargo Shorts Cotton Multiple Pockets",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "cargo shorts",
    filters: ["cotton", "multiple pockets", "men's"]
  },
  {
    id: 926,
    name: "Women’s Rain Boots Mid-Calf Waterproof Rubber",
    category: "footwear",
    subcategory: "boots",
    product_type: "rain boots",
    filters: ["women's", "mid-calf", "waterproof"]
  },
  {
    id: 927,
    name: "Silicone Ice Cube Tray with Lid Set of 2",
    category: "kitchen",
    subcategory: "barware",
    product_type: "ice cube tray",
    filters: ["silicone", "with lid", "set of 2"]
  },
  {
    id: 928,
    name: "Kids Headphones Volume Limited Foldable",
    category: "electronics",
    subcategory: "audio",
    product_type: "headphones",
    filters: ["kids", "volume limited", "foldable"]
  },
  {
    id: 929,
    name: "Collapsible Water Bottle BPA-Free 20oz",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["collapsible", "BPA-free", "20oz"]
  },
  {
    id: 930,
    name: "Outdoor Camping Chair Foldable with Cup Holder",
    category: "outdoor",
    subcategory: "furniture",
    product_type: "camping chair",
    filters: ["foldable", "cup holder", "outdoor"]
  },
  {
    id: 931,
    name: "Bluetooth Sleep Mask with Built-in Headphones",
    category: "electronics",
    subcategory: "wearables",
    product_type: "sleep mask",
    filters: ["Bluetooth", "built-in headphones", "soft fabric"]
  },
  {
    id: 932,
    name: "3-Tier Shoe Rack Stackable Metal Frame",
    category: "home",
    subcategory: "organization",
    product_type: "shoe rack",
    filters: ["3-tier", "stackable", "metal"]
  },
  {
    id: 933,
    name: "Digital Thermometer for Adults and Kids",
    category: "health",
    subcategory: "monitoring",
    product_type: "thermometer",
    filters: ["digital", "fast reading", "flexible tip"]
  },
  {
    id: 934,
    name: "Women’s Denim Jacket Classic Fit Button Front",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "denim jacket",
    filters: ["women's", "classic fit", "button front"]
  },
  {
    id: 935,
    name: "Magnetic Phone Mount for Car Dashboard Vent",
    category: "automotive",
    subcategory: "phone accessories",
    product_type: "phone mount",
    filters: ["magnetic", "dashboard", "vent"]
  },
  {
    id: 936,
    name: "Dog Training Treat Pouch with Belt Clip",
    category: "pet supplies",
    subcategory: "training",
    product_type: "treat pouch",
    filters: ["belt clip", "treat storage", "zipper"]
  },
  {
    id: 937,
    name: "Smart Digital Bathroom Scale Bluetooth Enabled",
    category: "health",
    subcategory: "monitoring",
    product_type: "bathroom scale",
    filters: ["Bluetooth", "smart", "digital"]
  },
  {
    id: 938,
    name: "Women’s High Waist Biker Shorts with Pockets",
    category: "clothing",
    subcategory: "activewear",
    product_type: "biker shorts",
    filters: ["high waist", "pockets", "women's"]
  },
  {
    id: 939,
    name: "LED Night Light Plug-In Sensor Warm White",
    category: "home",
    subcategory: "lighting",
    product_type: "night light",
    filters: ["LED", "plug-in", "sensor"]
  },
  {
    id: 940,
    name: "Electric Can Opener One-Touch Battery Operated",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "can opener",
    filters: ["electric", "one-touch", "battery operated"]
  },
  {
    id: 941,
    name: "Adjustable Laptop Stand Aluminum Foldable",
    category: "electronics",
    subcategory: "laptop accessories",
    product_type: "laptop stand",
    filters: ["adjustable", "aluminum", "foldable"]
  },
  {
    id: 942,
    name: "Men’s Pajama Pants Cotton Flannel Drawstring",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama pants",
    filters: ["men's", "cotton flannel", "drawstring"]
  },
  {
    id: 943,
    name: "Fleece Throw Blanket 50x60 Inches Lightweight",
    category: "home",
    subcategory: "bedding",
    product_type: "blanket",
    filters: ["fleece", "lightweight", "50x60"]
  },
  {
    id: 944,
    name: "Electric Nail File for Manicure Pedicure",
    category: "beauty",
    subcategory: "nail care",
    product_type: "nail file",
    filters: ["electric", "manicure", "pedicure"]
  },
  {
    id: 945,
    name: "Women’s Slides Sandals EVA Lightweight",
    category: "footwear",
    subcategory: "sandals",
    product_type: "slides",
    filters: ["women's", "EVA", "lightweight"]
  },
  {
    id: 946,
    name: "Hiking Backpack 30L with Hydration Compartment",
    category: "sports",
    subcategory: "hiking gear",
    product_type: "backpack",
    filters: ["30L", "hydration compartment", "adjustable straps"]
  },
  {
    id: 947,
    name: "Pet Car Seat Cover Waterproof Nonslip",
    category: "pet supplies",
    subcategory: "car accessories",
    product_type: "car seat cover",
    filters: ["waterproof", "nonslip", "adjustable"]
  },
  {
    id: 948,
    name: "Tabletop Makeup Organizer with Drawers",
    category: "beauty",
    subcategory: "storage",
    product_type: "makeup organizer",
    filters: ["drawers", "clear plastic", "tabletop"]
  },
  {
    id: 949,
    name: "Electric Kettle Stainless Steel Fast Boil 1.7L",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "electric kettle",
    filters: ["1.7L", "fast boil", "stainless steel"]
  },
  {
    id: 950,
    name: "LED Strip Lights 32ft Color Changing with Remote",
    category: "home",
    subcategory: "decor",
    product_type: "LED strip lights",
    filters: ["32ft", "color changing", "remote"]
  },
  {
    id: 951,
    name: "Anti-Fatigue Kitchen Mat Cushioned 20x39",
    category: "home",
    subcategory: "flooring",
    product_type: "kitchen mat",
    filters: ["anti-fatigue", "cushioned", "20x39"]
  },
  {
    id: 952,
    name: "Wireless Charging Pad 15W Fast Charge",
    category: "electronics",
    subcategory: "charging",
    product_type: "charging pad",
    filters: ["wireless", "15W", "fast charge"]
  },
  {
    id: 953,
    name: "Boys Snow Boots Waterproof Insulated",
    category: "footwear",
    subcategory: "children's",
    product_type: "snow boots",
    filters: ["boys", "waterproof", "insulated"]
  },
  {
    id: 954,
    name: "Scented Candle Soy Wax Vanilla 8oz",
    category: "home",
    subcategory: "aromatherapy",
    product_type: "scented candle",
    filters: ["soy wax", "vanilla", "8oz"]
  },
  {
    id: 955,
    name: "Men’s Running Tank Top Moisture Wicking",
    category: "clothing",
    subcategory: "activewear",
    product_type: "tank top",
    filters: ["men's", "moisture wicking", "running"]
  },
  {
    id: 956,
    name: "Wicker Storage Baskets with Handles Set of 3",
    category: "home",
    subcategory: "organization",
    product_type: "storage basket",
    filters: ["wicker", "with handles", "set of 3"]
  },
  {
    id: 957,
    name: "Bluetooth Speaker Mini Portable Waterproof",
    category: "electronics",
    subcategory: "audio",
    product_type: "Bluetooth speaker",
    filters: ["mini", "portable", "waterproof"]
  },
  {
    id: 958,
    name: "Women’s Sports Bra Seamless Padded",
    category: "clothing",
    subcategory: "underwear",
    product_type: "sports bra",
    filters: ["seamless", "padded", "women's"]
  },
  {
    id: 959,
    name: "Outdoor Patio Umbrella 9ft with Crank",
    category: "outdoor",
    subcategory: "furniture",
    product_type: "patio umbrella",
    filters: ["9ft", "crank", "UV protection"]
  },
  {
    id: 960,
    name: "Pet Grooming Brush for Shedding Dogs Cats",
    category: "pet supplies",
    subcategory: "grooming",
    product_type: "grooming brush",
    filters: ["shedding", "for dogs", "for cats"]
  },
  {
    id: 961,
    name: "Electric Toothbrush Replacement Heads Pack of 8",
    category: "health",
    subcategory: "oral care",
    product_type: "toothbrush heads",
    filters: ["electric", "pack of 8", "soft bristle"]
  },
  {
    id: 962,
    name: "Digital Alarm Clock with USB Port Large Display",
    category: "home",
    subcategory: "bedroom",
    product_type: "alarm clock",
    filters: ["USB port", "large display", "digital"]
  },
  {
    id: 963,
    name: "Microwave Safe Glass Food Storage Containers Set",
    category: "kitchen",
    subcategory: "storage",
    product_type: "food containers",
    filters: ["glass", "microwave safe", "set"]
  },
  {
    id: 964,
    name: "Women’s Leggings High Waist Tummy Control",
    category: "clothing",
    subcategory: "activewear",
    product_type: "leggings",
    filters: ["high waist", "tummy control", "women's"]
  },
  {
    id: 965,
    name: "Kids Toothbrush Electric with Timer",
    category: "health",
    subcategory: "oral care",
    product_type: "kids toothbrush",
    filters: ["electric", "with timer", "soft bristles"]
  },
  {
    id: 966,
    name: "Men’s Waterproof Rain Jacket with Hood",
    category: "clothing",
    subcategory: "outerwear",
    product_type: "rain jacket",
    filters: ["waterproof", "hooded", "men's"]
  },
  {
    id: 967,
    name: "LED Desk Lamp with Adjustable Arm and USB",
    category: "home",
    subcategory: "lighting",
    product_type: "desk lamp",
    filters: ["LED", "adjustable arm", "USB"]
  },
  {
    id: 968,
    name: "Dog Bed Orthopedic Memory Foam Large",
    category: "pet supplies",
    subcategory: "dog beds",
    product_type: "dog bed",
    filters: ["orthopedic", "memory foam", "large"]
  },
  {
    id: 969,
    name: "Mini Projector Portable with HDMI and USB",
    category: "electronics",
    subcategory: "video",
    product_type: "mini projector",
    filters: ["portable", "HDMI", "USB"]
  },
  {
    id: 970,
    name: "Baby Bottles BPA-Free Anti-Colic Set of 4",
    category: "baby",
    subcategory: "feeding",
    product_type: "baby bottles",
    filters: ["BPA-free", "anti-colic", "set of 4"]
  },
  {
    id: 971,
    name: "Nonstick Frying Pan with Lid 10 Inch",
    category: "kitchen",
    subcategory: "cookware",
    product_type: "frying pan",
    filters: ["nonstick", "10 inch", "with lid"]
  },
  {
    id: 972,
    name: "Adjustable Resistance Bands Set for Home Workout",
    category: "sports",
    subcategory: "fitness",
    product_type: "resistance bands",
    filters: ["adjustable", "home workout", "set"]
  },
  {
    id: 973,
    name: "Stainless Steel Water Bottle with Straw 24oz",
    category: "sports",
    subcategory: "hydration",
    product_type: "water bottle",
    filters: ["stainless steel", "with straw", "24oz"]
  },
  {
    id: 974,
    name: "Wireless Keyboard Backlit Slim Rechargeable",
    category: "electronics",
    subcategory: "computer accessories",
    product_type: "keyboard",
    filters: ["wireless", "backlit", "rechargeable"]
  },
  {
    id: 975,
    name: "Women’s Pajama Set Cotton Short Sleeve",
    category: "clothing",
    subcategory: "sleepwear",
    product_type: "pajama set",
    filters: ["cotton", "short sleeve", "women's"]
  },
  {
    id: 976,
    name: "Wall Mounted Spice Rack Organizer 2 Tier",
    category: "kitchen",
    subcategory: "organization",
    product_type: "spice rack",
    filters: ["wall mounted", "2 tier", "metal"]
  },
  {
    id: 977,
    name: "Indoor Plant Grow Light LED Full Spectrum",
    category: "garden",
    subcategory: "tools",
    product_type: "grow light",
    filters: ["LED", "full spectrum", "indoor"]
  },
  {
    id: 978,
    name: "Women’s Turtleneck Sweater Knit Soft",
    category: "clothing",
    subcategory: "tops",
    product_type: "sweater",
    filters: ["turtleneck", "knit", "women's"]
  },
  {
    id: 979,
    name: "Cordless Vacuum Cleaner Stick Lightweight",
    category: "home",
    subcategory: "cleaning",
    product_type: "vacuum cleaner",
    filters: ["cordless", "stick", "lightweight"]
  },
  {
    id: 980,
    name: "Men’s Leather Belt Adjustable Reversible",
    category: "clothing",
    subcategory: "accessories",
    product_type: "belt",
    filters: ["leather", "adjustable", "reversible"]
  },
  {
    id: 981,
    name: "Foam Roller for Muscle Recovery 18 Inch",
    category: "sports",
    subcategory: "fitness",
    product_type: "foam roller",
    filters: ["muscle recovery", "18 inch", "high density"]
  },
  {
    id: 982,
    name: "Dog Harness No Pull Reflective Adjustable",
    category: "pet supplies",
    subcategory: "dog accessories",
    product_type: "dog harness",
    filters: ["no pull", "reflective", "adjustable"]
  },
  {
    id: 983,
    name: "Rechargeable Hand Warmer USB Portable",
    category: "electronics",
    subcategory: "gadgets",
    product_type: "hand warmer",
    filters: ["rechargeable", "USB", "portable"]
  },
  {
    id: 984,
    name: "Camping Cookware Set Nonstick Lightweight",
    category: "outdoor",
    subcategory: "gear",
    product_type: "cookware set",
    filters: ["nonstick", "lightweight", "compact"]
  },
  {
    id: 985,
    name: "Women’s Flip Flops Rubber Sole Casual",
    category: "footwear",
    subcategory: "sandals",
    product_type: "flip flops",
    filters: ["rubber sole", "casual", "women's"]
  },
  {
    id: 986,
    name: "Travel Neck Pillow Memory Foam with Cover",
    category: "travel",
    subcategory: "comfort",
    product_type: "neck pillow",
    filters: ["memory foam", "with cover", "travel"]
  },
  {
    id: 987,
    name: "Mini Dehumidifier for Small Room Quiet Operation",
    category: "home",
    subcategory: "air quality",
    product_type: "dehumidifier",
    filters: ["mini", "quiet", "small room"]
  },
  {
    id: 988,
    name: "Toddler Training Pants Cotton Reusable 5 Pack",
    category: "baby",
    subcategory: "clothing",
    product_type: "training pants",
    filters: ["cotton", "reusable", "5 pack"]
  },
  {
    id: 989,
    name: "LED String Lights Fairy Warm White 33ft",
    category: "home",
    subcategory: "decor",
    product_type: "string lights",
    filters: ["LED", "fairy", "warm white"]
  },
  {
    id: 990,
    name: "Men’s Henley Shirt Long Sleeve Casual",
    category: "clothing",
    subcategory: "tops",
    product_type: "henley shirt",
    filters: ["long sleeve", "casual", "men's"]
  },
  {
    id: 991,
    name: "Electric Egg Cooker 6 Egg Capacity Auto Shut-Off",
    category: "kitchen",
    subcategory: "appliances",
    product_type: "egg cooker",
    filters: ["6 egg", "auto shut-off", "electric"]
  },
  {
    id: 992,
    name: "Baby Play Mat Foam Reversible Non-Toxic",
    category: "baby",
    subcategory: "toys",
    product_type: "play mat",
    filters: ["foam", "reversible", "non-toxic"]
  },
  {
    id: 993,
    name: "Men’s Cargo Joggers Drawstring Elastic Waist",
    category: "clothing",
    subcategory: "bottoms",
    product_type: "cargo joggers",
    filters: ["drawstring", "elastic waist", "men's"]
  },
  {
    id: 994,
    name: "Digital Kitchen Timer Magnetic Back Stand",
    category: "kitchen",
    subcategory: "tools",
    product_type: "kitchen timer",
    filters: ["digital", "magnetic", "stand"]
  },
  {
    id: 995,
    name: "Bluetooth Shower Speaker Waterproof Suction Cup",
    category: "electronics",
    subcategory: "audio",
    product_type: "shower speaker",
    filters: ["Bluetooth", "waterproof", "suction cup"]
  },
  {
    id: 996,
    name: "Glass Teapot with Infuser 1 Liter Heat Resistant",
    category: "kitchen",
    subcategory: "drinkware",
    product_type: "teapot",
    filters: ["glass", "infuser", "1 liter"]
  },
  {
    id: 997,
    name: "Kids Scooter 3-Wheel Adjustable Height LED Wheels",
    category: "toys",
    subcategory: "ride-ons",
    product_type: "scooter",
    filters: ["3-wheel", "adjustable height", "LED wheels"]
  },
  {
    id: 998,
    name: "Indoor Slippers Memory Foam Men’s Non-Slip",
    category: "footwear",
    subcategory: "indoor",
    product_type: "slippers",
    filters: ["memory foam", "non-slip", "men's"]
  },
  {
    id: 999,
    name: "Women’s Handbag Faux Leather Tote with Zipper",
    category: "accessories",
    subcategory: "handbags",
    product_type: "handbag",
    filters: ["faux leather", "tote", "zipper"]
  },
  {
    id: 1000,
    name: "USB Desk Fan Portable Adjustable Speed",
    category: "home",
    subcategory: "cooling",
    product_type: "desk fan",
    filters: ["USB", "portable", "adjustable speed"]
  },
  {
    id: 1001,
    name: "Compact Digital Air Fryer 4.5Qt",
    product_type: "air fryer",
    category: "kitchen",
    subcategory: "appliances",
    filters: ["digital controls", "nonstick basket", "4.5 quart", "compact"]
  },
  {
    id: 1002,
    name: "Stainless Steel Air Fryer XL 6.8Qt",
    product_type: "air fryer",
    category: "kitchen",
    subcategory: "appliances",
    filters: ["stainless steel", "6.8 quart", "extra large", "easy to clean"]
  },
  {
    id: 1003,
    name: "Dual Basket Smart Air Fryer 7Qt",
    product_type: "air fryer",
    category: "kitchen",
    subcategory: "appliances",
    filters: ["dual basket", "touchscreen", "7 quart", "preset modes"]
  },
  {
    id: 1004,
    name: "Oil-Less Compact Air Fryer 2Qt",
    product_type: "air fryer",
    category: "kitchen",
    subcategory: "appliances",
    filters: ["2 quart", "oil-less", "compact", "dial timer"]
  },
  {
    id: 1005,
    name: "Family Size Air Fryer Oven Combo",
    product_type: "air fryer",
    category: "kitchen",
    subcategory: "appliances",
    filters: ["oven combo", "family size", "multi-function", "large capacity"]
  },
  
  {
    id: 1006,
    name: "LEGO Classic Bricks and Animals 500pcs",
    product_type: "lego set",
    category: "toys",
    subcategory: "building sets",
    filters: ["500 pieces", "classic", "ages 5+", "animal theme"]
  },
  {
    id: 1007,
    name: "LEGO City Fire Station Playset",
    product_type: "lego set",
    category: "toys",
    subcategory: "building sets",
    filters: ["fire station", "vehicle", "ages 6+", "interactive"]
  },
  {
    id: 1008,
    name: "LEGO Friends Treehouse Set 600pcs",
    product_type: "lego set",
    category: "toys",
    subcategory: "building sets",
    filters: ["600 pieces", "treehouse", "creative play", "ages 7+"]
  },
  {
    id: 1009,
    name: "LEGO Technic Monster Truck 2-in-1",
    product_type: "lego set",
    category: "toys",
    subcategory: "building sets",
    filters: ["technic", "monster truck", "2-in-1", "engineering build"]
  },
  {
    id: 1010,
    name: "LEGO Star Wars TIE Fighter 432pcs",
    product_type: "lego set",
    category: "toys",
    subcategory: "building sets",
    filters: ["star wars", "TIE fighter", "collectible", "ages 8+"]
  },
  
  {
    id: 1011,
    name: "Squeaky Plush Duck Dog Toy",
    product_type: "dog toy",
    category: "pet supplies",
    subcategory: "dog toys",
    filters: ["plush", "squeaky", "medium dogs", "chew-friendly"]
  },
  {
    id: 1012,
    name: "Durable Rope Tug Dog Toy",
    product_type: "dog toy",
    category: "pet supplies",
    subcategory: "dog toys",
    filters: ["rope", "tug of war", "chew-resistant", "large dogs"]
  },
  {
    id: 1013,
    name: "Interactive Treat Puzzle Dog Toy",
    product_type: "dog toy",
    category: "pet supplies",
    subcategory: "dog toys",
    filters: ["interactive", "treat dispensing", "brain stimulation", "non-slip base"]
  },
  {
    id: 1014,
    name: "Tennis Ball Multipack for Dogs",
    product_type: "dog toy",
    category: "pet supplies",
    subcategory: "dog toys",
    filters: ["tennis ball", "pack of 6", "non-toxic", "fetch"]
  },
  {
    id: 1015,
    name: "Rubber Chew Bone with Nubs",
    product_type: "dog toy",
    category: "pet supplies",
    subcategory: "dog toys",
    filters: ["rubber", "chew-safe", "nubs", "teeth cleaning"]
  },
  
  {
    id: 1016,
    name: "Wide Brim Straw Sun Hat with Chin Strap",
    product_type: "sun hat",
    category: "accessories",
    subcategory: "hats",
    filters: ["wide brim", "straw", "chin strap", "UV protection"]
  },
  {
    id: 1017,
    name: "Packable Floppy Sun Hat for Travel",
    product_type: "sun hat",
    category: "accessories",
    subcategory: "hats",
    filters: ["packable", "lightweight", "beach", "travel"]
  },
  {
    id: 1018,
    name: "UPF 50+ Sun Hat with Neck Flap",
    product_type: "sun hat",
    category: "accessories",
    subcategory: "hats",
    filters: ["UPF 50+", "neck flap", "adjustable", "for hiking"]
  },
  {
    id: 1019,
    name: "Foldable Canvas Sun Hat with Bow",
    product_type: "sun hat",
    category: "accessories",
    subcategory: "hats",
    filters: ["foldable", "canvas", "decorative bow", "casual"]
  },
  {
    id: 1020,
    name: "Boho Crochet Sun Hat for Women",
    product_type: "sun hat",
    category: "accessories",
    subcategory: "hats",
    filters: ["crochet", "boho style", "breathable", "adjustable"]
  },
  
  {
    id: 1021,
    name: "Soft Makeup Brush Set 10-Piece",
    product_type: "makeup brush set",
    category: "beauty",
    subcategory: "tools",
    filters: ["10-piece", "synthetic bristles", "for foundation", "soft touch"]
  },
  {
    id: 1022,
    name: "Professional Makeup Brushes with Case",
    product_type: "makeup brush set",
    category: "beauty",
    subcategory: "tools",
    filters: ["professional", "travel case", "multi-use", "for contour"]
  },
  {
    id: 1023,
    name: "Eco-Friendly Bamboo Makeup Brush Kit",
    product_type: "makeup brush set",
    category: "beauty",
    subcategory: "tools",
    filters: ["bamboo", "eco-friendly", "5-piece", "compact"]
  },
  {
    id: 1024,
    name: "Rose Gold Makeup Brush Set 12-Pack",
    product_type: "makeup brush set",
    category: "beauty",
    subcategory: "tools",
    filters: ["12-pack", "rose gold", "for eyeshadow", "luxury"]
  },
  {
    id: 1025,
    name: "Makeup Brushes with Silicone Blender",
    product_type: "makeup brush set",
    category: "beauty",
    subcategory: "tools",
    filters: ["brush & blender", "blending sponge", "foundation", "compact"]
  },
  
  {
    id: 1026,
    name: "Sweat-Wicking High-Rise Sweatpants",
    product_type: "sweatpants",
    category: "clothing",
    subcategory: "activewear",
    filters: ["sweat-wicking", "high-rise", "drawstring", "athletic"]
  },
  {
    id: 1027,
    name: "Fleece-Lined Jogger Sweatpants",
    product_type: "sweatpants",
    category: "clothing",
    subcategory: "loungewear",
    filters: ["fleece-lined", "elastic cuffs", "winter", "soft"]
  },
  {
    id: 1028,
    name: "Cotton Relaxed Fit Sweatpants",
    product_type: "sweatpants",
    category: "clothing",
    subcategory: "basics",
    filters: ["cotton", "relaxed fit", "side pockets", "adjustable waist"]
  },
  {
    id: 1029,
    name: "Cuffed Sweatpants with Zip Pockets",
    product_type: "sweatpants",
    category: "clothing",
    subcategory: "streetwear",
    filters: ["cuffed", "zip pockets", "slim fit", "modern style"]
  },
  {
    id: 1030,
    name: "French Terry Lounge Sweatpants",
    product_type: "sweatpants",
    category: "clothing",
    subcategory: "loungewear",
    filters: ["french terry", "lounge", "tapered", "soft material"]
  }

];

module.exports = productCatalog;
