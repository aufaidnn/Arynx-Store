/**
 * ARYNX STORE - Obsidian Vault Global Application Logic
 * Tema: Obsidian Vault
 * WhatsApp Admin: 6281932140239
 */

// State Global Toko
let currentLang = 'id';
let currentCurrency = 'IDR';
let cart = [];

// Inisialisasi Saat Dokumen Dimuat
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    initGlobalListeners();
});

// Toggle Bahasa (ID / EN)
function toggleLang() {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    const langBtn = document.getElementById('langBtn');
    if (langBtn) langBtn.innerText = currentLang.toUpperCase();
    
    updateLanguageUI();
    
    // Trigger event kustom jika halaman katalog/detail butuh re-render
    window.dispatchEvent(new CustomEvent('langChanged', { detail: { lang: currentLang } }));
}

// Update Teks UI Berdasarkan Bahasa
function updateLanguageUI() {
    const texts = {
        id: {
            nav_home: 'Beranda', nav_catalog: 'Katalog', nav_features: 'Fitur', nav_faq: 'FAQ',
            cart_title: 'Keranjang Order Vault', cart_total: 'Total Estimasi:', btn_checkout_wa: 'Order via WhatsApp Admin'
        },
        en: {
            nav_home: 'Home', nav_catalog: 'Catalog', nav_features: 'Features', nav_faq: 'FAQ',
            cart_title: 'Vault Order Cart', cart_total: 'Estimated Total:', btn_checkout_wa: 'Order via WhatsApp Admin'
        }
    };

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (texts[currentLang] && texts[currentLang][key]) {
            el.innerText = texts[currentLang][key];
        }
    });
}

// Toggle Mata Uang (IDR / USD)
function toggleCurrency() {
    currentCurrency = currentCurrency === 'IDR' ? 'USD' : 'IDR';
    const currencyBtn = document.getElementById('currencyBtn');
    if (currencyBtn) {
        currencyBtn.innerText = currentCurrency === 'IDR' ? 'IDR (Rp)' : 'USD ($)';
    }

    // Trigger event kustom untuk memperbarui harga di halaman aktif
    window.dispatchEvent(new CustomEvent('currencyChanged', { detail: { currency: currentCurrency } }));
}

// Format Harga Berdasarkan Mata Uang Aktif
function formatPrice(pIDR, pUSD) {
    if (currentCurrency === 'IDR') {
        return 'Rp ' + pIDR.toLocaleString('id-ID');
    } else {
        return '$ ' + pUSD.toFixed(2);
    }
}

// Manajemen Keranjang (Cart)
function addToCart(product, quantity = 1) {
    if (!product || product.status !== 'ready') return;

    const existing = cart.find(item => item.id === product.id);
    if (existing) {
        existing.qty += quantity;
    } else {
        cart.push({ ...product, qty: quantity });
    }
    updateCartBadge();
    renderCartItems();
    toggleCartModal();
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (!badge) return;

    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    if (totalQty > 0) {
        badge.innerText = totalQty;
        badge.classList.remove('hidden');
    } else {
        badge.classList.add('hidden');
    }
}

function toggleCartModal() {
    const modal = document.getElementById('cartModal');
    if (modal) {
        modal.classList.toggle('hidden');
        renderCartItems();
    }
}

function renderCartItems() {
    const list = document.getElementById('cartItemsList');
    const totalPriceEl = document.getElementById('cartTotalPrice');
    if (!list || !totalPriceEl) return;

    if (cart.length === 0) {
        list.innerHTML = `
            <div class="text-center py-12 text-slate-500">
                <i class="fa-solid fa-cart-shopping text-3xl mb-3"></i>
                <p class="text-sm">${currentLang === 'id' ? 'Keranjang masih kosong' : 'Cart is empty'}</p>
            </div>
        `;
        totalPriceEl.innerText = formatPrice(0, 0);
        return;
    }

    let totalIDR = 0;
    let totalUSD = 0;
    list.innerHTML = '';

    cart.forEach((item, index) => {
        totalIDR += item.priceIDR * item.qty;
        totalUSD += item.priceUSD * item.qty;

        const itemName = item.name[currentLang] || item.name.id;
        const card = document.createElement('div');
        card.className = 'p-3 rounded-xl bg-obsidian-950 border border-white/10 flex items-center justify-between gap-3';
        card.innerHTML = `
            <div>
                <h4 class="text-xs font-bold text-white">${itemName}</h4>
                <span class="text-[10px] font-mono text-amber-400">${formatPrice(item.priceIDR, item.priceUSD)} x ${item.qty}</span>
            </div>
            <div class="flex items-center space-x-2">
                <button onclick="updateCartQty(${index}, -1)" class="w-6 h-6 rounded bg-obsidian-800 text-slate-300 text-xs flex items-center justify-center hover:bg-obsidian-700">-</button>
                <span class="text-xs font-mono text-white">${item.qty}</span>
                <button onclick="updateCartQty(${index}, 1)" class="w-6 h-6 rounded bg-obsidian-800 text-slate-300 text-xs flex items-center justify-center hover:bg-obsidian-700">+</button>
            </div>
        `;
        list.appendChild(card);
    });

    totalPriceEl.innerText = formatPrice(totalIDR, totalUSD);
}

function updateCartQty(index, delta) {
    cart[index].qty += delta;
    if (cart[index].qty <= 0) {
        cart.splice(index, 1);
    }
    updateCartBadge();
    renderCartItems();
}

// Checkout Hybrid WhatsApp Admin
function checkoutWhatsApp() {
    if (cart.length === 0) return;

    let totalIDR = 0;
    let totalUSD = 0;
    let orderText = currentLang === 'id' 
        ? "*ORDER VAULT - ARYNX STORE*\n\nHalo Admin, saya ingin melakukan pemesanan aset digital:\n\n" 
        : "*VAULT ORDER - ARYNX STORE*\n\nHello Admin, I would like to order the following digital assets:\n\n";

    cart.forEach((item, idx) => {
        const subIDR = item.priceIDR * item.qty;
        const subUSD = item.priceUSD * item.qty;
        totalIDR += subIDR;
        totalUSD += subUSD;
        const itemName = item.name[currentLang] || item.name.id;
        orderText += `${idx + 1}. *${itemName}*\n   Jumlah: ${item.qty} | Subtotal: ${formatPrice(subIDR, subUSD)}\n`;
    });

    orderText += `\n*Total Estimasi: ${formatPrice(totalIDR, totalUSD)}*\n\nMohon petunjuk pembayaran selanjutnya. Terima kasih!`;

    const adminPhone = "6281932140239";
    window.open(`https://wa.me/${adminPhone}?text=${encodeURIComponent(orderText)}`, '_blank');
}

// Mobile Menu Toggle Helper
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu) {
        menu.classList.toggle('hidden');
    }
}

function initGlobalListeners() {
    // Event listener tambahan jika diperlukan
}