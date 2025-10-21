
import RightCard from "./RightCard";

const RightContent = ({ users }) => {
 
  const renderCards = users.map((data,index) => {
    return <RightCard id={index} key={index} users={data} />
  })
  return (
    <div id="right" className="h-full p-6 w-2/3 overflow-auto flex flex-nowrap gap-10">
      {renderCards}
    </div>
  );
};

export default RightContent;
