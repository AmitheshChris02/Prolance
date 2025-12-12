import { curve } from "../assets";
import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import { useState } from "react";

const Contact = () => {
    // TODO: Replace this URL with your deployed Google Apps Script web app URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxsuCZV6FR_imveG9DPe8BxciTQVifXZ_A0RAKtVGJpm85viItnZWO7JsZpsZ7pqBkd/exec";

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        requirement: "Final Year Project",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if Google Script URL is configured
        if (GOOGLE_SCRIPT_URL === "YOUR_DEPLOYMENT_URL_HERE") {
            alert("⚠️ Google Sheets integration not configured yet. Please follow the setup guide to deploy the Google Apps Script.");
            console.log("Form data:", formData);
            return;
        }

        setIsSubmitting(true);

        try {
            // Send data to Google Sheets via Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: "POST",
                mode: "no-cors", // Required for Google Apps Script
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            // Note: With no-cors mode, we can't read the response
            // We assume success if no error is thrown
            alert("✅ Thank you for your request! We will get back to you soon.");

            // Reset form
            setFormData({
                name: "",
                email: "",
                phone: "",
                requirement: "Final Year Project",
            });

        } catch (error) {
            console.error("Error submitting form:", error);
            alert("❌ There was an error submitting your request. Please try again or contact us directly at prolance.org@gmail.com");
        } finally {
            setIsSubmitting(false);
        }
    };

    const ContactIcon = ({ icon }) => (
        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-n-2/10 text-n-1">
            {icon}
        </div>
    );

    return (
        <Section crosses>
            {/* Loading Overlay */}
            {isSubmitting && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-n-8/90 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                        {/* Spinner */}
                        <div className="relative w-16 h-16">
                            <div className="absolute inset-0 rounded-full border-4 border-n-6"></div>
                            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-color-1 border-r-color-2 animate-spin"></div>
                        </div>
                        {/* Loading Text */}
                        <p className="text-n-1 text-lg font-semibold">Submitting your request...</p>
                    </div>
                </div>
            )}

            <div className="container relative">
                <Heading
                    title={
                        <span className="inline-block relative">
                            Get In Touch
                            <img
                                src={curve}
                                className="absolute top-full left-0 w-full xl:-mt-2 pointer-events-none select-none"
                                width={624}
                                height={28}
                                alt="Curve"
                                loading="lazy"
                            />
                        </span>
                    }
                    text={<span className="text-white">Have a project in mind?<br /> Fill out the form and we'll get back to you within 3 hours.</span>}
                />

                <div className="flex flex-col lg:flex-row gap-10 lg:items-stretch tablet-contact-wrapper">
                    {/* Left Column: Contact Information */}
                    <div className="flex-1 flex flex-col gap-6">
                        <h4 className="h4">Contact Information</h4>

                        {/* Email */}
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-[1.2rem] transition-colors duration-300">
                            <div className="flex items-start gap-4 p-6 bg-n-7 rounded-[1.1375rem]">
                                <ContactIcon
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                            />
                                        </svg>
                                    }
                                />
                                <div>
                                    <h6 className="h6 mb-1">Email</h6>
                                    <a
                                        href="mailto:prolance.org@gmail.com"
                                        className="body-2 text-n-3 hover:text-color-1 transition-colors"
                                    >
                                        prolance.org@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-[1.2rem] transition-colors duration-300">
                            <div className="flex items-start gap-4 p-6 bg-n-7 rounded-[1.1375rem]">
                                <ContactIcon
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                                            />
                                        </svg>
                                    }
                                />
                                <div>
                                    <h6 className="h6 mb-1">Phone</h6>
                                    <a
                                        href="tel:+91XXXXXXXXXX"
                                        className="body-2 text-n-3 hover:text-color-1 transition-colors"
                                    >
                                        +91 8610678329
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-[1.2rem] transition-colors duration-300">
                            <div className="flex items-start gap-4 p-6 bg-n-7 rounded-[1.1375rem]">
                                <ContactIcon
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                                            />
                                        </svg>
                                    }
                                />
                                <div>
                                    <h6 className="h6 mb-1">WhatsApp</h6>
                                    <a
                                        href="https://wa.me/8610678329"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="body-2 text-color-1 hover:underline transition-colors"
                                    >
                                        Chat with us on WhatsApp
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Instagram */}
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-[1.2rem] transition-colors duration-300">
                            <div className="flex items-start gap-4 p-6 bg-n-7 rounded-[1.1375rem]">
                                <ContactIcon
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="w-6 h-6"
                                        >
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeLinecap="round" strokeLinejoin="round" />
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    }
                                />
                                <div>
                                    <h6 className="h6 mb-1">Instagram</h6>
                                    <a
                                        href="https://www.instagram.com/prolance.technologies/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="body-2 text-color-1 hover:underline transition-colors"
                                    >
                                        Follow us on Instagram
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Quick Response */}
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-[1.2rem] transition-colors duration-300">
                            <div className="p-6 bg-n-7 rounded-[1.1375rem]">
                                <h6 className="h6 mb-2 text-color-2">Quick Response</h6>
                                <p className="body-2 text-n-3">
                                    We typically respond within 2–4 hours during business hours <br />(9 AM –
                                    8 PM IST).
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="flex-1 flex flex-col gap-6">
                        <h4 className="h4 invisible">Contact Information</h4>
                        <div className="p-px bg-n-6 hover:bg-conic-gradient rounded-3xl transition-colors duration-300 w-full h-full">
                            <div className="p-8 bg-n-8 rounded-[1.4375rem] h-full">
                                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                                    <div className="flex flex-col gap-2">
                                        <label className="body-2 font-semibold text-n-1">Name *</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="w-full px-6 py-4 bg-n-7 border border-n-1/10 rounded-xl focus:outline-none focus:border-color-1 text-n-1 placeholder:text-n-4 transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="body-2 font-semibold text-n-1">Email *</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="your.email@example.com"
                                            className="w-full px-6 py-4 bg-n-7 border border-n-1/10 rounded-xl focus:outline-none focus:border-color-1 text-n-1 placeholder:text-n-4 transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="body-2 font-semibold text-n-1">
                                            Contact Number *
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="+91 8610678329"
                                            className="w-full px-6 py-4 bg-n-7 border border-n-1/10 rounded-xl focus:outline-none focus:border-color-1 text-n-1 placeholder:text-n-4 transition-colors"
                                            required
                                        />
                                    </div>

                                    <div className="flex flex-col gap-2">
                                        <label className="body-2 font-semibold text-n-1">
                                            Requirement *
                                        </label>
                                        <select
                                            name="requirement"
                                            value={formData.requirement}
                                            onChange={handleChange}
                                            className="w-full px-6 py-4 bg-n-7 border border-n-1/10 rounded-xl focus:outline-none focus:border-color-1 text-n-1 transition-colors"
                                        >
                                            <option value="Final Year Project">Final Year Project</option>
                                            <option value="UI/UX Design">UI/UX Design</option>
                                            <option value="Resume Projects">Resume Projects</option>
                                            <option value="Domain Mini Projects">
                                                Domain Mini Projects
                                            </option>
                                            <option value="Paper Publication">Paper Publication</option>
                                            <option value="General Enquiry">General Enquiry</option>
                                        </select>
                                    </div>

                                    <Button
                                        className="w-full mt-4"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? "Submitting..." : "Submit Request"}
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
