# 📖 Noor Quran Reader

> *"Read, reflect, and find peace."*

**Noor Quran Reader** is a modern, privacy-focused, and completely independent web application for reading the Holy Quran. Built with "Ihsan" (excellence) in mind, it prioritizes typography, beauty, and speed without relying on external APIs or internet connectivity once loaded.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Status](https://img.shields.io/badge/status-offline--ready-green.svg)
![Tech](https://img.shields.io/badge/built%20with-React%20%2B%20Vite-61DAFB.svg)

## ✨ key Features

* **100% Independent & Offline:** All data (Arabic text, English & Bengali translations) is bundled directly into the application. It relies on **no external servers** or APIs.
* **Zero-Latency Search:** Instant, client-side filtering of Surahs by English name, Bengali name, or number.
* **"Paper-Like" Aesthetic:** A carefully crafted UI using warm off-whites (`#fdfbf7`) and slate grays to mimic the feeling of reading a physical Mushaf.
* **Bilingual Support:** Seamlessly toggle between **English** and **Bengali** translations alongside the Arabic text.
* **Beautiful Typography:** Uses *Amiri* for distinct, legible Arabic script and *Inter* for clean modern readability.
* **Responsive:** Optimized for mobile, tablet, and desktop reading.

## 🚀 Live Demo

**[View the Live Application Here](https://YOUR_USERNAME.github.io/noor-quran-reader)**
*(Replace this link after you deploy!)*

## 🛠️ Technology Stack

* **Framework:** React (via Vite)
* **Language:** TypeScript
* **Styling:** Tailwind CSS
* **Routing:** React Router (HashRouter for static hosting compatibility)
* **Deployment:** GitHub Pages

## 📦 Local Installation

Since this app is independent, you can run it entirely on your local machine.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/noor-quran-reader.git](https://github.com/YOUR_USERNAME/noor-quran-reader.git)
    cd noor-quran-reader
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for Production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
/src
  /components    # UI Components (Reader, Home, LoadingScreen)
  /data          # JSON Data (Bundled directly for offline use)
  /hooks         # Custom logic (useQuranData)
  App.tsx        # Main application wrapper