// Основные переменные
let currentPage = 'main';
let currentPropertyType = 'commercial'; // 'commercial' или 'residential'
let properties = [];
let filteredProperties = [];
let currentPageNumber = 1;
const propertiesPerPage = 6;
let currentLanguage = 'ru';

// Переводы
const translations = {
    ru: {
        app_name: "RentSpace",
        main_title: "Аренда недвижимости",
        main_subtitle: "Найдите идеальное помещение для ваших нужд",
        commercial: "Коммерческая",
        residential: "Жилая",
        rent_out: "Сдать помещение",
        find_property: "Найти помещение",
        basic_info: "Основная информация",
        ad_title: "Название объявления*",
        auto_detected: "Определено:",
        description: "Описание* (не менее 30 слов)",
        words: "Слов:",
        price: "Цена* (в месяц)",
        negotiable_price: "Договорная цена",
        photos: "Фотографии",
        drag_photos: "Перетащите фото сюда или",
        select_files: "выберите файлы",
        characteristics: "Характеристики",
        property_type: "Тип недвижимости*",
        total_area: "Общая площадь (м²)*",
        usable_area: "Полезная площадь (м²)",
        location_type: "Расположение*",
        select_type: "Выберите тип",
        business_center: "Бизнес центр",
        administrative: "Административное здание",
        residential_building: "Жилой дом",
        shopping_center: "Торговый центр",
        industrial: "Промзона",
        standalone: "Отдельно стоящее здание",
        floor: "Этаж*",
        total_floors: "Этажность дома*",
        ceiling_height: "Высота потолков (м)",
        renovation: "Ремонт*",
        design_project: "Авторский проект",
        euro_renovation: "Евроремонт",
        medium_renovation: "Средний",
        rough_renovation: "Черновая отделка",
        facilities: "В помещении есть",
        parking: "Наличие парковки*",
        yes: "Есть",
        no: "Нет",
        rooms: "Количество комнат*",
        bathrooms: "Санузлы*",
        studio: "Студия",
        res_renovation: "Ремонт*",
        res_facilities: "В квартире есть",
        furniture: "Мебель*",
        full_furniture: "Полностью меблирована",
        partial_furniture: "Частично меблирована",
        no_furniture: "Без мебели",
        location: "Местоположение",
        region: "Область*",
        select_region: "Выберите область",
        tashkent_city: "Ташкент",
        tashkent_region: "Ташкентская",
        samarkand: "Самаркандская",
        bukhara: "Бухарская",
        andijan: "Андижанская",
        city: "Город*",
        select_city: "Сначала выберите область",
        district: "Район",
        select_district: "Сначала выберите город",
        address: "Адрес* (улица, дом)",
        set_on_map: "Указать на карте",
        contact_info: "Контактная информация",
        contact_person: "Контактное лицо*",
        phone: "Номер телефона*",
        prevew: "Предпросмотр",
        publish: "Опубликовать",
        filters: "Фильтры",
        reset: "Сбросить",
        apply: "Применить",
        found: "Найдено",
        listings: "объявлений",
        sort_by: "Сортировка:",
        price_low: "По цене (дешевые сначала)",
        price_high: "По цене (дорогие сначала)",
        new_first: "Сначала новые",
        area: "По площади",
        ad_preview: "Предпросмотр объявления",
        edit: "Редактировать",
        show_map: "Показать карту",
        rent_out_form: "Сдать помещение"
    },
    uz: {
        app_name: "RentSpace",
        main_title: "Ko'chmas mulk ijarasi",
        main_subtitle: "Ehtiyojlaringiz uchun ideal joy toping",
        commercial: "Tijorat",
        residential: "Turar joy",
        rent_out: "Joy ijaraga berish",
        find_property: "Joy topish",
        basic_info: "Asosiy ma'lumotlar",
        ad_title: "E'lon nomi*",
        auto_detected: "Aniqlandi:",
        description: "Tavsif* (kamida 30 so'z)",
        words: "So'zlar:",
        price: "Narx* (oylik)",
        negotiable_price: "Kelishilgan narx",
        photos: "Rasmlar",
        drag_photos: "Rasmlarni shu yerga sudrab tashlang yoki",
        select_files: "fayllarni tanlang",
        characteristics: "Xususiyatlar",
        property_type: "Ko'chmas mulk turi*",
        total_area: "Umumiy maydon (m²)*",
        usable_area: "Foydali maydon (m²)",
        location_type: "Joylashuv*",
        select_type: "Turni tanlang",
        business_center: "Biznes markaz",
        administrative: "Ma'muriy bino",
        residential_building: "Turar joy binosi",
        shopping_center: "Savdo markazi",
        industrial: "Sanoat zonasi",
        standalone: "Mustaqil bino",
        floor: "Qavat*",
        total_floors: "Binoning qavatlari*",
        ceiling_height: "Shift balandligi (m)",
        renovation: "Ta'mirlash*",
        design_project: "Dizayn loyihasi",
        euro_renovation: "Evrota'mir",
        medium_renovation: "O'rta",
        rough_renovation: "Qora ish",
        facilities: "Xonada mavjud",
        parking: "Avtoturargoh*",
        yes: "Bor",
        no: "Yo'q",
        rooms: "Xonalar soni*",
        bathrooms: "Hojatxonalar*",
        studio: "Studiya",
        res_renovation: "Ta'mirlash*",
        res_facilities: "Kvartirada mavjud",
        furniture: "Mebel*",
        full_furniture: "To'liq jihozlangan",
        partial_furniture: "Qisman jihozlangan",
        no_furniture: "Mebelsiz",
        location: "Manzil",
        region: "Viloyat*",
        select_region: "Viloyatni tanlang",
        tashkent_city: "Toshkent shahri",
        tashkent_region: "Toshkent viloyati",
        samarkand: "Samarqand viloyati",
        bukhara: "Buxoro viloyati",
        andijan: "Andijon viloyati",
        city: "Shahar*",
        select_city: "Avval viloyatni tanlang",
        district: "Tuman",
        select_district: "Avval shaharni tanlang",
        address: "Manzil* (ko'cha, uy)",
        set_on_map: "Xaritada ko'rsatish",
        contact_info: "Aloqa ma'lumotlari",
        contact_person: "Aloqa shaxsi*",
        phone: "Telefon raqami*",
        prevew: "Oldindan ko'rish",
        publish: "E'lon qilish",
        filters: "Filtrlar",
        reset: "Tozalash",
        apply: "Qo'llash",
        found: "Topildi",
        listings: "e'lon",
        sort_by: "Saralash:",
        price_low: "Narx bo'yicha (arzonlari oldin)",
        price_high: "Narx bo'yicha (qimmatlari oldin)",
        new_first: "Yangi e'lonlar",
        area: "Maydon bo'yicha",
        ad_preview: "E'lonni oldindan ko'rish",
        edit: "Tahrirlash",
        show_map: "Xaritani ko'rsatish",
        rent_out_form: "Joy ijaraga berish"
    }
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    // Навигация между страницами
    document.getElementById('rent-out-btn').addEventListener('click', () => showPage('rent-out-form'));
    document.getElementById('rent-btn').addEventListener('click', () => showPage('rent-page'));
    document.getElementById('back-to-main').addEventListener('click', () => showPage('main'));
    document.getElementById('back-to-main-rent').addEventListener('click', () => showPage('main'));
    document.getElementById('back-to-form').addEventListener('click', () => showPage('rent-out-form'));
    
    // Инициализация карты
    initMap();
    initRentMap();
    
    // Обработчики формы
    setupFormHandlers();
    
    // Загрузка тестовых данных
    loadSampleProperties();
    
    // Обработчики фильтров
    setupFilterHandlers();
    
    // Переключение карты на странице аренды
    document.getElementById('toggle-map-btn').addEventListener('click', toggleRentMap);
    
    // Переключение типа недвижимости
    setupPropertyTypeHandlers();
    
    // Языковой переключатель
    setupLanguageSwitcher();
    
    // Инициализация формы
    initPropertyForm();
    
    // Инициализация фильтров
    initFilters();
});

