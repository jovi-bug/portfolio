import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import contact from "@/data/contact.js";
import {useState} from "react";
import {AlertCircle, CheckCircle, Mail, MapPin, Phone, Send} from "lucide-react"
import emailjs from "@emailjs/browser";
import {useTranslation} from "react-i18next";

function Contact() {
    const {t} = useTranslation();
    const {i18n} = useTranslation();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })
    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({type: null, message: ""});

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            console.log(serviceId, templateId, publicKey);

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EMailJS configuration is missing. Please check your environment variables.");
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: t("contact.submitMessage")
            });

        } catch (error) {
            console.error(error);
            setSubmitStatus({
                type: "error",
                message: error.message || t("contact.errorMessage"),
            })

        } finally {
            setIsLoading(false);
        }

    }

    return (
        <>
            <AnimatedSection id="contact">
                <div className="flex flex-col w-full">
                    <Headline3>{t("contact.subhead")}</Headline3>
                    <Headline2>{t("nav.contact")}</Headline2>

                    <div className="grid lg:grid-cols-2 gap-12 w-full">

                        {/* Contact Information */}
                        <div className="blur-bg-strong rounded-2xl p-6 ">
                            <h4 className="text-forest text-xl font-display font-bold mb-8">{t("contact.subheadInfo")}</h4>

                            {contact.map((entry, index) => (
                                <div className="mb-4 scaling-div" key={index}>
                                    <a href={entry.link} className="hover:cursor-pointer">
                                        <div className="flex w-full gap-4 items-center ">
                                            <div
                                                className="w-12 h-12 rounded-xl bg-sage/30 flex items-center justify-center">
                                                <entry.icon className="w-5 h-5 text-forest"/>
                                            </div>
                                            <div>
                                                <div
                                                    className="text-sm text-forest mb-0">{entry.label[i18n.language]}</div>
                                                <div>{entry.value[i18n.language]}</div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>

                        <div className="blur-bg-strong rounded-2xl p-6">
                            <form className="space-y-6"
                                  onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="name"
                                           className="text-sm mb-3"
                                    >{t("contact.nameLabel")} </label>
                                    <input type="text"
                                           required
                                           placeholder={t("contact.namePlaceholder")}
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                                           className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"/>
                                </div>

                                <div>
                                    <label htmlFor="email"
                                           className="text-sm mb-3">{t("contact.emailLabel")} </label>
                                    <input type="email"
                                           placeholder={t("contact.emailPlaceholder")}
                                           required
                                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                                           className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"/>
                                </div>

                                <div>
                                    <label htmlFor="message"
                                           className="text-sm mb-3"
                                    >{t("contact.messageLabel")}</label>
                                    <textarea
                                        rows={5}
                                        placeholder={t("contact.messagePlaceholder")}
                                        required
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none resize-none "/>
                                </div>

                                <AnimatedButton
                                    size="lg"
                                    className="w-full flex justify-center items-center gap-2 text-forest font-bold font-display"
                                    type="submit"
                                    disabled={isLoading}>
                                    {isLoading ? (
                                        <>Sending...</>
                                    ) : (
                                        <>
                                            {t("contact.buttonText")}
                                            <Send className="w-5 h-5"/>
                                        </>
                                    )}
                                </AnimatedButton>

                                {submitStatus.type && (
                                    <div
                                        className={`flex items-center gap-3 p-4 rounded-xl ${
                                            submitStatus.type === "success"
                                                ? "bg-sage border border-forest text-forest"
                                                : "bg-accent/20 border border-accent-dark text-accent"
                                        }`}
                                    >
                                        {submitStatus.type === "success" ? (
                                            <CheckCircle className="w-5 h-5 flex-shrink-0"/>
                                        ) : (
                                            <AlertCircle className="w-5 h-5 flex-shrink-0"/>
                                        )}
                                        <p className="text-sm">{submitStatus.message}</p>
                                    </div>
                                )}
                            </form>
                        </div>


                    </div>
                </div>

            </AnimatedSection>
        </>
    );
}

export default Contact;