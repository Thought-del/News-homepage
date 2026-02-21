# 📰 News Homepage

![Preview](design/preview.jpg)

A responsive news homepage with a grid-based article layout, mobile menu, and dark theme support.  
This project was built to practice **CSS Grid**, **responsive design**, **accessibility**, and **modular architecture**.

[🔗 Live Demo](https://thought-del.github.io/News-homepage/) | [📄 Frontend Mentor Challenge](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl)

---

## ✨ Features

- ✅ **Responsive design** — mobile-first approach with CSS Grid for desktop layout
- ✅ **Mobile menu** — hamburger menu with overlay and scroll lock
- ✅ **Dual color themes** — light and dark mode (via `prefers-color-scheme`)
- ✅ **Fully accessible** — ARIA attributes, keyboard navigation, screen reader support
- ✅ **Modern typography** — Inter font with `clamp()` for fluid scaling
- ✅ **Micro-animations** — hover, focus, and transition effects
- ✅ **Modular CSS** — variables, component-based structure

---

## 🛠 Technologies

| Technology | Purpose |
|------------|---------|
| **HTML5** | Semantic markup, ARIA |
| **CSS3** | Grid, Flexbox, variables, `clamp()`, media queries |
| **JavaScript (ES6)** | Mobile menu, modules |
| **Google Fonts** | Inter (400, 700, 800) |

---

## 🧩 Project Structure

```
news-homepage/
├── index.html
├── css/
│   ├── main.css              # Main stylesheet
│   ├── variables.css         # Colors, fonts, spacing
│   ├── reset.css             # CSS reset
│   ├── typography.css        # Fonts, headings
│   ├── layout.css            # Grid, containers
│   ├── components/
│   │   ├── content.css       # Sizing, spacing
│   │   └── menu.css          # Mobile menu
│   ├── themes/
│   │   ├── light.css         # Light theme
│   │   └── dark.css          # Dark theme
│   └── responsive/
│       └── desktop.css       # Desktop styles
├── js/
│   ├── main.js               # Initialization
│   └── constants.js          # Selectors
├── assets/
│   ├── fonts/
│   └── images/               # Images, icons
├── style-guide.md
└── README.md
```

---

## 📋 Content

### Main Article
- **Title:** The Bright Future of Web 3.0?
- **Text:** We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
- **Button:** READ MORE

### "New" Section
1. **Hydrogen VS Electric Cars** — Will hydrogen-fueled cars ever catch up to EVs?
2. **The Downsides of AI Artistry** — What are the possible adverse effects of on-demand AI image generation?
3. **Is VC Funding Drying Up?** — Private funding by VC firms is down 50% YOY. We take a look at what that means.

### Top Articles (numbered)
1. **Reviving Retro PCs** — What happens when old PCs are given modern upgrades?
2. **Top 10 Laptops of 2022** — Our best picks for various needs and budgets.
3. **The Growth of Gaming** — How the pandemic has sparked fresh opportunities.

---

## 🎨 Color Scheme

### Light Theme
- Main background: `hsl(36, 100%, 99%)`
- Text: `hsl(240, 100%, 5%)`
- Accent (red): `hsl(5, 85%, 63%)`
- Accent (orange): `hsl(35, 77%, 62%)`

### Dark Theme
- Main background: `hsl(240, 20%, 5%)`
- Text: `hsl(233, 8%, 85%)`
- Accents remain bright (same colors)

---

## 📱 Responsive Design

| Device | Width | Layout |
|--------|-------|--------|
| Mobile | < 64em | Stacked layout, hamburger menu |
| Desktop | ≥ 64em | 3-column grid, horizontal menu |

**Mobile Menu:**
- Slides in from the right
- Overlay dims the background
- Body scroll is locked
- Full keyboard navigation support

---

## 🧠 JavaScript Logic

```javascript
// Open menu
openBtn.addEventListener('click', openMenu);

// Close menu
closeBtn.addEventListener('click', closeMenu);
```

---

## 🧪 Testing

- [x] Chrome, Firefox, Safari
- [x] Mobile devices (Android, iOS)
- [x] Keyboard navigation
- [x] Screen readers (NVDA, VoiceOver)
- [x] Dark theme support
- [x] Various screen resolutions

---

## 🚀 How to Run

```bash
git clone https://github.com/Thought-del/News-homepage.git
cd News-homepage
# Open index.html in your browser
# Or use Live Server
```

---

## 💬 Contact

- GitHub: [@Thought-del](https://github.com/Thought-del)
- Frontend Mentor: [@Thought-del](https://www.frontendmentor.io/profile/Thought-del)

---

**⭐ If you like this project — please give it a star!**