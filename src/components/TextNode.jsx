import React from "react";
import { Handle, Position } from "reactflow";

function TextNode({ data, selected }) {
  return (
    <div
      className={`w-40 shadow rounded-md bg-white   ${
        selected ? "border-solid border-2 border-purple-400" : ""
      } `}
    >
      <div className="flex flex-col">
        <div className="max-h-max px-2 py-1 text-left text-black text-xs rounded-t-md bg-teal-600">
          ✉️ send message
        </div>
        <div className="px-3 py-2 ">
          <div className="text-[10px]">
            {data.text ?? "Text Node"}
          </div>
        </div>
      </div>

      <Handle
        id="a"
        type="target"
        position={Position.Left}
        className="w-1 rounded-full bg-black"
      />
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        className="w-1 rounded-full bg-black"
      />
    </div>
  );
}

export default TextNode;