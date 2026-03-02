import {Mail, MapPin, Phone} from "lucide-react";

const Contact = [
    {
        icon: Mail,
        label: {
            de: "E-Mail",
            en: "Email",
        },
        value: {
            de: "tjorvenielsen@icloud.com",
            en: "tjorvenielsen@icloud.com"
        },
        href: "mailto:tjorvenielsen@icloud.com",
    },
    {
        icon: Phone,
        label: {
            de: "Telefon",
            en: "Phone"
        },
        value: {
            de: "+49 174 2585295",
            en: "+49 174 2585295"
        },
        href: "tel:+491742585295",
    },
    {
        icon: MapPin,
        label: {
            de: "Ort",
            en: "Location"
        },
        value: {
            de: "Flensburg",
            en: "Flensburg, Germany"
        },
        href: "#",
    },
];
export default Contact;