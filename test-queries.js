module.exports = [
    {
        query: "black dress",
        expectedCategories: ["Dresses"],
        expectedPriceRange: { min: 20, max: 200 }
    },
    {
        query: "men's running shoes",
        expectedCategories: ["Shoes", "Athletic"],
        expectedPriceRange: { min: 50, max: 150 }
    },
    {
        query: "leather handbag",
        expectedCategories: ["Accessories", "Bags"],
        expectedPriceRange: { min: 30, max: 300 }
    },
    {
        query: "casual jeans",
        expectedCategories: ["Pants", "Denim"],
        expectedPriceRange: { min: 25, max: 100 }
    },
    {
        query: "summer t-shirt",
        expectedCategories: ["Tops"],
        expectedPriceRange: { min: 10, max: 50 }
    }
]; 