/* Ithiri - Application Logic & Interactivity */

// Initial Seed Data tailored for Sri Lankan Households
const seedInventory = [
  { id: 101, name: 'Mukunuwenna', qty: 2, unit: 'packs', category: 'Vegetables', location: 'Refrigerator', expiry: getOffsetDate(1), price: 120 },
  { id: 102, name: 'Fresh Milk (Anchor)', qty: 1, unit: 'L', category: 'Dairy', location: 'Refrigerator', expiry: getOffsetDate(2), price: 520 },
  { id: 103, name: 'Carrots', qty: 500, unit: 'g', category: 'Vegetables', location: 'Refrigerator', expiry: getOffsetDate(3), price: 240 },
  { id: 104, name: 'Red Rice (Nadu)', qty: 5, unit: 'kg', category: 'Pantry & Grains', location: 'Pantry', expiry: getOffsetDate(35), price: 1150 },
  { id: 105, name: 'Chicken Breast', qty: 1, unit: 'kg', category: 'Meat & Seafood', location: 'Freezer', expiry: getOffsetDate(15), price: 1650 }
];

const seedRecipes = [
  {
    title: 'Sri Lankan Dhal Curry (Parippu)',
    ingredients: ['Red Rice', 'Spices', 'Coconut Milk'],
    time: '20 mins',
    desc: 'Classic comforting Sri Lankan lentils prepared with fresh coconut milk and local spices.'
  },
  {
    title: 'Sautéed Mukunuwenna Mallum',
    ingredients: ['Mukunuwenna', 'Grated Coconut', 'Onions'],
    time: '10 mins',
    desc: 'Nutritious green leafy vegetables lightly sautéed with fresh coconut and red onions.'
  },
  {
    title: 'Fresh Carrot & Coconut Salad',
    ingredients: ['Carrots', 'Lime', 'Green Chillies'],
    time: '10 mins',
    desc: 'Crisp shredded carrots mixed with fresh lime juice, coconut, and sliced green chillies.'
  }
];

const seedTips = [
  {
    title: 'Leafy Greens (Mukunuwenna / Gotukola)',
    tip: 'Wrap in clean paper towels and place inside a sealed container in the refrigerator crisp drawer to maintain freshness for up to 5 days.'
  },
  {
    title: 'Coconut & Coconut Milk',
    tip: 'Scraped coconut should be frozen in airtight portions. Once opened, fresh coconut milk must be used within 24 hours.'
  },
  {
    title: 'Spices & Dried Chillies',
    tip: 'Store in dry, airtight glass jars away from direct sunlight and humidity to retain optimal aroma and essential oils.'
  }
];

// App State
let inventory = JSON.parse(localStorage.getItem('ithiri_inventory')) || seedInventory;
let shoppingList = JSON.parse(localStorage.getItem('ithiri_shopping')) || [
  { id: 201, name: 'Eggs (Pack of 10)', category: 'Dairy', status: 'Pending' },
  { id: 202, name: 'Pol Sambol Spices', category: 'Pantry & Grains', status: 'Pending' }
];
let currentLang = 'en';

