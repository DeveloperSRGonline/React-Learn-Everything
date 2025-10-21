import Navbar from "./Navbar"
import Page1Content from "./Page1Content";


const Section1 = ({users}) => {
  console.log(users)
  return <div className="h-screen w-full ">
    <Navbar />
    <Page1Content users={users} />
  </div>;
};

export default Section1;
