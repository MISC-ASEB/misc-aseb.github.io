import { Body1 } from "@fluentui/react-components";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "/logo.png";

/**
 * Footer Component
 *
 * Renders the bottom section of the website containing branding,
 * quick navigation links, social media connections, and a location map.
 * Uses a glassmorphic design to blend with the dynamic background.
 */
function Footer() {
  const quickLinks = ["Home", "About", "Events", "Team"];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/ignitestudentsclub/",
      label: "Instagram",
    },
    {
      icon: <FaFacebookF />,
      url: "https://www.facebook.com/profile.php?id=61556389845852",
      label: "Facebook",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@IgniteStudentsClub",
      label: "YouTube",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/company/microsoft-ignite-students-club-aseb",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      url: "mailto:ignitesclub@blr.amrita.edu",
      label: "Email",
    },
  ];

  return (
    <footer
      id="contact"
      className="relative mt-20 border-t border-white/20 dark:border-slate-800 bg-white/30 dark:bg-slate-900/30 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand & Location Section */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={Logo}
                alt="MISC Logo"
                className="h-12 w-auto drop-shadow-md"
              />
              <div>
                <Body1
                  block
                  as="h3"
                  className="font-bold text-lg text-slate-900 dark:text-white"
                >
                  Microsoft Ignite Students Club
                </Body1>
                <Body1
                  block
                  as="p"
                  className="text-sm text-misc-blue dark:text-misc-lightBlue font-medium"
                >
                  Ignite • Innovate • Elevate
                </Body1>
              </div>
            </div>

            <div className="mt-4 rounded-xl overflow-hidden border border-white/20 dark:border-slate-700 shadow-lg">
              <iframe
                title="MISC Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1981901521413!2d77.67316457518486!3d12.894974016553412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1339d7500cd3%3A0x4b4fbdff03bfee09!2sAmrita%20Vishwa%20Vidyapeetam%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1735771492597!5m2!1sen!2sin"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-48 object-cover"
              ></iframe>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:pl-12">
            <Body1
              block
              as="h3"
              className="font-bold mb-6 text-lg text-slate-900 dark:text-white border-b border-misc-blue/20 pb-2 inline-block"
            >
              Quick Links
            </Body1>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-misc-blue dark:hover:text-misc-lightBlue transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-misc-blue/50 group-hover:bg-misc-blue transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Connections Section */}
          <div>
            <Body1
              block
              as="h3"
              className="font-bold mb-6 text-lg text-slate-900 dark:text-white border-b border-misc-purple/20 pb-2 inline-block"
            >
              Connect With Us
            </Body1>
            <ul className="space-y-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-600 dark:text-slate-300 hover:text-misc-purple dark:hover:text-misc-lightBlue transition-all duration-300 flex items-center gap-3 group"
                  >
                    <span className="p-2 rounded-lg bg-white/50 dark:bg-slate-800/50 group-hover:bg-misc-purple/10 dark:group-hover:bg-misc-purple/20 group-hover:scale-110 transition-all shadow-sm">
                      {link.icon}
                    </span>
                    <span className="font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200/50 dark:border-slate-800/50 text-center">
          <Body1
            block
            as="p"
            className="text-xs text-slate-500 dark:text-slate-400"
          >
            &copy; {new Date().getFullYear()} Microsoft Ignite Students Club.
            All rights reserved.
          </Body1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
