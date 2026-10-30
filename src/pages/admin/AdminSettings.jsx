
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
