// Wait for the page content to load before running the script
document.addEventListener('DOMContentLoaded', () => {

    // DATA SET 1: For Central/Southern Districts
    const commonTreeData = [
        { treeName: "Neem (Azadirachta indica)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Neem", cost: "₹150 - ₹300", soil: "Well-drained, sandy loam, clayey", water: "Low; drought-resistant", maintenance: "Low" },
        { treeName: "Peepal (Ficus religiosa)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Peepal", cost: "₹100 - ₹250", soil: "Wide range, including sandy and clay", water: "Moderate", maintenance: "Very Low" },
        { treeName: "Shisham (Dalbergia sissoo)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Shisham", cost: "₹200 - ₹350", soil: "Alluvial, sandy, and gravelly soils", water: "Moderate; needs good moisture", maintenance: "Low" },
        { treeName: "Jamun (Syzygium cumini)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Jamun", cost: "₹250 - ₹400", soil: "Loamy, well-drained soils", water: "High; thrives in moist conditions", maintenance: "Moderate" },
        { treeName: "Amaltas (Cassia fistula)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Amaltas", cost: "₹300 - ₹500", soil: "Well-drained soil", water: "Moderate; drought-tolerant", maintenance: "Low" },
        { treeName: "Banyan (Ficus benghalensis)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Banyan", cost: "₹200 - ₹450", soil: "Adaptable to various soils", water: "Low once established", maintenance: "Low, but needs significant space" },
        { treeName: "Gulmohar (Delonix regia)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Gulmohar", cost: "₹350 - ₹600", soil: "Well-drained, sandy or loamy", water: "Moderate; drought-deciduous", maintenance: "Moderate; pruning needed" },
        { treeName: "Kikar / Babul (Acacia nilotica)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Kikar", cost: "₹100 - ₹200", soil: "Poor, dry, sandy, or rocky soils", water: "Very Low; extremely drought-resistant", maintenance: "Very Low" },
        { treeName: "Arjuna (Terminalia arjuna)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Arjuna", cost: "₹200 - ₹400", soil: "Moist, fertile alluvial loam", water: "High; often found near river banks", maintenance: "Low" },
        { treeName: "Siris (Albizia lebbeck)", imageUrl: "https://placehold.co/600x400/aed581/558b2f?text=Siris", cost: "₹150 - ₹300", soil: "Wide variety, tolerates salinity", water: "Low to Moderate", maintenance: "Low" }
    ];

    // DATA SET 2: For Northern Districts
    const northernTreeData = [
        { treeName: "Mango (Mangifera indica)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Mango", cost: "₹300 - ₹600", soil: "Well-drained alluvial or loamy soil", water: "Moderate to High", maintenance: "Moderate" },
        { treeName: "Teak / Sagwan (Tectona grandis)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Teak", cost: "₹250 - ₹500", soil: "Fertile, well-drained loamy soil", water: "Moderate", maintenance: "Low to Moderate" },
        { treeName: "Amla / Indian Gooseberry (Phyllanthus emblica)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Amla", cost: "₹150 - ₹300", soil: "Adaptable, including light and heavy soils", water: "Low to Moderate", maintenance: "Low" },
        { treeName: "Jacaranda (Jacaranda mimosifolia)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Jacaranda", cost: "₹350 - ₹700", soil: "Well-drained, sandy loam", water: "Moderate", maintenance: "Low" },
        { treeName: "Semal / Silk Cotton Tree (Bombax ceiba)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Semal", cost: "₹200 - ₹400", soil: "Alluvial, loamy soils", water: "Moderate", maintenance: "Very Low" },
        { treeName: "Guava (Psidium guajava)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Guava", cost: "₹100 - ₹250", soil: "Highly adaptable", water: "Moderate", maintenance: "Moderate" },
        { treeName: "Eucalyptus (Eucalyptus tereticornis)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Eucalyptus", cost: "₹50 - ₹150", soil: "Adaptable, prefers well-drained loam", water: "High", maintenance: "Very Low" },
        { treeName: "Silver Oak (Grevillea robusta)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Silver+Oak", cost: "₹100 - ₹200", soil: "Well-drained acidic to neutral soil", water: "Low to Moderate", maintenance: "Low" },
        { treeName: "Kachnar (Bauhinia variegata)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Kachnar", cost: "₹200 - ₹350", soil: "Fertile, well-drained soils", water: "Moderate", maintenance: "Low" },
        { treeName: "Mulberry / Shahtoot (Morus alba)", imageUrl: "https://placehold.co/600x400/81c784/2e7d32?text=Mulberry", cost: "₹150 - ₹300", soil: "Loamy, well-drained, fertile soil", water: "Moderate", maintenance: "Low to Moderate" }
    ];

    // DATA SET 3: For Arid Southern Districts
    const southernTreeData = [
        { treeName: "Khejri / Jand (Prosopis cineraria)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Khejri", cost: "₹100 - ₹250", soil: "Sandy and alkaline soils", water: "Very Low", maintenance: "Very Low" },
        { treeName: "Rohida / Desert Teak (Tecomella undulata)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Rohida", cost: "₹200 - ₹400", soil: "Well-drained sandy to loamy soils", water: "Very Low", maintenance: "Low" },
        { treeName: "Ber / Indian Jujube (Ziziphus mauritiana)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Ber", cost: "₹150 - ₹300", soil: "Wide range, thrives in sandy and poor soils", water: "Very Low", maintenance: "Low to Moderate for fruit production" },
        { treeName: "Jaal / Pilu (Salvadora persica)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Jaal", cost: "₹100 - ₹200", soil: "Saline, alkaline, and sandy soils", water: "Very Low", maintenance: "Very Low" },
        { treeName: "Kikar / Babul (Acacia nilotica)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Kikar", cost: "₹100 - ₹200", soil: "Poor, dry, sandy, or rocky soils", water: "Very Low", maintenance: "Very Low" },
        { treeName: "Neem (Azadirachta indica)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Neem", cost: "₹150 - ₹300", soil: "Well-drained, sandy soils; avoids clay", water: "Low", maintenance: "Low" },
        { treeName: "Farash / Tamarisk (Tamarix aphylla)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Farash", cost: "₹80 - ₹180", soil: "Highly tolerant of saline and sandy conditions", water: "Very Low", maintenance: "Very Low" },
        { treeName: "Hingot / Desert Date (Balanites roxburghii)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Hingot", cost: "₹150 - ₹300", soil: "Poor, stony, and sandy soils", water: "Very Low", maintenance: "Very Low" },
        { treeName: "Gondi / Lasura (Cordia myxa)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Gondi", cost: "₹120 - ₹250", soil: "Adaptable, including sandy and shallow soils", water: "Low to Moderate", maintenance: "Low" },
        { treeName: "Vilayati Babul (Prosopis juliflora)", imageUrl: "https://placehold.co/600x400/fbc02d/c49000?text=Vilayati+Babul", cost: "₹50 - ₹150", soil: "Grows in any soil; highly invasive", water: "Extremely Low", maintenance: "None; spreads aggressively" }
    ];

    // List of districts for each data set
    const commonDistrictList = [
        "Sonepat", "Fatehabad", "Sirsa", "Hisar", "Bhiwani", "Charkhi Dadri",
        "Jhajjar", "Gurgaon", "Palwal", "Faridabad", "Rohtak",
        "Jind", "Panipat", "Kaithal"
    ];
    const northernDistrictList = [
        "Karnal", "Kurukshetra", "Ambala", "Yamunanagar", "Panchkula"
    ];
    const southernDistrictList = [
        "Mahendragarh", "Rewari", "Nuh"
    ];

    // Programmatically create the main districtData object
    const districtData = {};
    commonDistrictList.forEach(name => {
        districtData[name] = { name: name, suitableTrees: commonTreeData };
    });
    northernDistrictList.forEach(name => {
        districtData[name] = { name: name, suitableTrees: northernTreeData };
    });
    southernDistrictList.forEach(name => {
        districtData[name] = { name: name, suitableTrees: southernTreeData };
    });

    // Get references to the HTML elements
    const infoPanel = document.getElementById('info-panel');
    const allDistricts = document.querySelectorAll('.st30');
    const tooltip = document.getElementById('tooltip');

    // Add event listeners to each district path
    allDistricts.forEach(district => {
        // ... (The rest of the event listener code is identical and does not need to be changed) ...
        // --- Tooltip hover effect ---
        district.addEventListener('mouseover', function(event) {
            const districtId = event.currentTarget.id;
            const data = districtData[districtId];
            const displayName = data ? data.name : districtId;
            
            tooltip.innerHTML = displayName;
            tooltip.style.visibility = 'visible';
            tooltip.style.opacity = 1;
        });

        district.addEventListener('mousemove', function(event) {
            tooltip.style.left = event.pageX + 10 + 'px';
            tooltip.style.top = event.pageY + 10 + 'px';
        });

        district.addEventListener('mouseout', function() {
            tooltip.style.visibility = 'hidden';
            tooltip.style.opacity = 0;
        });

        // --- Click to show info ---
        district.addEventListener('click', (event) => {
            const districtId = event.currentTarget.id;
            const data = districtData[districtId];

            if (data && data.suitableTrees && data.suitableTrees.length > 0) {
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
                
                activateSlider();

            } else {
                 infoPanel.innerHTML = `
                    <h2>${districtId}</h2>
                    <p>Tree information for this district is not available.</p>
                `;
            }
        });
    });

    function activateSlider() {
        const sliderWrapper = document.querySelector('.slider-wrapper');
        const prevButton = document.querySelector('.slider-btn.prev');
        const nextButton = document.querySelector('.slider-btn.next');

        if (!sliderWrapper || !prevButton || !nextButton) return;

        let currentIndex = 0;
        const totalSlides = sliderWrapper.children.length;

        function showSlide(index) {
            sliderWrapper.style.transform = `translateX(${index * -100}%)`;
        }

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % totalSlides;
            showSlide(currentIndex);
        });

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
            showSlide(currentIndex);
        });

        showSlide(0);
    }
});