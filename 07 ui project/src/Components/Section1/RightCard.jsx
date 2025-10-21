import RightCardContent from "./RightCardContent";

const RightCard = ({users,id}) => {
  console.log(users)
  return (
    <div className="h-full shrink-0 w-80 rounded-4xl overflow-hidden relative">
      <img
        className="h-full w-full object-cover"
        src={users.img}
        alt=""
      />
      <RightCardContent id={id} users={users} />
    </div>
  );
};

export default RightCard;