// Показать страницу
function showPage(pageId) {
    document.getElementById('main-page').style.display = 'none';
    document.getElementById('rent-out-form').style.display = 'none';
    document.getElementById('rent-page').style.display = 'none';
    document.getElementById('preview-page').style.display = 'none';
    
    document.getElementById(pageId).style.display = 'block';
    currentPage = pageId;
    
    if (pageId === 'rent-page') {
        renderProperties();
    }
}

// Инициализация карты в форме
function initMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [69.2406, 41.2995], // Координаты Ташкента
        zoom: 12
    });
    
    const marker = new mapboxgl.Marker()
        .setLngLat([69.2406, 41.2995])
        .addTo(map);
    
    document.getElementById('set-location').addEventListener('click', () => {
        const lngLat = marker.getLngLat();
        alert(`${translate('coordinates')}: ${lngLat.lng}, ${lngLat.lat}`);
    });
}

// Инициализация карты на странице аренды
function initRentMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
    const map = new mapboxgl.Map({
        container: 'map-rent',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [69.2406, 41.2995], // Координаты Ташкента
        zoom: 12
    });
    
    // Добавление маркеров для существующих свойств
    properties.forEach(property => {
        if (property.coordinates) {
            new mapboxgl.Marker()
                .setLngLat(property.coordinates)
                .addTo(map);
        }
    });
}

// Переключение карты на странице аренды
function toggleRentMap() {
    const mapElement = document.getElementById('map-rent');
    const toggleBtn = document.getElementById('toggle-map-btn');
    
    if (mapElement.style.display === 'none') {
        mapElement.style.display = 'block';
        toggleBtn.innerHTML = `<i class="fas fa-map"></i> ${translate('hide_map')}`;
    } else {
        mapElement.style.display = 'none';
        toggleBtn.innerHTML = `<i class="fas fa-map"></i> ${translate('show_map')}`;
    }
}

