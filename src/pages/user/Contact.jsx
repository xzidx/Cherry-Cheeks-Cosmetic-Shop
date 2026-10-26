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
        "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8";

    return (
        <>
            <Navbar />

            <main className="mx-auto mb-6 max-w-7xl overflow-hidden rounded-3xl from-pink-50 via-rose-50 to-pink-100 px-4 sm:px-6 lg:px-8">

                {/* Hero Section */}
                <section>
                    <div className={`${containerClass} py-14 md:py-20`}>
                        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">

                            {/* Left: Heading */}
                            <div>
                                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-pink-600">
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
                <section>
                    <div className={`${containerClass} pb-14 md:pb-20`}>
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
                                            <br />
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
                                            <br />
                                            +855 23 456 789
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
                                            <br />
                                            sales@cherrycheeks.com
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

            </main>
            <Footer />
        </>
    );
}

export default Contact;

import { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
} from "react-icons/fi";

const contactInfo = [
  {
    Icon: FiMail,
    title: "Email Us",
    detail: "support@cherrycheeks.com",
  },
  {
    Icon: FiPhone,
    title: "Call Us",
    detail: "+855 12 345 678",
  },
  {
    Icon: FiMapPin,
    title: "Our Location",
    detail: "Phnom Penh, Cambodia",
  },
  {
    Icon: FiClock,
    title: "Working Hours",
    detail: "Monday – Saturday, 8 AM – 5 PM",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your backend or API here.
    console.log("Contact form:", form);

    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  const inputStyle =
    "w-full rounded-xl border border-pink-100 bg-white px-4 py-3 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-[#fb5c8c] focus:ring-2 focus:ring-[#fb5c8c]/20";

  return (
    <main className="min-h-screen bg-white">
      {/* Page Heading */}
      <section className="bg-[#fdf2f5] px-5 py-14 text-center sm:py-20">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#fb5c8c]">
          We'd Love to Hear from You
        </p>

        <h1 className="text-3xl font-bold text-[#1b1b2f] sm:text-4xl lg:text-5xl">
          Contact Us
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#6b6a80] sm:text-base">
          Have a question about our beauty products or your order?
          Send us a message, and our team will be happy to help.
        </p>
      </section>

      {/* Contact Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-12 sm:px-8 md:py-16 lg:grid-cols-5 lg:gap-14">
        {/* Contact Information */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold text-[#1b1b2f]">
            Get in Touch
          </h2>

          <p className="mt-3 text-sm leading-7 text-[#6b6a80]">
            We're here to help you find the right products and
            make your shopping experience easier.
          </p>

          <div className="mt-8 space-y-6">
            {contactInfo.map(({ Icon, title, detail }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#fdeaf0] text-[#fb5c8c]">
                  <Icon size={21} />
                </div>

                <div>
                  <h3 className="font-semibold text-[#1b1b2f]">
                    {title}
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-[#6b6a80]">
                    {detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-2xl bg-[#fdf2f5] p-6">
            <h3 className="font-bold text-[#1b1b2f]">
              Your Beauty, Our Priority
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#6b6a80]">
              Thank you for choosing Cherry Cheeks. We're happy
              to help with your beauty journey!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-pink-100 bg-white p-5 shadow-sm sm:p-8 lg:col-span-3">
          <h2 className="text-2xl font-bold text-[#1b1b2f]">
            Send Us a Message
          </h2>

          <p className="mt-2 text-sm text-[#6b6a80]">
            Fill out the form below, and we'll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="mt-7 space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#1b1b2f]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#1b1b2f]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={inputStyle}
                  required
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-[#1b1b2f]"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What is your message about?"
                className={inputStyle}
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-[#1b1b2f]"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                className={`${inputStyle} resize-y`}
                required
              />
            </div>

            {submitted && (
              <p
                role="status"
                className="rounded-xl bg-green-50 p-3 text-sm text-green-700"
              >
                Your form was submitted successfully!
              </p>
            )}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#fb5c8c] px-6 py-3.5 font-semibold text-white transition hover:bg-[#ee4579] sm:w-auto"
            >
              Send Message
              <FiSend size={17} />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
>>>>>>> origin/feat/contact