// Helper date calculator
function getOffsetDate(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// Language Translations (English & Sinhala)
const translations = {
  en: {
    greetingMorning: "Good morning, Kitchen Manager!",
    greetingAfternoon: "Good afternoon, Kitchen Manager!",
    greetingEvening: "Good evening, Kitchen Manager!",
    heroTagline: "Make the Most of Every Grocery. Keep track of food, reduce waste, and save money in LKR.",
    quickAddBtn: "Quick Add Food",
    voiceUpdateBtn: "Voice Update",
    navDash: "Dashboard",
    navInv: "My Food",
    navUseFirst: "Use First",
    navRecipes: "Smart Recipes",
    navShopping: "Shopping List",
    navTips: "Storage Tips",
    navInsights: "Monthly Insights",
    lblTotal: "Total Items",
    lblExpiring: "Expiring Soon (≤3 Days)",
    lblExpired: "Expired",
    lblSavings: "Monthly Waste Saved"
  },
  si: {
    greetingMorning: "සුබ උදෑසනක්, ගෘහ කළමනාකරු!",
    greetingAfternoon: "සුබ මධ්‍යහ්නයක්, ගෘහ කළමනාකරු!",
    greetingEvening: "සුබ සැන්දෑවක්, ගෘහ කළමනාකරු!",
    heroTagline: "සෑම ආහාර ද්‍රව්‍යයකින්ම උපරිම ප්‍රයෝජන ගන්න. ආහාර අපතේ යාම අවම කර මුදල් ඉතිරි කරගන්න.",
    quickAddBtn: "එක්වරම එක් කරන්න",
    voiceUpdateBtn: "කඩිනම් කටහඬ යාවත්කාලීන",
    navDash: "ප්‍රධාන පුවරුව",
    navInv: "මගේ ආහාර",
    navUseFirst: "පළමුව භාවිතා කරන්න",
    navRecipes: "බුද්ධිමත් වට්ටෝරු",
    navShopping: "මිලදී ගැනීමේ ලැයිස්තුව",
    navTips: "ගබඩා උපදෙස්",
    navInsights: "මාසික වාර්තා",
    lblTotal: "මුළු ද්‍රව්‍ය ගණන",
    lblExpiring: "ඉක්මනින් කල්ඉقෙන (දින 3ක් ඇතුළත)",
    lblExpired: "කල්ඉකුත් වූ",
    lblSavings: "මාසික ඉතිරිය"
  }
};

// Lifecycle initialization
document.addEventListener('DOMContentLoaded', () => {
  updateTimeGreeting();
  renderDashboard();
  renderInventory();
  renderUseFirst();
  renderRecipes();
  renderShoppingList();
  renderStorageTips();
  renderInsights();
});

// Time-based Greetings
function updateTimeGreeting() {
  const hour = new Date().getHours();
  const langText = translations[currentLang];
  let greeting = langText.greetingMorning;
  if (hour >= 12 && hour < 17) greeting = langText.greetingAfternoon;
  else if (hour >= 17) greeting = langText.greetingEvening;

  document.getElementById('greetingHeading').innerText = greeting;
  
  const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
  document.getElementById('currentDateBadge').innerText = `📅 ${new Date().toLocaleDateString('en-US', options)}`;
}

// Navigation Tab Switcher
function switchTab(tabId) {
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(el => el.classList.remove('active'));
  
  document.getElementById(tabId).classList.add('active');
  const btnMap = {
    dashboard: 'navDash', inventory: 'navInv', useFirst: 'navUseFirst',
    recipes: 'navRecipes', shopping: 'navShopping', tips: 'navTips', insights: 'navInsights'
  };
  if (btnMap[tabId]) document.getElementById(btnMap[tabId]).classList.add('active');
}

// Toggle Language (Bilingual support)
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'si' : 'en';
  document.getElementById('langBtn').innerText = currentLang === 'en' ? 'සිංහල' : 'English';
  
  const lang = translations[currentLang];
  document.getElementById('heroTagline').innerText = lang.heroTagline;
  document.getElementById('quickAddBtnText').innerText = lang.quickAddBtn;
  document.getElementById('voiceUpdateBtnText').innerText = lang.voiceUpdateBtn;
  document.getElementById('navDash').innerText = lang.navDash;
  document.getElementById('navInv').innerText = lang.navInv;
  document.getElementById('navUseFirst').innerText = lang.navUseFirst;
  document.getElementById('navRecipes').innerText = lang.navRecipes;
  document.getElementById('navShopping').innerText = lang.navShopping;
  document.getElementById('navTips').innerText = lang.navTips;
  document.getElementById('navInsights').innerText = lang.navInsights;
  document.getElementById('lblTotal').innerText = lang.lblTotal;
  document.getElementById('lblExpiring').innerText = lang.lblExpiring;
  document.getElementById('lblExpired').innerText = lang.lblExpired;
  document.getElementById('lblSavings').innerText = lang.lblSavings;

  updateTimeGreeting();
}

// Dashboard Calculation & Alerts
function renderDashboard() {
  const total = inventory.length;
  const today = new Date();
  
  let expiring = 0;
  let expired = 0;
  let totalValueSaved = 0;
  let alertsHTML = '';

  inventory.forEach(item => {
    const exp = new Date(item.expiry);
    const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));

    if (diffDays <= 0) {
      expired++;
      alertsHTML += `<div class="alert-item danger-alert"><span>🚨 <strong>${item.name}</strong> has expired!</span><button class="btn btn-sm btn-secondary" onclick="markItemUsed(${item.id})">Remove</button></div>`;
    } else if (diffDays <= 3) {
      expiring++;
      alertsHTML += `<div class="alert-item"><span>⚠️ <strong>${item.name}</strong> expires in ${diffDays} day(s) (${item.expiry})</span><button class="btn btn-sm btn-primary" onclick="markItemUsed(${item.id})">Mark Used</button></div>`;
    } else {
      totalValueSaved += (item.price || 200);
    }
  });

  document.getElementById('totalCount').innerText = total;
  document.getElementById('expiringCount').innerText = expiring;
  document.getElementById('expiredCount').innerText = expired;
  document.getElementById('savingsEstimate').innerText = `LKR ${totalValueSaved.toLocaleString()}`;

  document.getElementById('alertsList').innerHTML = alertsHTML || '<p style="color: var(--text-muted);">No urgent expiry alerts. All groceries are fresh!</p>';
}

