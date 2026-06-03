// Curated Global Image Archive Database
let spaceImages = [
    // --- NATURE ---
    {
        id: 1,
        title: "Alpine Lake Sunset Reflex",
        category: "nature",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800",
        description: "A breathtaking golden hour sunset mirrored on a tranquil alpine lake nestled between mountain ridges, captured during late autumn.",
        instrument: "Canon EOS R5 & RF 24-70mm",
        exposure: "1/60s &bull; f/11 &bull; ISO 100",
        distance: "Dolomites, Italy",
        date: "October 14, 2024",
        recommended: true,
        saved: false
    },
    {
        id: 2,
        title: "Sunbeams Through Redwood Forest",
        category: "nature",
        resolution: "8K UHD",
        imageUrl: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
        description: "Morning light breaking through towering coast redwood trees in the Pacific Northwest, casting dramatic rays through the misty air.",
        instrument: "Sony A7R V & FE 16-35mm GM",
        exposure: "1/15s &bull; f/8.0 &bull; ISO 200",
        distance: "California, USA",
        date: "June 28, 2025",
        recommended: false,
        saved: false
    },
    {
        id: 3,
        title: "Antelope Canyon Waves of Sandstone",
        category: "nature",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?auto=format&fit=crop&q=80&w=800",
        description: "Abstract swirling lines carved into red Navajo sandstone, illuminated by indirect skylight bouncing down the narrow slot canyon walls.",
        instrument: "Nikon Z7 II & 24-70mm f/4",
        exposure: "1/4s &bull; f/5.6 &bull; ISO 400",
        distance: "Arizona, USA",
        date: "April 10, 2023",
        recommended: false,
        saved: false
    },

    // --- ANIMALS ---
    {
        id: 4,
        title: "Majestic Male Lion Profile",
        category: "animal",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?auto=format&fit=crop&q=80&w=800",
        description: "Close-up portrait of a wild male lion resting in the dry grass fields during the golden hours of safari observation.",
        instrument: "Sony A1 & FE 400mm f/2.8 GM",
        exposure: "1/1600s &bull; f/2.8 &bull; ISO 400",
        distance: "Serengeti, Tanzania",
        date: "September 02, 2024",
        recommended: true,
        saved: false
    },
    {
        id: 5,
        title: "Polar Bear in Arctic Blizzard",
        category: "animal",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1589656966895-2f33e7653819?auto=format&fit=crop&q=80&w=800",
        description: "A polar bear walking through heavy snow in Svalbard, searching for pack ice. Highlights the stark beauty of survival in high latitudes.",
        instrument: "Canon 1D X Mark III & 600mm f/4",
        exposure: "1/1000s &bull; f/5.6 &bull; ISO 320",
        distance: "Svalbard, Norway",
        date: "December 08, 2023",
        recommended: false,
        saved: false
    },
    {
        id: 6,
        title: "Red Fox in Meadow Wildflowers",
        category: "animal",
        resolution: "8K UHD",
        imageUrl: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&q=80&w=800",
        description: "An alert red fox pausing amidst purple summer wildflowers, captured near the edge of a deciduous forest.",
        instrument: "Fujifilm GFX 100S & GF 250mm",
        exposure: "1/500s &bull; f/4 &bull; ISO 250",
        distance: "Hokkaido, Japan",
        date: "July 15, 2024",
        recommended: false,
        saved: false
    },

    // --- FOOD ---
    {
        id: 7,
        title: "Neapolitan Wood-Fired Pizza",
        category: "food",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800",
        description: "Classic Neapolitan Margherita pizza with bubbling mozzarella, fresh tomato sauce, and basil leaves right out of a brick oven.",
        instrument: "Sony A7 IV & FE 90mm Macro G",
        exposure: "1/125s &bull; f/4.0 &bull; ISO 100",
        distance: "Naples, Italy",
        date: "May 20, 2025",
        recommended: true,
        saved: false
    },
    {
        id: 8,
        title: "Fresh Summer Berry Tart",
        category: "food",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&q=80&w=800",
        description: "Gourmet pastry tart topped with glazed raspberries, blueberries, and black berries on a dusting of powdered sugar.",
        instrument: "Fujifilm X-T5 & 56mm f/1.2",
        exposure: "1/200s &bull; f/2.0 &bull; ISO 160",
        distance: "Paris, France",
        date: "August 12, 2024",
        recommended: false,
        saved: false
    },
    {
        id: 9,
        title: "Premium Nigiri Sushi Platter",
        category: "food",
        resolution: "8K UHD",
        imageUrl: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=800",
        description: "A meticulously prepared plate of premium fatty tuna (Otoro), salmon, and sea urchin nigiri served on traditional dark slate.",
        instrument: "Canon EOS R5 & RF 100mm Macro",
        exposure: "1/80s &bull; f/5.6 &bull; ISO 100",
        distance: "Tokyo, Japan",
        date: "November 05, 2025",
        recommended: false,
        saved: false
    },

    // --- SPACE ---
    {
        id: 10,
        title: "Pillars of Creation in Mid-Infrared",
        category: "space",
        resolution: "8K UHD",
        imageUrl: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?auto=format&fit=crop&q=80&w=800",
        description: "This view of the Pillars of Creation, from the Webb Space Telescope’s Mid-Infrared Instrument (MIRI), shows gas and dust in chilling detail.",
        instrument: "James Webb Space Telescope MIRI",
        exposure: "18.2 Hours",
        distance: "6,500 Light Years Out",
        date: "October 28, 2022",
        recommended: true,
        saved: false
    },
    {
        id: 11,
        title: "ISS Over Reef Systems",
        category: "space",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
        description: "Terrestrial oceans and barrier reef systems photographed from the International Space Station during an orbital daytime sweep.",
        instrument: "ISS Space Cam (Nikon D5)",
        exposure: "1/500s &bull; f/8.0 &bull; ISO 200",
        distance: "250 Miles Orbit",
        date: "April 05, 2024",
        recommended: false,
        saved: false
    },
    {
        id: 12,
        title: "Artemis SLS Rocket Pad Check",
        category: "space",
        resolution: "4K UHD",
        imageUrl: "https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&q=80&w=800",
        description: "The Space Launch System (SLS) Artemis stack standing on Launch Pad 39B ahead of lunar orbital test trajectories.",
        instrument: "Canon EOS-1D X Ground Pad Cam",
        exposure: "1/1000s &bull; f/8 &bull; ISO 100",
        distance: "Cape Canaveral, USA",
        date: "November 14, 2022",
        recommended: false,
        saved: false
    }
];

