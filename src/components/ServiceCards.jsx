import computerIcon from "../assets/icons/computer.svg";
import printerIcon from "../assets/icons/printer.svg";
import documentIcon from "../assets/icons/document.svg";
import communicationIcon from "../assets/icons/communication.svg";

function ServiceCards() {
  // Define your cards with their specific styles
  const cards = [
    {
      id: 1,
      title: "IT Services",
      description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
      icon: computerIcon,
      style: {
        card: "bg-brand text-white",
        heading: "text-white",
        link: "text-white"
      },
      href: "/services/it"
    },
    {
      id: 2,
      title: "Managed Print Services",
      description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
      icon: printerIcon,
      style: {
        card: "bg-white text-gray-800",
        heading: "text-brand",
        link: "text-brand"
      },
      href: "/services/print"
    },
    {
      id: 3,
      title: "Document Management",
      description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
      icon: documentIcon,
      style: {
        card: "bg-white text-gray-800",
        heading: "text-brand",
        link: "text-brand"
      },
      href: "/services/document"
    },
    {
      id: 4,
      title: "Communication",
      description: "Recognising your frustrations with your print environment, IT services, document management & communications and finding a solution to overcome them.",
      icon: communicationIcon,
      style: {
        card: "bg-white text-gray-800",
        heading: "text-brand",
        link: "text-brand"
      },
      href: "/services/communication"
    }
  ];

  return (
    <div className="container relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-20">
        {cards.map(card => (
          <a 
            key={card.id}
            href={card.href}
            className={`rounded-lg p-7 shadow-lg text-center flex flex-col h-full ${card.style.card} transition-all hover:shadow-xl cursor-pointer`}
          >
            <div className="flex justify-center mb-2">
              <img src={card.icon} alt={card.title} className="h-13 w-11" />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${card.style.heading}`}>{card.title}</h3>

            <p className="text-xs/6 mb-2 flex-grow">{card.description}</p>
            <div className="mt-auto pb-2">
              <span className={`${card.style.link} text-xs/6 underline underline-offset-3 font-normal`}>Learn More</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
