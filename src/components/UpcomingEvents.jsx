import {
  Title2,
  Card,
  CardPreview,
  Image,
  CardHeader,
  Body1,
} from "@fluentui/react-components";

function UpcomingEvents() {
  const events = [
    {
      title: "Azure Workshop",
      date: "June 15, 2023",
      image: "https://placehold.co/300x200",
    },
    {
      title: "Hackathon 2023",
      date: "July 1-2, 2023",
      image: "https://placehold.co/300x200",
    },
    {
      title: "Career in Tech Talk",
      date: "July 20, 2023",
      image: "https://placehold.co/300x200",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-[#0066FF]/5 to-transparent">
      <div className="max-w-6xl mx-auto">
        <Title2 block as="h2" className="mb-12 text-center text-3xl font-bold">
          Upcoming Events
        </Title2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              <CardPreview>
                <Image
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
              </CardPreview>
              <CardHeader
                header={
                  <Body1 weight="semibold" className="text-lg">
                    {event.title}
                  </Body1>
                }
                description={
                  <Body1 className="text-sm text-gray-500">{event.date}</Body1>
                }
              />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default UpcomingEvents;
