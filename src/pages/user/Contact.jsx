import { useState } from "react";
import {
    UserRound,
    Mail,
    Tag,
    MessageSquare,
    Send,
    MapPin,
    Phone,
    Clock,
    ArrowRight,
} from "lucide-react";

import contactImage from "../../assets/images/contact-us.png";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        alert("Thank you! Your message has been received.");

        setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    // Same container width and horizontal padding as Navbar.jsx
    const containerClass =
        "mx-auto w-full max-w-auto px-4 sm:px-6 lg:px-8";

    return (
        <>
            <Navbar />

            <main className="mx-auto mb-6 max-w-full overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                <div className="mx-auto mb-6 max-w-7xl overflow-hidden rounded-3xl bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
                    {/* Hero Section */}
                    <section className="-mr-[50px]">
                        <div className="py-14">
                            <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

                                {/* Left: Heading */}
                                <div>
                                    <p className="mb-3 text-sm uppercase tracking-[0.1em] text-black">
                                        Get in touch
                                    </p>

                                    <h1 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
                                        Contact Us
                                    </h1>

                                    <p className="max-w-xl leading-7 text-slate-500">
                                        Whether you have a question, feedback, or need help,
                                        our team is here for you. Get in touch — we’re happy
                                        to assist!
                                    </p>
                                </div>

                                {/* Right: Image */}
                                <div>
                                    <img
                                        src={contactImage}
                                        alt="Contact our team"
                                        className="h-64 w-full rounded-2xl object-cover md:h-80"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Contact Form and Information */}
                    <section className="-mt-[10px]">
                        <div className="pb-14 md:pb-20">
                            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

                                {/* Left: Contact Form */}
                                <div className="min-w-0 rounded-3xl border border-pink-100 bg-white/80 p-5 shadow-sm sm:p-6 md:p-8">

                                    <div className="mb-8">
                                        <div className="mb-3 flex items-center gap-4">
                                            <Mail
                                                size={42}
                                                strokeWidth={1.8}
                                                className="shrink-0 text-pink-500"
                                            />

                                            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
                                                Send Us a Message
                                            </h2>
                                        </div>

                                        <p className="text-base leading-7 text-slate-500">
                                            Fill out the form below and we’ll get back to
                                            you as soon as possible.
                                        </p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-5">

                                        {/* Full Name */}
                                        <div className="relative">
                                            <UserRound
                                                size={20}
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400"
                                            />

                                            <input
                                                type="text"
                                                name="name"
                                                value={form.name}
                                                onChange={handleChange}
                                                placeholder="Full Name *"
                                                required
                                                className="w-full rounded-xl border border-[#EEDCE4] bg-white py-4 pl-14 pr-5 text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="relative">
                                            <Mail
                                                size={20}
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400"
                                            />

                                            <input
                                                type="email"
                                                name="email"
                                                value={form.email}
                                                onChange={handleChange}
                                                placeholder="Email Address *"
                                                required
                                                className="w-full rounded-xl border border-[#EEDCE4] bg-white py-4 pl-14 pr-5 text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="relative">
                                            <Tag
                                                size={20}
                                                className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-400"
                                            />

                                            <select
                                                name="subject"
                                                value={form.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full appearance-none rounded-xl border border-[#EEDCE4] bg-white py-4 pl-14 pr-5 text-slate-500 outline-none transition focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                                            >
                                                <option value="" disabled>
                                                    Subject *
                                                </option>
                                                <option value="product">
                                                    Product Inquiry
                                                </option>
                                                <option value="order">
                                                    Order Support
                                                </option>
                                                <option value="delivery">
                                                    Shipping & Delivery
                                                </option>
                                                <option value="return">
                                                    Returns & Refunds
                                                </option>
                                                <option value="other">
                                                    Other
                                                </option>
                                            </select>
                                        </div>

                                        {/* Message */}
                                        <div className="relative">
                                            <MessageSquare
                                                size={20}
                                                className="absolute left-5 top-6 text-pink-400"
                                            />

                                            <textarea
                                                name="message"
                                                value={form.message}
                                                onChange={handleChange}
                                                rows={5}
                                                placeholder="Your Message *"
                                                required
                                                className="w-full resize-y rounded-xl border border-[#EEDCE4] bg-white py-4 pl-14 pr-5 text-slate-700 outline-none transition placeholder:text-slate-500 focus:border-pink-400 focus:ring-2 focus:ring-pink-100"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <button
                                            type="submit"
                                            className="flex w-full items-center justify-center gap-3 rounded-full bg-pink-500 px-6 py-4 font-semibold text-white transition hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
                                        >
                                            <Send size={19} />
                                            Send Message
                                        </button>
                                    </form>
                                </div>

                                {/* Right: Contact Information */}
                                <div className="min-w-0 space-y-7 lg:pt-2">

                                    {/* Heading */}
                                    <div>
                                        <h2 className="font-script text-3xl text-pink-500 md:text-4xl">
                                            Get in Touch ♡
                                        </h2>

                                        <div className="mt-2 h-0.5 w-44 -rotate-3 rounded-full bg-pink-400" />
                                    </div>

                                    {/* Address */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                            <MapPin size={26} className="text-pink-500" />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold text-slate-700">
                                                Our Address
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                No. 123, Beauty Street, Sangkat 7,
                                                Khan Daun Penh, Phnom Penh,
                                                <br />
                                                Cambodia
                                            </p>
                                        </div>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                            <Phone size={26} className="text-pink-500" />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold text-slate-700">
                                                Phone Number
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                +855 12 345 678
                                            </p>
                                        </div>
                                    </div>

                                    {/* Email */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                            <Mail size={26} className="text-pink-500" />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold text-slate-700">
                                                Email Address
                                            </h3>

                                            <p className="mt-1 break-all text-sm leading-6 text-slate-500">
                                                support@cherrycheeks.com
                                            </p>
                                        </div>
                                    </div>

                                    {/* Business Hours */}
                                    <div className="flex items-start gap-4">
                                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                                            <Clock size={26} className="text-pink-500" />
                                        </div>

                                        <div className="min-w-0">
                                            <h3 className="text-lg font-bold text-slate-700">
                                                Business Hours
                                            </h3>

                                            <p className="mt-1 text-sm leading-6 text-slate-500">
                                                Monday - Saturday: 8:00 AM - 8:00 PM
                                                <br />
                                                Sunday: 9:00 AM - 6:00 PM
                                            </p>
                                        </div>
                                    </div>

                                    {/* Google Maps */}
                                    <div className="flex flex-col items-start gap-4 rounded-2xl border border-pink-100 bg-white/70 p-4 sm:flex-row sm:items-center sm:p-5">
                                        <MapPin
                                            size={34}
                                            className="shrink-0 text-pink-500"
                                        />

                                        <div className="hidden h-12 w-px bg-pink-200 sm:block" />

                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-bold text-pink-600">
                                                Find Our Location
                                            </h3>

                                            <p className="mt-1 text-sm leading-5 text-slate-500">
                                                Find our store on Google Maps.
                                            </p>
                                        </div>

                                        <a
                                            href="https://www.google.com/maps/search/?api=1&query=Daun+Penh+Phnom+Penh+Cambodia"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-pink-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-pink-600"
                                        >
                                            Open Map
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Contact;
