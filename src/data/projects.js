const projects = [
    {
        id: "project_2",
        name: {
            de: "Cookie Calculator",
            en: "Cookie Calculator"
        },
        description: {
            de: "Ein Rezeptportal, auf dem Hobbybäcker eigene Rezepte mit Fotos veröffentlichen, entdecken und als Favoriten speichern können. Eine integrierte Kalkulationsliste rechnet Zutaten mehrerer Rezepte automatisch zusammen und skaliert die Mengen. Gebaut mit React, Supabase und Tailwind CSS.",
            en: "A recipe platform where home bakers can publish, discover, and save their own recipes with photos. An integrated calculation list automatically aggregates and scales ingredients across multiple recipes. Built with React, Supabase, and Tailwind CSS."
        },
        techStack: ["React", "Tailwind", "Supabase", "Zustand"],
        githubLink: "https://github.com/jovi-bug/cookie-calculator",
        isLive: true,
        liveLink: "https://cookie-calculator-theta.vercel.app/",
        imgPath: "images/cookie-calculator.png",
    }, {
        id: "project_1",
        name: {
            de: "Website Sommerbrücke Flensburg",
            en: "Website Sommerbrücke Flensburg"
        },
        description: {
            de: "Landing Page für eine lokale Bürgerinitiative in Flensburg. Statische One-Pager-Website mit Bootstrap 5 und vanilla JavaScript für einfache Interaktivität",
            en: "Landing page for a local citizens' initiative in Flensburg. Static one-pager built with Bootstrap 5 and vanilla JavaScript for basic interactivity."
        },
        techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        githubLink: "https://github.com/jovi-bug/Website-Sommerbruecke",
        isLive: true,
        liveLink: "https://sommerbruecke-flensburg.de/",
        imgPath: "images/sommerbruecke-desktop.png",
    },
]

export default projects;