/// State variables
let activeCategory = "all";
let searchQuery = "";
let selectedPost = null;
let showSavedOnly = false;
let currentGridMode = "cozy";
let currentSortMode = "default";

// Slideshow state
let isSlideshowActive = false;
let slideshowIndex = 0;
let slideshowTimer = null;
let slideshowSpeed = 4000; // 4 seconds default
let isSlideshowPaused = false;

// DOM elements
const mainGrid = document.getElementById("main-gallery-grid");
const chipButtons = document.querySelectorAll(".chip");
const searchInput = document.getElementById("search-input");
const btnHome = document.getElementById("btn-home");
const btnFavorites = document.getElementById("btn-favorites");
const statsTotal = document.getElementById("stats-total");
const sortSelect = document.getElementById("sort-select");

// Layout Toggles
const btnLayoutCozy = document.getElementById("btn-layout-cozy");
const btnLayoutCompact = document.getElementById("btn-layout-compact");
const btnLayoutMasonry = document.getElementById("btn-layout-masonry");

// Lightbox elements
const lightboxModal = document.getElementById("lightbox-modal");
const btnCloseLightbox = document.getElementById("btn-close-lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxTitle = document.getElementById("lightbox-title");
const lightboxDesc = document.getElementById("lightbox-desc");
const lightboxCategory = document.getElementById("lightbox-category");
const lightboxResolution = document.getElementById("lightbox-resolution");
const lightboxTelescope = document.getElementById("lightbox-telescope-brand");
const lightboxSaveBtn = document.getElementById("lightbox-save-btn");
const btnDownloadHighres = document.getElementById("btn-download-highres");
const filterButtons = document.querySelectorAll(".preset-filter-btn");

// Lightbox Specs Elements
const specInstrument = document.getElementById("spec-instrument");
const specExposure = document.getElementById("spec-exposure");
const specDistance = document.getElementById("spec-distance");
const specDate = document.getElementById("spec-date");

// Slideshow elements
const btnStartSlideshow = document.getElementById("btn-start-slideshow");
const slideshowOverlay = document.getElementById("slideshow-overlay");
const btnExitSlideshow = document.getElementById("btn-exit-slideshow");
const btnSlideshowPrev = document.getElementById("btn-slideshow-prev");
const btnSlideshowNext = document.getElementById("btn-slideshow-next");
const btnSlideshowPlayPause = document.getElementById("btn-slideshow-playpause");
const speedButtons = document.querySelectorAll(".speed-btn");
const slideshowImg = document.getElementById("slideshow-img");
const slideshowTitle = document.getElementById("slideshow-title");
const slideshowMeta = document.getElementById("slideshow-meta");
const slideshowProgress = document.getElementById("slideshow-progress-fill");

// Add media elements
const addPostModal = document.getElementById("add-media-modal");
const btnAddPost = document.getElementById("btn-add-media");
const btnCloseAddPost = document.getElementById("btn-close-add-media");
const addPostForm = document.getElementById("add-media-form");
const presetBtns = document.querySelectorAll(".preset-btn");
const postImageUrlInput = document.getElementById("post-image-url");

// Init application
function init() {
    renderGrids();
    setupEventListeners();
}

// Render dynamic galleries
function renderGrids() {
    // Filter logic
    let filtered = spaceImages.filter(img => {
        const matchesCategory = activeCategory === "all" || img.category === activeCategory;
        const matchesSearch = img.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              img.instrument.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              img.distance.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesSaved = !showSavedOnly || img.saved;
        return matchesCategory && matchesSearch && matchesSaved;
    });

    // Sorting Logic
    if (currentSortMode === "name-asc") {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSortMode === "name-desc") {
        filtered.sort((a, b) => b.title.localeCompare(a.title));
    } else if (currentSortMode === "date-newest") {
        filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    if (statsTotal) {
        statsTotal.textContent = filtered.length;
    }

    // Update Grid Classes for Layout
    mainGrid.className = "gallery-grid";
    if (currentGridMode === "cozy") {
        mainGrid.classList.add("grid-layout-cozy");
    } else if (currentGridMode === "compact") {
        mainGrid.classList.add("grid-layout-compact");
    } else if (currentGridMode === "masonry") {
        mainGrid.classList.add("grid-layout-masonry");
    }

    // Populate Main Grid (All filtered items)
    mainGrid.innerHTML = "";
    if (filtered.length === 0) {
        mainGrid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 50px 0; color: var(--text-muted);"><i class="fa-solid fa-camera-retro" style="font-size: 28px; margin-bottom: 10px; display: block;"></i> No captures indexed matching filter parameters.</div>`;
    } else {
        filtered.forEach((img, index) => {
            const card = document.createElement("div");
            card.className = "gallery-card";
            card.dataset.id = img.id;
            card.style.animationDelay = `${index * 0.06}s`;
            card.innerHTML = `
                <div class="card-img-wrapper">
                    <img class="card-img" src="${img.imageUrl}" alt="${img.title}">
                </div>
                <div class="card-badge">${img.resolution}</div>
                <!-- Interactive Hover Overlay -->
                <div class="card-hover-overlay">
                    <div class="hover-top-row">
                        <span class="hover-tag">${img.category}</span>
                        <div class="btn-hover-action quick-save-btn ${img.saved ? 'saved' : ''}" data-id="${img.id}" title="Save to Collection">
                            <i class="${img.saved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
                        </div>
                    </div>
                    <div class="hover-center-actions">
                        <button class="circle-action-btn quick-view-btn" title="Quick Specs / Zoom">
                            <i class="fa-solid fa-eye"></i>
                        </button>
                        <button class="circle-action-btn quick-play-btn" title="Start Slideshow">
                            <i class="fa-solid fa-play"></i>
                        </button>
                    </div>
                    <div class="hover-bottom-title">
                        ${img.title}
                    </div>
                </div>
                <div class="card-gradient-overlay"></div>
                <div class="card-info">
                    ${img.recommended ? `<span class="card-recommended"><i class="fa-solid fa-star"></i> Featured Capture</span>` : ''}
                    <h3 class="card-title">${img.title}</h3>
                </div>
            `;
            
            // Wire save button
            card.querySelector(".quick-save-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                img.saved = !img.saved;
                renderGrids();
            });

            // Wire view button
            card.querySelector(".quick-view-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                openLightbox(img.id);
            });

            // Wire play/slideshow button
            card.querySelector(".quick-play-btn").addEventListener("click", (e) => {
                e.stopPropagation();
                // Find index of this image in the filtered list
                const filteredIndex = filtered.findIndex(item => item.id === img.id);
                startSlideshow(filteredIndex !== -1 ? filteredIndex : 0);
            });

            // Card click fallback
            card.addEventListener("click", () => openLightbox(img.id));
            
            mainGrid.appendChild(card);
        });
    }
}

