
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
  Heart,
} from "lucide-react";

import contactImage from "../../assets/images/contact-us.png";
import Navbar from "../../components/shared/Navbar";
import Footer from "../../components/shared/Footer";

/* Reusable Section Heading */
function SectionHeading({ label, title, description }) {
  return (
    <div className="mb-6">
      <p className="mb-2 text-sm font-medium uppercase tracking-wider text-[#F66B87]">
        {label}
      </p>

      <h2 className="text-2xl font-bold leading-tight text-gray-800 sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

/* Reusable Contact Information */
function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFF5F6] text-[#F66B87]">
        <Icon size={22} />
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
          {title}
        </h3>

        <div className="mt-1 break-words text-sm leading-6 text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Shared Input Style */
const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]";

/* Contact Page */
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

  const openMap = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Daun+Penh+Phnom+Penh+Cambodia",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto w-full max-w-[1350px] px-4 py-8 sm:px-6 lg:px-8">

        {/* SECTION 1: HERO */}
        <section className="mb-16 grid items-center gap-8 rounded-xl bg-white p-6 md:grid-cols-2 md:p-10 lg:gap-12">

          <div>
            <SectionHeading
              label="Get in Touch"
              title="We'd Love to Hear From You"
              description="Whether you have a question, feedback, or need help, our team is here for you. Get in touch — we're happy to assist!"
            />

            <p className="text-sm leading-6 text-gray-500 sm:text-base">
              Your questions and feedback are important to us. We look
              forward to hearing from you!
            </p>
          </div>

          <div className="h-64 overflow-hidden rounded-xl sm:h-80">
            <img
              src={contactImage}
              alt="Contact our team"
              className="h-full w-full object-cover object-center"
            />
          </div>

        </section>

        {/* SECTION 2: FORM AND CONTACT INFORMATION */}
        <section className="mb-16">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">

            {/* CONTACT FORM */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-8">

              <SectionHeading
                label="Send Us a Message"
                title="Contact Our Team"
                description="Fill out the form below and we'll get back to you as soon as possible."
              />

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* Full Name */}
                <div className="relative">
                  <UserRound
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name *"
                    aria-label="Full name"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address *"
                    aria-label="Email address"
                    required
                    className={inputClass}
                  />
                </div>

                {/* Subject */}
                <div className="relative">
                  <Tag
                    size={18}
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    aria-label="Message subject"
                    className={`${inputClass} appearance-none ${
                      form.subject ? "text-gray-800" : "text-gray-400"
                    }`}
                  >
                    <option value="" disabled>
                      Subject *
                    </option>

                    <option value="product">Product Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="delivery">Shipping & Delivery</option>
                    <option value="return">Returns & Refunds</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare
                    size={18}
                    className="pointer-events-none absolute left-4 top-4 text-gray-400"
                  />

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Your Message *"
                    aria-label="Your message"
                    required
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
                >
                  <Send size={18} />
                  Send Message
                </button>

              </form>
            </div>

            {/* CONTACT INFORMATION */}
            <div className="rounded-xl border border-gray-100 bg-white p-5 sm:p-8">

              <SectionHeading
                label="Contact Information"
                title="Get in Touch"
                description="You can reach us through the following contact details. We're always happy to help."
              />

              <div className="space-y-7">

                <InfoItem icon={MapPin} title="Our Address">
                  No. 123, Beauty Street, Sangkat 7, Khan Daun Penh,
                  Phnom Penh, Cambodia
                </InfoItem>

                <InfoItem icon={Phone} title="Phone Number">
                  +855 12 345 678
                </InfoItem>

                <InfoItem icon={Mail} title="Email Address">
                  support@cherrycheeks.com
                </InfoItem>

                <InfoItem icon={Clock} title="Business Hours">
                  Monday - Saturday: 8:00 AM - 8:00 PM
                  <br />
                  Sunday: 9:00 AM - 6:00 PM
                </InfoItem>

              </div>

              {/* GOOGLE MAPS */}
              <div className="mt-10 rounded-xl bg-[#FFF5F6] p-5 sm:p-6">

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#F66B87]">
                    <MapPin size={24} />
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-gray-800 sm:text-lg">
                      Find Our Location
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Find our store on Google Maps.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={openMap}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
                >
                  Open Map
                  <ArrowRight size={17} />
                </button>

              </div>
            </div>

          </div>
        </section>

        {/* SECTION 3: CONTACT BANNER */}
        <section className="mb-10 rounded-xl bg-[#FFF5F6] p-8 sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

            <div className="text-center md:text-left">
              <div className="mb-3 flex justify-center md:justify-start">
                <Heart className="text-[#F66B87]" size={26} />
              </div>

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                We're Always Here to Help!
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                Thank you for choosing SinkCare. Your natural beauty
                matters to us.
              </p>
            </div>

            <a
              href="mailto:support@cherrycheeks.com"
              className="shrink-0 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#e05571]"
            >
              Email Us
            </a>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Contact;
