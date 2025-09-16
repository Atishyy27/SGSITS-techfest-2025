// src/i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // Detect user language
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // Init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    resources: {
      en: {
        translation: {
          // Navbar & Footer
          nav_home: "Home",
          nav_prarupam: "Prarupam",
          nav_events: "Events",
          nav_expo: "Expo",
          nav_gallery: "Gallery",
          nav_team: "Team",
          register_now: "Register Now",
          footer_credit: "Designed & Developed with ❤ by SGSITS Students",

          // Hero Section
          hero_theme: "Ignite, Inspire, and Impact",
          
          // Home Page Sections
          about_aarohan_title: "About Aarohan 2025",
          about_aarohan_desc: "The heart of TechFest, featuring a diverse range of technical and cultural events.",
          explore_events: "Explore Our Events",
          our_team: "Meet the Team",

          // Team Page
          team_title: "The Minds Behind Aarohan",
          team_subtitle: "The dedicated faculty and students powering this grand event.",

          // Gallery Page
          gallery_title: "Gallery",
          gallery_all: "All",

          // Prarupam & Expo Page Buttons
          register_prarupam: "Register for Prarupam",
          register_expo: "Book Your Stall / Register Here",
        }
      },
      hi: {
        translation: {
          // Navbar & Footer
          nav_home: "होम",
          nav_prarupam: "प्रारूपम",
          nav_events: "इवेंट्स",
          nav_expo: "एक्सपो",
          nav_gallery: "गैलरी",
          nav_team: "टीम",
          register_now: "अभी रजिस्टर करें",
          footer_credit: "SGSITS के छात्रों द्वारा ❤️ से डिजाइन और विकसित किया गया",

          // Hero Section
          hero_theme: "प्रेरणा, प्रज्वलन, परिवर्तन",

          // Home Page Sections
          about_aarohan_title: "आरोहण 2025 के बारे में",
          about_aarohan_desc: "टेकफेस्ट का केंद्र, जिसमें विभिन्न तकनीकी और सांस्कृतिक कार्यक्रम शामिल हैं।",
          explore_events: "हमारे इवेंट्स देखें",
          our_team: "हमारी टीम से मिलें",
          
          // Team Page
          team_title: "आरोहण के पीछे का दिमाग",
          team_subtitle: "इस भव्य आयोजन को संचालित करने वाले समर्पित शिक्षक और छात्र।",

          // Gallery Page
          gallery_title: "गैलरी",
          gallery_all: "सभी",

          // Prarupam & Expo Page Buttons
          register_prarupam: "प्रारूपम के लिए रजिस्टर करें",
          register_expo: "अपना स्टॉल बुक करें / यहां रजिस्टर करें",
        }
      }
    }
  });

export default i18n;