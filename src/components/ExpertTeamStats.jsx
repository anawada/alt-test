import CalendarIcon from '../assets/icons/business-years.svg';
import SupportIcon from '../assets/icons/on-site-support.svg';
import TeamIcon from '../assets/icons/expert-team-members.svg';
import ContractIcon from '../assets/icons/live-contracts.svg';
import TrainingIcon from '../assets/icons/guided-training.svg';
import AccreditationIcon from '../assets/icons/accreditations.svg';

function ExpertTeamStats() {
  const stats = [
    {
      id: 1,
      icon: CalendarIcon,
      title: "Business years",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    },
    {
      id: 2,
      icon: SupportIcon,
      title: "On-site support",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    },
    {
      id: 3,
      icon: TeamIcon,
      title: "Expert team members",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    },
    {
      id: 4,
      icon: ContractIcon,
      title: "Live contracts",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    },
    {
      id: 5,
      icon: TrainingIcon,
      title: "Guided training",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    },
    {
      id: 6,
      icon: AccreditationIcon,
      title: "Accreditations & awards",
      description: "Lorem ipsum dolor sit amet consectetur. Etiam sem netus tellus."
    }
  ];

  return (
    <div className="py-10 md:py-18 lg:py-24 px-10 md:px-35 bg-white">
      <div className="container">
        <div className="px-10 lg:px-80">
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-16">
            A team of accredited experts
            that support you
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <img src={stat.icon} alt={stat.title} className="h-16 w-16" />
              </div>
              <h3 className="text-xl font-bold mb-2">{stat.title}</h3>
              <div className="px-10 lg:px-20">
                <p className="text-gray-600 font-mono text-xs">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpertTeamStats; 