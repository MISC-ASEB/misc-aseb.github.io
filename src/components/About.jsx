import { Title2, Body1, Title3 } from "@fluentui/react-components";
import { motion } from "framer-motion";
import { CheckmarkCircleFilled } from "@fluentui/react-icons";

/**
 * About Component
 *
 * Details the club's mission, vision, and activities.
 * Uses framer-motion for smooth scroll-triggered entrance animations.
 */
function About() {
  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const visionItems = [
    "Create a supportive, inclusive space for growth",
    "Develop and implement AI solutions",
    "Explore and share advanced insights",
    "Promote AI through cloud and open source",
  ];

  return (
    <section id="about" className="py-16 md:py-24 px-4 relative z-10">
      <motion.div
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Section Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-16 flex flex-col items-center"
        >
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-misc-blue/10 border border-misc-blue/20 text-misc-blue dark:text-misc-lightBlue text-sm font-bold tracking-widest uppercase shadow-sm">
            Who We Are
          </div>
          <Title2
            block
            as="h2"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white text-center w-full"
          >
            About MISC
          </Title2>
        </motion.div>

        {/* Main Content Unified Card */}
        <motion.div
          variants={itemVariants}
          className="glass-card rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl border-white/40 dark:border-slate-700/50"
        >
          {/* Left Column: Text Content */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white/20 dark:bg-slate-900/20">
            <Title3
              as="h3"
              className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
            >
              Empowering the Next Generation of Tech Leaders
            </Title3>
            <Body1
              as="p"
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6"
            >
              Microsoft Ignite Students Club is a dynamic student-driven
              community dedicated to exploring and mastering the latest
              technologies. Our club hosts industry expert talks, providing
              members with invaluable insights from professionals at the
              forefront of innovation.
            </Body1>
            <Body1
              as="p"
              className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed"
            >
              We are committed to fostering students' skills with new
              technologies, ensuring they stay ahead in the ever-evolving tech
              landscape. Additionally, we actively participate in Microsoft
              Reactor programs, offering hands-on experiences.
            </Body1>
          </div>

          {/* Right Column: Vision & Mission */}
          <div className="lg:w-1/2 p-8 md:p-12 bg-gradient-to-br from-misc-blue/5 to-misc-purple/10 dark:from-misc-blue/10 dark:to-misc-purple/20 border-t lg:border-t-0 lg:border-l border-white/30 dark:border-slate-700/50 flex flex-col justify-center">
            <Title3
              block
              as="h3"
              className="mb-8 text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-4"
            >
              <span className="p-3 rounded-xl bg-white/60 dark:bg-slate-800/60 text-misc-blue shadow-sm text-2xl">
                🎯
              </span>
              Vision and Mission
            </Title3>

            <ul className="space-y-6">
              {visionItems.map((item, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 bg-white/60 dark:bg-slate-800/60 rounded-full p-1.5 shadow-sm group-hover:scale-110 transition-transform group-hover:bg-misc-blue/20">
                    <CheckmarkCircleFilled className="text-misc-blue dark:text-misc-lightBlue text-xl flex-shrink-0" />
                  </div>
                  <span className="text-lg text-slate-700 dark:text-slate-300 font-medium leading-snug pt-1">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
