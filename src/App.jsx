// import Greeting from "./Components/Greeting";
// import PersonalBio from "./Components/PersonalBio";
// import SimpleCounter from "./Components/SimpleCounter";
// import HobbiesList from "./Components/HobbiesList";
// import ProfileCard from "./Components/ProfileCard";
// import TemperatureDisplay from "./Components/TemperatureDisplay";
// import SimpleCalculator from "./Components/SimpleCalculator";
// import UserAvatar from "./Components/UserAvatar";
// import vtsimage from "./assets/vtsimage.jpg";
// import WelcomeMessage from "./Components/WelcomeMessage";
// import ClickCounter from "./Components/ClickCounter";
// import ShowHideText from "./Components/ShowHideText";
// import Timer from "./Components/Timer";
// function App() {
//   const myHobbies = ["Reading", "Drawing", "Coding"];

//   return (
//     <div>
//       <Greeting name="Nithya" />

//       <SimpleCounter />

//       <PersonalBio
//         name="Nithya"
//         age={28}
//         bio="I love coding React web apps!"
//       />

//       <HobbiesList hobbies={myHobbies} />

//       <ProfileCard
//         name="Nithya M"
//         age={28}
//         location="Krishnagiri, TamilNadu"
//       />

//       <TemperatureDisplay temperature={35} />  {/* Hot */}
//       <TemperatureDisplay temperature={10} />  {/* Cold */}
//       <TemperatureDisplay temperature={22} />  {/* Normal */}
//       <SimpleCalculator num1={10} num2={20} />
//       <SimpleCalculator num1={5} num2={7} />
//       <UserAvatar
//         url={vtsimage}
//         alt="Vtsimage"
//         caption="Vts Image"
//       />
//       <WelcomeMessage />
//       <ClickCounter />
//       <ShowHideText isVisible={true} />   {/* Shows the text */}
//       <ShowHideText isVisible={false} />  {/* Hides the text */}
//       <Timer />
//     </div>
//   );
// }

// export default App;

// import Profile from "./Components/Profile.jsx";
// import TaskList from "./Components/TaskList.jsx";
// import ColorText from "./Components/ColorText.jsx";
// import ClickCounter from "./Components/Click.jsx";
// import StudentList from "./Components/StudentList";
// import TaskManager from "./Components/TaskManager";
// import GreetingMessage from "./Components/GreetingMessage";
// import NumberFilter from "./Components/NumberFilter";

// function App() {
//   const tasks = ["Wake up", "Study React", "Complete Homework"];

//   const handleButtonClick = () => {
//     console.log("Button Clicked");
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1> Day 4 Mini Projects</h1>

//       {/* Mini Project 1: Profile Card */}
//       <Profile name="Nithya" age={29} city="Krishnagiri" />

//       {/* Mini Project 2: Task List */}
//       <h2>My Tasks</h2>
//       <TaskList tasks={tasks} />

//       {/* Mini Project 3: Colorful Text */}
//       <ColorText text="This is colorful text!" color="tomato" />

//       {/* Mini Project 4: Click Counter */}
//       <ClickCounter onClick={handleButtonClick} />
      
//        <h1>Day 5 Mini Projects</h1>

//       <StudentList />
//       <hr />

//       <TaskManager />
//       <hr />

//       <GreetingMessage />
//       <hr />

//       <NumberFilter />
//       <hr />
      
    
//     </div>
//   );
// }

// export default App;




// import NoteOnProps from "./Components/NoteOnProps";
// import SimpleText from "./Components/SimpleText";
// import MultipleProps from "./Components/MultipleProps";
// import DestructureProps from "./Components/DestructureProps";
// import BooleanProp from "./Components/BooleanProps";
// import DefaultProps from "./Components/DefaultProps";
// import HobbiesList from "./Components/HobbiesList";
// import UserObject from "./Components/UserObject";
// import ConditionalWelcome from "./Components/ConditionalWelcome";
// import ColorText from "./Components/ColorText";
// import ButtonWithProp from "./Components/ButtonWithProps";
// import Card from "./Components/Card";
// import Parent from "./Components/Parent";

// export default function App() {
//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Day4 tasks</h1>
//       <NoteOnProps />

//       <SimpleText message="Hello from Props!" />

//       <MultipleProps name="Suresh" age={22} />

//       <DestructureProps name="Rahul" city="Chennai" />

//       <BooleanProp isStudent={true} />

//       <DefaultProps />

//       <HobbiesList hobbies={["Reading", "Gaming", "Coding"]} />

//       <UserObject
//         user={{
//           name: "Nithya",
//           email: "msnithyagri@gmail.com",
//           phone: "9876543210",
//         }}
//       />

//       <ConditionalWelcome name="Suresh" />

//       <ColorText text="This is colorful text" color="blue" />

//       <ButtonWithProp showMessage={() => alert("Button clicked!")} />

//       <Card title="Card Title" description="This is a reusable card." />

//       <Parent />
//     </div>
//   );
// }
import Counter from "./Components/Counter.jsx";
import NameDisplay from "./Components/NameDisplay.jsx";
import TaskList from "./Components/TaskList.jsx";
import LightToggle from "./Components/LightToggle.jsx";
import WhatIsState from "./Components/WhatIsState.jsx";
import StateVsProps from "./Components/StateVsProps.jsx";
import CounterBasic from "./Components/CounterBasic.jsx";
import CounterIncrement from "./Components/CounterIncrement.jsx";
import NameState from "./Components/NameState.jsx";
import TwoStates from "./Components/TwoStates.jsx";
import ToggleBoolean from "./Components/ToggleBoolean.jsx";
import InputWithState from "./Components/InputWithState.jsx";
import CounterReset from "./Components/CounterReset.jsx";
import TaskArray from "./Components/TaskArray.jsx";
import AddItem from "./Components/AddItem.jsx";
import RemoveItem from "./Components/RemoveItem.jsx";
import ConditionalTasks from "./Components/ConditionalTasks.jsx";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Day 6 Mini Projects</h1>

      <Counter />
      <NameDisplay />
      <TaskList />
      <LightToggle />
        <h1>Day 6 Tasks</h1>

      <WhatIsState />
      <StateVsProps />
      <CounterBasic />
      <CounterIncrement />
      <NameState />
      <TwoStates />
      <ToggleBoolean />
      <InputWithState />
      <CounterReset />
      <TaskArray />
      <AddItem />
      <RemoveItem />
      <ConditionalTasks />
    </div>
  );
}

export default App;


