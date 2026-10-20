import { useState } from "react";
import logo from "../../assets/images/logo.png";

/* ---------- inline icons (no extra packages) ---------- */
const Svg = ({ children, size = 24, sw = 1.8 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {children}
    </svg>
);

const ShieldIcon = () => <Svg size={20}><path d="M12 3 5 5.5v6c0 4.5 3 7.8 7 9.5 4-1.7 7-5 7-9.5v-6L12 3Z" /></Svg>;
const TruckIcon = () => (
    <Svg size={22}>
        <path d="M2 6h10v9H2zM12 9h4l3 3v3h-7" />
        <circle cx="6.5" cy="17" r="1.8" fill="#fdeaf0" />
        <circle cx="16.5" cy="17" r="1.8" fill="#fdeaf0" />
    </Svg>
);
const HeartIcon = () => <Svg size={22}><path d="M12 20.5s-8-4.8-8-10.7A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 8 2.6c0 5.9-8 10.7-8 10.7Z" /></Svg>;
const MailIcon = () => <Svg size={22}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="m4 7.5 8 6 8-6" /></Svg>;
const ChevronDown = () => <Svg size={14} sw={2.6}><path d="m6 9 6 6 6-6" /></Svg>;

const InstagramIcon = () => (
    <Svg size={22} sw={2.2}>
        <rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" />
    </Svg>
);
const FacebookIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14 8.5V6.8c0-.8.2-1.3 1.4-1.3H17V2.2C16.7 2.1 15.7 2 14.6 2 12.2 2 10.5 3.5 10.5 6.2v2.3H8v3.5h2.5V22H14V12h2.6l.4-3.5H14Z" />
    </svg>
);
const TikTokIcon = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 2h-3.2v13.2a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .8.1V9.1a6.1 6.1 0 1 0 5.3 6V8.7a7.7 7.7 0 0 0 4.4 1.4V6.9a4.5 4.5 0 0 1-4.4-4.9Z" />
    </svg>
);
const YouTubeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="5" width="20" height="14" rx="4" fill="currentColor" />
        <path d="m10 9 5 3-5 3z" fill="#fdeaf0" />
    </svg>
);

const Lotus = () => (
    <svg width="34" height="34" viewBox="0 0 40 40" fill="none" stroke="currentColor"
        strokeWidth="1.6" strokeLinejoin="round" aria-hidden="true">
        <path d="M20 6c4 4 5 10 0 17-5-7-4-13 0-17Z" fill="#fdeaf0" />
        <path d="M20 23C15 22 9 17 9 10c5 1 9 5 11 13ZM20 23c5-1 11-6 11-13-5 1-9 5-11 13Z" fill="#fdeaf0" />
        <path d="M20 23c-5 0-12-2-16-8 6-1 11 1 16 8ZM20 23c5 0 12-2 16-8-6-1-11 1-16 8Z" fill="#fdeaf0" />
        <path d="M10 28c6 4 14 4 20 0" />
    </svg>
);

