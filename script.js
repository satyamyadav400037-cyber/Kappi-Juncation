// Kaapi Junction — Modern Premium JavaScript Engine

const PRODUCTS = [
  {
    id: 1,
    name: "Kaapi 02",
    description: "Slow-dripped chicory blend, hot milk, aerated in traditional brass davara.",
    ingredients: "Coorg Arabica & Robusta, Chicory (15%), Fresh Whole Milk, Palm Sugar.",
    price: "₹160",
    numericPrice: 160,
    category: "Filter",
    tag: "signature",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Cacao Cloud",
    description: "Single-origin espresso, cacao nib infusion, cold velvet foam, sea salt.",
    ingredients: "Single-estate Espresso, Valrhona Dark Cacao, Himalayan Pink Salt, Oat Foam.",
    price: "₹240",
    numericPrice: 240,
    category: "Espresso",
    tag: "new orbit",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Cardamom Cappuccino",
    description: "Rich double espresso with steam-aerated milk & crushed green cardamom.",
    ingredients: "Chikmagalur Arabica, Fresh Milk, Organic Green Cardamom, Jaggery Dust.",
    price: "₹210",
    numericPrice: 210,
    category: "Cappuccino",
    tag: "house favourite",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Cinnamon Oat Latte",
    description: "Silky oat milk latte infused with Ceylon cinnamon bark & dark honey.",
    ingredients: "Double Shot Espresso, Creamy Oat Milk, Ceylon Cinnamon, Raw Honey.",
    price: "₹250",
    numericPrice: 250,
    category: "Latte",
    tag: "vegan craft",
    rating: "4.7",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Rose Tonic Cold Brew",
    description: "24-hour floral cold brew, artisanal rose cordial, ruby grapefruit fizz.",
    ingredients: "Cold Brew Decoction, Damascus Rose Water, Tonic Water, Grapefruit Peel.",
    price: "₹220",
    numericPrice: 220,
    category: "Cold",
    tag: "bright + fizzy",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Jaggery Cortado",
    description: "Intense espresso softened with liquid palm jaggery & warm micro-foam.",
    ingredients: "Ristretto Shot, Organic Palm Jaggery, Whole Milk (1:1 ratio).",
    price: "₹210",
    numericPrice: 210,
    category: "Espresso",
    tag: "bar favourite",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Monsoon Cascara Fizz",
    description: "Sparkling coffee cherry tea, lime leaf, black tea, and a touch of thunder.",
    ingredients: "Cascara Husk, Fresh Lime Leaf, Nilgiri Black Tea, Sparkling Water.",
    price: "₹230",
    numericPrice: 230,
    category: "Cold",
    tag: "zero proof",
    rating: "4.6",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Cardamom Ghee Bun",
    description: "Warm milk bun, cultured butter, cardamom dust, palm jaggery glaze.",
    ingredients: "Enriched Flour, Cultured Ghee, Fresh Cardamom, Brown Sugar Glaze.",
    price: "₹140",
    numericPrice: 140,
    category: "Pastry",
    tag: "baked today",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9,
    name: "Kaapi Tiramisu",
    description: "Decadent mascarpone layers soaked in Filter Kaapi decoction & dark cacao.",
    ingredients: "Italian Mascarpone, Kaapi Decoction, Ladyfingers, Cocoa Powder.",
    price: "₹260",
    numericPrice: 260,
    category: "Desserts",
    tag: "chef special",
    rating: "5.0",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 10,
    name: "Spiced Samosa Tart",
    description: "Flaky butter pastry shell filled with spiced potato, peas, and mint chutney.",
    ingredients: "Puff Pastry, Yukon Potatoes, Green Peas, Mint-Coriander Chutney.",
    price: "₹150",
    numericPrice: 150,
    category: "Snacks",
    tag: "savory bite",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 11,
    name: "Vanilla Bean Velvet Latte",
    description: "Madagascar vanilla bean syrup folded into micro-foamed hot milk & espresso.",
    ingredients: "Espresso, Real Madagascar Vanilla Bean, Whole Creamy Milk.",
    price: "₹240",
    numericPrice: 240,
    category: "Latte",
    tag: "sweet & smooth",
    rating: "4.8",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 12,
    name: "Almond Butter Croissant",
    description: "Twice-baked French croissant filled with roasted almond frangipane & flakes.",
    ingredients: "French Butter, Roasted Almond Paste, Powdered Sugar, Toasted Almonds.",
    price: "₹180",
    numericPrice: 180,
    category: "Pastry",
    tag: "crispy perfection",
    rating: "4.9",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=900&q=85"
  }
];

