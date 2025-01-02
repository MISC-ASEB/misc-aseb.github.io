import {
  Title2,
  Card,
  CardPreview,
  Image,
  CardHeader,
  Body1,
  Badge,
} from "@fluentui/react-components";
import { TiSocialInstagram } from "react-icons/ti";
import {
  FaFacebook,
  FaWhatsapp,
  FaGithubAlt,
  FaLinkedin,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import teams from "../assets/teams.json";

const Team = () => {
  const renderSocialLinks = (social) => (
    <div className="flex space-x-4 mt-2 text-xl">
      {" "}
      {social.instagram && (
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <TiSocialInstagram className="hover:text-pink-500" />
        </a>
      )}
      {social.facebook && (
        <a
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <FaFacebook className="hover:text-blue-500" />
        </a>
      )}
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <FaGithubAlt className="hover:text-gray-600" />
        </a>
      )}
      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <FaLinkedin className="hover:text-blue-700" />
        </a>
      )}
      {social.whatsapp && (
        <a
          href={social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <FaWhatsapp className="hover:text-green-500" />
        </a>
      )}
      {social.email && (
        <a
          href={social.email}
          target="_blank"
          rel="noopener noreferrer"
          style={{ cursor: "pointer" }}
        >
          <PiMicrosoftOutlookLogoFill className="hover:text-blue-500" />
        </a>
      )}
    </div>
  );

  return (
    <section
      id="team"
      className="py-20 px-4 bg-gradient-to-b from-[#B366FF]/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        {/* <Title2 block as="h2" className="mb-12 text-center text-3xl font-bold">
          Our Team
        </Title2> */}
        {Object.entries(teams).map(([section, members]) => (
          <div key={section} className="mb-16">
            <Title2
              as="h3"
              className="mb-8 text-lg font-medium text-center text-blue-500"
              block
            >
              {section.toUpperCase()} TEAM
            </Title2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {members.map((member, index) => (
                <Card
                  key={index}
                  className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
                >
                  <CardPreview>
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-64 object-cover"
                    />
                  </CardPreview>
                  <CardHeader
                    header={
                      <div className="flex flex-row w-full justify-between items-center">
                        <Body1 weight="semibold" className="text-lg">
                          {member.name}
                        </Body1>
                        {member.mlsa && (
                          <Badge appearance="outline">
                            Microsoft Student Ambassador
                          </Badge>
                        )}
                      </div>
                    }
                    description={
                      <div className="text-sm">
                        <Body1 className="text-blue-500 font-medium">
                          {member.role}
                        </Body1>
                        <Body1 block className="text-xs text-gray-500">
                          {member.id}
                        </Body1>
                        {renderSocialLinks({
                          ...member.social,
                          email: `mailto:${member.id}@bl.students.amrita.edu`,
                        })}
                      </div>
                    }
                  />
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