/* decorative petals: desktop only */
const Petals = ({ className = "" }) => (
    <svg width="90" height="200" viewBox="0 0 90 200" aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 hidden lg:block ${className}`}>
        <g fill="#fbd0de">
            <path d="M0 10c20 14 30 50 20 90-10 0-20-6-20-6z" opacity=".85" />
            <path d="M0 112c22-18 44-12 44-12s-4 36-44 50z" opacity=".9" />
            <path d="M10 190c0-18 24-34 52-30 4 14-20 34-52 30Z" />
        </g>
    </svg>
);

/* ---------- data ---------- */
const quickLinks = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Categories", hasMenu: true },
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
];
const customerCare = [
    { label: "Contact Us", href: "/contact" },
    { label: "FAQs", href: "/faqs" },
    { label: "Shipping & Delivery", href: "/shipping" },
    { label: "Returns & Exchanges", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy" },
];
const socials = [
    { name: "Instagram", href: "#", Icon: InstagramIcon },
    { name: "Facebook", href: "#", Icon: FacebookIcon },
    { name: "TikTok", href: "#", Icon: TikTokIcon },
    { name: "YouTube", href: "#", Icon: YouTubeIcon },
];
const features = [
    { Icon: ShieldIcon, lines: ["100%", "Original Products"] },
    { Icon: TruckIcon, lines: ["Fast & Safe", "Delivery"] },
    { Icon: HeartIcon, lines: ["Your Beauty", "Our Priority"] },
];

/* ---------- shared class strings ---------- */
const circle =
    "inline-flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-full bg-[#fdeaf0] text-[#fb5c8c]";
const title =
    "relative m-0 pb-5 text-[18px] font-bold leading-[1.2] text-[#1b1b2f] " +
    "after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-[33px] after:rounded-sm after:bg-[#fb5c8c] after:content-['']";
const link = "text-[14px] text-[#6b6a80] transition-colors hover:text-[#fb5c8c]";


export default function Footer() {
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        // TODO: call your newsletter API here
        console.log("Subscribe:", email);
        setEmail("");
    };

    return (
        <footer className="relative w-full overflow-hidden bg-[#fdf2f5] font-sans text-[#6b6a80]">
            <Petals className="left-0" />
            <Petals className="right-0 -scale-x-100" />

            {/* ---------- main grid ---------- */}
            <div
                className="relative z-10 mx-auto grid max-w-[1288px]
                   grid-cols-2 gap-x-6 gap-y-10 px-5 pb-8 pt-10
                   md:grid-cols-6 md:gap-x-8 md:gap-y-12 md:px-8 md:pb-10 md:pt-14
                   lg:grid-cols-[340px_186px_201px_290px_1fr] lg:gap-0 lg:pb-0 lg:pl-[61px] lg:pr-[43px] lg:pt-[70px]"
            >
                {/* Brand */}
                <div className="col-span-full flex flex-col lg:col-span-1">
                    <img
                        src={logo}
                        alt="Cherry Cheeks Cosmetic Shop"
                        className="w-full max-w-[200px] sm:max-w-[240px] lg:max-w-[280px]"
                    />
                    <p className="mt-5 max-w-[420px] text-[14px] leading-[22px] lg:mt-[49px] lg:leading-[21px]">
                        Discover the best beauty products
                        <br className="hidden lg:block" />{" "}
                        for your natural glow. Skincare, makeup
                        <br className="hidden lg:block" />{" "}
                        and more — all in one place.
                    </p>

                    <div className="mt-6 flex w-full max-w-[420px] flex-nowrap items-start lg:mb-[15px] lg:ml-[-30px] lg:mr-[30px] lg:mt-[30px] lg:max-w-none">
                        {features.map(({ Icon, lines }, i) => (
                            <div key={lines[0]} className="flex min-w-0 flex-1 items-start">
                                {i > 0 && <span className="mt-[10px] h-[46px] w-px shrink-0 bg-[#f8c3d3]" />}
                                <div className="flex min-w-0 flex-1 flex-col items-center px-1 text-center">
                                    <span className={circle}><Icon /></span>
                                    <span className="mt-3 text-[12px] leading-[14px]">{lines[0]}<br />{lines[1]}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Links */}
                <nav aria-label="Quick links" className="md:col-span-2 lg:col-span-1">
                    <h4 className={title}>Quick Links</h4>
                    <ul className="mt-5 list-none p-0 lg:mt-[30px]">
                        {quickLinks.map((l) => (
                            <li key={l.label} className="flex h-9 items-center lg:h-8">
                                {l.hasMenu ? (
                                    <button type="button" onClick={() => setOpen(!open)} aria-expanded={open}
                                        className={`${link} inline-flex cursor-pointer items-center gap-[13px] border-0 bg-transparent p-0`}>
                                        {l.label}
                                        <span className={`inline-flex text-[#1b1b2f] transition-transform ${open ? "rotate-180" : ""}`}>
                                            <ChevronDown />
                                        </span>
                                    </button>
                                ) : (
                                    <a href={l.href} className={link}>{l.label}</a>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Customer Care */}
                <nav aria-label="Customer care" className="md:col-span-2 lg:col-span-1">
                    <h4 className={title}>Customer Care</h4>
                    <ul className="mt-5 list-none p-0 lg:mt-[30px]">
                        {customerCare.map((l) => (
                            <li key={l.label} className="flex h-9 items-center lg:h-8">
                                <a href={l.href} className={link}>{l.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Stay Connected */}
                <div className="col-span-full md:order-4 lg:order-none lg:col-span-1">
                    <h4 className={title}>Stay Connected</h4>
                    <p className="mt-5 text-[14px] leading-[24px] lg:mt-[25px] lg:leading-[27px]">
                        Subscribe to get beauty tips,
                        <br className="hidden lg:block" />{" "}
                        new arrivals and exclusive offers.
                    </p>
                    <form onSubmit={handleSubmit}
                        className="mt-5 flex h-11 w-full max-w-[420px] items-center overflow-hidden rounded-full
                           border border-[#fb5c8c] bg-white focus-within:ring-[3px] focus-within:ring-[#fb5c8c]/20
                           lg:mt-[25px] lg:h-[37px] lg:w-[263px] lg:max-w-full">
                        <span className="ml-[14px] inline-flex text-[#fb5c8c]"><MailIcon /></span>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address" aria-label="Email address"
                            className="h-full min-w-0 flex-1 border-0 bg-transparent pl-[10px] pr-2 text-[16px] text-[#1b1b2f]
                              outline-none placeholder:text-[#6b6a80] lg:text-[12px]" />
                        <button type="submit"
                            className="h-full cursor-pointer border-0 bg-[#fb5c8c] px-4 text-[13px] font-bold text-white
                               transition-colors hover:bg-[#ee4579] lg:px-[14px] lg:text-[12px]">
                            Subscribe
                        </button>
                    </form>
                </div>

                {/* Follow Us */}
                <div className="col-span-full md:order-3 md:col-span-2 lg:order-none lg:col-span-1">
                    <h4 className={title}>Follow Us</h4>
                    <div className="mt-5 flex gap-3 lg:mt-[25px]">
                        {socials.map(({ name, href, Icon }) => (
                            <a key={name} href={href} aria-label={name}
                                className={`${circle} transition-colors hover:bg-[#fb5c8c] hover:text-white`}>
                                <Icon />
                            </a>
                        ))}
                    </div>

                    {/* script tagline — desktop only */}
                    <div aria-hidden="true" className="relative ml-[30px] mt-[38px] hidden h-[100px] w-[160px] text-[#fb5c8c] lg:block">
                        <span className="absolute left-0 top-0 block origin-bottom-left -rotate-[9deg] whitespace-nowrap
                             font-['Dancing_Script','Brush_Script_MT',cursive] text-[25px] leading-[29px]">
                            Let’s Stay<br />Connected
                            <svg className="absolute -right-7 top-[28px] rotate-[8deg]" width="30" height="30" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round">
                                <path d="M12 20s-8-4.8-8-10.5A4.3 4.3 0 0 1 12 7a4.3 4.3 0 0 1 8 2.5C20 15.2 12 20 12 20Z" />
                            </svg>
                        </span>
                        <svg className="absolute left-2 top-[72px]" width="100" height="30" viewBox="0 0 100 30" fill="none">
                            <path d="M2 28C25 10 60 2 98 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                        </svg>
                    </div>
                </div>
            </div>

            {/* ---------- bottom bar ---------- */}
            <div
                className="relative z-10 mx-auto grid max-w-[1208px] grid-cols-1 justify-items-center gap-4 border-t
                   border-[#f8c3d3] px-5 py-6 text-center text-[13px]
                   md:grid-cols-2 md:justify-items-stretch md:gap-6 md:px-8 md:text-left
                   lg:h-[72px] lg:grid-cols-[1fr_auto_1fr] lg:gap-0 lg:px-[43px] lg:py-0"
            >
                <p className="m-0 md:self-center">© 2026 Cherry Cheeks Cosmetic Shop. All rights reserved.</p>

                <div className="order-first flex items-center gap-3 text-[#fb5c8c] md:hidden lg:order-none lg:flex lg:self-center">
                    <span className="block h-px w-[41px] bg-[#fb5c8c]" />
                    <Lotus />
                    <span className="block h-px w-[41px] bg-[#fb5c8c]" />
                </div>

                <div className="flex flex-wrap items-center justify-center gap-x-[21px] gap-y-2 md:justify-self-end md:self-center lg:justify-self-end">
                    <a href="/privacy" className="hover:text-[#fb5c8c]">Privacy Policy</a>
                    <i className="h-4 w-px bg-[#6b6a80]/60" />
                    <a href="/terms" className="hover:text-[#fb5c8c]">Terms &amp; Conditions</a>
                </div>
            </div>
        </footer>
    );
}