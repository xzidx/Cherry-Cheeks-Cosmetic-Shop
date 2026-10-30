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

/* Same heading style as the Home page */
function SectionHeading({ label, title, description }) {
  return (
    <>
      <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
        {label}
      </h2>

      <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
        {title}
      </p>

      {description && (
        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </>
  );
}

/* One contact info row (icon + title + content) */
function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF5F6] sm:h-14 sm:w-14">
        <Icon className="h-5 w-5 text-[#F66B87] sm:h-6 sm:w-6" />
      </div>

      <div className="min-w-0">
        <h3 className="text-base font-bold text-gray-800 sm:text-lg">{title}</h3>
        <div className="mt-1 break-words text-sm leading-6 text-gray-500">
          {children}
        </div>
      </div>
    </div>
  );
}

/* Shared input styling */
const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87] sm:text-base";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been received.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Navbar />

      <main className="py-8">
        {/* Main Container: same as Home and Navbar */}
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* Hero: same layout as Home */}
          <div className="flex flex-col items-center justify-between gap-8 py-6 md:flex-row md:py-10">
            <div className="mb-6 mt-6 w-full md:mb-12 md:mt-12 md:w-1/2">
              <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base md:mt-12 lg:text-lg">
                GET IN TOUCH
              </h2>

              <p className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
                Contact Us
              </p>

              <p className="text-sm leading-6 text-gray-500 sm:text-base">
                Whether you have a question, feedback, or need help, our team
                is here for you. Get in touch — we’re happy to assist!
              </p>
            </div>

            <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[280px] md:h-[250px] md:w-1/2 lg:h-[320px]">
              <img
                src={contactImage}
                alt="Contact our team"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          {/* Form + Info */}
          <section className="mt-12 w-full">
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-10">

              {/* Contact Form */}
              <div className="w-full min-w-0 rounded-2xl bg-[#FFF5F6] p-5 sm:p-8">
                <SectionHeading
                  label="SEND US A MESSAGE"
                  title="We’d Love to Hear From You"
                  description="Fill out the form below and we’ll get back to you as soon as possible."
                />

                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
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
                      required
                      className={`${inputClass} resize-y`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05571] active:scale-95 sm:text-base"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="w-full min-w-0">
                <SectionHeading
                  label="CONTACT INFORMATION"
                  title="Get in Touch"
                />

                {/* 1 column on mobile, 2 on tablet, 1 on desktop (beside form) */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
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

                {/* Google Maps */}
                <div className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-[#FFF5F6] p-5 sm:flex-row sm:items-center sm:p-6">
                  <MapPin className="h-8 w-8 shrink-0 text-[#F66B87]" />

                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-gray-900">Find Our Location</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Find our store on Google Maps.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/search/?api=1&query=Daun+Penh+Phnom+Penh+Cambodia",
                        "_blank"
                      )
                    }
                    className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05571] active:scale-95 sm:w-auto"
                  >
                    Open Map
                    <ArrowRight size={16} />
                  </button>
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