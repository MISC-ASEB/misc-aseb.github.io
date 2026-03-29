import { Title2, Body1, Badge } from "@fluentui/react-components";
import { CalendarLtrRegular, LocationRegular } from "@fluentui/react-icons";
import data from "../assets/events.json";

/**
 * UpcomingEvents Component
 *
 * Displays a grid of upcoming events using premium glassmorphic cards.
 * Designed to highlight important dates and encourage RSVPs.
 */
function UpcomingEvents() {
  // Use dynamically loaded events from the JSON file and map the relative image and default fields
  const events = data.upcoming_events
    ? data.upcoming_events.map((event) => ({
        ...event,
        image: event.image.startsWith("http")
          ? event.image
          : `/images/events/${event.image}`,
        type: event.type || "Event",
        location: event.location || "Amrita Bengaluru",
      }))
    : [];

  return (
    <section id="upcoming-events" className="py-16 md:py-24 px-4 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-misc-blue/10 border border-misc-blue/20 text-misc-blue dark:text-misc-lightBlue text-sm font-bold tracking-widest uppercase shadow-sm">
            Join Us
          </div>
          <Title2
            block
            as="h2"
            className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Upcoming Events
          </Title2>
          <Body1 className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto block">
            Don't miss out on our latest workshops, hackathons, and tech talks.
          </Body1>
        </div>

        {/* Events Grid - Dynamically adapt layout based on event count */}
        <div
          className={`mx-auto ${
            events.length === 1
              ? "max-w-5xl"
              : events.length === 2
                ? "grid gap-8 grid-cols-1 md:grid-cols-2 max-w-4xl"
                : "grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className={`glass-card glass-card-hover group overflow-hidden ${
                events.length === 1
                  ? "flex flex-col md:flex-row" // Horizontal layout if only 1 event
                  : "flex flex-col h-full"
              }`}
            >
              {/* Image Container */}
              <div
                className={`relative overflow-hidden ${
                  events.length === 1
                    ? "md:w-1/2 min-h-[250px] md:min-h-[300px]"
                    : "h-48"
                }`}
              >
                <div className="absolute inset-0 bg-misc-darker/20 group-hover:bg-transparent transition-colors duration-300 z-10"></div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-contain absolute inset-0 transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge
                    appearance="filled"
                    className="bg-misc-blue/90 backdrop-blur-sm text-white border-none shadow-md"
                  >
                    {event.type}
                  </Badge>
                </div>
              </div>

              {/* Content Container */}
              <div
                className={`p-6 md:p-8 flex flex-col flex-grow ${
                  events.length === 1 ? "md:w-1/2 justify-center" : ""
                }`}
              >
                <h3
                  className={`font-bold text-slate-900 dark:text-white mb-3 group-hover:text-misc-blue dark:group-hover:text-misc-lightBlue transition-colors ${
                    events.length === 1
                      ? "text-2xl md:text-3xl"
                      : "text-xl mb-2"
                  }`}
                >
                  {event.title}
                </h3>

                {event.description && (
                  <p
                    className={`text-slate-600 dark:text-slate-400 mb-6 ${
                      events.length === 1
                        ? "text-base"
                        : "text-sm line-clamp-2 mb-4"
                    }`}
                  >
                    {event.description}
                  </p>
                )}

                <div className="space-y-3 mt-auto">
                  <div className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <CalendarLtrRegular className="mr-3 text-lg text-misc-blue dark:text-misc-lightBlue" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-slate-700 dark:text-slate-300 text-sm font-medium">
                    <LocationRegular className="mr-3 text-lg text-misc-purple dark:text-misc-lightBlue" />
                    {event.location}
                  </div>
                </div>

                {event.event_url && (
                  <div className="mt-6">
                    <a
                      href={event.event_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full"
                    >
                      <button className="w-full py-3 px-6 bg-misc-blue/10 hover:bg-misc-blue/20 text-misc-blue dark:text-misc-lightBlue rounded-xl transition-all shadow-sm hover:shadow-md text-sm font-bold uppercase tracking-wider">
                        Learn More
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
