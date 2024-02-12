import "./loading.css";
import Logo from "../imgs/necron-3d.png";
import { useEffect, useState } from "react";

const Loading = () => {
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const loadingLong = window.setTimeout(() => {
      setIsError(true);
    }, 30000);
    return () => {
      window.clearTimeout(loadingLong);
    };
  }, []);
  return (
    <div className="h-screen w-screen flex justify-center items-center flex-col">
      <span className="loading__loader">
        <img
          src={Logo}
          className="object-contain w-[60%] loading__img-animate"
        />
      </span>
      {isError && (
        <div className="text-center mt-4">
          Hmm! It seems stuck
          <br />
          Click{" "}
          <a href="https://discord.gg/nec" className="text-primary underline">
            here
          </a>{" "}
          to contact our support
        </div>
      )}
    </div>
  );
};

export default Loading;
