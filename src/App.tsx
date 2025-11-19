import "./App.css";

// ShadCN Components.
import { Button } from "./components/ui/button";

// Components.
import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 pt-24">
        <div className="">
          <h2 className="text-2xl font-bold font-josefin">Hello Chirag!</h2>
          {/*<h3 className="text-2xl font-bold font-josefin">
            Welcome to SandboxGPT,
          </h3>*/}
          <p className="text-sm font-mono">How can I help you today?</p>

          <Button variant={"outline"} className="font-mono font-medium">
            Click Me
          </Button>
        </div>
      </div>
    </>
  );
}

export default App;
