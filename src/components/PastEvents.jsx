import { Title2 } from "@fluentui/react-components";
import ImageCarousel from "./ImageCarousel";
import data from "../assets/events.json";

function PastEvents() {
  const events = data.past_events.map((event) => ({
    ...event,
    image: `/images/events/${event.image}`,
  }));

  return (
    <section
      id="events"
      className="py-20 px-4 bg-gradient-to-b from-[#B366FF]/5 to-transparent"
    >
      <div className="max-w-6xl mx-auto">
        <Title2 block as="h2" className="mb-12 text-center text-3xl font-bold">
          Past Events
        </Title2>
        <ImageCarousel events={events} />
      </div>
    </section>
  );
}

export default PastEvents;
