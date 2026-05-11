import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

import AnimatedSection from '@/components/layout/AnimatedSection.jsx';
import AnimatedButton from '@/components/smallComponents/AnimatedButton.jsx';
import Headline2 from '@/components/typography/Headline2.jsx';

function Contact() {
    const {t} = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: '',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);
        setSubmitStatus({ type: null, message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('EMailJS configuration is missing. Please check your environment variables.');
            }

            await emailjs.send(serviceId, templateId, {
                name: formData.name,
                email: formData.email,
                message: formData.message
            }, publicKey);

            setSubmitStatus({
                type: 'success',
                message: t('contact.submitMessage')
            });
        } catch (error) {
            console.error(error);
            setSubmitStatus({
                type: 'error',
                message: error.message || t('contact.errorMessage'),
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatedSection id="contact">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="flex flex-col w-full"
            >
                <Headline2>{t('nav.contact')}</Headline2>
                <h4 className="text-xl text-forest font-bold mb-8">{t('contact.subhead')}</h4>

                <div className="grid lg:grid-cols-2 gap-12 w-full">
                    <div className="blur-bg-strong rounded-2xl p-6">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="mb-3 pl-1">
                                    {t('contact.nameLabel')}{' '}
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder={t('contact.namePlaceholder')}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-3 pl-1">
                                    {t('contact.emailLabel')}{' '}
                                </label>
                                <input
                                    type="email"
                                    placeholder={t('contact.emailPlaceholder')}
                                    required
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="mb-3 pl-1">
                                    {t('contact.messageLabel')}
                                </label>
                                <textarea
                                    rows={5}
                                    placeholder={t('contact.messagePlaceholder')}
                                    required
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-sage/30 rounded-xl p-2 border-white focus:border-accent focus:ring-1 outline-none resize-none"
                                />
                            </div>

                            <AnimatedButton
                                size="lg"
                                className="w-full flex justify-center items-center gap-2 text-forest font-bold font-display"
                                type="submit"
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <>Sending...</>
                                ) : (
                                    <>
                                        {t('contact.buttonText')}
                                        <Send className="w-5 h-5" />
                                    </>
                                )}
                            </AnimatedButton>

                            {submitStatus.type && (
                                <div
                                    className={`flex items-center gap-3 p-4 rounded-xl ${
                                        submitStatus.type === 'success'
                                            ? 'bg-sage border border-forest text-forest'
                                            : 'bg-accent/20 border border-accent-dark text-accent'
                                    }`}
                                >
                                    {submitStatus.type === 'success' ? (
                                        <CheckCircle className="w-5 h-5 flex-shrink-0" />
                                    ) : (
                                        <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                    )}
                                    <p className="text-sm">{submitStatus.message}</p>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </motion.div>
        </AnimatedSection>
    );
}

export default Contact;