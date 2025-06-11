import React from "react";

interface text {
  children: React.ReactNode;
}

export default function Inputradio({ children }: text) {
  return (
    <div className="space-x-3 flex">
      <input type="radio" name="Query" className="scale-125 ml-10" />;
      <h2 className="font-bold text-gray-400">{children}</h2>
    </div>
  );
}