// App State (Persisted in localStorage)
let currentCategory = "All";
let cartItems = JSON.parse(localStorage.getItem("kj_cart") || "[]");
let favoriteIds = JSON.parse(localStorage.getItem("kj_favorites") || "[]");
let currentTheme = localStorage.getItem("kj_theme") || "dark";
let toastTimeout = null;
let activeModalProduct = null;
let activeModalQty = 1;

// DOM Initialization
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initPreloader();
  initNavScroll();
  initIntroSlider();
  initMenu();
  init3DCupDrag();
  initCartDrawer();
  initWishlistDrawer();
  initProductModal();
  initSearchSystem();
  initOffersTimer();
  initTestimonials();
  initStatsCounter();
  initMobileMenu();
  initNewsletterForm();
  initVideoControls();
  initKeyboardEvents();
  initScrollProgressAndParallax();
});

/* ----------------------------------------------------
   1. UNIFIED DARK ESPRESSO THEME SYSTEM
   ---------------------------------------------------- */
function initTheme() {
  document.documentElement.removeAttribute("data-theme");
  localStorage.removeItem("kj_theme");
}

/* ----------------------------------------------------
   2. PRELOADER & ENTRANCE ANIMATIONS
   ---------------------------------------------------- */
function initPreloader() {
  const preloader = document.getElementById("preloader");
  const liquid = document.getElementById("preloaderLiquid");
  const counter = document.getElementById("preloaderCounter");
  
  if (!preloader || !liquid || !counter) {
    triggerHeroTextAnimation();
    initScrollReveals();
    return;
  }

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 12) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      liquid.style.height = "100%";
      counter.textContent = "100%";

      setTimeout(() => {
        preloader.classList.add("fade-out");
        triggerHeroTextAnimation();
        initScrollReveals();
      }, 350);
    } else {
      liquid.style.height = `${progress}%`;
      counter.textContent = `${progress}%`;
    }
  }, 75);
}

function triggerHeroTextAnimation() {
  const reveals = document.querySelectorAll(".hero-copy .reveal-text, .hero-copy .text-mask-wrapper, .hero-copy .reveal-up, .hero-copy .reveal-scale");
  reveals.forEach((el, idx) => {
    setTimeout(() => {
      el.classList.add("is-visible");
    }, idx * 120);
  });
}

function initScrollReveals() {
  const elements = document.querySelectorAll(".reveal-text, .reveal-up, .reveal-left, .reveal-right, .reveal-scale, .reveal-blur, .reveal-clip, .text-mask-wrapper, .img-reveal-wrapper, .menu-card, .method-item, .stat-card, .offer-card-banner");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
}

function initNavScroll() {
  const nav = document.getElementById("siteNav");
  if (!nav) return;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 32) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  });
}

/* ----------------------------------------------------
   3. MENU GRID, FILTERING & FAVORITES
   ---------------------------------------------------- */
