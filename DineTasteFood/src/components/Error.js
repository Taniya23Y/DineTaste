import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  const [animationClass, setAnimationClass] = useState("");

  useEffect(() => {
    // Add animation class after component mounts
    setAnimationClass("animate-bounce");

    // Clear animation class after 2 seconds
    const timeout = setTimeout(() => {
      setAnimationClass("");
    }, 2000);

    // Clear the timeout when the component unmounts
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="container mx-auto flex justify-center items-center h-screen bg-gradient-to-br from-pink-500 to-purple-500">
      <div className={`bg-white rounded-lg shadow-md p-8 ${animationClass}`}>
        <h1 className="text-4xl font-bold text-pink-500 mb-4">Uh-oh!</h1>
        <h2 className="text-2xl font-semibold text-purple-800 mb-2">
          Something went wrong...
        </h2>
        <h3 className="text-lg text-gray-600 mb-4">
          Error {err.status}: {err.statusText}
        </h3>
        <p className="text-gray-700">Don't worry, working on fixing it!</p>
      </div>
    </div>
  );
};

export default Error;
