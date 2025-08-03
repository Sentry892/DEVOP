//✅ DONE: add Gumroad payment system with PayPal payouts
//✅ DONE: make the send message button work to redirect to my youtube *me
//✅ DONE: make product buttons go to Gumroad checkout
//✅ DONE: automatic file delivery after payment

// Gumroad product links from links.txt
const gumroadProducts = {
    1: "https://codehash.gumroad.com/l/DISCORD_DESIGN", // Free product
    2: "https://codehash.gumroad.com/l/ECCOMERCE_DESIGN", // $2.99
    3: "https://codehash.gumroad.com/l/INSTAGRAM_DESIGN", // $2.99
    4: "https://codehash.gumroad.com/l/NETFLIX_DESIGN", // $2.99
    5: "https://codehash.gumroad.com/l/WHATSAPP_DESIGN", // $2.99
    6: "https://codehash.gumroad.com/l/UBER_DESIGN", // $2.99
    7: "https://codehash.gumroad.com/l/TWITTER_DESIGN", // $2.99
    8: "https://codehash.gumroad.com/l/AMAZON_DESIGN" // $2.99
};

// Gumroad handles all file delivery - no need for custom download links

// Handle product purchase with Gumroad
function handleProductPurchase(productId, productTitle, price) {
    try {
        // Get Gumroad product URL
        const gumroadUrl = gumroadProducts[productId];
        
        if (gumroadUrl) {
            // Redirect to Gumroad checkout
            window.open(gumroadUrl, '_blank');
        } else {
            // Fallback for products without Gumroad links
            alert(`Gumroad link not found for ${productTitle}. Please contact support.`);
        }
    } catch (error) {
        console.error('Payment error:', error);
        alert('Payment processing failed. Please try again.');
    }
}

// Gumroad handles payment success and file delivery automatically
// No need for simulation - Gumroad sends files directly to customers

// Gumroad handles everything automatically - no need for manual download handling

// Handle contact form submission
function handleContactForm() {
    // Redirect to YouTube channel
    window.open('https://www.youtube.com/@devopsystemdesign', '_blank');
}

// Initialize product buttons with Gumroad checkout
function initializeProductButtons() {
    const productButtons = document.querySelectorAll('.product-card-button-link, .product-buy-button, .freeproductcard-button-button');
    
    productButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const href = this.getAttribute('href');
            
            // Check if it's a free product (home page or YouTube)
            if (this.textContent.includes('free')) {
                if (href.includes('gumroad.com')) {
                    // Home page free product - redirect to Gumroad
                    window.open(href, '_blank');
                } else if (href.includes('youtube.com')) {
                    // YouTube free product - redirect to YouTube
                    window.open(href, '_blank');
                }
                return;
            }
            
            // Check if it's a contact form
            if (this.textContent.includes('Send Message') || this.textContent.includes('Contact')) {
                handleContactForm();
                return;
            }
            
            // Paid product - get product info and redirect to Gumroad
            const productCard = this.closest('.product-card');
            if (productCard) {
                const productId = productCard.dataset.id;
                const productTitle = productCard.querySelector('h3').textContent;
                const priceText = this.textContent.replace('Buy for ', '').replace('Get for ', '');
                
                handleProductPurchase(productId, productTitle, priceText);
            }
        });
    });
}

// Mark current page as active in navigation
function markCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-right ul li a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    markCurrentPage();
    initializeProductButtons();
});

// Export functions for use in other files
window.PaymentSystem = {
    handleProductPurchase,
    handleContactForm
};