function initMenu() {
  const grid = document.getElementById("menuGrid");
  const tabsContainer = document.getElementById("categoryTabs");

  if (!grid || !tabsContainer) return;

  function renderGrid() {
    grid.innerHTML = "";
    let filtered = [];

    if (currentCategory === "All") {
      filtered = PRODUCTS;
    } else {
      filtered = PRODUCTS.filter(p => p.category.toLowerCase() === currentCategory.toLowerCase());
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--cream-dim);">
          <p style="font-family: var(--display); font-size: 1.5rem; margin-bottom: 10px; color: var(--cream);">
            ${currentCategory === "Favorites" ? "No favorite items saved yet ❤️" : "No items found in this category."}
          </p>
          <p style="font-size: 0.85rem;">${currentCategory === "Favorites" ? "Tap the heart icon on any coffee or dessert to save it here." : "Try selecting another category or search above."}</p>
        </div>
      `;
      return;
    }

    filtered.forEach((item, idx) => {
      const isFav = favoriteIds.includes(item.id);
      const card = document.createElement("article");
      card.className = "menu-card";
      card.style.transitionDelay = `${(idx % 6) * 0.08}s`;
      card.innerHTML = `
        <button class="fav-btn ${isFav ? 'is-favorite' : ''}" data-id="${item.id}" aria-label="Favorite ${item.name}">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        </button>
        <div class="menu-image" style="background-image: url('${item.image}')" data-id="${item.id}">
          <div class="menu-image-overlay"></div>
          <span class="menu-tag">${item.tag}</span>
          <span class="menu-number">0${idx + 1}</span>
        </div>
        <div class="menu-card-body">
          <div>
            <h3 data-id="${item.id}" style="cursor:pointer">${item.name}</h3>
            <p>${item.description}</p>
            <div class="card-rating">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              <span>${item.rating}</span>
            </div>
          </div>
          <div class="menu-card-footer">
            <strong>${item.price}</strong>
            <button class="add-to-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to order">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
          </div>
        </div>
      `;

      // Event: Favorite Heart Click
      const favBtn = card.querySelector(".fav-btn");
      favBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        toggleFavorite(item.id);
        renderGrid();
      });

      // Event: Card Image / Title Click -> Product Modal
      const imgEl = card.querySelector(".menu-image");
      const titleEl = card.querySelector("h3");
      [imgEl, titleEl].forEach(el => {
        el.addEventListener("click", () => openProductModal(item));
      });

      // Event: Add to Cart Button Click
      const addBtn = card.querySelector(".add-to-cart-btn");
      addBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        addToCart(item, 1);
      });

      grid.appendChild(card);
    });

    initScrollReveals();
  }

  // Category Tab Click Listeners
  const buttons = tabsContainer.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentCategory = btn.dataset.category;
      renderGrid();
    });
  });

  renderGrid();
}

function toggleFavorite(id) {
  const index = favoriteIds.indexOf(id);
  const item = PRODUCTS.find(p => p.id === id);
  if (index >= 0) {
    favoriteIds.splice(index, 1);
    showToast(`Removed ${item ? item.name : 'item'} from favorites`);
  } else {
    favoriteIds.push(id);
    showToast(`Saved ❤️ ${item ? item.name : 'item'} to favorites`);
  }
  localStorage.setItem("kj_favorites", JSON.stringify(favoriteIds));
  updateWishlistBadge();
  updateWishlistUI();
}

/* ----------------------------------------------------
   3B. WISHLIST HEADER DRAWER LOGIC
   ---------------------------------------------------- */
function initWishlistDrawer() {
  const wishlistNavBtn = document.getElementById("wishlistNavBtn");
  const wishlistBackdrop = document.getElementById("wishlistBackdrop");
  const closeWishlistBtn = document.getElementById("closeWishlistBtn");

  if (!wishlistNavBtn || !wishlistBackdrop || !closeWishlistBtn) return;

  wishlistNavBtn.addEventListener("click", () => toggleWishlistDrawer(true));
  closeWishlistBtn.addEventListener("click", () => toggleWishlistDrawer(false));
  wishlistBackdrop.addEventListener("click", (e) => {
    if (e.target === wishlistBackdrop) toggleWishlistDrawer(false);
  });

  updateWishlistBadge();
}

function toggleWishlistDrawer(open) {
  const wishlistBackdrop = document.getElementById("wishlistBackdrop");
  if (!wishlistBackdrop) return;
  if (open) {
    wishlistBackdrop.style.display = "flex";
    updateWishlistUI();
  } else {
    wishlistBackdrop.style.display = "none";
  }
}

function updateWishlistBadge() {
  const badge = document.getElementById("favCountBadge");
  if (!badge) return;
  const count = favoriteIds.length;
  if (count > 0) {
    badge.style.display = "grid";
    badge.textContent = count;
  } else {
    badge.style.display = "none";
  }
}

function updateWishlistUI() {
  const countHead = document.getElementById("wishlistCountHead");
  const body = document.getElementById("wishlistBody");
  if (!countHead || !body) return;

  const count = favoriteIds.length;
  countHead.textContent = `${count} saved item${count === 1 ? '' : 's'}`;

  const savedProducts = PRODUCTS.filter(p => favoriteIds.includes(p.id));

  if (savedProducts.length === 0) {
    body.innerHTML = `
      <div class="empty-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
        <p>Your wishlist is empty. Tap the heart icon on any coffee to save it here.</p>
        <button class="text-link" id="wishlistBrowseBtn">Explore counter ↗</button>
      </div>
    `;
    const browseBtn = document.getElementById("wishlistBrowseBtn");
    if (browseBtn) {
      browseBtn.addEventListener("click", () => {
        toggleWishlistDrawer(false);
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      });
    }
  } else {
    let itemsHTML = `<div class="cart-items">`;
    savedProducts.forEach((item) => {
      const q = wishlistQuantities[item.id] || 1;
      itemsHTML += `
        <div class="cart-row" style="align-items: center; gap: 10px; flex-wrap: wrap;">
          <div style="display:flex; align-items:center; gap:12px; flex: 1; min-width: 150px;">
            <div style="width:44px; height:44px; border-radius:8px; background-image:url('${item.image}'); background-size:cover; background-position:center; flex-shrink:0;"></div>
            <div>
              <strong style="display:block; line-height:1.2; font-size:1rem;">${item.name}</strong>
              <span style="font-size:0.72rem; color:var(--drawer-sub);">${item.price} · ${item.category}</span>
            </div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <!-- QUANTITY SELECTOR (- / +) -->
            <div class="qty-counter" style="padding: 2px 6px; display: inline-flex; align-items: center; justify-content: center;">
              <button class="qty-btn" onclick="changeWishlistQty(${item.id}, -1)" aria-label="Decrease quantity">-</button>
              <span class="qty-val" id="wishlistQty_${item.id}" style="min-width: 20px; font-size: 0.78rem; text-align: center;">${q}</span>
              <button class="qty-btn" onclick="changeWishlistQty(${item.id}, 1)" aria-label="Increase quantity">+</button>
            </div>
            <!-- BUY BUTTON -->
            <button class="wishlist-buy-btn" onclick="addToCartFromWishlist(${item.id})" aria-label="Buy ${item.name} now" title="Buy Now">
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              <span>Buy</span>
            </button>
            <!-- REMOVE BUTTON -->
            <button class="wishlist-remove-btn" onclick="toggleFavorite(${item.id})" aria-label="Remove item" title="Remove item">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
        </div>
      `;
    });
    itemsHTML += `</div>`;
    body.innerHTML = itemsHTML;
  }
}

const wishlistQuantities = {};

function changeWishlistQty(id, delta) {
  if (!wishlistQuantities[id]) wishlistQuantities[id] = 1;
  wishlistQuantities[id] += delta;
  if (wishlistQuantities[id] < 1) wishlistQuantities[id] = 1;
  const qtyEl = document.getElementById(`wishlistQty_${id}`);
  if (qtyEl) qtyEl.textContent = wishlistQuantities[id];
}

function addToCartFromWishlist(id) {
  const item = PRODUCTS.find(p => p.id === id);
  const qty = wishlistQuantities[id] || 1;
  if (item) {
    addToCart(item, qty);
    showToast(`Added ${qty}x ${item.name} to order`);
  }
}

/* ----------------------------------------------------
   4. PRODUCT DETAILS MODAL
   ---------------------------------------------------- */
function initProductModal() {
  const modal = document.getElementById("productModal");
  const closeBtn = document.getElementById("productModalClose");
  const minusBtn = document.getElementById("modalQtyMinus");
  const plusBtn = document.getElementById("modalQtyPlus");
  const addBtn = document.getElementById("modalAddToCartBtn");

  if (!modal) return;

  closeBtn.addEventListener("click", closeProductModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeProductModal();
  });

  minusBtn.addEventListener("click", () => {
    if (activeModalQty > 1) {
      activeModalQty--;
      document.getElementById("modalQtyVal").textContent = activeModalQty;
    }
  });

  plusBtn.addEventListener("click", () => {
    activeModalQty++;
    document.getElementById("modalQtyVal").textContent = activeModalQty;
  });

  addBtn.addEventListener("click", () => {
    if (activeModalProduct) {
      addToCart(activeModalProduct, activeModalQty);
      closeProductModal();
    }
  });
}

function openProductModal(product) {
  activeModalProduct = product;
  activeModalQty = 1;

  document.getElementById("modalCategory").textContent = `${product.category} · ${product.tag}`;
  document.getElementById("modalTitle").textContent = product.name;
  document.getElementById("modalDesc").textContent = product.description;
  document.getElementById("modalIngredients").textContent = product.ingredients || "Single origin coffee blend, freshly brewed.";
  document.getElementById("modalPrice").textContent = product.price;
  document.getElementById("modalQtyVal").textContent = "1";
  document.getElementById("modalImage").style.backgroundImage = `url('${product.image}')`;

  const modal = document.getElementById("productModal");
  modal.style.display = "flex";
}

function closeProductModal() {
  const modal = document.getElementById("productModal");
  if (modal) modal.style.display = "none";
}

/* ----------------------------------------------------
   5. LIVE CLIENT-SIDE SEARCH SYSTEM
   ---------------------------------------------------- */
function initSearchSystem() {
  const openBtn = document.getElementById("searchOpenBtn");
  const closeBtn = document.getElementById("searchCloseBtn");
  const modal = document.getElementById("searchModal");
  const input = document.getElementById("searchInput");
  const resultsGrid = document.getElementById("searchResultsGrid");

  if (!modal || !input || !resultsGrid) return;

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
    input.focus();
    renderSearchResults("");
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    input.value = "";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      input.value = "";
    }
  });

  input.addEventListener("input", (e) => {
    renderSearchResults(e.target.value);
  });

  function renderSearchResults(query) {
    const q = query.trim().toLowerCase();
    resultsGrid.innerHTML = "";

    const matched = q === "" 
      ? PRODUCTS 
      : PRODUCTS.filter(p => 
          p.name.toLowerCase().includes(q) || 
          p.description.toLowerCase().includes(q) || 
          p.category.toLowerCase().includes(q) ||
          p.tag.toLowerCase().includes(q)
        );

    if (matched.length === 0) {
      resultsGrid.innerHTML = `
        <div style="text-align: center; padding: 40px; color: rgba(240, 232, 220, 0.5);">
          No coffee or pastry matching "${query}". Try searching for latte, espresso, or ghee bun.
        </div>
      `;
      return;
    }

    matched.forEach(item => {
      const card = document.createElement("div");
      card.className = "search-result-card";
      card.innerHTML = `
        <div class="search-result-img" style="background-image: url('${item.image}')"></div>
        <div class="search-result-info">
          <h4>${item.name}</h4>
          <p>${item.category} · ${item.description}</p>
        </div>
        <div class="search-result-price">${item.price}</div>
      `;
      card.addEventListener("click", () => {
        modal.style.display = "none";
        openProductModal(item);
      });
      resultsGrid.appendChild(card);
    });
  }
}

/* ----------------------------------------------------
   6. CART DRAWER & LOCALSTORAGE MANAGEMENT
   ---------------------------------------------------- */
function initCartDrawer() {
  const orderNavBtn = document.getElementById("orderNavBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");

  if (!orderNavBtn || !drawerBackdrop || !closeDrawerBtn) return;

  orderNavBtn.addEventListener("click", () => toggleCart(true));
  closeDrawerBtn.addEventListener("click", () => toggleCart(false));
  drawerBackdrop.addEventListener("click", (e) => {
    if (e.target === drawerBackdrop) toggleCart(false);
  });

  updateCartBadge();
}

function toggleCart(open) {
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  if (open) {
    drawerBackdrop.style.display = "flex";
    updateCartUI();
  } else {
    drawerBackdrop.style.display = "none";
  }
}

function addToCart(item, qty = 1) {
  const existing = cartItems.find(i => i.id === item.id);
  if (existing) {
    existing.quantity = (existing.quantity || 1) + qty;
  } else {
    cartItems.push({ ...item, quantity: qty });
  }

  saveCart();
  updateCartBadge();
  showToast(`Added ${qty}x ${item.name} to order`);
}

function changeCartQty(index, delta) {
  if (cartItems[index]) {
    cartItems[index].quantity = (cartItems[index].quantity || 1) + delta;
    if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
    }
    saveCart();
    updateCartBadge();
    updateCartUI();
  }
}

function saveCart() {
  localStorage.setItem("kj_cart", JSON.stringify(cartItems));
}

function updateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  if (!badge) return;
  const totalCount = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);
  if (totalCount > 0) {
    badge.style.display = "grid";
    badge.textContent = totalCount;
  } else {
    badge.style.display = "none";
  }
}

function updateCartUI() {
  const countHead = document.getElementById("drawerCountHead");
  const cartBody = document.getElementById("cartBody");
  if (!countHead || !cartBody) return;

  const totalCount = cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0);

  if (cartItems.length === 0) {
    countHead.textContent = "Nothing yet";
    cartBody.innerHTML = `
      <div class="empty-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your next cup is one scroll away.</p>
        <button class="text-link" id="emptyBrowseBtn">Browse the counter ↗</button>
      </div>
    `;
    const browseBtn = document.getElementById("emptyBrowseBtn");
    if (browseBtn) {
      browseBtn.addEventListener("click", () => {
        toggleCart(false);
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
      });
    }
  } else {
    countHead.textContent = `${totalCount} item${totalCount === 1 ? '' : 's'}`;
    let totalPrice = cartItems.reduce((acc, item) => acc + (item.numericPrice * (item.quantity || 1)), 0);

    let itemsHTML = `<div class="cart-items">`;
    cartItems.forEach((item, idx) => {
      const q = item.quantity || 1;
      itemsHTML += `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <span>${item.price} · hand finished</span>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div class="qty-counter" style="padding:2px 6px;">
              <button class="qty-btn" onclick="changeCartQty(${idx}, -1)">-</button>
              <span class="qty-val" style="min-width:18px; font-size:0.75rem;">${q}</span>
              <button class="qty-btn" onclick="changeCartQty(${idx}, 1)">+</button>
            </div>
          </div>
        </div>
      `;
    });
    itemsHTML += `</div>`;

    itemsHTML += `
      <div class="drawer-total">
        <span>Estimated total</span>
        <strong>₹${totalPrice}</strong>
      </div>
      <button class="button button-primary drawer-button" id="placeOrderBtn">
        Place pickup order ✦
      </button>
    `;

    cartBody.innerHTML = itemsHTML;

    const placeBtn = document.getElementById("placeOrderBtn");
    if (placeBtn) {
      placeBtn.addEventListener("click", () => {
        cartItems = [];
        saveCart();
        updateCartBadge();
        toggleCart(false);
        showToast("Order noted — we'll see you at the counter.");
      });
    }
  }
}

/* ----------------------------------------------------
   7. ANIMATED COUNTER STATISTICS (ABOUT SECTION)
   ---------------------------------------------------- */
function initStatsCounter() {
  const section = document.querySelector(".about-stats-section");
  if (!section) return;

  let animated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateNumberFormatted("statBlends", 0, 10, 1800, "+", 0);
        animateNumberFormatted("statCustomers", 0, 50, 2200, "K+", 0);
        animateNumberFormatted("statYears", 0, 15, 1800, "+", 0);
      }
    });
  }, { threshold: 0.2 });

  observer.observe(section);
}

function animateNumberFormatted(id, start, target, duration, suffix = "", decimals = 0) {
  const el = document.getElementById(id);
  if (!el) return;

  const startTime = performance.now();

  function update(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease Out Expo timing curve for luxury feel: 1 - Math.pow(2, -10 * progress)
    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    const currentValue = start + (target - start) * easeProgress;

    let formattedValue;
    if (decimals > 0) {
      formattedValue = currentValue.toFixed(decimals);
    } else {
      const rounded = Math.floor(currentValue);
      formattedValue = rounded.toLocaleString(); // Adds commas e.g. 50,000
    }

    el.textContent = `${formattedValue}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

/* ----------------------------------------------------
   7B. TOP SCROLL PROGRESS BAR, SCROLL-TO-TOP & PARALLAX
   ---------------------------------------------------- */
function initScrollProgressAndParallax() {
  const progressBar = document.getElementById("scrollProgress");
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  const closingMark = document.querySelector(".closing-mark");
  const heroCup = document.getElementById("heroCupObject");

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = maxScroll > 0 ? (scrollY / maxScroll) * 100 : 0;

        // Update Top Scroll Progress Bar
        if (progressBar) {
          progressBar.style.width = `${progress}%`;
        }

        // Toggle Floating Scroll-To-Top Button
        if (scrollTopBtn) {
          if (scrollY > 300) {
            scrollTopBtn.classList.add("is-visible");
          } else {
            scrollTopBtn.classList.remove("is-visible");
          }
        }

        // Subtle Parallax Effect for Background Elements
        if (heroCup && scrollY < 800) {
          heroCup.style.transform = `translateY(${scrollY * 0.08}px)`;
        }

        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ----------------------------------------------------
   8. SPECIAL PROMOTIONAL OFFERS COUNTDOWN TIMER
   ---------------------------------------------------- */
function initOffersTimer() {
  const hoursEl = document.getElementById("timerHours");
  const minsEl = document.getElementById("timerMins");
  const secsEl = document.getElementById("timerSecs");
  const claimBtn = document.getElementById("claimOfferBtn");

  if (!hoursEl || !minsEl || !secsEl) return;

  let durationSeconds = 4 * 3600 + 32 * 60 + 48; // 4 hours 32 mins 48 secs

  setInterval(() => {
    if (durationSeconds > 0) durationSeconds--;
    const h = Math.floor(durationSeconds / 3600);
    const m = Math.floor((durationSeconds % 3600) / 60);
    const s = durationSeconds % 60;

    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }, 1000);

  if (claimBtn) {
    claimBtn.addEventListener("click", () => {
      const comboItem = {
        id: 99,
        name: "Morning Ritual Combo",
        price: "₹220",
        numericPrice: 220,
        category: "Filter",
        description: "Filter Kaapi 02 + Warm Cardamom Ghee Bun."
      };
      addToCart(comboItem, 1);
      toggleCart(true);
    });
  }
}

/* ----------------------------------------------------
   9. TESTIMONIALS CAROUSEL SLIDER
   ---------------------------------------------------- */
function initTestimonials() {
  const carousel = document.getElementById("testimonialCarousel");
  if (!carousel) return;

  const cards = carousel.querySelectorAll(".testimonial-card");
  const prevBtn = document.getElementById("testiPrevBtn");
  const nextBtn = document.getElementById("testiNextBtn");

  if (!cards.length) return;

  let current = 0;
  let timer = null;

  function showIndex(idx) {
    if (idx < 0) idx = cards.length - 1;
    if (idx >= cards.length) idx = 0;

    cards.forEach((c, i) => {
      c.classList.toggle("active", i === idx);
    });
    current = idx;
  }

  function startTimer() {
    stopTimer();
    timer = setInterval(() => {
      showIndex(current + 1);
    }, 6000);
  }

  function stopTimer() {
    if (timer) clearInterval(timer);
  }

  if (prevBtn) prevBtn.addEventListener("click", () => { showIndex(current - 1); startTimer(); });
  if (nextBtn) nextBtn.addEventListener("click", () => { showIndex(current + 1); startTimer(); });

  carousel.addEventListener("mouseenter", stopTimer);
  carousel.addEventListener("mouseleave", startTimer);

  startTimer();
}

/* ----------------------------------------------------
   10. MOBILE NAVIGATION DRAWER
   ---------------------------------------------------- */
function initMobileMenu() {
  const openBtn = document.getElementById("mobileMenuBtn");
  const closeBtn = document.getElementById("mobileNavClose");
  const overlay = document.getElementById("mobileNavOverlay");

  if (!openBtn || !overlay) return;

  openBtn.addEventListener("click", () => {
    overlay.style.display = "flex";
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  }

  const links = overlay.querySelectorAll(".mobile-nav-link");
  links.forEach(l => {
    l.addEventListener("click", () => {
      overlay.style.display = "none";
    });
  });
}

/* ----------------------------------------------------
   11. KEYBOARD ESCAPE & GLOBAL ACCESSIBILITY
   ---------------------------------------------------- */
function initKeyboardEvents() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProductModal();
      const searchModal = document.getElementById("searchModal");
      if (searchModal) searchModal.style.display = "none";
      const drawerBackdrop = document.getElementById("drawerBackdrop");
      if (drawerBackdrop) drawerBackdrop.style.display = "none";
      const mobileNav = document.getElementById("mobileNavOverlay");
      if (mobileNav) mobileNav.style.display = "none";
    }
  });
}

