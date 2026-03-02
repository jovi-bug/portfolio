import {useTranslation} from "react-i18next";

//TODO Styling anpassen
const LanguageToggle = () => {
    const {i18n} = useTranslation();
    const isDE = i18n.language === "de";

    const toggle = () => {
        const lang = isDE ? "en" : "de";

        console.log("Sprache gewechselt zu: ", lang)
        i18n.changeLanguage(lang).catch(console.error);

        localStorage.setItem("lang", lang); // Auswahl speichern
    };

    return (
        <button
            onClick={toggle}
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-forest-mid text-sm font-medium transition-colors hover:bg-sage/50"
            aria-label="Toggle language"
        >
            <span className={isDE ? "text-accent" : "text-forest-mid"}>DE</span>
            <span className="text-forest-mid">/</span>
            <span className={!isDE ? "text-accent" : "text-forest-mid"}>EN</span>
        </button>
    );
}

export default LanguageToggle;