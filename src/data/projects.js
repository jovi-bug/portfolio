const projects = [
    {
        id: "project_1",
        name: {
            de: "Cookie Calculator",
            en: "Cookie Calculator"
        },
        description: {
            de: "Eine Web-App, die dir hilft, beim Backen die richtige Menge an Zutaten zu berechnen. Durchstöbere Rezepte, füge sie deiner Backliste hinzu, stelle den Multiplikator ein – und voilà: Deine Einkaufsliste ist fertig und hat bereits berechnet, wie viele Packungen du von jeder Zutat benötigst.",
            en: "A web app to help you calculate the right amount of ingredients when baking. Browse recipes, add them to your baking list, set a multiplier, and voilà: your shopping list is ready and already calculates how many packages of each ingredient you need."
        },
        date: new Date(2026, 2, 23),
        techStack: ["React", "Tailwind CSS", "Zustand", "JavaScript"],
        githubLink: "https://github.com/jovi-bug/cookie-calculator.git",
        isLive: true,
        liveLink: "https://google.com",
        imgPath: "",
    }, {
        id: "project_2",
        name: {
            de: "Plant Manager",
            en: "Plant Manager"
        },
        description: {
            de: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p",
            en: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p"
        },
        date: new Date(2025, 12, 15),
        techStack: ["Java", "JavaFx", "MariaDB"],
        githubLink: "https://github.com/jovi-bug/plantManager.git",
        isLive: false,
        liveLink: "https://google.com",
        imgPath: "",
    },
]

export default projects;