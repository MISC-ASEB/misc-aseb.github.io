import { Title2, Body1, Badge } from "@fluentui/react-components";
import ImageCarousel from "./ImageCarousel";
import data from "../assets/events.json";

/**
 * PastEvents Component
 *
 * Displays a carousel of past events using data from events.json.
 * Uses a glassmorphic container to frame the carousel beautifully.
 */
function PastEvents() {
  const events = data.past_events.map((event) => ({
    ...event,
    image: `/images/events/${event.image}`,
  }));

  return (
    <section id="events" className="py-16 md:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-misc-blue/10 border border-misc-blue/20 text-misc-blue dark:text-misc-lightBlue text-sm font-bold tracking-widest uppercase shadow-sm">
            Our Legacy
          </div>
          <Title2
            block
            as="h2"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Past Events
          </Title2>
          <Body1 className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto block">
            A look back at the incredible workshops, hackathons, and sessions
            we've hosted.
          </Body1>
        </div>

        {/* Carousel Container */}
        <div className="glass-card p-4 md:p-8 rounded-3xl border-white/30 dark:border-slate-700/50 shadow-2xl">
          <ImageCarousel events={events} />
        </div>
      </div>
    </section>
  );
}

export default PastEvents;
