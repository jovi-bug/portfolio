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
            className="flex items-center gap-1 px-3 py-1 rounded-full border border-neutral-400 text-sm font-medium transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800"
            aria-label="Toggle language"
        >
            <span className={isDE ? "opacity-100" : "opacity-40"}>DE</span>
            <span className="text-neutral-400">/</span>
            <span className={!isDE ? "opacity-100" : "opacity-40"}>EN</span>
        </button>
    );
}

export default LanguageToggle;