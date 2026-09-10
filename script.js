// Kaapi Junction — Interactive JavaScript Engine

const PRODUCTS = [
  {
    id: 1,
    name: "Kaapi 02",
    description: "Slow-dripped chicory blend, hot milk, brass tumbler.",
    price: "₹160",
    numericPrice: 160,
    category: "Filter",
    tag: "signature",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Cacao Cloud",
    description: "Single-origin espresso, cacao nib, cold foam, sea salt.",
    price: "₹240",
    numericPrice: 240,
    category: "Espresso",
    tag: "new orbit",
    image: "https://images.unsplash.com/photo-1511081692775-05d0f180a065?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Rose Tonic",
    description: "Floral cold brew, rose cordial, ruby grapefruit, fizz.",
    price: "₹220",
    numericPrice: 220,
    category: "Cold",
    tag: "bright + fizzy",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Jaggery Cortado",
    description: "Intense espresso softened with palm jaggery and milk.",
    price: "₹210",
    numericPrice: 210,
    category: "Espresso",
    tag: "bar favourite",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Monsoon Fizz",
    description: "Cascara, lime leaf, black tea, and a little thunder.",
    price: "₹230",
    numericPrice: 230,
    category: "Cold",
    tag: "zero proof",
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Ghee Bun",
    description: "Warm cardamom milk bun, cultured butter, jaggery glaze.",
    price: "₹140",
    numericPrice: 140,
    category: "Pastry",
    tag: "baked today",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=85"
  }
];

// App State
let currentCategory = "All";
let cartItems = [];
let toastTimeout = null;

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  initPreloader();
  initNavScroll();
  initIntroSlider();
  initMenu();
  init3DCupDrag();
  initCartDrawer();
  initNewsletterForm();
  initVideoControls();
});

// Interactive Cinematic Video Player Controls
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

// Interactive 4-Slide Story Carousel for Intro Section
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
  const slideDuration = 5000; // 5 seconds per slide
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

  // Event Listeners
  if (prevBtn) {
    prevBtn.addEventListener("click", () => updateSlide(currentIndex - 1));
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => updateSlide(currentIndex + 1));
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      if (!isNaN(index)) updateSlide(index);
    });
  });

  // Pause auto-sliding on hover
  container.addEventListener("mouseenter", () => stopTimer());
  container.addEventListener("mouseleave", () => startTimer());

  // Touch Swipe Support
  let touchStartX = 0;
  let touchEndX = 0;

  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 40) {
      if (diff < 0) {
        updateSlide(currentIndex + 1);
      } else {
        updateSlide(currentIndex - 1);
      }
    }
  }

  // Keyboard navigation when intro slider is in viewport
  window.addEventListener("keydown", (e) => {
    const rect = container.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
    if (!isVisible) return;

    if (e.key === "ArrowLeft") {
      updateSlide(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
      updateSlide(currentIndex + 1);
    }
  });

  // Kickoff timer
  updateSlide(0);
}

// Entry Coffee Cup Filling Preloader
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
    progress += Math.floor(Math.random() * 10) + 7;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      
      liquid.style.height = "100%";
      counter.textContent = "100%";

      setTimeout(() => {
        preloader.classList.add("fade-out");
        triggerHeroTextAnimation();
        initScrollReveals();
      }, 400);
    } else {
      liquid.style.height = `${progress}%`;
      counter.textContent = `${progress}%`;
    }
  }, 100);
}

// Trigger hero text reveals after preloader finishes
function triggerHeroTextAnimation() {
  const reveals = document.querySelectorAll(".hero-copy .reveal-text");
  reveals.forEach(el => el.classList.add("is-visible"));
}

// Intersection Observer for scroll-triggered text & product animations
function initScrollReveals() {
  const elements = document.querySelectorAll(".reveal-text, .reveal-up, .menu-card, .method-item");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach(el => observer.observe(el));
}

// Header backdrop blur on scroll
function initNavScroll() {
  const nav = document.getElementById("siteNav");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 32) {
      nav.classList.add("is-scrolled");
    } else {
      nav.classList.remove("is-scrolled");
    }
  });
}

