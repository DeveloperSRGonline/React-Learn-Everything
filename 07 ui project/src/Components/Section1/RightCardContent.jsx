import { ArrowRight } from "lucide-react";
const RightCardContent = ({ users, id }) => {
  console.log(users.color); // color is comming but how to give it to button down below
  return (
    <div className="absolute top-0 left-0 h-full w-full  p-10 flex flex-col justify-between">
      <h2 className="bg-white text-xl rounded-full h-12 w-12 flex justify-center items-center">
        {id + 1}
      </h2>
      <div>
        <p className="text-l leading-relaxed text-white mb-14">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
          possimus natus sint ab sequi adipisci.
        </p>
        <div className="flex items-center justify-between">
          <button
            style={{
              backgroundColor: users.color,
            }}
            className="text-white font-medium px-8 py-2 rounded-full text-lg"
          >
            {users.tag}
          </button>
          <button
            style={{
              backgroundColor: users.color,
            }}
            className="bg-blue-600 text-white font-medium px-2 py-2 rounded-full text-lg"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
