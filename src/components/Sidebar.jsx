import React from "react";

export default function Sidebar({
  nodeText,
  setNodeText,
  selectedNode,
  setSelectedElements,
}) {
  const handleInputChange = (event) => {
    setNodeText(event.target.value);
  };

  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData("application/reactflow", nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside className="border-l-2 border-gray-400 p-4 text-sm bg-gray-100 w-64 h-screen text-black shadow-lg">
      {selectedNode ? (
        <div>
          <div className="flex flex-row gap-4 items-center justify-start mb-5">
          
          <button
            className=" flex p-2 rounded bg-gray-500 text-white  hover:bg-gray-600"
            onClick={() => setSelectedElements([])}
          >
            Back
          </button>
          <h3 className="flex text-xl mb-2 text-blue-500">Update Node</h3>
          </div>
          
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900">Node Text:</label>
              <input
                type="text"
                className="block w-full pt-2 px-3 pb-3 text-gray-700 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-gray-500"
                value={nodeText}
                onChange={handleInputChange}
              />
            </div>
          
        </div>
      ) : (
        <>
          <h3 className="text-xl mb-4 text-blue-900">Nodes Panel</h3>
          <div
            className="bg-white p-3 border-2 border-gray-500 rounded cursor-move flex justify-center items-center text-gray-500 hover:bg-gray-500 hover:text-white transition-colors duration-200"
            onDragStart={(event) => onDragStart(event, "textnode")}
            draggable
          >
            Message Node
          </div>
        </>
      )}
    </aside>
  );
}