// Настройка обработчиков формы
function setupFormHandlers() {
    const form = document.getElementById('property-form');
    
    // Подсчет слов в описании
    document.getElementById('description').addEventListener('input', function() {
        const wordCount = this.value.trim().split(/\s+/).length;
        document.getElementById('word-counter').textContent = wordCount;
    });
    
    // Автоматическое определение типа недвижимости по названию
    document.getElementById('title').addEventListener('input', function() {
        const title = this.value.toLowerCase();
        let type = translate('not_defined');
        
        if (title.includes('офис') || title.includes('ofis')) type = translate('office');
        else if (title.includes('магазин') || title.includes('торгов') || title.includes('magazin')) type = translate('shop');
        else if (title.includes('склад') || title.includes('sklad')) type = translate('warehouse');
        else if (title.includes('ресторан') || title.includes('кафе') || title.includes('restoran')) type = translate('restaurant');
        else if (title.includes('производство') || title.includes('ishlab chiqarish')) type = translate('production');
        else if (title.includes('квартир') || title.includes('kvartir')) type = translate('apartment');
        else if (title.includes('дом') || title.includes('uy')) type = translate('house');
        
        document.getElementById('property-type').textContent = type;
    });
    
    // Загрузка фотографий
    const fileInput = document.getElementById('file-input');
    const uploadArea = document.getElementById('upload-area');
    const previewContainer = document.getElementById('preview-container');
    
    uploadArea.addEventListener('click', () => fileInput.click());
    
    fileInput.addEventListener('change', function() {
        previewContainer.innerHTML = '';
        Array.from(this.files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const previewItem = document.createElement('div');
                previewItem.className = 'preview-item';
                previewItem.innerHTML = `
                    <img src="${e.target.result}" alt="Preview">
                    <button class="remove-btn" onclick="this.parentNode.remove()">
                        <i class="fas fa-times"></i>
                    </button>
                `;
                previewContainer.appendChild(previewItem);
            };
            reader.readAsDataURL(file);
        });
    });
    
    // Drag and drop для фотографий
    uploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = 'rgba(138, 79, 255, 0.2)';
    });
    
    uploadArea.addEventListener('dragleave', () => {
        uploadArea.style.backgroundColor = 'rgba(138, 79, 255, 0.05)';
    });
    
    uploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadArea.style.backgroundColor = 'rgba(138, 79, 255, 0.05)';
        fileInput.files = e.dataTransfer.files;
        const event = new Event('change');
        fileInput.dispatchEvent(event);
    });
    
    // Предпросмотр объявления
    document.getElementById('preview-btn').addEventListener('click', showPreview);
    
    // Обработка отправки формы
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitPropertyForm();
    });
    
    // Регионы и города
    document.getElementById('region').addEventListener('change', function() {
        const region = this.value;
        const citySelect = document.getElementById('city');
        citySelect.innerHTML = `<option value="">${translate('select_city')}</option>`;
        citySelect.disabled = !region;
        
        if (region) {
            const cities = getCitiesByRegion(region);
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city.value;
                option.textContent = translate(city.value);
                citySelect.appendChild(option);
            });
        }
    });
    
    document.getElementById('city').addEventListener('change', function() {
        const city = this.value;
        const districtSelect = document.getElementById('district');
        districtSelect.innerHTML = `<option value="">${translate('select_district')}</option>`;
        districtSelect.disabled = !city;
        
        if (city) {
            const districts = getDistrictsByCity(city);
            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.value;
                option.textContent = translate(district.value);
                districtSelect.appendChild(option);
            });
        }
    });
}