// Lightbox Logic
function openLightbox(imageId) {
    const img = spaceImages.find(p => p.id === imageId);
    if (!img) return;
    
    selectedPost = img;
    
    // Reset filters
    lightboxImg.className = "filter-default";
    filterButtons.forEach(btn => btn.classList.remove("active"));
    const normalBtn = Array.from(filterButtons).find(btn => btn.dataset.filter === "default");
    if (normalBtn) normalBtn.classList.add("active");

    lightboxImg.src = img.imageUrl;
    lightboxTitle.textContent = img.title;
    lightboxDesc.textContent = img.description;
    lightboxCategory.textContent = img.category.toUpperCase();
    lightboxResolution.innerHTML = `<i class="fa-solid fa-crop-simple"></i> ${img.resolution}`;
    lightboxTelescope.textContent = img.instrument;
    
    // Set technical metadata specs
    specInstrument.textContent = img.instrument;
    specExposure.innerHTML = img.exposure;
    specDistance.textContent = img.distance;
    specDate.textContent = img.date;

    // Set download attributes
    btnDownloadHighres.href = img.imageUrl;
    btnDownloadHighres.setAttribute("download", `${img.title.toLowerCase().replace(/ /g, "_")}.jpg`);
    
    updateLightboxSave();
    
    lightboxModal.classList.add("active");
}

