import {
  FactoryIcon,
  FanIcon,
  FastForwardIcon,
  FeatherIcon,
  FileAudio,
} from "lucide-react";

const MetadataCard = ({ icon, label, value }) => {
  const IconComponent = {
    "id-card": FanIcon,
    code: FactoryIcon,
    expand: FeatherIcon,
    folder: FastForwardIcon,
    "user-tie": FileAudio,
  }[icon];

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-52 flex flex-col items-center ">
      <IconComponent className="text-green-600 mb-2" size={35} />
      <h3 className="font-bold text-gray-800 text-center">{label}</h3>
      <p className="text-gray-600 text-center">{value}</p>
    </div>
  );
};

export default MetadataCard;