// Инициализация формы
function initPropertyForm() {
    // Типы коммерческой недвижимости
    const commercialTypes = [
        { value: 'shop', icon: 'fas fa-store', label: 'shop' },
        { value: 'office', icon: 'fas fa-building', label: 'office' },
        { value: 'warehouse', icon: 'fas fa-boxes', label: 'warehouse' },
        { value: 'restaurant', icon: 'fas fa-utensils', label: 'restaurant' },
        { value: 'production', icon: 'fas fa-industry', label: 'production' },
        { value: 'other', icon: 'fas fa-ellipsis-h', label: 'other' }
    ];
    
    const commercialTypeContainer = document.getElementById('property-type-selector');
    commercialTypes.forEach(type => {
        const label = document.createElement('label');
        label.className = 'radio-card';
        label.innerHTML = `
            <input type="radio" name="property-type" value="${type.value}" required>
            <div class="radio-content">
                <i class="${type.icon}"></i>
                <span>${translate(type.label)}</span>
            </div>
        `;
        commercialTypeContainer.appendChild(label);
    });
    
    // Удобства коммерческой недвижимости
    const commercialFacilities = [
        { value: 'internet', label: 'internet' },
        { value: 'phone', label: 'phone' },
        { value: 'window_bars', label: 'window_bars' },
        { value: 'alarm', label: 'alarm' },
        { value: 'ac', label: 'ac' },
        { value: 'fire_alarm', label: 'fire_alarm' },
        { value: 'cctv', label: 'cctv' },
        { value: 'security', label: 'security' },
        { value: 'entrance', label: 'entrance' },
        { value: 'basement', label: 'basement' },
        { value: 'utilities', label: 'utilities' },
        { value: 'furniture', label: 'furniture' }
    ];
    
    const commercialFacilitiesContainer = document.getElementById('commercial-facilities');
    commercialFacilities.forEach(facility => {
        const label = document.createElement('label');
        label.className = 'checkbox-card';
        label.innerHTML = `
            <input type="checkbox" name="facilities" value="${facility.value}">
            <span class="checkmark"></span>
            <span>${translate(facility.label)}</span>
        `;
        commercialFacilitiesContainer.appendChild(label);
    });
    
    // Удобства жилой недвижимости
    const residentialFacilities = [
        { value: 'internet', label: 'internet' },
        { value: 'tv', label: 'tv' },
        { value: 'ac', label: 'ac' },
        { value: 'washing_machine', label: 'washing_machine' },
        { value: 'dishwasher', label: 'dishwasher' },
        { value: 'fridge', label: 'fridge' },
        { value: 'oven', label: 'oven' },
        { value: 'balcony', label: 'balcony' },
        { value: 'parking', label: 'parking' },
        { value: 'elevator', label: 'elevator' },
        { value: 'security', label: 'security' },
        { value: 'gym', label: 'gym' }
    ];
    
    const residentialFacilitiesContainer = document.getElementById('residential-facilities');
    residentialFacilities.forEach(facility => {
        const label = document.createElement('label');
        label.className = 'checkbox-card';
        label.innerHTML = `
            <input type="checkbox" name="res-facilities" value="${facility.value}">
            <span class="checkmark"></span>
            <span>${translate(facility.label)}</span>
        `;
        residentialFacilitiesContainer.appendChild(label);
    });
}

// Получение городов по региону
function getCitiesByRegion(region) {
    const cities = {
        tashkent: [
            { value: 'tashkent_city', label: 'tashkent_city' }
        ],
        tashkent_region: [
            { value: 'angren', label: 'angren' },
            { value: 'almalyk', label: 'almalyk' },
            { value: 'bekabad', label: 'bekabad' },
            { value: 'chirchik', label: 'chirchik' }
        ],
        samarkand: [
            { value: 'samarkand_city', label: 'samarkand_city' },
            { value: 'kattakurgan', label: 'kattakurgan' }
        ],
        bukhara: [
            { value: 'bukhara_city', label: 'bukhara_city' },
            { value: 'gijduvan', label: 'gijduvan' }
        ],
        andijan: [
            { value: 'andijan_city', label: 'andijan_city' },
            { value: 'asaka', label: 'asaka' }
        ]
    };
    
    return cities[region] || [];
}

// Получение районов по городу
function getDistrictsByCity(city) {
    const districts = {
        tashkent_city: [
            { value: 'mirzo_ulugbek', label: 'mirzo_ulugbek' },
            { value: 'yunusabad', label: 'yunusabad' },
            { value: 'shaykhontohur', label: 'shaykhontohur' },
            { value: 'mirabad', label: 'mirabad' }
        ],
        samarkand_city: [
            { value: 'samarkand_1', label: 'samarkand_1' },
            { value: 'samarkand_2', label: 'samarkand_2' }
        ]
    };
    
    return districts[city] || [];
}

// Показать предпросмотр объявления
function showPreview() {
    const form = document.getElementById('property-form');
    const previewContent = document.getElementById('preview-content');
    
    // Проверка заполнения обязательных полей
    let isValid = true;
    const requiredFields = form.querySelectorAll('[required]');
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = 'var(--error-color)';
            isValid = false;
        } else {
            field.style.borderColor = '';
        }
    });
    
    if (!isValid) {
        alert(translate('fill_required'));
        return;
    }
    
    // Создание HTML для предпросмотра
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const type = document.querySelector('input[name="property-type"]:checked')?.value || translate('not_specified');
    const area = document.getElementById('total-area').value;
    
    let photosHtml = '';
    const previewItems = document.querySelectorAll('.preview-item img');
    if (previewItems.length > 0) {
        photosHtml = '<div class="preview-photos">';
        previewItems.forEach(item => {
            photosHtml += `<img src="${item.src}" alt="${translate('property_photo')}">`;
        });
        photosHtml += '</div>';
    }
    
    previewContent.innerHTML = `
        <h2>${title}</h2>
        <div class="preview-price">${formatPrice(price)} ${translate('month')}</div>
        <div class="preview-type">${translate('type')}: ${type}</div>
        <div class="preview-area">${translate('area')}: ${area} m²</div>
        ${photosHtml}
        <h3>${translate('description')}:</h3>
        <p>${description}</p>
    `;
    
    showPage('preview-page');
}

