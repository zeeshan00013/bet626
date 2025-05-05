import MetadataCard from "./MetadataCard";

const MetadataSection = () => {
  const metadata = [
    { icon: "id-card", label: "Name", value: "BET626" },
    { icon: "code", label: "Version", value: "New Latest" },
    { icon: "expand", label: "Size", value: "5.90" },
    { icon: "folder", label: "Category", value: "Casino/Cards" },
    { icon: "user-tie", label: "Developer", value: "bet626game.cc" },
  ];

  return (
    <div className=" ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 space-x-4">
        {metadata.map((item, index) => (
          <MetadataCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default MetadataSection;
