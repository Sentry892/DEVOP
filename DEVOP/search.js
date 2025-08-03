// Product data
const products = [
    {
        id: 1,
        title: "Discord-like Chat System",
        description: "A simple system design of a Discord-like app showing how real-time messages flow through WebSocket servers, APIs, and databases. Great for beginners learning scalable chat architecture basics.",
        image: "img/pngegg.png",
        difficulty: "beginner",
        category: "chat",
        price: "Free"
    },
    {
        id: 2,
        title: "E-commerce Platform",
        description: "Complete e-commerce system design covering product catalog, shopping cart, payment processing, and order management. Learn about microservices and database design.",
        image: "img/pngegg (9).png",
        difficulty: "intermediate",
        category: "ecommerce",
        price: "$2.99"
    },
    {
        id: 3,
        title: "Instagram-like Social Media",
        description: "Social media platform design with photo sharing, user feeds, follow system, and recommendation algorithms. Master content delivery networks and caching strategies.",
        image: "img/pngegg (2).png",
        difficulty: "intermediate",
        category: "social",
        price: "$2.99"
    },
    {
        id: 4,
        title: "Netflix Streaming Service",
        description: "Video streaming platform architecture with CDN optimization, adaptive bitrate streaming, and recommendation systems. Advanced content delivery and scalability patterns.",
        image: "img/pngegg (4).png",
        difficulty: "advanced",
        category: "streaming",
        price: "$2.99"
    },
    {
        id: 5,
        title: "WhatsApp Messaging",
        description: "End-to-end encrypted messaging system with group chats, file sharing, and offline message queuing. Learn about encryption, message routing, and push notifications.",
        image: "img/pngegg (5).png",
        difficulty: "intermediate",
        category: "chat",
        price: "$2.99"
    },
    {
        id: 6,
        title: "Uber-like Ride Sharing",
        description: "Real-time ride-sharing platform with location tracking, driver matching, payment processing, and surge pricing algorithms. Master real-time systems and geolocation services.",
        image: "img/pngegg (8).png",
        difficulty: "advanced",
        category: "social",
        price: "$2.99"
    },
    {
        id: 7,
        title: "Twitter Clone",
        description: "Microblogging platform with tweet composition, timeline generation, hashtag trending, and real-time notifications. Learn about feed generation and social graph algorithms.",
        image: "img/pngegg (3).png",
        difficulty: "beginner",
        category: "social",
        price: "$2.99"
    },
    {
        id: 8,
        title: "Amazon-like Marketplace",
        description: "Multi-vendor marketplace with inventory management, seller dashboards, review systems, and recommendation engines. Complex e-commerce architecture patterns.",
        image: "img/pngegg (6).png",
        difficulty: "advanced",
        category: "ecommerce",
        price: "$2.99"
    }
];

// Reusable Product Card Component
function createProductCard(product) {
    return `
        <div class="product-card" data-id="${product.id}">
            <div class="product-card-title">
                <h3>${product.title}</h3>
            </div>
            <div class="product-card-img">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-card-description">
                <p>${product.description}</p>
            </div>
            <div class="product-card-meta">
                <span class="product-card-difficulty ${product.difficulty}">${product.difficulty.toUpperCase()}</span>
                <span class="product-card-category">${product.category.toUpperCase()}</span>
            </div>
            <div class="product-card-button">
                <a href="product.html?id=${product.id}" class="product-card-button-link">
                    ${product.price === "Free" ? "Get for free" : `Buy for ${product.price}`}
                </a>
            </div>
        </div>
    `;
}

// Search and filter functionality
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    const categoryFilter = document.getElementById('categoryFilter').value;

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.title.toLowerCase().includes(searchTerm) ||
                             product.description.toLowerCase().includes(searchTerm);
        const matchesDifficulty = !difficultyFilter || product.difficulty === difficultyFilter;
        const matchesCategory = !categoryFilter || product.category === categoryFilter;

        return matchesSearch && matchesDifficulty && matchesCategory;
    });

    displayProducts(filteredProducts);
}

// Display products in the grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('productsGrid');
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; color: #ffffff; font-size: 0.8rem;">
                <p>No tutorials found matching your criteria.</p>
                <p>Try adjusting your search or filters.</p>
            </div>
        `;
        return;
    }

    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
}

// Handle product click
function handleProductClick(productId) {
    window.location.href = `product.html?id=${productId}`;
}

// Initialize the page
function initializeCatalog() {
    // Display all products initially
    displayProducts(products);

    // Add event listeners
    document.getElementById('searchInput').addEventListener('input', filterProducts);
    document.getElementById('searchButton').addEventListener('click', filterProducts);
    document.getElementById('difficultyFilter').addEventListener('change', filterProducts);
    document.getElementById('categoryFilter').addEventListener('change', filterProducts);

    // Add enter key support for search
    document.getElementById('searchInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            filterProducts();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeCatalog);

// Export functions for potential reuse
window.ProductCatalog = {
    createProductCard,
    filterProducts,
    displayProducts,
    handleProductClick,
    products
}; 