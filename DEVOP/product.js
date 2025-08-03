// Detailed product data with comprehensive information
const detailedProducts = {
    1: {
        id: 1,
        title: "Discord-like Chat System",
        shortDescription: "A simple system design of a Discord-like app showing how real-time messages flow through WebSocket servers, APIs, and databases.",
        description: "This comprehensive tutorial covers the complete architecture of a Discord-like chat application. You'll learn how to design a scalable real-time messaging system that can handle millions of concurrent users. The tutorial includes detailed explanations of WebSocket connections, message routing, user authentication, and database design patterns.",
        image: "img/pngegg.png",
        architectureImage: "img/diagram-removebg-preview (1).png",
        difficulty: "beginner",
        category: "chat",
        price: "Free",
        learningObjectives: [
            "Understand WebSocket connections and real-time communication",
            "Design scalable message routing systems",
            "Implement user authentication and authorization",
            "Design efficient database schemas for chat applications",
            "Handle message persistence and delivery guarantees",
            "Implement typing indicators and online status",
            "Design notification systems for mentions and DMs"
        ],
        detailedDescription: "This tutorial walks you through building a Discord-like chat system from scratch. We start with the basic requirements and gradually build up to a production-ready architecture. You'll learn about the challenges of real-time communication, including handling connection drops, message ordering, and ensuring message delivery to all intended recipients. The tutorial covers both the technical implementation and the business logic behind chat applications.",
        architectureExplanation: "The architecture consists of multiple layers: a load balancer distributing WebSocket connections, WebSocket servers handling real-time communication, API servers for RESTful operations, message queues for reliable message delivery, and databases for persistent storage. We use Redis for caching user sessions and message history, while PostgreSQL stores user data and message metadata.",
        keyComponents: [
            "WebSocket Servers: Handle real-time bidirectional communication between clients and servers",
            "API Gateway: Routes HTTP requests to appropriate microservices",
            "Message Queue: Ensures reliable message delivery and handles high traffic",
            "User Service: Manages user authentication, profiles, and relationships",
            "Message Service: Handles message storage, retrieval, and delivery",
            "Notification Service: Manages push notifications and email alerts",
            "File Storage: Handles image and file uploads for messages"
        ],
        implementationSteps: [
            "Set up the basic project structure and development environment",
            "Design the database schema for users, channels, and messages",
            "Implement user authentication and session management",
            "Create WebSocket connection handling and message routing",
            "Build the message persistence and retrieval system",
            "Implement real-time features like typing indicators",
            "Add file upload and media sharing capabilities",
            "Deploy the application with proper monitoring and logging"
        ],
        prerequisites: [
            "Basic understanding of web technologies (HTML, CSS, JavaScript)",
            "Familiarity with backend development concepts",
            "Knowledge of databases and SQL",
            "Understanding of HTTP and REST APIs",
            "Basic networking concepts"
        ]
    },
    2: {
        id: 2,
        title: "E-commerce Platform",
        shortDescription: "Complete e-commerce system design covering product catalog, shopping cart, payment processing, and order management.",
        description: "Build a full-featured e-commerce platform that can handle thousands of products, millions of users, and secure payment processing. This tutorial covers everything from product catalog management to order fulfillment and customer support systems.",
        image: "img/pngegg (9).png",
        architectureImage: "img/pngegg (9).png",
        difficulty: "intermediate",
        category: "ecommerce",
        price: "$2.99",
        learningObjectives: [
            "Design scalable product catalog and inventory management",
            "Implement secure payment processing systems",
            "Build shopping cart and checkout workflows",
            "Create order management and fulfillment systems",
            "Design recommendation and search engines",
            "Implement user reviews and ratings",
            "Handle high-traffic scenarios and caching strategies"
        ],
        detailedDescription: "This comprehensive e-commerce tutorial covers the complete lifecycle of an online store. You'll learn how to design systems that can handle product catalogs with millions of items, secure payment processing, inventory management, and order fulfillment. The tutorial includes advanced topics like recommendation engines, search optimization, and handling peak traffic during sales events.",
        architectureExplanation: "The e-commerce platform uses a microservices architecture with separate services for products, users, orders, payments, and inventory. We implement caching at multiple levels using Redis and CDN, and use message queues for asynchronous processing of orders and notifications.",
        keyComponents: [
            "Product Catalog Service: Manages product information, categories, and inventory",
            "User Management Service: Handles user accounts, profiles, and preferences",
            "Shopping Cart Service: Manages cart state and checkout process",
            "Payment Service: Processes payments and handles multiple payment methods",
            "Order Management Service: Tracks orders from creation to fulfillment",
            "Inventory Service: Manages stock levels and availability",
            "Search Service: Provides fast product search and filtering",
            "Recommendation Engine: Suggests products based on user behavior"
        ],
        implementationSteps: [
            "Design the product catalog and inventory database schema",
            "Implement user authentication and profile management",
            "Build the shopping cart and checkout system",
            "Integrate payment processing with multiple providers",
            "Create order management and tracking systems",
            "Implement search and recommendation features",
            "Add inventory management and stock tracking",
            "Deploy with monitoring, logging, and analytics"
        ],
        prerequisites: [
            "Understanding of web development and APIs",
            "Knowledge of database design and SQL",
            "Familiarity with payment processing concepts",
            "Basic understanding of microservices architecture",
            "Experience with caching and performance optimization"
        ]
    },
    3: {
        id: 3,
        title: "Instagram-like Social Media",
        shortDescription: "Social media platform design with photo sharing, user feeds, follow system, and recommendation algorithms.",
        description: "Create a social media platform similar to Instagram with photo sharing, user feeds, stories, and advanced recommendation systems. Learn how to handle massive amounts of media content and build engaging user experiences.",
        image: "img/pngegg (2).png",
        architectureImage: "img/pngegg (2).png",
        difficulty: "intermediate",
        category: "social",
        price: "$2.99",
        learningObjectives: [
            "Design media storage and content delivery networks",
            "Build user feed generation algorithms",
            "Implement follow/unfollow and social graph systems",
            "Create story and temporary content features",
            "Design recommendation and discovery algorithms",
            "Handle media upload, processing, and optimization",
            "Implement real-time notifications and interactions"
        ],
        detailedDescription: "This tutorial covers building a social media platform that can handle millions of users sharing photos and videos. You'll learn about content delivery networks, feed generation algorithms, and how to create engaging user experiences. The tutorial includes advanced topics like machine learning for recommendations and handling viral content.",
        architectureExplanation: "The platform uses a distributed architecture with CDN for media delivery, microservices for different features, and sophisticated algorithms for feed generation and recommendations. We implement caching strategies and use graph databases for social relationships.",
        keyComponents: [
            "Media Service: Handles photo/video upload, processing, and storage",
            "Feed Service: Generates personalized user feeds",
            "Social Graph Service: Manages follow relationships and connections",
            "Story Service: Handles temporary content and stories",
            "Recommendation Engine: Suggests content and users to follow",
            "Notification Service: Manages real-time notifications",
            "Content Moderation Service: Filters inappropriate content",
            "Analytics Service: Tracks user engagement and metrics"
        ],
        implementationSteps: [
            "Design the media storage and CDN architecture",
            "Implement user authentication and profile systems",
            "Build the follow/unfollow and social graph",
            "Create feed generation algorithms",
            "Add story and temporary content features",
            "Implement recommendation systems",
            "Add real-time notifications and interactions",
            "Deploy with content moderation and analytics"
        ],
        prerequisites: [
            "Understanding of web development and APIs",
            "Knowledge of media processing and storage",
            "Familiarity with recommendation algorithms",
            "Basic understanding of CDN and caching",
            "Experience with real-time systems"
        ]
    },
    4: {
        id: 4,
        title: "Netflix Streaming Service",
        shortDescription: "Video streaming platform architecture with CDN optimization, adaptive bitrate streaming, and recommendation systems.",
        description: "Build a video streaming platform that can deliver high-quality content to millions of users worldwide. Learn about video encoding, adaptive bitrate streaming, content delivery networks, and recommendation algorithms.",
        image: "img/pngegg (4).png",
        architectureImage: "img/diagram-removebg-preview (1).png",
        difficulty: "advanced",
        category: "streaming",
        price: "$2.99",
        learningObjectives: [
            "Design global content delivery networks",
            "Implement adaptive bitrate streaming protocols",
            "Build video encoding and transcoding pipelines",
            "Create sophisticated recommendation algorithms",
            "Handle massive video storage and distribution",
            "Design analytics for viewer behavior",
            "Implement content licensing and DRM systems"
        ],
        detailedDescription: "This advanced tutorial covers building a Netflix-like streaming service. You'll learn about video processing pipelines, global CDN distribution, adaptive streaming protocols, and machine learning for content recommendations. The tutorial includes handling peak traffic during popular releases and optimizing for different devices and network conditions.",
        architectureExplanation: "The streaming platform uses a multi-region architecture with edge servers for content delivery, sophisticated video processing pipelines, and machine learning systems for recommendations. We implement adaptive streaming and handle massive amounts of video data.",
        keyComponents: [
            "Video Processing Service: Handles encoding, transcoding, and optimization",
            "Content Delivery Network: Distributes video content globally",
            "Streaming Service: Manages adaptive bitrate streaming",
            "Recommendation Engine: Suggests content based on viewing history",
            "User Management Service: Handles subscriptions and preferences",
            "Analytics Service: Tracks viewing behavior and metrics",
            "Content Management Service: Manages video metadata and licensing",
            "DRM Service: Handles content protection and licensing"
        ],
        implementationSteps: [
            "Design the global CDN and edge server architecture",
            "Implement video processing and encoding pipelines",
            "Build adaptive streaming and player systems",
            "Create recommendation and discovery algorithms",
            "Add user management and subscription systems",
            "Implement analytics and viewer tracking",
            "Add content management and licensing systems",
            "Deploy with monitoring, DRM, and global distribution"
        ],
        prerequisites: [
            "Advanced understanding of distributed systems",
            "Knowledge of video processing and streaming protocols",
            "Familiarity with CDN and edge computing",
            "Understanding of machine learning and recommendations",
            "Experience with high-scale systems and global distribution"
        ]
    },
    5: {
        id: 5,
        title: "WhatsApp Messaging",
        shortDescription: "End-to-end encrypted messaging system with group chats, file sharing, and offline message queuing.",
        description: "Build a secure messaging platform similar to WhatsApp with end-to-end encryption, group chats, file sharing, and offline message queuing. Learn about encryption protocols, message routing, and push notification systems.",
        image: "img/pngegg (5).png",
        architectureImage: "img/pngegg (5).png",
        difficulty: "intermediate",
        category: "chat",
        price: "$2.99",
        learningObjectives: [
            "Understand WebSocket connections and real-time communication",
            "Design scalable message routing systems",
            "Implement user authentication and authorization",
            "Design efficient database schemas for chat applications",
            "Handle message persistence and delivery guarantees",
            "Implement typing indicators and online status",
            "Design notification systems for mentions and DMs"
        ],
        detailedDescription: "This tutorial walks you through building a Discord-like chat system from scratch. We start with the basic requirements and gradually build up to a production-ready architecture. You'll learn about the challenges of real-time communication, including handling connection drops, message ordering, and ensuring message delivery to all intended recipients. The tutorial covers both the technical implementation and the business logic behind chat applications.",
        architectureExplanation: "The architecture consists of multiple layers: a load balancer distributing WebSocket connections, WebSocket servers handling real-time communication, API servers for RESTful operations, message queues for reliable message delivery, and databases for persistent storage. We use Redis for caching user sessions and message history, while PostgreSQL stores user data and message metadata.",
        keyComponents: [
            "WebSocket Servers: Handle real-time bidirectional communication between clients and servers",
            "API Gateway: Routes HTTP requests to appropriate microservices",
            "Message Queue: Ensures reliable message delivery and handles high traffic",
            "User Service: Manages user authentication, profiles, and relationships",
            "Message Service: Handles message storage, retrieval, and delivery",
            "Notification Service: Manages push notifications and email alerts",
            "File Storage: Handles image and file uploads for messages"
        ],
        implementationSteps: [
            "Set up the basic project structure and development environment",
            "Design the database schema for users, channels, and messages",
            "Implement user authentication and session management",
            "Create WebSocket connection handling and message routing",
            "Build the message persistence and retrieval system",
            "Implement real-time features like typing indicators",
            "Add file upload and media sharing capabilities",
            "Deploy the application with proper monitoring and logging"
        ],
        prerequisites: [
            "Basic understanding of web technologies (HTML, CSS, JavaScript)",
            "Familiarity with backend development concepts",
            "Knowledge of databases and SQL",
            "Understanding of HTTP and REST APIs",
            "Basic networking concepts"
        ]
    },
    6: {
        id: 6,
        title: "Uber-like Ride Sharing",
        shortDescription: "Real-time ride-sharing platform with location tracking, driver matching, payment processing, and surge pricing algorithms.",
        description: "Build a ride-sharing platform similar to Uber with real-time location tracking, driver matching algorithms, payment processing, and dynamic pricing. Learn about geolocation services, real-time systems, and complex matching algorithms.",
        image: "img/pngegg (8).png",
        architectureImage: "img/pngegg (8).png",
        difficulty: "advanced",
        category: "social",
        price: "$2.99",
        learningObjectives: [
            "Understand WebSocket connections and real-time communication",
            "Design scalable message routing systems",
            "Implement user authentication and authorization",
            "Design efficient database schemas for chat applications",
            "Handle message persistence and delivery guarantees",
            "Implement typing indicators and online status",
            "Design notification systems for mentions and DMs"
        ],
        detailedDescription: "This tutorial walks you through building a Discord-like chat system from scratch. We start with the basic requirements and gradually build up to a production-ready architecture. You'll learn about the challenges of real-time communication, including handling connection drops, message ordering, and ensuring message delivery to all intended recipients. The tutorial covers both the technical implementation and the business logic behind chat applications.",
        architectureExplanation: "The architecture consists of multiple layers: a load balancer distributing WebSocket connections, WebSocket servers handling real-time communication, API servers for RESTful operations, message queues for reliable message delivery, and databases for persistent storage. We use Redis for caching user sessions and message history, while PostgreSQL stores user data and message metadata.",
        keyComponents: [
            "WebSocket Servers: Handle real-time bidirectional communication between clients and servers",
            "API Gateway: Routes HTTP requests to appropriate microservices",
            "Message Queue: Ensures reliable message delivery and handles high traffic",
            "User Service: Manages user authentication, profiles, and relationships",
            "Message Service: Handles message storage, retrieval, and delivery",
            "Notification Service: Manages push notifications and email alerts",
            "File Storage: Handles image and file uploads for messages"
        ],
        implementationSteps: [
            "Set up the basic project structure and development environment",
            "Design the database schema for users, channels, and messages",
            "Implement user authentication and session management",
            "Create WebSocket connection handling and message routing",
            "Build the message persistence and retrieval system",
            "Implement real-time features like typing indicators",
            "Add file upload and media sharing capabilities",
            "Deploy the application with proper monitoring and logging"
        ],
        prerequisites: [
            "Basic understanding of web technologies (HTML, CSS, JavaScript)",
            "Familiarity with backend development concepts",
            "Knowledge of databases and SQL",
            "Understanding of HTTP and REST APIs",
            "Basic networking concepts"
        ]
    },
    7: {
        id: 7,
        title: "Twitter Clone",
        shortDescription: "Microblogging platform with tweet composition, timeline generation, hashtag trending, and real-time notifications.",
        description: "Create a microblogging platform similar to Twitter with tweet composition, timeline generation, hashtag trending, and real-time notifications. Learn about feed generation algorithms, social graph management, and viral content handling.",
        image: "img/pngegg (6).png",
        architectureImage: "img/pngegg (3).png",
        difficulty: "beginner",
        category: "social",
        price: "$2.99",
        learningObjectives: [
            "Understand WebSocket connections and real-time communication",
            "Design scalable message routing systems",
            "Implement user authentication and authorization",
            "Design efficient database schemas for chat applications",
            "Handle message persistence and delivery guarantees",
            "Implement typing indicators and online status",
            "Design notification systems for mentions and DMs"
        ],
        detailedDescription: "This tutorial walks you through building a Discord-like chat system from scratch. We start with the basic requirements and gradually build up to a production-ready architecture. You'll learn about the challenges of real-time communication, including handling connection drops, message ordering, and ensuring message delivery to all intended recipients. The tutorial covers both the technical implementation and the business logic behind chat applications.",
        architectureExplanation: "The architecture consists of multiple layers: a load balancer distributing WebSocket connections, WebSocket servers handling real-time communication, API servers for RESTful operations, message queues for reliable message delivery, and databases for persistent storage. We use Redis for caching user sessions and message history, while PostgreSQL stores user data and message metadata.",
        keyComponents: [
            "WebSocket Servers: Handle real-time bidirectional communication between clients and servers",
            "API Gateway: Routes HTTP requests to appropriate microservices",
            "Message Queue: Ensures reliable message delivery and handles high traffic",
            "User Service: Manages user authentication, profiles, and relationships",
            "Message Service: Handles message storage, retrieval, and delivery",
            "Notification Service: Manages push notifications and email alerts",
            "File Storage: Handles image and file uploads for messages"
        ],
        implementationSteps: [
            "Set up the basic project structure and development environment",
            "Design the database schema for users, channels, and messages",
            "Implement user authentication and session management",
            "Create WebSocket connection handling and message routing",
            "Build the message persistence and retrieval system",
            "Implement real-time features like typing indicators",
            "Add file upload and media sharing capabilities",
            "Deploy the application with proper monitoring and logging"
        ],
        prerequisites: [
            "Basic understanding of web technologies (HTML, CSS, JavaScript)",
            "Familiarity with backend development concepts",
            "Knowledge of databases and SQL",
            "Understanding of HTTP and REST APIs",
            "Basic networking concepts"
        ]
    },
    8: {
        id: 8,
        title: "Amazon-like Marketplace",
        shortDescription: "Multi-vendor marketplace with inventory management, seller dashboards, review systems, and recommendation engines.",
        description: "Build a multi-vendor marketplace similar to Amazon with inventory management, seller dashboards, review systems, and recommendation engines. Learn about complex e-commerce architecture patterns and multi-tenant systems.",
        image: "img/pngegg (6).png",
        architectureImage: "img/pngegg (6).png",
        difficulty: "advanced",
        category: "ecommerce",
        price: "$2.99",
        learningObjectives: [
            "Understand WebSocket connections and real-time communication",
            "Design scalable message routing systems",
            "Implement user authentication and authorization",
            "Design efficient database schemas for chat applications",
            "Handle message persistence and delivery guarantees",
            "Implement typing indicators and online status",
            "Design notification systems for mentions and DMs"
        ],
        detailedDescription: "This tutorial walks you through building a Discord-like chat system from scratch. We start with the basic requirements and gradually build up to a production-ready architecture. You'll learn about the challenges of real-time communication, including handling connection drops, message ordering, and ensuring message delivery to all intended recipients. The tutorial covers both the technical implementation and the business logic behind chat applications.",
        architectureExplanation: "The architecture consists of multiple layers: a load balancer distributing WebSocket connections, WebSocket servers handling real-time communication, API servers for RESTful operations, message queues for reliable message delivery, and databases for persistent storage. We use Redis for caching user sessions and message history, while PostgreSQL stores user data and message metadata.",
        keyComponents: [
            "WebSocket Servers: Handle real-time bidirectional communication between clients and servers",
            "API Gateway: Routes HTTP requests to appropriate microservices",
            "Message Queue: Ensures reliable message delivery and handles high traffic",
            "User Service: Manages user authentication, profiles, and relationships",
            "Message Service: Handles message storage, retrieval, and delivery",
            "Notification Service: Manages push notifications and email alerts",
            "File Storage: Handles image and file uploads for messages"
        ],
        implementationSteps: [
            "Set up the basic project structure and development environment",
            "Design the database schema for users, channels, and messages",
            "Implement user authentication and session management",
            "Create WebSocket connection handling and message routing",
            "Build the message persistence and retrieval system",
            "Implement real-time features like typing indicators",
            "Add file upload and media sharing capabilities",
            "Deploy the application with proper monitoring and logging"
        ],
        prerequisites: [
            "Basic understanding of web technologies (HTML, CSS, JavaScript)",
            "Familiarity with backend development concepts",
            "Knowledge of databases and SQL",
            "Understanding of HTTP and REST APIs",
            "Basic networking concepts"
        ]
    },
};

// Get product ID from URL parameters
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return parseInt(urlParams.get('id')) || 1;
}

// Load and display product details
function loadProductDetails() {
    const productId = getProductIdFromUrl();
    const product = detailedProducts[productId];
    
    if (!product) {
        window.location.href = 'catlog.html';
        return;
    }

    // Update page title
    document.getElementById('productTitle').textContent = `${product.title} - DEVOP System Design Tutorials`;
    
    // Update product banner image
    document.getElementById('productBannerImage').src = product.image;
    document.getElementById('productBannerImage').alt = product.title;
    
    // Update product name and price
    document.getElementById('productName').textContent = product.title;
    document.getElementById('productPrice').textContent = product.price;
    
    // Update extended description
    document.getElementById('productExtendedDescription').textContent = product.description;
    
    // Update buy button
    const buyButton = document.getElementById('buyButton');
    if (product.price === "Free") {
        buyButton.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        buyButton.textContent = "Get for Free";
    } else {
        buyButton.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ';
        buyButton.textContent = `Buy for ${product.price}`;
    }
}



// Initialize the page
function initializeProductPage() {
    loadProductDetails();
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initializeProductPage); 