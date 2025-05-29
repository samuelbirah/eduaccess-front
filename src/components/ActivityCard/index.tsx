type ActivityCardProps = {
  title: string;
  description: string;
  buttonLabel: string;
  buttonColor: string;
  to: string;
};

const ActivityCard: React.FC<ActivityCardProps> = ({
  title,
  description,
  buttonLabel,
  buttonColor,
  to,
}) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg border flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
      <div>
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
      <a
        href={to}
        className={`mt-2 md:mt-0 px-4 py-2 rounded text-white text-sm font-semibold ${buttonColor}`}
      >
        {buttonLabel}
      </a>
    </div>
  );
};

export default ActivityCard;
