import { Title2, Body1, Title3 } from "@fluentui/react-components";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-gradient-to-b from-[#0066FF]/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <Title2 block as="h2" className="mb-12 text-center text-3xl font-bold">
          About Us
        </Title2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Body1 as="p" className="mb-4">
              Microsoft Ignite Students Club is a dynamic student-driven
              community dedicated to exploring and mastering the latest
              technologies. Our club hosts industry expert talks, providing
              members with invaluable insights from professionals at the
              forefront of innovation.
            </Body1>
            <Body1 as="p" className="mb-4">
              We are committed to fostering students' skills with new
              technologies, ensuring they stay ahead in the ever-evolving tech
              landscape.
            </Body1>
          </div>
          <div>
            <Body1 as="p" className="mb-4">
              Additionally, we actively participate in Microsoft Reactor
              programs, offering hands-on experiences and opportunities to
              connect with the global tech community.
            </Body1>
            <Body1 as="p">
              Join us to ignite your passion for technology and drive your
              learning journey forward!
            </Body1>
          </div>
        </div>
        <div className="mt-12">
          <Title3 block as="h3" className="mb-4 text-xl font-semibold">
            Vision and Mission
          </Title3>
          <ul className="list-none grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Create a supportive, inclusive space for growth",
              "Develop and implement AI solutions",
              "Explore and share advanced insights",
              "Promote AI through cloud and open source",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="mr-2 text-[#B366FF] text-2xl">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