// Отправка формы
function submitPropertyForm() {
    // Здесь должна быть логика отправки данных на сервер
    alert(translate('ad_published'));
    showPage('main');
}

// Загрузка тестовых данных
function loadSampleProperties() {
    properties = [
        // Коммерческая недвижимость
        {
            id: 1,
            title: "Офис в бизнес-центре",
            description: "Светлый офис с современным ремонтом в центре города. Идеально подходит для IT-компании или офиса продаж.",
            price: 15000000,
            type: "office",
            area: 45,
            location: "Ташкент, Мирзо Улугбекский район",
            coordinates: [69.2406, 41.2995],
            image: "https://via.placeholder.com/600x400/6a1b9a/ffffff?text=Office",
            propertyType: "commercial"
        },
        {
            id: 2,
            title: "Торговое помещение в ТЦ",
            description: "Отличное место для розничной торговли с высокой проходимостью. Есть витрина и складское помещение.",
            price: 20000000,
            type: "shop",
            area: 80,
            location: "Ташкент, Юнусабадский район",
            coordinates: [69.2806, 41.3395],
            image: "https://via.placeholder.com/600x400/9c4dcc/ffffff?text=Store",
            propertyType: "commercial"
        },
        {
            id: 3,
            title: "Складской комплекс",
            description: "Современный склад с системой климат-контроля и удобной логистикой. Высота потолков 6 метров.",
            price: 12000000,
            type: "warehouse",
            area: 200,
            location: "Ташкентская область, Зангиатинский район",
            coordinates: [69.2006, 41.2595],
            image: "https://via.placeholder.com/600x400/38006b/ffffff?text=Warehouse",
            propertyType: "commercial"
        },
        // Жилая недвижимость
        {
            id: 4,
            title: "3-комнатная квартира",
            description: "Просторная 3-комнатная квартира в новом доме с евроремонтом. Все удобства, мебель, техника.",
            price: 8000000,
            type: "apartment",
            area: 85,
            rooms: 3,
            location: "Ташкент, Чиланзарский район",
            coordinates: [69.2206, 41.2895],
            image: "https://via.placeholder.com/600x400/4a148c/ffffff?text=Apartment",
            propertyType: "residential"
        },
        {
            id: 5,
            title: "Студия в центре",
            description: "Уютная студия в центре города с ремонтом. Идеально для одного человека или пары.",
            price: 5000000,
            type: "apartment",
            area: 35,
            rooms: "studio",
            location: "Ташкент, Мирабадский район",
            coordinates: [69.2606, 41.3195],
            image: "https://via.placeholder.com/600x400/7b1fa2/ffffff?text=Studio",
            propertyType: "residential"
        },
        {
            id: 6,
            title: "Частный дом",
            description: "Уютный частный дом с участком 6 соток. 3 спальни, гостиная, кухня, 2 санузла.",
            price: 12000000,
            type: "house",
            area: 120,
            rooms: 4,
            location: "Ташкентская область, Кибрайский район",
            coordinates: [69.1806, 41.2795],
            image: "https://via.placeholder.com/600x400/6a1b9a/ffffff?text=House",
            propertyType: "residential"
        }
    ];
    
    filteredProperties = [...properties];
}

// Настройка обработчиков фильтров
function setupFilterHandlers() {
    document.getElementById('apply-filters').addEventListener('click', applyFilters);
    document.getElementById('reset-filters').addEventListener('click', resetFilters);
    document.getElementById('sort-by').addEventListener('change', applyFilters);
    document.getElementById('prev-page').addEventListener('click', goToPrevPage);
    document.getElementById('next-page').addEventListener('click', goToNextPage);
}

