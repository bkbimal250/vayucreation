import { FaProjectDiagram, FaClock, FaUsers, FaUserTie } from 'react-icons/fa';

const StatCard = ({ stat }) => {
  const getIcon = (iconType) => {
    const iconClass = "text-5xl text-primary";
    switch (iconType) {
      case 'projects':
        return <FaProjectDiagram className={iconClass} />;
      case 'experience':
        return <FaClock className={iconClass} />;
      case 'clients':
        return <FaUsers className={iconClass} />;
      case 'team':
        return <FaUserTie className={iconClass} />;
      default:
        return <FaProjectDiagram className={iconClass} />;
    }
  };

  return (
    <div className="text-center p-6 md:p-8">
      <div className="mb-4 flex justify-center">
        {getIcon(stat.icon)}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
        {stat.number}
      </div>
      <div className="text-gray-600 font-medium">{stat.label}</div>
    </div>
  );
};

export default StatCard;

