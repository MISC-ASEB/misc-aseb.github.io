import { Title1, Body1, Button } from "@fluentui/react-components";
import { ArrowRightFilled, CalendarLtrFilled } from "@fluentui/react-icons";
import Logo from "/logo.png";

/**
 * Hero Component
 *
 * The primary landing section of the website.
 * Features a glassmorphic design, floating animations, and clear Call-to-Actions (CTAs).
 * Designed to immediately communicate the club's premium, tech-focused identity.
 */
function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden px-4 py-12 md:py-20">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column: Text & CTAs */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-misc-blue/30">
            <span className="w-2 h-2 rounded-full bg-misc-blue animate-pulse"></span>
            <span className="text-sm font-semibold text-misc-blue dark:text-misc-lightBlue">
              Amrita Vishwa Vidyapeetham, Bengaluru
            </span>
          </div>

          {/* Main Headline */}
          <div className="space-y-4">
            <Title1
              as="h2"
              block
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm"
            >
              Ignite Your <br />
              <span className="bg-gradient-to-r from-misc-blue via-misc-purple to-misc-lightBlue text-transparent bg-clip-text">
                Tech Journey
              </span>
            </Title1>

            <Body1
              as="p"
              block
              className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed"
            >
              Empowering students with cutting-edge Microsoft technologies. Join
              a community of innovators, builders, and future tech leaders.
            </Body1>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="#upcoming-events" className="w-full sm:w-auto">
              <Button
                appearance="primary"
                size="large"
                icon={<CalendarLtrFilled />}
                className="w-full sm:w-auto bg-misc-blue hover:bg-misc-darkBlue transition-colors shadow-lg shadow-misc-blue/30"
              >
                View Upcoming Events
              </Button>
            </a>
            <a href="#about" className="w-full sm:w-auto">
              <Button
                appearance="outline"
                size="large"
                icon={<ArrowRightFilled />}
                iconPosition="after"
                className="w-full sm:w-auto glass-card hover:bg-white/80 dark:hover:bg-slate-800/80 border-slate-300 dark:border-slate-600"
              >
                Learn More
              </Button>
            </a>
          </div>
        </div>

        {/* Right Column: Visuals */}
        <div className="relative flex justify-center items-center lg:justify-end mt-10 lg:mt-0">
          {/* Decorative Background Glow behind Logo */}
          <div className="absolute w-64 h-64 md:w-96 md:h-96 bg-gradient-to-tr from-misc-blue to-misc-purple rounded-full mix-blend-multiply filter blur-3xl opacity-40 dark:opacity-30 animate-blob"></div>

          {/* Floating Logo Container */}
          <div className="relative z-10 glass-card p-8 md:p-12 rounded-full border-white/40 dark:border-slate-700/50 shadow-2xl animate-[bounce_6s_ease-in-out_infinite]">
            <img
              src={Logo}
              alt="MISC Logo"
              className="w-48 md:w-64 h-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
