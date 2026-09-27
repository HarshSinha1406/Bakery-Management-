// Shared across every page: menu catalog, icons, and small storage helpers.
// Loaded before each page's own script.
// (Variable is still called PASTRIES for historical reasons — it now holds every category.)

var ICONS = {
  croissant: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 30 C 8 18, 20 8, 34 12 C 40 14, 42 22, 38 28 C 30 40, 14 40, 10 30 Z"/><path d="M16 24 L22 16 M20 28 L27 19 M25 30 L32 22"/></svg>',
  puff: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="30" rx="15" ry="10"/><path d="M13 22 Q18 12 24 20 Q30 12 35 22"/><circle cx="17" cy="10" r="1.3" fill="currentColor" stroke="none"/><circle cx="24" cy="7" r="1.3" fill="currentColor" stroke="none"/><circle cx="31" cy="10" r="1.3" fill="currentColor" stroke="none"/></svg>',
  macaron: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="24" cy="16" rx="14" ry="7"/><ellipse cx="24" cy="32" rx="14" ry="7"/><path d="M10 24 Q24 30 38 24"/></svg>',
  cinnamon: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><circle cx="24" cy="24" r="15"/><path d="M24 24 m-9,0 a9,9 0 1,0 18,0 a9,9 0 1,0 -18,0"/><path d="M24 24 m-4,0 a4,4 0 1,0 8,0 a4,4 0 1,0 -8,0"/></svg>',
  eclair: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="19" width="34" height="12" rx="6"/><path d="M9 15 L15 20 L21 14 L27 20 L33 14 L39 17"/></svg>',
  cheesecake: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 36 L24 9 L40 36 Z"/><path d="M12.5 29 L35.5 29 M16.5 22 L31.5 22"/><circle cx="24" cy="7" r="2" fill="currentColor" stroke="none"/></svg>',
  tart: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="24" cy="26" r="14"/><ellipse cx="24" cy="14" rx="4" ry="2.6"/><ellipse cx="34" cy="19" rx="4" ry="2.6" transform="rotate(60 34 19)"/><ellipse cx="34" cy="31" rx="4" ry="2.6" transform="rotate(120 34 31)"/><ellipse cx="24" cy="36" rx="4" ry="2.6" transform="rotate(180 24 36)"/><ellipse cx="14" cy="31" rx="4" ry="2.6" transform="rotate(-120 14 31)"/><ellipse cx="14" cy="19" rx="4" ry="2.6" transform="rotate(-60 14 19)"/></svg>',
  cookie: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><circle cx="24" cy="24" r="16"/><circle cx="18" cy="18" r="2" fill="currentColor" stroke="none"/><circle cx="31" cy="19" r="2" fill="currentColor" stroke="none"/><circle cx="21" cy="30" r="2" fill="currentColor" stroke="none"/><circle cx="30" cy="29" r="1.4" fill="currentColor" stroke="none"/></svg>',

  fries: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 20 L34 20 L31 38 L17 38 Z"/><path d="M18 20 L16 8 M23 20 L22 6 M28 20 L27 7 M33 20 L32 9"/></svg>',
  nachos: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M10 34 L24 12 L38 34 Z"/><path d="M17 34 L27 16 M13 34 L21 20"/><circle cx="24" cy="26" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="30" r="1.6" fill="currentColor" stroke="none"/><circle cx="29" cy="29" r="1.6" fill="currentColor" stroke="none"/></svg>',
  wings: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="21" cy="20" rx="11" ry="8" transform="rotate(-25 21 20)"/><path d="M30 27 L38 38"/><path d="M35 33 L41 31 M36 36 L42 36"/></svg>',
  springroll: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="18" width="12" height="22" rx="6"/><rect x="18" y="14" width="12" height="26" rx="6"/><rect x="28" y="19" width="12" height="21" rx="6"/><path d="M11 24 L17 30 M21 20 L27 26 M31 25 L37 31"/></svg>',

  burger: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 20 C8 12 18 8 24 8 C30 8 40 12 40 20 Z"/><path d="M8 24 L40 24"/><path d="M9 28 Q16 24 24 28 Q32 32 39 28"/><path d="M8 32 L40 32"/><path d="M9 36 C9 39 14 40 24 40 C34 40 39 39 39 36 Z"/><circle cx="18" cy="13" r="1.2" fill="currentColor" stroke="none"/><circle cx="24" cy="11" r="1.2" fill="currentColor" stroke="none"/><circle cx="30" cy="13" r="1.2" fill="currentColor" stroke="none"/></svg>',
  pizza: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 16 L24 40 L40 16 Q24 8 8 16 Z"/><circle cx="20" cy="20" r="2" fill="currentColor" stroke="none"/><circle cx="28" cy="19" r="2" fill="currentColor" stroke="none"/><circle cx="24" cy="27" r="2" fill="currentColor" stroke="none"/></svg>',

  shake: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M15 16 L33 16 L30 40 L18 40 Z"/><path d="M20 16 Q24 8 28 16"/><path d="M26 8 L30 4"/></svg>',
  coffee: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M13 20 L35 20 L32 37 Q32 40 28 40 L20 40 Q16 40 16 37 Z"/><path d="M35 22 Q42 22 41 28 Q40 33 34 32"/><path d="M19 14 Q19 10 22 8 M27 14 Q27 10 30 8"/></svg>',
  lemonade: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14 L34 14 L31 40 L17 40 Z"/><circle cx="24" cy="12" r="5"/><path d="M24 8 L24 16 M20 12 L28 12"/><path d="M28 10 L34 4"/></svg>',

  bread: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M6 32 Q6 22 16 22 Q18 15 24 15 Q30 15 32 22 Q42 22 42 32 Z"/><path d="M14 26 L14 30 M22 24 L22 30 M30 24 L30 30 M37 26 L37 30"/></svg>',
  rings: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round"><ellipse cx="24" cy="24" rx="16" ry="10"/><ellipse cx="24" cy="24" rx="9" ry="5.5"/></svg>',
  coleslaw: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><path d="M8 22 Q24 30 40 22 L37 34 Q24 40 11 34 Z"/><path d="M14 24 L18 30 M20 22 L24 29 M26 22 L30 29 M32 23 L35 29"/></svg>',
  mozzsticks: '<svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="14" width="8" height="24" rx="4"/><rect x="20" y="10" width="8" height="28" rx="4"/><rect x="30" y="14" width="8" height="24" rx="4"/><path d="M18 16 Q24 20 28 16" stroke-dasharray="2 3"/></svg>'
};

