// Wait for the page content to load before running the script
document.addEventListener('DOMContentLoaded', () => {
    const districts = document.querySelectorAll('.st30');
    const tooltip = document.getElementById('tooltip');
    // 1. Store district information in a JavaScript object
    // script.js

// ... (keep the document.addEventListener on top)

const districtData = {
    Sonepat: {
        name: "Sonipat",
        suitableTrees: [
            {
                treeName: "Neem (Azadirachta indica)",
                // MODIFIED: Using a placeholder URL
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Neem",
                cost: "₹150 - ₹300",
                soil: "Well-drained, sandy loam, clayey",
                water: "Low; drought-resistant",
                maintenance: "Low"
            },
            {
                treeName: "Peepal (Ficus religiosa)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Peepal",
                cost: "₹100 - ₹250",
                soil: "Wide range, including sandy and clay",
                water: "Moderate",
                maintenance: "Very Low"
            },
            {
                treeName: "Shisham (Dalbergia sissoo)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Shisham",
                cost: "₹200 - ₹350",
                soil: "Alluvial, sandy, and gravelly soils",
                water: "Moderate; needs good moisture",
                maintenance: "Low"
            },
            {
                treeName: "Jamun (Syzygium cumini)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Jamun",
                cost: "₹250 - ₹400",
                soil: "Loamy, well-drained soils",
                water: "High; thrives in moist conditions",
                maintenance: "Moderate"
            },
            {
                treeName: "Amaltas (Cassia fistula)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Amaltas",
                cost: "₹300 - ₹500",
                soil: "Well-drained soil",
                water: "Moderate; drought-tolerant",
                maintenance: "Low"
            },
            {
                treeName: "Banyan (Ficus benghalensis)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Banyan",
                cost: "₹200 - ₹450",
                soil: "Adaptable to various soils",
                water: "Low once established",
                maintenance: "Low, but needs significant space"
            },
            {
                treeName: "Gulmohar (Delonix regia)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Gulmohar",
                cost: "₹350 - ₹600",
                soil: "Well-drained, sandy or loamy",
                water: "Moderate; drought-deciduous",
                maintenance: "Moderate; pruning needed"
            },
            {
                treeName: "Kikar / Babul (Acacia nilotica)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Kikar",
                cost: "₹100 - ₹200",
                soil: "Poor, dry, sandy, or rocky soils",
                water: "Very Low; extremely drought-resistant",
                maintenance: "Very Low"
            },
            {
                treeName: "Arjuna (Terminalia arjuna)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Arjuna",
                cost: "₹200 - ₹400",
                soil: "Moist, fertile alluvial loam",
                water: "High; often found near river banks",
                maintenance: "Low"
            },
            {
                treeName: "Siris (Albizia lebbeck)",
                imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Siris",
                cost: "₹150 - ₹300",
                soil: "Wide variety, tolerates salinity",
                water: "Low to Moderate",
                maintenance: "Low"
            }
        ]
    },
    // ... (other districts can remain as they are)
};
// 2. Get references to the HTML elements
const infoPanel = document.getElementById('info-panel');
const allDistricts = document.querySelectorAll('.st30');
// script.js (after the districtData object)
allDistricts.forEach(district => {
    district.addEventListener('click', (event) => {
        const districtId = event.currentTarget.id;
        const data = districtData[districtId];

        if (data && data.suitableTrees && data.suitableTrees.length > 0) {
            // 1. Generate the Slider HTML
            const slidesHTML = data.suitableTrees.map(tree => `
                <div class="slide">
                    <img src="${tree.imageUrl}" alt="${tree.treeName}">
                    <div class="slide-content">
                        <h3>${tree.treeName}</h3>
                        <p><strong>Cost:</strong> ${tree.cost}</p>
                        <p><strong>Soil Required:</strong> ${tree.soil}</p>
                        <p><strong>Water Required:</strong> ${tree.water}</p>
                        <p><strong>Maintenance:</strong> ${tree.maintenance}</p>
                    </div>
                </div>
            `).join('');

            infoPanel.innerHTML = `
                <h2>${data.name}</h2>
                <div class="slider-container">
                    <div class="slider-wrapper">${slidesHTML}</div>
                    <button class="slider-btn prev">&#10094;</button>
                    <button class="slider-btn next">&#10095;</button>
                </div>
            `;
            
            // 2. Activate Slider Logic
            // IMPORTANT: We do this *after* adding the HTML to the page
            activateSlider();

        } else {
             infoPanel.innerHTML = `
                <h2>${(data && data.name) || 'Information'}</h2>
                <p>Tree information for this district is not available.</p>
            `;
        }
    });
});

function activateSlider() {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.slide');
    const prevButton = document.querySelector('.slider-btn.prev');
    const nextButton = document.querySelector('.slider-btn.next');

    if (!sliderWrapper) return; // Exit if slider isn't on the page

    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        sliderWrapper.style.transform = `translateX(${index * -100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides; // Loop back to start
        showSlide(currentIndex);
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Loop back to end
        showSlide(currentIndex);
    });

    // Initialize slider position
    showSlide(0);
}
    // 3. Add a click event listener to each district path
allDistricts.forEach(district => {
    district.addEventListener('mouseover', function(event) {
                    const districtName = event.target.getAttribute('data-name');
                    if (districtName) { // Only show tooltip if data-name exists
                        tooltip.innerHTML = districtName;
                        tooltip.style.visibility = 'visible';
                        tooltip.style.opacity = 1;
                    }
            });
    district.addEventListener('mousemove', function(event) {
                    tooltip.style.left = event.pageX + 10 + 'px';
                    tooltip.style.top = event.pageY + 10 + 'px';
        });
    district.addEventListener('mouseout', function() {
                    tooltip.style.visibility = 'hidden';
                    tooltip.style.opacity = 0;
        });

        district.addEventListener('click', (event) => {
            const districtId = event.currentTarget.id;
            const data = districtData[districtId];
            if (data && data.suitableTrees && data.suitableTrees.length > 0) {
            // 1. Generate the Slider HTML
            const slidesHTML = data.suitableTrees.map(tree => `
                <div class="slide">
                    <img src="${tree.imageUrl}" alt="${tree.treeName}">
                    <div class="slide-content">
                        <h3>${tree.treeName}</h3>
                        <p><strong>Cost:</strong> ${tree.cost}</p>
                        <p><strong>Soil Required:</strong> ${tree.soil}</p>
                        <p><strong>Water Required:</strong> ${tree.water}</p>
                        <p><strong>Maintenance:</strong> ${tree.maintenance}</p>
                    </div>
                </div>
            `).join('');

            infoPanel.innerHTML = `
                <h2>${data.name}</h2>
                <div class="slider-container">
                    <div class="slider-wrapper">${slidesHTML}</div>
                    <button class="slider-btn prev">&#10094;</button>
                    <button class="slider-btn next">&#10095;</button>
                </div>
            `;
            
            // 2. Activate Slider Logic
            // IMPORTANT: We do this *after* adding the HTML to the page
            activateSlider();

        } else {
             infoPanel.innerHTML = `
                <h2>${(data && data.name) || 'Information'}</h2>
                <p>Tree information for this district is not available.</p>
            `;
        }
        });
    });
});
