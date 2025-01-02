import { Body1 } from "@fluentui/react-components";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "/logo.png";

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
      className="bg-gradient-to-br from-[#B366FF]/10 via-[#6600FF]/10 to-[#0066FF]/10 py-12"
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={Logo} alt="MISC Logo" className="h-10 w-auto mr-2" />
              <Body1 block as="h3" className="font-bold text-lg">
                Microsoft Ignite Students Club
              </Body1>
            </div>
            <Body1 block as="p" className="text-sm opacity-80">
              Ignite • Innovate • Elevate
            </Body1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1981901521413!2d77.67316457518486!3d12.894974016553412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1339d7500cd3%3A0x4b4fbdff03bfee09!2sAmrita%20Vishwa%20Vidyapeetam%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1735771492597!5m2!1sen!2sin"
              width="300"
              height="250"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64 md:h-48 rounded-md shadow-md mt-4"
            ></iframe>
          </div>
          <div>
            <Body1 block as="h3" className="font-bold mb-4 text-lg">
              Quick Links
            </Body1>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={link === "Home" ? "#" : `#${link.toLowerCase()}`}
                    className="text-sm hover:text-[#B366FF] transition-colors duration-300 opacity-80"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <Body1 block as="h3" className="font-bold mb-4 text-lg">
              Connect With Us
            </Body1>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label} className="flex items-center space-x-2">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-[#B366FF] transition-colors duration-300 flex items-center space-x-2 opacity-80"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700/20 text-center">
          <Body1 as="p" className="text-sm opacity-80">
            &copy; {new Date().getFullYear()} Microsoft Ignite Students Club.
            All rights reserved.
          </Body1>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