var ACCENTS = ["var(--raspberry)", "var(--honey)", "var(--sage)"];

// Rendering order and display labels for the category sections on the menu page.
var CATEGORY_ORDER = ["pastries", "snacks", "burgers-pizza", "shakes-beverages", "sides"];
var CATEGORY_LABELS = {
  "pastries": "Pastries",
  "snacks": "Snacks",
  "burgers-pizza": "Burgers & Pizza",
  "shakes-beverages": "Shakes & Beverages",
  "sides": "Sides"
};

var PASTRIES = [
  // Pastries
  { id: "croissant",  name: "Butter Croissant",   desc: "Laminated in 27 layers, shatter-crisp outside, pillowy in.", price: 90,  icon: "croissant",  category: "pastries" },
  { id: "puff",       name: "Vanilla Choux Puff", desc: "Choux pastry piped with cold vanilla-bean cream.",           price: 110, icon: "puff",       category: "pastries" },
  { id: "macaron",    name: "Raspberry Macaron",  desc: "Almond shells, tart raspberry ganache filling.",             price: 70,  icon: "macaron",    category: "pastries" },
  { id: "cinnamon",   name: "Cinnamon Roll",      desc: "Slow-proofed swirl, brown-butter icing on top.",             price: 95,  icon: "cinnamon",   category: "pastries" },
  { id: "eclair",     name: "Chocolate Éclair",   desc: "Dark chocolate glaze over silky pastry cream.",              price: 120, icon: "eclair",     category: "pastries" },
  { id: "cheesecake", name: "Classic Cheesecake", desc: "Baked New York style, graham crust, one thick slice.",       price: 150, icon: "cheesecake", category: "pastries" },
  { id: "tart",       name: "Almond Tart",        desc: "Frangipane and toasted almonds in a buttery shell.",        price: 130, icon: "tart",       category: "pastries" },
  { id: "cookie",     name: "Sea-Salt Cookie",    desc: "Dark chocolate chunks, flaked sea salt on top.",             price: 60,  icon: "cookie",     category: "pastries" },

  // Snacks
  { id: "fries",      name: "French Fries",         desc: "Crisp-edged, salted while still hot.",                    price: 80,  icon: "fries",      category: "snacks" },
  { id: "nachos",     name: "Loaded Nachos",        desc: "Corn chips, melted cheese, salsa, jalapeños.",             price: 140, icon: "nachos",     category: "snacks" },
  { id: "wings",      name: "Chicken Wings",        desc: "Smoked paprika glaze, six pieces.",                       price: 180, icon: "wings",      category: "snacks" },
  { id: "springroll", name: "Veggie Spring Rolls",  desc: "Shredded vegetables, crackling fried shell.",              price: 110, icon: "springroll", category: "snacks" },

  // Burgers & Pizza
  { id: "cheeseburger", name: "Classic Cheeseburger",  desc: "Beef patty, cheddar, house sauce, sesame bun.",         price: 190, icon: "burger", category: "burgers-pizza" },
  { id: "chickenburger", name: "Grilled Chicken Burger", desc: "Char-grilled fillet, slaw, chipotle mayo.",           price: 210, icon: "burger", category: "burgers-pizza" },
  { id: "margherita",   name: "Margherita Pizza",       desc: "San Marzano tomato, fresh mozzarella, basil.",        price: 260, icon: "pizza",  category: "burgers-pizza" },
  { id: "pepperoni",    name: "Pepperoni Pizza",        desc: "Double pepperoni, mozzarella, oregano oil.",          price: 290, icon: "pizza",  category: "burgers-pizza" },

  // Shakes & Beverages
  { id: "chocshake",  name: "Chocolate Shake",   desc: "Belgian cocoa, whipped cream, chocolate shavings.",           price: 150, icon: "shake",    category: "shakes-beverages" },
  { id: "strawshake", name: "Strawberry Shake",  desc: "Fresh strawberry purée, vanilla ice cream.",                 price: 150, icon: "shake",    category: "shakes-beverages" },
  { id: "coldcoffee", name: "Cold Coffee",       desc: "Espresso, milk, ice, a little sugar.",                       price: 130, icon: "coffee",   category: "shakes-beverages" },
  { id: "lemonade",   name: "Classic Lemonade",  desc: "Fresh-squeezed, lightly sweetened, over ice.",               price: 90,  icon: "lemonade", category: "shakes-beverages" },

  // Sides
  { id: "garlicbread", name: "Garlic Bread",       desc: "Toasted baguette, garlic butter, parsley.",                price: 100, icon: "bread",      category: "sides" },
  { id: "onionrings",  name: "Onion Rings",        desc: "Beer-battered, fried to a deep gold.",                    price: 110, icon: "rings",      category: "sides" },
  { id: "coleslaw",    name: "Coleslaw",           desc: "Cabbage and carrot, tossed in a light dressing.",         price: 70,  icon: "coleslaw",   category: "sides" },
  { id: "mozzsticks",  name: "Mozzarella Sticks",  desc: "Breaded and fried, served molten.",                       price: 150, icon: "mozzsticks", category: "sides" }
];

