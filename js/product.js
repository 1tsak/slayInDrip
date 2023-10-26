const urlParams = new URLSearchParams(window.location.search);

const productParam = urlParams.get('product');

const productInfo = {
    "sneakers": {
        title: "Red Sneakers",
        description: `Elevate your footwear game with our eye-catching Red Sneakers.
        Combining fashion and function, these sneakers are the perfect blend
        of comfort and style. Crafted with care, the vibrant red hue adds a
        pop of color to any outfit, making a bold statement wherever you go.
        Designed for both casual and active wear, these sneakers feature a
        cushioned sole that provides superior comfort and support throughout
        the day. The lace-up design ensures a secure fit, while the
        breathable materials keep your feet feeling fresh. Whether you're
        strolling down the street or hitting the gym, these sneakers are
        your go-to choice. Embrace the energy of red and step confidently
        into your day with these versatile and dynamic sneakers. Make a
        lasting impression with every step you take while enjoying the
        ultimate comfort and undeniable style of our Red Sneakers.`,
        price: "₹80,00",
        // Add other product details here
    },
    "oversized": {
        title: "Comfy Chic: Oversized T-Shirt and Pants Set",
        description: `Elevate your footwear game with our eye-catching Red Sneakers.
        Combining fashion and function, these sneakers are the perfect blend
        of comfort and style. Crafted with care, the vibrant red hue adds a
        pop of color to any outfit, making a bold statement wherever you go.
        Designed for both casual and active wear, these sneakers feature a
        cushioned sole that provides superior comfort and support throughout
        the day. The lace-up design ensures a secure fit, while the
        breathable materials keep your feet feeling fresh. Whether you're
        strolling down the street or hitting the gym, these sneakers are
        your go-to choice. Embrace the energy of red and step confidently
        into your day with these versatile and dynamic sneakers. Make a
        lasting impression with every step you take while enjoying the
        ultimate comfort and undeniable style of our Red Sneakers.`,
        price: "₹80,00",
        // Add other product details here
    },
    "tshirt": {
        title: "Ultimate Comfort: Classic Oversized T-Shirt",
        description: `Elevate your footwear game with our eye-catching Red Sneakers.
        Combining fashion and function, these sneakers are the perfect blend
        of comfort and style. Crafted with care, the vibrant red hue adds a
        pop of color to any outfit, making a bold statement wherever you go.
        Designed for both casual and active wear, these sneakers feature a
        cushioned sole that provides superior comfort and support throughout
        the day. The lace-up design ensures a secure fit, while the
        breathable materials keep your feet feeling fresh. Whether you're
        strolling down the street or hitting the gym, these sneakers are
        your go-to choice. Embrace the energy of red and step confidently
        into your day with these versatile and dynamic sneakers. Make a
        lasting impression with every step you take while enjoying the
        ultimate comfort and undeniable style of our Red Sneakers.`,
        price: "₹80,00",
        // Add other product details here
    },
    "highneck": {
        title: "Sleek Comfort: High Neck Full Sleeve T-Shirt",
        description: `Elevate your footwear game with our eye-catching Red Sneakers.
        Combining fashion and function, these sneakers are the perfect blend
        of comfort and style. Crafted with care, the vibrant red hue adds a
        pop of color to any outfit, making a bold statement wherever you go.
        Designed for both casual and active wear, these sneakers feature a
        cushioned sole that provides superior comfort and support throughout
        the day. The lace-up design ensures a secure fit, while the
        breathable materials keep your feet feeling fresh. Whether you're
        strolling down the street or hitting the gym, these sneakers are
        your go-to choice. Embrace the energy of red and step confidently
        into your day with these versatile and dynamic sneakers. Make a
        lasting impression with every step you take while enjoying the
        ultimate comfort and undeniable style of our Red Sneakers.`,
        price: "₹80,00",
        // Add other product details here
    },
    "hoodie": {
        title: "Cozy Vibes: Essential Hoodies for Every Wardrobe",
        description: `Elevate your footwear game with our eye-catching Red Sneakers.
        Combining fashion and function, these sneakers are the perfect blend
        of comfort and style. Crafted with care, the vibrant red hue adds a
        pop of color to any outfit, making a bold statement wherever you go.
        Designed for both casual and active wear, these sneakers feature a
        cushioned sole that provides superior comfort and support throughout
        the day. The lace-up design ensures a secure fit, while the
        breathable materials keep your feet feeling fresh. Whether you're
        strolling down the street or hitting the gym, these sneakers are
        your go-to choice. Embrace the energy of red and step confidently
        into your day with these versatile and dynamic sneakers. Make a
        lasting impression with every step you take while enjoying the
        ultimate comfort and undeniable style of our Red Sneakers.`,
        price: "₹80,00",
        // Add other product details here
    },
    // Add more products here
};
const selectedProduct = productInfo[productParam];
document.getElementById("product-title").innerHTML = selectedProduct.title;
document.getElementById("product-description").innerHTML = selectedProduct.description;
document.getElementById("product-price").innerHTML = `MRP. ${selectedProduct.price}`;