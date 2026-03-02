// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import de from "./locales/de.js";
import en from "./locales/en.js";

i18n.use(initReactI18next).init({
    resources: {
        de: { translation: de },
        en: { translation: en },
    },
    lng: localStorage.getItem("lang") || "de",
    fallbackLng: "de",
    interpolation: { escapeValue: false },
});

export default i18n;