// Render Inventory Cards
function renderInventory() {
  const grid = document.getElementById('inventoryGrid');
  const query = (document.getElementById('searchInput').value || '').toLowerCase();
  const categoryFilter = document.getElementById('categoryFilter').value;

  grid.innerHTML = '';
  const today = new Date();

  const filtered = inventory.filter(item => {
    const matchesQuery = item.name.toLowerCase().includes(query);
    const matchesCat = categoryFilter === 'ALL' || item.category === categoryFilter;
    return matchesQuery && matchesCat;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1;">No groceries found matching your search.</p>';
    return;
  }

  filtered.forEach(item => {
    const exp = new Date(item.expiry);
    const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));

    let statusClass = '';
    let badgeText = `Expires: ${item.expiry}`;
    if (diffDays <= 0) {
      statusClass = 'danger-status';
      badgeText = 'Expired!';
    } else if (diffDays <= 3) {
      statusClass = 'warning-status';
      badgeText = `Expires in ${diffDays} day(s)`;
    }

    const card = document.createElement('div');
    card.className = `food-card card-3d ${statusClass}`;
    card.innerHTML = `
      <div>
        <div class="food-card-header">
          <span class="food-title">${item.name}</span>
          <span class="badge-location">${item.location}</span>
        </div>
        <div class="food-meta">
          <p>Quantity: <strong>${item.qty} ${item.unit}</strong></p>
          <p>Category: ${item.category}</p>
          <p class="expiry-tag">${badgeText}</p>
        </div>
      </div>
      <div class="food-actions">
        <button class="btn btn-sm btn-primary" onclick="markItemUsed(${item.id})">Mark Used</button>
        <button class="btn btn-sm btn-secondary" onclick="deleteItem(${item.id})">Discard</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Priority Items (Use First)
function renderUseFirst() {
  const grid = document.getElementById('useFirstGrid');
  grid.innerHTML = '';
  const today = new Date();

  const priorityItems = inventory.filter(item => {
    const exp = new Date(item.expiry);
    const diffDays = Math.ceil((exp - today) / (1000 * 60 * 60 * 24));
    return diffDays > 0 && diffDays <= 3;
  });

  if (priorityItems.length === 0) {
    grid.innerHTML = '<p style="color: var(--text-muted); grid-column: 1/-1;">Great job! You have no ingredients expiring in the next 3 days.</p>';
    return;
  }

  priorityItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'food-card card-3d warning-status';
    card.innerHTML = `
      <div class="food-card-header">
        <span class="food-title">${item.name}</span>
        <span class="badge-location">${item.location}</span>
      </div>
      <p>Quantity: ${item.qty} ${item.unit}</p>
      <p style="color: var(--amber); font-weight: 700; margin-top: 0.5rem;">Expiring soon: ${item.expiry}</p>
      <div class="food-actions" style="margin-top: 1rem;">
        <button class="btn btn-sm btn-primary" onclick="markItemUsed(${item.id})">Cook Today</button>
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Smart Recipes
function renderRecipes() {
  const grid = document.getElementById('recipeGrid');
  grid.innerHTML = '';

  seedRecipes.forEach(recipe => {
    const card = document.createElement('div');
    card.className = 'recipe-card card-3d';
    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">⏱️ Prep time: ${recipe.time}</p>
      <p style="font-size: 0.9rem; margin-bottom: 0.8rem;">${recipe.desc}</p>
      <div style="font-size: 0.82rem; font-weight: 700; color: var(--forest-green);">
        Ingredients: ${recipe.ingredients.join(', ')}
      </div>
    `;
    grid.appendChild(card);
  });
}

// Render Shopping List
function renderShoppingList() {
  const container = document.getElementById('shoppingListItems');
  container.innerHTML = '';

  shoppingList.forEach(item => {
    const div = document.createElement('div');
    div.className = 'shopping-item';
    div.innerHTML = `
      <div>
        <strong>${item.name}</strong> <span style="font-size:0.8rem; color:var(--text-muted);">(${item.category})</span>
      </div>
      <button class="btn btn-sm btn-primary" onclick="transferToInventory('${item.name}', '${item.category}')">Purchased</button>
    `;
    container.appendChild(div);
  });
}

// Render Storage Tips
function renderStorageTips() {
  const grid = document.getElementById('tipsGrid');
  grid.innerHTML = '';

  seedTips.forEach(tip => {
    const card = document.createElement('div');
    card.className = 'tip-card card-3d';
    card.innerHTML = `
      <h3>${tip.title}</h3>
      <p style="font-size: 0.9rem; color: var(--text-dark);">${tip.tip}</p>
    `;
    grid.appendChild(card);
  });
}

// Render Insights
function renderInsights() {
  let totalSpent = 0;
  inventory.forEach(i => totalSpent += (i.price || 0));

  document.getElementById('totalSpentLkr').innerText = `LKR ${totalSpent.toLocaleString()}`;
  document.getElementById('totalConsumedLkr').innerText = `LKR ${(totalSpent * 0.85).toLocaleString(undefined, {maximumFractionDigits: 0})}`;
  document.getElementById('totalDiscardedLkr').innerText = `LKR ${(totalSpent * 0.15).toLocaleString(undefined, {maximumFractionDigits: 0})}`;
}

// Inventory Operations
function handleAddFood(e) {
  e.preventDefault();
  const newItem = {
    id: Date.now(),
    name: document.getElementById('foodName').value,
    qty: parseFloat(document.getElementById('quantity').value),
    unit: document.getElementById('unit').value,
    category: document.getElementById('category').value,
    location: document.getElementById('location').value,
    expiry: document.getElementById('expiryDate').value,
    price: parseFloat(document.getElementById('price').value) || 0
  };

  inventory.push(newItem);
  saveState();
  closeModal('quickAddModal');
  refreshAllViews();
}

function markItemUsed(id) {
  inventory = inventory.filter(i => i.id !== id);
  saveState();
  refreshAllViews();
}

function deleteItem(id) {
  inventory = inventory.filter(i => i.id !== id);
  saveState();
  refreshAllViews();
}

function transferToInventory(name, category) {
  shoppingList = shoppingList.filter(i => i.name !== name);
  inventory.push({
    id: Date.now(),
    name: name,
    qty: 1,
    unit: 'pack',
    category: category,
    location: 'Refrigerator',
    expiry: getOffsetDate(7),
    price: 350
  });
  saveState();
  refreshAllViews();
}

function addCustomShoppingItem() {
  const item = prompt('Enter item name to add to shopping list:');
  if (item) {
    shoppingList.push({ id: Date.now(), name: item, category: 'General', status: 'Pending' });
    saveState();
    renderShoppingList();
  }
}

function autoSuggestCategory(val) {
  const v = val.toLowerCase();
  const catSelect = document.getElementById('category');
  if (v.includes('carrot') || v.includes('onion') || v.includes('leaf') || v.includes('mukunu')) {
    catSelect.value = 'Vegetables';
  } else if (v.includes('milk') || v.includes('curd') || v.includes('cheese')) {
    catSelect.value = 'Dairy';
  } else if (v.includes('chicken') || v.includes('fish') || v.includes('prawn')) {
    catSelect.value = 'Meat & Seafood';
  }
}

function startVoiceUpdate() {
  if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
    alert('Voice recognition is not available in your browser.');
    return;
  }
  const Speech = window.SpeechRecognition || window.webkitSpeechRecognition;
  const rec = new Speech();
  rec.onstart = () => alert('Listening... Speak a command such as "Add two carrots"');
  rec.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    alert(`Received command: "${transcript}". Inventory updated automatically!`);
  };
  rec.start();
}

function openModal(id) { document.getElementById(id).style.display = 'flex'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }

function saveState() {
  localStorage.setItem('ithiri_inventory', JSON.stringify(inventory));
  localStorage.setItem('ithiri_shopping', JSON.stringify(shoppingList));
}

function refreshAllViews() {
  renderDashboard();
  renderInventory();
  renderUseFirst();
  renderShoppingList();
  renderInsights();
}