/* ----------------------------------------------------
   12. HELPER TOAST NOTIFICATION & 3D CUP DRAG
   ---------------------------------------------------- */
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  if (toastTimeout) clearTimeout(toastTimeout);

  container.innerHTML = `
    <div class="toast">
      <span class="toast-pulse"></span>
      <span>${message}</span>
    </div>
  `;

  toastTimeout = setTimeout(() => {
    container.innerHTML = "";
  }, 3200);
}

function initIntroSlider() {
  const container = document.getElementById("introSlider");
  if (!container) return;

  const slides = container.querySelectorAll(".intro-slide");
  const dots = container.querySelectorAll("#introSliderDots .dot-btn");
  const prevBtn = document.getElementById("introPrevBtn");
  const nextBtn = document.getElementById("introNextBtn");
  const counterDisplay = document.getElementById("introCounterDisplay");

  if (!slides.length) return;

  let currentIndex = 0;
  const slideDuration = 5000;
  let progressAnimation = null;
  let startTime = null;

  function updateSlide(targetIndex) {
    if (targetIndex < 0) targetIndex = slides.length - 1;
    if (targetIndex >= slides.length) targetIndex = 0;

    slides.forEach((slide, idx) => {
      if (idx === targetIndex) {
        slide.classList.add("active");
        const reveals = slide.querySelectorAll(".reveal-text");
        reveals.forEach(r => r.classList.add("is-visible"));
      } else {
        slide.classList.remove("active");
      }
    });

    dots.forEach((dot, idx) => {
      const progressSpan = dot.querySelector(".dot-progress");
      if (idx === targetIndex) {
        dot.classList.add("active");
        if (progressSpan) progressSpan.style.width = "0%";
      } else {
        dot.classList.remove("active");
        if (progressSpan) progressSpan.style.width = "0%";
      }
    });

    if (counterDisplay) {
      counterDisplay.textContent = `0${targetIndex + 1} / 04`;
    }

    currentIndex = targetIndex;
    startTimer();
  }

  function startTimer() {
    stopTimer();
    const activeDotProgress = dots[currentIndex]?.querySelector(".dot-progress");
    startTime = performance.now();

    function step(timestamp) {
      const elapsed = timestamp - startTime;
      const progressPercent = Math.min((elapsed / slideDuration) * 100, 100);
      
      if (activeDotProgress) {
        activeDotProgress.style.width = `${progressPercent}%`;
      }

      if (elapsed < slideDuration) {
        progressAnimation = requestAnimationFrame(step);
      } else {
        updateSlide(currentIndex + 1);
      }
    }

    progressAnimation = requestAnimationFrame(step);
  }

  function stopTimer() {
    if (progressAnimation) {
      cancelAnimationFrame(progressAnimation);
      progressAnimation = null;
    }
  }

  if (prevBtn) prevBtn.addEventListener("click", () => updateSlide(currentIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => updateSlide(currentIndex + 1));

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      if (!isNaN(index)) updateSlide(index);
    });
  });

  container.addEventListener("mouseenter", stopTimer);
  container.addEventListener("mouseleave", startTimer);

  updateSlide(0);
}

