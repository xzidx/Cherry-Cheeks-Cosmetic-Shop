
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

/* Same heading style as Home page */
function SectionHeading({ label, title, description }) {
  return (
    <>
      <h2 className="mb-4 text-sm font-medium text-gray-800 sm:text-base lg:text-lg">
        {label}
      </h2>

      <h2 className="mb-6 text-2xl font-bold text-[#F66B87] sm:text-3xl lg:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
          {description}
        </p>
      )}
    </>
  );
}

/* Contact information item */
function InfoItem({ icon: Icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFF5F6]">
        <Icon className="h-5 w-5 text-[#F66B87]" />
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

/* Same input style throughout the form */
const inputClass =
  "w-full rounded-lg border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:border-[#F66B87] focus:ring-1 focus:ring-[#F66B87]";

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

  const openGoogleMaps = () => {
    window.open(
      "https://www.google.com/maps/search/?api=1&query=Daun+Penh+Phnom+Penh+Cambodia",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <Navbar />

      <main className="py-8">
        <div className="mx-auto w-full max-w-[1350px] px-4 sm:px-6 lg:px-8">

          {/* SECTION 1: CONTACT HERO */}
          <section className="flex flex-col items-center justify-between gap-8 py-6 md:flex-row md:py-10">

            <div className="w-full md:w-1/2">
              <SectionHeading
                label="GET IN TOUCH"
                title="Contact Us"
                description="Whether you have a question, feedback, or need help, our team is here for you. Get in touch — we're happy to assist!"
              />

              <p className="text-sm leading-6 text-gray-500 sm:text-base">
                We are always happy to hear from you and help you find the best
                skincare products for your needs.
              </p>
            </div>

            <div className="flex h-[200px] w-full items-center justify-center overflow-hidden rounded-lg sm:h-[280px] md:h-[250px] md:w-1/2 lg:h-[320px]">
              <img
                src={contactImage}
                alt="Contact our team"
                className="h-full w-full object-cover object-center"
              />
            </div>

          </section>

          {/* SECTION 2: CONTACT FORM AND INFORMATION */}
          <section className="mt-12 w-full">

            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-12">

              {/* CONTACT FORM */}
              <div className="w-full min-w-0 rounded-2xl bg-[#FFF5F6] p-5 sm:p-8">

                <SectionHeading
                  label="SEND US A MESSAGE"
                  title="We'd Love to Hear From You"
                  description="Fill out the form below and we'll get back to you as soon as possible."
                />

                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >

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

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05571] active:scale-95"
                  >
                    <Send size={18} />
                    Send Message
                  </button>

                </form>
              </div>

              {/* CONTACT INFORMATION */}
              <div className="w-full min-w-0">

                <SectionHeading
                  label="CONTACT INFORMATION"
                  title="Get in Touch"
                  description="Have questions? Here are the different ways you can reach our team."
                />

                <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-1">

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
                <div className="mt-10 flex flex-col items-start gap-4 rounded-2xl bg-[#FFF5F6] p-6 sm:flex-row sm:items-center">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white">
                    <MapPin className="h-6 w-6 text-[#F66B87]" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-base font-semibold text-gray-800">
                      Find Our Location
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Find our store on Google Maps.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={openGoogleMaps}
                    className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-[#F66B87] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#e05571] sm:w-auto"
                  >
                    Open Map
                    <ArrowRight size={16} />
                  </button>

                </div>

              </div>

            </div>
          </section>

          {/* SECTION 3: CONTACT BANNER */}
          <section className="mt-16 w-full">
            <div className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#FFF5F6] p-8 sm:p-10 md:flex-row">

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 sm:text-2xl">
                  Thank You for Choosing SinkCare!
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-500 sm:text-base">
                  Your natural beauty matters to us. We're always here to help.
                </p>
              </div>

              <a
                href="/shop"
                className="shrink-0 rounded-lg bg-[#F66B87] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#e05571]"
              >
                Shop Now
              </a>

            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