// Menu Grid Rendering & Filtering
function initMenu() {
  const grid = document.getElementById("menuGrid");
  const tabsContainer = document.getElementById("categoryTabs");

  function renderGrid() {
    grid.innerHTML = "";
    const filtered = currentCategory === "All" 
      ? PRODUCTS 
      : PRODUCTS.filter(p => p.category === currentCategory);

    filtered.forEach((item, idx) => {
      const card = document.createElement("article");
      card.className = "menu-card";
      card.style.transitionDelay = `${idx * 0.1}s`;
      card.innerHTML = `
        <div class="menu-image" style="background-image: url('${item.image}')">
          <div class="menu-image-overlay"></div>
          <span class="menu-tag">${item.tag}</span>
          <span class="menu-number">0${idx + 1}</span>
        </div>
        <div class="menu-card-body">
          <div>
            <h3>${item.name}</h3>
            <p>${item.description}</p>
          </div>
          <div class="menu-card-footer">
            <strong>${item.price}</strong>
            <button class="add-to-cart-btn" data-id="${item.id}" aria-label="Add ${item.name} to order">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
            </button>
          </div>
        </div>
      `;

      const addBtn = card.querySelector(".add-to-cart-btn");
      addBtn.addEventListener("click", () => {
        addToCart(item);
      });

      grid.appendChild(card);
    });

    // Observe newly rendered cards
    initScrollReveals();
  }

  // Set up tabs
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

// Cart Drawer Functionality
function initCartDrawer() {
  const orderNavBtn = document.getElementById("orderNavBtn");
  const drawerBackdrop = document.getElementById("drawerBackdrop");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");

  orderNavBtn.addEventListener("click", () => toggleCart(true));
  closeDrawerBtn.addEventListener("click", () => toggleCart(false));
  drawerBackdrop.addEventListener("click", (e) => {
    if (e.target === drawerBackdrop) toggleCart(false);
  });
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

function addToCart(item) {
  cartItems.push(item);
  updateCartBadge();
  showToast(`${item.name} added to your order`);
}

function removeFromCart(index) {
  cartItems.splice(index, 1);
  updateCartBadge();
  updateCartUI();
}

function updateCartBadge() {
  const badge = document.getElementById("cartCountBadge");
  if (cartItems.length > 0) {
    badge.style.display = "grid";
    badge.textContent = cartItems.length;
  } else {
    badge.style.display = "none";
  }
}

function updateCartUI() {
  const countHead = document.getElementById("drawerCountHead");
  const cartBody = document.getElementById("cartBody");

  if (cartItems.length === 0) {
    countHead.textContent = "Nothing yet";
    cartBody.innerHTML = `
      <div class="empty-cart">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <p>Your next cup is one scroll away.</p>
        <button class="text-link" id="emptyBrowseBtn">Browse the counter ↗</button>
      </div>
    `;
    document.getElementById("emptyBrowseBtn").addEventListener("click", () => {
      toggleCart(false);
      document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    });
  } else {
    countHead.textContent = `${cartItems.length} item${cartItems.length === 1 ? '' : 's'}`;
    let total = cartItems.reduce((acc, item) => acc + item.numericPrice, 0);

    let itemsHTML = `<div class="cart-items">`;
    cartItems.forEach((item, idx) => {
      itemsHTML += `
        <div class="cart-row">
          <div>
            <strong>${item.name}</strong>
            <span>${item.price} · hand finished</span>
          </div>
          <button onclick="removeFromCart(${idx})" aria-label="Remove ${item.name}">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>
          </button>
        </div>
      `;
    });
    itemsHTML += `</div>`;

    itemsHTML += `
      <div class="drawer-total">
        <span>Estimated total</span>
        <strong>₹${total}</strong>
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
        updateCartBadge();
        toggleCart(false);
        showToast("Order noted — we'll see you at the counter.");
      });
    }
  }
}

// Toast notification helper
function showToast(message) {
  const container = document.getElementById("toastContainer");
  if (toastTimeout) clearTimeout(toastTimeout);

  container.innerHTML = `
    <div class="toast">
      <span class="toast-pulse"></span>
      <span>${message}</span>
    </div>
  `;

  toastTimeout = setTimeout(() => {
    container.innerHTML = "";
  }, 3000);
}

// 3D Cup Drag Orbit Effect
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

// Newsletter Form
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
