import React from "react";
import { FadeLoader, BarLoader } from "react-spinners";

const Loader = ({ loading, spinner = "scale",color="FCB53B" }) => {
  return (
    <div className="text-center" suppressHydrationWarning>
      {spinner === "scale" && (
        <BarLoader
          color={`#${color}`}
          loading={loading}
          height={8}
          width={100}
          margin={2}
        />
      )}
      {spinner === "fade" && <FadeLoader loading={loading} color="#FCB53B" />}
    </div>
  );
};

export default Loader;