function closeLightbox() {
    lightboxModal.classList.remove("active");
    selectedPost = null;
}

// update lightbox save
function updateLightboxSave() {
    if (!selectedPost) return;
    
    const icon = lightboxSaveBtn.querySelector("i");
    
    if (selectedPost.saved) {
        lightboxSaveBtn.classList.add("active");
        icon.className = "fa-solid fa-bookmark";
        lightboxSaveBtn.innerHTML = `<i class="fa-solid fa-bookmark"></i> Saved`;
    } else {
        lightboxSaveBtn.classList.remove("active");
        icon.className = "fa-regular fa-bookmark";
        lightboxSaveBtn.innerHTML = `<i class="fa-regular fa-bookmark"></i> Save`;
    }
}

// Slideshow Feature Controls
function startSlideshow(startIndex = 0) {
    let images = spaceImages.filter(img => activeCategory === "all" || img.category === activeCategory);
    if (images.length === 0) return;
    
    isSlideshowActive = true;
    isSlideshowPaused = false;
    slideshowIndex = startIndex;
    slideshowOverlay.classList.add("active");
    
    if (btnSlideshowPlayPause) {
        btnSlideshowPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
    
    playSlideshowStep();
}

function playSlideshowStep() {
    if (isSlideshowPaused) return;

    let images = spaceImages.filter(img => activeCategory === "all" || img.category === activeCategory);
    if (images.length === 0) return;
    
    if (slideshowIndex >= images.length) slideshowIndex = 0;
    if (slideshowIndex < 0) slideshowIndex = images.length - 1;

    const img = images[slideshowIndex];
    slideshowImg.src = img.imageUrl;
    slideshowTitle.textContent = img.title;
    slideshowMeta.innerHTML = `${img.instrument} &bull; ${img.category.toUpperCase()}`;

    // Reset progress bar animation
    slideshowProgress.style.transition = 'none';
    slideshowProgress.style.width = '0%';
    
    setTimeout(() => {
        if (!isSlideshowPaused) {
            slideshowProgress.style.transition = `width ${slideshowSpeed}ms linear`;
            slideshowProgress.style.width = '100%';
        }
    }, 50);

    // Set auto loop timer
    clearTimeout(slideshowTimer);
    slideshowTimer = setTimeout(() => {
        slideshowIndex++;
        playSlideshowStep();
    }, slideshowSpeed);
}

function toggleSlideshowPause() {
    isSlideshowPaused = !isSlideshowPaused;
    if (isSlideshowPaused) {
        clearTimeout(slideshowTimer);
        slideshowProgress.style.transition = 'none';
        slideshowProgress.style.width = '0%';
        btnSlideshowPlayPause.innerHTML = `<i class="fa-solid fa-play"></i>`;
    } else {
        btnSlideshowPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
        playSlideshowStep();
    }
}

function exitSlideshow() {
    isSlideshowActive = false;
    clearTimeout(slideshowTimer);
    slideshowOverlay.classList.remove("active");
}

function navigateSlideshow(direction) {
    slideshowIndex += direction;
    
    // Reset pause if navigating manually
    if (isSlideshowPaused) {
        isSlideshowPaused = false;
        btnSlideshowPlayPause.innerHTML = `<i class="fa-solid fa-pause"></i>`;
    }
    
    playSlideshowStep();
}

// Event Listeners Setups
function setupEventListeners() {
    // Categories/Albums
    chipButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            chipButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            activeCategory = btn.dataset.category;
            renderGrids();
        });
    });

    // Filtering search
    searchInput.addEventListener("input", (e) => {
        searchQuery = e.target.value;
        renderGrids();
    });

    // Saved bookmark tabs
    btnFavorites.addEventListener("click", (e) => {
        e.preventDefault();
        showSavedOnly = true;
        btnFavorites.classList.add("active");
        btnHome.classList.remove("active");
        renderGrids();
    });

    btnHome.addEventListener("click", (e) => {
        e.preventDefault();
        showSavedOnly = false;
        btnFavorites.classList.remove("active");
        btnHome.classList.add("active");
        renderGrids();
    });

    // Sort selection dropdown
    if (sortSelect) {
        sortSelect.addEventListener("change", (e) => {
            currentSortMode = e.target.value;
            renderGrids();
        });
    }

    // Grid Layout toggle triggers
    if (btnLayoutCozy) {
        btnLayoutCozy.addEventListener("click", () => {
            currentGridMode = "cozy";
            btnLayoutCozy.classList.add("active");
            btnLayoutCompact.classList.remove("active");
            btnLayoutMasonry.classList.remove("active");
            renderGrids();
        });
    }
    if (btnLayoutCompact) {
        btnLayoutCompact.addEventListener("click", () => {
            currentGridMode = "compact";
            btnLayoutCompact.classList.add("active");
            btnLayoutCozy.classList.remove("active");
            btnLayoutMasonry.classList.remove("active");
            renderGrids();
        });
    }
    if (btnLayoutMasonry) {
        btnLayoutMasonry.addEventListener("click", () => {
            currentGridMode = "masonry";
            btnLayoutMasonry.classList.add("active");
            btnLayoutCozy.classList.remove("active");
            btnLayoutCompact.classList.remove("active");
            renderGrids();
        });
    }

    // Film Preset Filter applications
    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            lightboxImg.className = `filter-${btn.dataset.filter}`;
        });
    });

    // Lightbox triggers
    btnCloseLightbox.addEventListener("click", closeLightbox);
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) closeLightbox();
    });

    // Save toggle within lightbox
    lightboxSaveBtn.addEventListener("click", () => {
        if (!selectedPost) return;
        selectedPost.saved = !selectedPost.saved;
        updateLightboxSave();
        renderGrids();
    });

    // Slideshow control hooks
    if (btnStartSlideshow) {
        btnStartSlideshow.addEventListener("click", () => startSlideshow(0));
    }
    btnExitSlideshow.addEventListener("click", exitSlideshow);
    btnSlideshowPrev.addEventListener("click", () => navigateSlideshow(-1));
    btnSlideshowNext.addEventListener("click", () => navigateSlideshow(1));
    
    if (btnSlideshowPlayPause) {
        btnSlideshowPlayPause.addEventListener("click", toggleSlideshowPause);
    }

    // Slideshow speed setting buttons
    speedButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            speedButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            slideshowSpeed = parseInt(btn.dataset.speed);
            if (!isSlideshowPaused) {
                playSlideshowStep(); // Restart interval with new speed
            }
        });
    });

    // Keyboard navigation binding (Accessibility)
    document.addEventListener("keydown", (e) => {
        if (isSlideshowActive) {
            if (e.key === "ArrowRight") {
                navigateSlideshow(1);
            } else if (e.key === "ArrowLeft") {
                navigateSlideshow(-1);
            } else if (e.key === "Escape") {
                exitSlideshow();
            } else if (e.key === " ") {
                e.preventDefault();
                toggleSlideshowPause();
            }
        } else if (selectedPost) {
            // Lightbox navigation bindings
            let images = spaceImages.filter(img => activeCategory === "all" || img.category === activeCategory);
            let idx = images.findIndex(img => img.id === selectedPost.id);
            
            if (e.key === "ArrowRight" && idx < images.length - 1) {
                openLightbox(images[idx + 1].id);
            } else if (e.key === "ArrowLeft" && idx > 0) {
                openLightbox(images[idx - 1].id);
            } else if (e.key === "Escape") {
                closeLightbox();
            }
        }
    });

    // Upload post triggers
    btnAddPost.addEventListener("click", () => {
        addPostModal.classList.add("active");
    });

    btnCloseAddPost.addEventListener("click", () => {
        addPostModal.classList.remove("active");
    });

    addPostModal.addEventListener("click", (e) => {
        if (e.target === addPostModal) addPostModal.classList.remove("active");
    });

    presetBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            postImageUrlInput.value = btn.dataset.url;
        });
    });

    addPostForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const newImage = {
            id: Date.now(),
            title: document.getElementById("post-title").value,
            category: document.getElementById("post-category").value,
            resolution: document.getElementById("post-resolution").value,
            imageUrl: postImageUrlInput.value,
            description: document.getElementById("post-desc").value,
            instrument: document.getElementById("post-instrument").value,
            exposure: "1/125s &bull; f/5.6 &bull; ISO 100",
            distance: document.getElementById("post-distance").value,
            date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
            recommended: false,
            saved: false
        };

        spaceImages.unshift(newImage);
        addPostForm.reset();
        addPostModal.classList.remove("active");
        renderGrids();
    });

    // Welcome Splash Screen Dismiss Event Listener
    const btnSplashExplore = document.getElementById("btn-splash-explore");
    const splashScreen = document.getElementById("splash-screen");
    if (btnSplashExplore && splashScreen) {
        btnSplashExplore.addEventListener("click", () => {
            splashScreen.classList.add("fade-out");
            setTimeout(() => {
                splashScreen.style.display = "none";
            }, 800);
        });
    }
}

// Launch
document.addEventListener("DOMContentLoaded", init);