// Инициализация фильтров
function initFilters() {
    const filtersContainer = document.getElementById('filters-container');
    
    // Общие фильтры
    const commonFilters = `
        <div class="filter-group">
            <label for="rent-region">${translate('region')}</label>
            <select id="rent-region">
                <option value="">${translate('all_regions')}</option>
                <option value="tashkent">${translate('tashkent_city')}</option>
                <option value="tashkent_region">${translate('tashkent_region')}</option>
                <option value="samarkand">${translate('samarkand')}</option>
            </select>
            
            <label for="rent-district">${translate('district')}</label>
            <select id="rent-district" disabled>
                <option value="">${translate('all_districts')}</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label>${translate('price')} (${translate('month')})</label>
            <div class="range-inputs">
                <input type="number" id="min-price" placeholder="${translate('from')}">
                <span>-</span>
                <input type="number" id="max-price" placeholder="${translate('to')}">
            </div>
            
            <label>${translate('area')} (m²)</label>
            <div class="range-inputs">
                <input type="number" id="min-area" placeholder="${translate('from')}">
                <span>-</span>
                <input type="number" id="max-area" placeholder="${translate('to')}">
            </div>
        </div>
    `;
    
    // Фильтры для коммерческой недвижимости
    const commercialFilters = `
        <div class="filter-group">
            <label for="rent-type">${translate('property_type')}</label>
            <select id="rent-type">
                <option value="">${translate('all_types')}</option>
                <option value="shop">${translate('shop')}</option>
                <option value="office">${translate('office')}</option>
                <option value="warehouse">${translate('warehouse')}</option>
                <option value="restaurant">${translate('restaurant')}</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label>${translate('facilities')}</label>
            <div class="checkboxes-grid">
                <label class="checkbox-card">
                    <input type="checkbox" name="rent-facilities" value="ac">
                    <span class="checkmark"></span>
                    <span>${translate('ac')}</span>
                </label>
                <label class="checkbox-card">
                    <input type="checkbox" name="rent-facilities" value="parking">
                    <span class="checkmark"></span>
                    <span>${translate('parking')}</span>
                </label>
            </div>
        </div>
    `;
    
    // Фильтры для жилой недвижимости
    const residentialFilters = `
        <div class="filter-group">
            <label for="rent-type">${translate('property_type')}</label>
            <select id="rent-type">
                <option value="">${translate('all_types')}</option>
                <option value="apartment">${translate('apartment')}</option>
                <option value="house">${translate('house')}</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label for="rooms">${translate('rooms')}</label>
            <select id="rooms">
                <option value="">${translate('any')}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4+">4+</option>
                <option value="studio">${translate('studio')}</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label>${translate('facilities')}</label>
            <div class="checkboxes-grid">
                <label class="checkbox-card">
                    <input type="checkbox" name="rent-facilities" value="furniture">
                    <span class="checkmark"></span>
                    <span>${translate('furniture')}</span>
                </label>
                <label class="checkbox-card">
                    <input type="checkbox" name="rent-facilities" value="ac">
                    <span class="checkmark"></span>
                    <span>${translate('ac')}</span>
                </label>
            </div>
        </div>
    `;
    
    filtersContainer.innerHTML = commonFilters + commercialFilters;
    
    // Обработчики для регионов и районов
    document.getElementById('rent-region').addEventListener('change', function() {
        const region = this.value;
        const districtSelect = document.getElementById('rent-district');
        districtSelect.innerHTML = `<option value="">${translate('all_districts')}</option>`;
        districtSelect.disabled = !region;
        
        if (region) {
            const districts = getDistrictsByRegion(region);
            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.value;
                option.textContent = translate(district.label);
                districtSelect.appendChild(option);
            });
        }
    });
}

// Получение районов по региону (для фильтров)
function getDistrictsByRegion(region) {
    const districts = {
        tashkent: [
            { value: 'mirzo_ulugbek', label: 'mirzo_ulugbek' },
            { value: 'yunusabad', label: 'yunusabad' },
            { value: 'shaykhontohur', label: 'shaykhontohur' },
            { value: 'mirabad', label: 'mirabad' }
        ],
        tashkent_region: [
            { value: 'kibray', label: 'kibray' },
            { value: 'zangiota', label: 'zangiota' },
            { value: 'parkent', label: 'parkent' }
        ],
        samarkand: [
            { value: 'samarkand_1', label: 'samarkand_1' },
            { value: 'samarkand_2', label: 'samarkand_2' }
        ]
    };
    
    return districts[region] || [];
}

// Применение фильтров
function applyFilters() {
    const typeFilter = document.getElementById('rent-type')?.value;
    const regionFilter = document.getElementById('rent-region')?.value;
    const districtFilter = document.getElementById('rent-district')?.value;
    const minArea = parseInt(document.getElementById('min-area')?.value) || 0;
    const maxArea = parseInt(document.getElementById('max-area')?.value) || Infinity;
    const minPrice = parseInt(document.getElementById('min-price')?.value) || 0;
    const maxPrice = parseInt(document.getElementById('max-price')?.value) || Infinity;
    const roomsFilter = document.getElementById('rooms')?.value;
    
    filteredProperties = properties.filter(property => {
        // Фильтр по типу недвижимости (коммерческая/жилая)
        if (property.propertyType !== currentPropertyType) return false;
        
        // Фильтры для конкретного типа
        const matchesType = !typeFilter || property.type === typeFilter;
        const matchesRegion = !regionFilter || property.location.includes(translate(regionFilter));
        const matchesDistrict = !districtFilter || property.location.includes(translate(districtFilter));
        const matchesArea = property.area >= minArea && property.area <= maxArea;
        const matchesPrice = property.price >= minPrice && property.price <= maxPrice;
        const matchesRooms = !roomsFilter || 
                            (roomsFilter === 'studio' ? property.rooms === 'studio' : 
                             roomsFilter === '4+' ? property.rooms >= 4 : 
                             property.rooms == roomsFilter);
        
        return matchesType && matchesRegion && matchesDistrict && matchesArea && matchesPrice && matchesRooms;
    });
    
    // Сортировка
    const sortBy = document.getElementById('sort-by').value;
    switch(sortBy) {
        case 'price-asc':
            filteredProperties.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filteredProperties.sort((a, b) => b.price - a.price);
            break;
        case 'area-desc':
            filteredProperties.sort((a, b) => b.area - a.area);
            break;
        default:
            // По умолчанию - новые сначала (по ID)
            filteredProperties.sort((a, b) => b.id - a.id);
    }
    
    currentPageNumber = 1;
    renderProperties();
}

