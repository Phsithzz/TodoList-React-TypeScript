import React, { useState } from "react";
//props interface
interface Props {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<Props> = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) {
      return alert("Please Enter Your Task");
    }
    onAdd(text);
    setText("");
  };

  return (
    <>
      <form className="flex gap-4 justify-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="border border-gray-300 px-4 py-2 rounded-md"
          placeholder="Enter Your Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="text-white font-semibold 
         bg-green-400 transition ease-in hover:bg-green-600
         px-4 py-2 rounded-md cursor-pointer"
        >
          Add
        </button>
      </form>
    </>
  );
};

export default TodoForm;
