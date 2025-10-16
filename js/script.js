const products = [
    { id: 1, name: 'Premium Notebook', price: 12.99, emoji: '📓', desc: 'High-quality pages for your thoughts' },
    { id: 2, name: 'Luxury Pen Set', price: 24.99, emoji: '🖊️', desc: 'Smooth writing experience' },
    { id: 3, name: 'Sticky Notes Pack', price: 5.99, emoji: '📝', desc: 'Colorful & adhesive notes' },
    { id: 4, name: 'Colored Markers', price: 15.99, emoji: '🖍️', desc: 'Vibrant colors for creativity' }
];
let cart = [];
let currentTestimonial = 0;

document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
});
function initializeApp() {
    loadTheme();
    renderProducts();
    setupEventListeners();
    updateCartCount();
    startTestimonialSlider();
    setupScrollAnimations();
    setupHeaderScroll();
}