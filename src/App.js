import { ReactFlowProvider } from "reactflow";
import FlowWithProvider from "./components/FlowWithProvider";

const App = () => {
  return (
    // main cont
    <div className="flex flex-col w-full min-h-screen">
      {/* navbar */}
      <nav className="flex flex-row w-full h-[50px] justify-start items-center pl-8 bg-blue-400 shadow gap-4">
        <h1 className="text-white font-medium">Chat Flow Builder</h1>
      </nav>
      {/* flow builder wrapped in the ReactFlowProvider tag */}
      <ReactFlowProvider>
        <FlowWithProvider />
      </ReactFlowProvider>
    </div>
  );
};

export default App;
