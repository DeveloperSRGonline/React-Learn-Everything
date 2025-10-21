import Section1 from "./Components/Section1/Section1";
import Section2 from "./Components/Section2/Section2";

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1610552242876-e75eb7e8aa5a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color:"#386641",
      tag: "Satisfied", 
    },  
    {
      img: "https://images.unsplash.com/photo-1705297602761-b32d899af13c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM5fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color: "#4a4e69",
      tag: "Underserved",
    },
    {
      img: "https://images.unsplash.com/photo-1551137811-4f2fd4d92fcf?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDYwfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color: "#6c584c",
      tag: "Underbanked",
    },
    {
      img: "https://images.unsplash.com/photo-1656697891325-59492d92d542?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDQ2fHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      intro: "",
      color: "#415a77",
      tag: "Unknown",
    },
  ];
  return (
    <div>
      <Section1 users={users}/>
      <Section2 />
    </div>
  );
};

export default App;
