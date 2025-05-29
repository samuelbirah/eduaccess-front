import { LucideIcon } from "lucide-react";

type StatCardProps = {
  icon: LucideIcon;
  label: string;
  value: number | string;
  color?: string;
};

const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value, color = "bg-blue-500" }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 flex items-center gap-4 border">
      <div className={`p-3 rounded-full text-white ${color}`}>
        <Icon size={24} />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;
