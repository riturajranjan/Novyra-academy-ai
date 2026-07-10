import React from "react";

const GridHome = () => {
  return (
    <div className="fixed inset-0 z-[-1]">
      <div className="absolute inset-0 grid-overlay"></div>
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#c0c1ff1a] blur-[150px] rounded-full"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-[#4cd7f60d] blur-[120px] rounded-full"></div>
    </div>
  );
};

export default GridHome;
