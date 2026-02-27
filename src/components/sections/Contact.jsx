import Headline2 from "@/components/typography/Headline2.jsx";
import AnimatedSection from "@/components/layout/AnimatedSection.jsx";
import Headline3 from "@/components/typography/Headline3.jsx";
import {Mail, MapPin, Phone, Send} from "lucide-react"
import AnimatedButton from "@/components/smallComponents/AnimatedButton.jsx";
import {useState} from "react";
import emailjs from "@emailjs/browser";

function Contact() {

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
        console.log("Submit aufgerufen")

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const templateId = import.meta.env.VITE_EMAILJS_TEAMPLATE_ID;
            console.log(serviceId, templateId, publicKey);

            if (!serviceId || !templateId || !publicKey) {
                throw new Error("EMailJS configuration is missing. Please check your environment variables.");
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData
            }, publicKey);

            setSubmitStatus({
                type: "success",
                message: "Message successfully sent!"
            });

        } catch (error) {
            console.error(error);
            setSubmitStatus({
                type: "error",
                message: error.message || "Failed to send email, please try again later.",
            })

        } finally {
            setIsLoading(false);
        }

    }

    return (

        <>
            <AnimatedSection id="contact">
                <div className="flex flex-col w-full">
                    <Headline3>Get in touch</Headline3>
                    <Headline2>Contact</Headline2>

                    <div className="grid lg:grid-cols-2 gap-12 w-full">
                        <div className="blur-bg rounded-2xl p-6">
                            <form className="space-y-6"
                                  onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="name"
                                           className="text-sm mb-3"
                                    >Name </label>
                                    <input type="text"
                                           required
                                           placeholder="Your name"
                                           onChange={(e) => setFormData({...formData, name: e.target.value})}
                                           className="w-full blur-bg-strong rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"/>
                                </div>

                                <div>
                                    <label htmlFor="email"
                                           className="text-sm mb-3">Email </label>
                                    <input type="email"
                                           placeholder="Your email address"
                                           required
                                           onChange={(e) => setFormData({...formData, email: e.target.value})}
                                           className="w-full blur-bg-strong rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"/>
                                </div>

                                <div>
                                    <label htmlFor="message"
                                           className="text-sm mb-3"
                                    >Name </label>
                                    <textarea
                                        rows={5}
                                        placeholder="Your message"
                                        required
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full blur-bg-strong rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none resize-none "/>
                                </div>

                                <AnimatedButton
                                    size="lg"
                                    className="w-full flex justify-center items-center gap-2 text-forest font-bold font-display"
                                    type="submit"
                                    disabled={isLoading}>
                                    {isLoading
                                        ? <>Sending Message...</>
                                        : <>Send Message <Send className="w-5 h-5"/></>}
                                </AnimatedButton>

                            </form>
                        </div>
                    </div>
                </div>

            </AnimatedSection>
        </>
    );
}

export default Contact;