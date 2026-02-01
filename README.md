# 🎬 Movie Search

A single-page application for searching movies by title using the OMDb API.
Built with React and Vite, this project is intended to demonstrate frontend development skills.

## 🔗 Demo

https://danyape.github.io/films/

## 🛠 Tech stack

-   [React](https://react.dev/)(19.2.0)
-   [Vite](https://vite-docs-ru.vercel.app/) (7.2.4)
-   [TailWind CSS](https://tailwindcss.com/) (4.1.18)
-   JavaScript (ES6+)
-   [OMDb API](https://www.omdbapi.com/)

## ⚙️ Features

-    Search for movies by title (the OMDb service supports search in English only)
-    Display of search results
-    Filtering by content type (movies or TV series)
-    Viewing detailed movie information when opening a movie card
-    Handling of loading and error states
-    Responsive user interface
-    Dark theme support
-    Page localization in two languages (English and Russian; movie data content is not translated)

## 📂 Project structure
```
src/
├─ assets/                     # Additional styling resources
│  ├─ animations/                # Simple animation definitions
│  ├─ behaviour/                 # Behavioral styles for components
│  └─ fonts/                     # Fonts
├─ components/                 # UI components (buttons, movie cards)
├─ constants/                  # Global constants
├─ contexts/                   # Context entities
│  ├─ filter/                    # Filter context
│  ├─ language/                  # Language (localization) context
│  ├─ movieList/                 # Movie list context
│  ├─ search/                    # Search execution context
│  └─ theme/                     # Theme context
├─ internationalization/       # Translation dictionary and helper functions
├─ utils/                      # Utility functions for working with the OMDb API
└─ App.jsx
```
## 🚀 Installation and run

```bash
git clone https://github.com/DanyaPe/films.git
cd films
npm install
npm run dev
```
