import "./App.css";
import DemoBtn from "./components/DemoBtn";

function App() {
   const handle = (value) => {
     alert(value);
   };

  return (
    <div className="App">
      <DemoBtn btnName="Gaming" btnColor="red" handle={handle} />
      <DemoBtn btnName="Music" btnColor="green" handle={handle} />
      <DemoBtn btnName="Books" btnColor="pink" handle={handle} />
      <DemoBtn btnName="Sportz" btnColor="yellow" handle={handle} />
      <DemoBtn btnName="Bikes" btnColor="crimson" handle={handle} />
      <DemoBtn btnName="Cars" btnColor="violet" handle={handle} />
    </div>
  );
}

export default App;
