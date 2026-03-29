import { Title2, Body1, Badge } from "@fluentui/react-components";
import { TiSocialInstagram } from "react-icons/ti";
import {
  FaFacebook,
  FaWhatsapp,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import teams from "../assets/teams.json";

/**
 * Team Component
 *
 * Renders the club's team members grouped by their respective sections.
 * Uses premium glassmorphic cards with hover effects and social links.
 * Data is dynamically loaded from teams.json for easy updates.
 */
const Team = () => {
  /**
   * Helper function to render social media icons based on available data
   * @param {Object} social - Object containing social media URLs
   */
  const renderSocialLinks = (social) => (
    <div className="flex justify-center space-x-2 mt-4 text-xl lg:opacity-0 lg:group-hover:opacity-100 opacity-100 transition-all duration-300 transform lg:translate-y-2 lg:group-hover:translate-y-0 translate-y-0">
      {social.instagram && (
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-pink-500 dark:text-slate-400 dark:hover:text-pink-400 transition-colors"
        >
          <TiSocialInstagram />
        </a>
      )}
      {social.facebook && (
        <a
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <FaFacebook />
        </a>
      )}
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
        >
          <FaGithubAlt />
        </a>
      )}
      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-blue-700 dark:text-slate-400 dark:hover:text-blue-400 transition-colors"
        >
          <FaLinkedin />
        </a>
      )}
      {social.whatsapp && (
        <a
          href={social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-green-500 dark:text-slate-400 dark:hover:text-green-400 transition-colors"
        >
          <FaWhatsapp />
        </a>
      )}
      {social.email && (
        <a
          href={social.email}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 text-slate-500 hover:text-misc-blue dark:text-slate-400 dark:hover:text-misc-lightBlue transition-colors"
        >
          <PiMicrosoftOutlookLogoFill />
        </a>
      )}
    </div>
  );

  return (
    <section id="team" className="py-16 md:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-misc-blue/10 border border-misc-blue/20 text-misc-blue dark:text-misc-lightBlue text-sm font-bold tracking-widest uppercase shadow-sm">
            The People
          </div>
          <Title2
            block
            as="h2"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Meet Our Team
          </Title2>
          <Body1 className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto block">
            The passionate individuals driving innovation and building the
            community at MISC.
          </Body1>
        </div>

        {/* Team Sections Loop */}
        {Object.entries(teams).map(([section, members]) => (
          <div key={section} className="mb-24 last:mb-0">
            {/* Section Title (e.g., "Core Team", "Technical Team") */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-px bg-gradient-to-r from-transparent via-misc-blue/50 to-transparent w-1/4"></div>
              <Title2
                as="h3"
                className="mx-6 text-2xl font-bold text-misc-blue dark:text-misc-lightBlue uppercase tracking-wider"
              >
                {section.replace(/_/g, " ")}
              </Title2>
              <div className="h-px bg-gradient-to-r from-misc-blue/50 via-misc-blue/50 to-transparent w-1/4"></div>
            </div>

            {/* Members Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="glass-card glass-card-hover group relative overflow-hidden p-6 flex flex-col items-center text-center"
                >
                  {/* Decorative Background Glow on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-misc-blue/5 to-misc-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Profile Image */}
                  <div className="relative w-32 h-32 mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-misc-blue to-misc-purple animate-spin-slow opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500"></div>
                    <img
                      src={
                        member.image.includes("/")
                          ? member.image
                          : `/images/team/${member.image}`
                      }
                      alt={member.name}
                      className="relative w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-800 shadow-lg z-10"
                      loading="lazy"
                      onError={(e) => {
                        e.target.src =
                          "https://ui-avatars.com/api/?name=" +
                          encodeURIComponent(member.name) +
                          "&background=0078D4&color=fff";
                      }}
                    />
                  </div>

                  {/* Member Info */}
                  <div className="relative z-10 w-full">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-misc-blue dark:group-hover:text-misc-lightBlue transition-colors">
                      {member.name}
                    </h4>
                    <Badge
                      appearance="subtle"
                      className="bg-misc-blue/10 text-misc-blue dark:text-misc-lightBlue border-none mb-3"
                    >
                      {member.role}
                    </Badge>

                    {/* Social Links (Revealed on Hover) */}
                    {member.social && renderSocialLinks(member.social)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
