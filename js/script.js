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
function loadTheme() {
    const savedTheme = sessionStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', newTheme);
    sessionStorage.setItem('theme', newTheme);
    
    const themeBtn = document.getElementById('themeToggle');
    themeBtn.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeBtn.style.transform = '';
    }, 400);
}
function renderProducts() {
    const grid = document.getElementById('productsGrid');
    
    
}
