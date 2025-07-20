import { useEffect, useState } from "react";

export default function TypingWelcome() {
  const text = "Welcome to Storelando!";
  const [showText, setShowText] = useState("");
  const speed = 70;

  useEffect(() => {
    let i = 0;
    let timeoutId;

    function type() {
      if (i < text.length) {
        setShowText(text.substring(0, i + 1));
        i++;
        timeoutId = setTimeout(type, speed);
      }
    }

    type();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div>
      <h1 className=" text-sky-600 mx-auto text-center text-4xl font-bold mb-12 mt-12">
        {showText}
      </h1>
    </div>
  );
}
