import React from "react";
import { FaPaperPlane } from "react-icons/fa";

function EmailSubmitButton() {
  return (
    <button
      type="submit"
      className="group h-[3rem] w-[8rem] bg-gray-900 dark:bg-white hover:bg-gray-950 text-white rounded-full flex items-center justify-center gap-2 outline-none transition-all 
      focus:scale-110 hover:scale-110 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-opacity-10"
    >
      Submit
      <FaPaperPlane className="text-xs opacity-75 hover:opacity-90 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
    </button>
  );
}

export default EmailSubmitButton;