function initVideoControls() {
  const video = document.getElementById("craftVideo");
  const toggleBtn = document.getElementById("videoToggleBtn");
  const muteBtn = document.getElementById("videoMuteBtn");

  if (!video || !toggleBtn || !muteBtn) return;

  const pauseIcon = document.getElementById("videoPauseIcon");
  const playIcon = document.getElementById("videoPlayIcon");
  const toggleText = document.getElementById("videoToggleText");
  const mutedIcon = document.getElementById("videoMutedIcon");
  const soundIcon = document.getElementById("videoSoundIcon");
  const muteText = document.getElementById("videoMuteText");

  toggleBtn.addEventListener("click", () => {
    if (video.paused) {
      video.play();
      if (pauseIcon) pauseIcon.style.display = "block";
      if (playIcon) playIcon.style.display = "none";
      if (toggleText) toggleText.textContent = "Pause";
    } else {
      video.pause();
      if (pauseIcon) pauseIcon.style.display = "none";
      if (playIcon) playIcon.style.display = "block";
      if (toggleText) toggleText.textContent = "Play";
    }
  });

  muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
      if (mutedIcon) mutedIcon.style.display = "block";
      if (soundIcon) soundIcon.style.display = "none";
      if (muteText) muteText.textContent = "Sound Off";
    } else {
      if (mutedIcon) mutedIcon.style.display = "none";
      if (soundIcon) soundIcon.style.display = "block";
      if (muteText) muteText.textContent = "Sound On";
    }
  });
}

function init3DCupDrag() {
  const cup = document.getElementById("heroCupObject");
  if (!cup) return;

  let isDragging = false;
  let startX, startY;
  let currentRotX = 7;
  let currentRotY = -13;

  cup.addEventListener("mousedown", (e) => {
    isDragging = true;
    startX = e.clientX;
    startY = e.clientY;
    cup.style.animation = "none";
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startX;
    const deltaY = e.clientY - startY;

    currentRotY += deltaX * 0.4;
    currentRotX -= deltaY * 0.4;

    cup.style.transform = `rotateX(${currentRotX}deg) rotateY(${currentRotY}deg)`;

    startX = e.clientX;
    startY = e.clientY;
  });

  window.addEventListener("mouseup", () => {
    if (isDragging) {
      isDragging = false;
      cup.style.animation = "7s ease-in-out infinite float";
    }
  });
}

function initNewsletterForm() {
  const form = document.getElementById("newsletterForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.reset();
      showToast("You're on the list. See you at the counter.");
    });
  }
}