// Сброс фильтров
function resetFilters() {
    document.getElementById('rent-type').value = '';
    document.getElementById('rent-region').value = '';
    document.getElementById('rent-district').value = '';
    document.getElementById('min-area').value = '';
    document.getElementById('max-area').value = '';
    document.getElementById('min-price').value = '';
    document.getElementById('max-price').value = '';
    document.getElementById('rooms').value = '';
    
    filteredProperties = [...properties];
    currentPageNumber = 1;
    renderProperties();
}

// Отображение свойств
function renderProperties() {
    const container = document.getElementById('listings-container');
    const countElement = document.getElementById('results-count');
    const prevBtn = document.getElementById('prev-page');
    const nextBtn = document.getElementById('next-page');
    
    // Обновление счетчика
    countElement.textContent = filteredProperties.length;
    
    // Пагинация
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    const startIndex = (currentPageNumber - 1) * propertiesPerPage;
    const endIndex = startIndex + propertiesPerPage;
    const currentProperties = filteredProperties.slice(startIndex, endIndex);
    
    // Обновление кнопок пагинации
    prevBtn.disabled = currentPageNumber <= 1;
    nextBtn.disabled = currentPageNumber >= totalPages;
    document.getElementById('current-page').textContent = currentPageNumber;
    
    // Очистка контейнера
    container.innerHTML = '';
    
    if (currentProperties.length === 0) {
        container.innerHTML = `
            <div class="empty-listings">
                <i class="fas fa-building"></i>
                <p>${translate('no_results')}</p>
            </div>
        `;
        return;
    }
    
    // Добавление карточек
    currentProperties.forEach(property => {
        const card = document.createElement('div');
        card.className = 'listing-card';
        
        let typeBadge = '';
        if (property.propertyType === 'commercial') {
            typeBadge = `<span class="feature-badge">${translate(property.type)}</span>`;
        } else {
            const roomsText = property.rooms === 'studio' ? translate('studio') : `${property.rooms} ${translate('rooms')}`;
            typeBadge = `<span class="feature-badge">${roomsText}</span>`;
        }
        
        card.innerHTML = `
            <div class="listing-image" style="background-image: url('${property.image}')"></div>
            <div class="listing-details">
                <div class="listing-price">${formatPrice(property.price)}</div>
                <h3 class="listing-title">${property.title}</h3>
                <div class="listing-features">
                    ${typeBadge}
                    <span class="feature-badge">${property.area} м²</span>
                </div>
                <div class="listing-location">
                    <i class="fas fa-map-marker-alt"></i>
                    ${property.location}
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Форматирование цены
function formatPrice(price) {
    return new Intl.NumberFormat(currentLanguage === 'ru' ? 'ru-RU' : 'uz-UZ', {
        style: 'currency',
        currency: 'UZS',
        maximumFractionDigits: 0
    }).format(price).replace('UZS', 'сум');
}

// Навигация по страницам
function goToPrevPage() {
    if (currentPageNumber > 1) {
        currentPageNumber--;
        renderProperties();
    }
}

function goToNextPage() {
    const totalPages = Math.ceil(filteredProperties.length / propertiesPerPage);
    if (currentPageNumber < totalPages) {
        currentPageNumber++;
        renderProperties();
    }
}

// Настройка обработчиков типа недвижимости
function setupPropertyTypeHandlers() {
    const tabs = document.querySelectorAll('.type-tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Обновление активного таба
            tabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            // Установка текущего типа
            currentPropertyType = this.dataset.type;
            
            // Обновление формы (если на странице формы)
            if (currentPage === 'rent-out-form') {
                updateFormForPropertyType();
            }
            
            // Обновление фильтров (если на странице аренды)
            if (currentPage === 'rent-page') {
                updateFiltersForPropertyType();
                applyFilters();
            }
        });
    });
}

// Обновление формы для выбранного типа недвижимости
function updateFormForPropertyType() {
    const commercialFields = document.getElementById('commercial-fields');
    const residentialFields = document.getElementById('residential-fields');
    
    if (currentPropertyType === 'commercial') {
        commercialFields.style.display = 'block';
        residentialFields.style.display = 'none';
    } else {
        commercialFields.style.display = 'none';
        residentialFields.style.display = 'block';
    }
}

// Обновление фильтров для выбранного типа недвижимости
function updateFiltersForPropertyType() {
    const filtersContainer = document.getElementById('filters-container');
    
    // Общие фильтры
    const commonFilters = `
        <div class="filter-group">
            <label for="rent-region">${translate('region')}</label>
            <select id="rent-region">
                <option value="">${translate('all_regions')}</option>
                <option value="tashkent">${translate('tashkent_city')}</option>
                <option value="tashkent_region">${translate('tashkent_region')}</option>
                <option value="samarkand">${translate('samarkand')}</option>
            </select>
            
            <label for="rent-district">${translate('district')}</label>
            <select id="rent-district" disabled>
                <option value="">${translate('all_districts')}</option>
            </select>
        </div>
        
        <div class="filter-group">
            <label>${translate('price')} (${translate('month')})</label>
            <div class="range-inputs">
                <input type="number" id="min-price" placeholder="${translate('from')}">
                <span>-</span>
                <input type="number" id="max-price" placeholder="${translate('to')}">
            </div>
            
            <label>${translate('area')} (m²)</label>
            <div class="range-inputs">
                <input type="number" id="min-area" placeholder="${translate('from')}">
                <span>-</span>
                <input type="number" id="max-area" placeholder="${translate('to')}">
            </div>
        </div>
    `;
    
    if (currentPropertyType === 'commercial') {
        // Фильтры для коммерческой недвижимости
        filtersContainer.innerHTML = commonFilters + `
            <div class="filter-group">
                <label for="rent-type">${translate('property_type')}</label>
                <select id="rent-type">
                    <option value="">${translate('all_types')}</option>
                    <option value="shop">${translate('shop')}</option>
                    <option value="office">${translate('office')}</option>
                    <option value="warehouse">${translate('warehouse')}</option>
                    <option value="restaurant">${translate('restaurant')}</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label>${translate('facilities')}</label>
                <div class="checkboxes-grid">
                    <label class="checkbox-card">
                        <input type="checkbox" name="rent-facilities" value="ac">
                        <span class="checkmark"></span>
                        <span>${translate('ac')}</span>
                    </label>
                    <label class="checkbox-card">
                        <input type="checkbox" name="rent-facilities" value="parking">
                        <span class="checkmark"></span>
                        <span>${translate('parking')}</span>
                    </label>
                </div>
            </div>
        `;
    } else {
        // Фильтры для жилой недвижимости
        filtersContainer.innerHTML = commonFilters + `
            <div class="filter-group">
                <label for="rent-type">${translate('property_type')}</label>
                <select id="rent-type">
                    <option value="">${translate('all_types')}</option>
                    <option value="apartment">${translate('apartment')}</option>
                    <option value="house">${translate('house')}</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label for="rooms">${translate('rooms')}</label>
                <select id="rooms">
                    <option value="">${translate('any')}</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                    <option value="studio">${translate('studio')}</option>
                </select>
            </div>
            
            <div class="filter-group">
                <label>${translate('facilities')}</label>
                <div class="checkboxes-grid">
                    <label class="checkbox-card">
                        <input type="checkbox" name="rent-facilities" value="furniture">
                        <span class="checkmark"></span>
                        <span>${translate('furniture')}</span>
                    </label>
                    <label class="checkbox-card">
                        <input type="checkbox" name="rent-facilities" value="ac">
                        <span class="checkmark"></span>
                        <span>${translate('ac')}</span>
                    </label>
                </div>
            </div>
        `;
    }
    
    // Установка обработчиков для регионов и районов
    document.getElementById('rent-region').addEventListener('change', function() {
        const region = this.value;
        const districtSelect = document.getElementById('rent-district');
        districtSelect.innerHTML = `<option value="">${translate('all_districts')}</option>`;
        districtSelect.disabled = !region;
        
        if (region) {
            const districts = getDistrictsByRegion(region);
            districts.forEach(district => {
                const option = document.createElement('option');
                option.value = district.value;
                option.textContent = translate(district.label);
                districtSelect.appendChild(option);
            });
        }
    });
}

// Настройка языкового переключателя
function setupLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Обновление активной кнопки
            langButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Установка текущего языка
            currentLanguage = this.dataset.lang;
            
            // Применение переводов
            applyTranslations();
            
            // Обновление отображения (если нужно)
            if (currentPage === 'rent-page') {
                renderProperties();
            }
        });
    });
}

// Применение переводов
function applyTranslations() {
    // Находим все элементы с атрибутом data-translate
    const translatableElements = document.querySelectorAll('[data-translate]');
    
    translatableElements.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translate(key);
    });
    
    // Обновляем форматированные цены
    if (currentPage === 'rent-page') {
        renderProperties();
    }
}

// Функция перевода
function translate(key) {
    return translations[currentLanguage][key] || key;
}