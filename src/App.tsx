import "./App.css";

// ShadCN Components.
import { Button } from "./components/ui/button";

// Components.
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="flex max-h-screen min-h-screen w-full">
      <Navbar />
      <div className="w-full p-4">
        <div className="">
          <h2 className="font-josefin text-2xl font-bold">Hello Chirag!</h2>
          {/*<h3 className="text-2xl font-bold font-josefin">
            Welcome to SandboxGPT,
          </h3>*/}
          <p className="font-mono text-sm">How can I help you today?</p>

          <Button className="">Click Me</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