function money(n) { return n.toLocaleString("en-IN"); }

function pastryById(id) {
  for (var i = 0; i < PASTRIES.length; i++) if (PASTRIES[i].id === id) return PASTRIES[i];
  return null;
}

function itemsByCategory(categorySlug) {
  return PASTRIES.filter(function (p) { return p.category === categorySlug; });
}

// ---- storage helpers (all state lives in localStorage so it survives real page navigation) ----
var STORE = {
  get: function (key, fallback) {
    try {
      var raw = localStorage.getItem(key);
      return raw === null ? fallback : JSON.parse(raw);
    } catch (e) { return fallback; }
  },
  set: function (key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage unavailable, fail quietly */ }
  },
  remove: function (key) {
    try { localStorage.removeItem(key); } catch (e) { /* ignore */ }
  }
};

function getCustomer() { return STORE.get("ff_customer", null); }
function getCart() { return STORE.get("ff_cart", {}); }
function setCart(cart) { STORE.set("ff_cart", cart); }
function cartCount(cart) {
  var t = 0;
  for (var k in cart) t += cart[k];
  return t;
}
function cartTotal(cart) {
  var t = 0;
  for (var k in cart) {
    var p = pastryById(k);
    if (p) t += p.price * cart[k];
  }
  return t;
}
