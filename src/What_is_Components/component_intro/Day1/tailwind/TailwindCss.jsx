import React from "react";

const TailwindCss = () => {
  return (
    <div className="h-[100vh] w-[100vw] flex bg-slate-50 flex-col">
      <div className="h-auto w-auto">
        <nav className="w-full bg-gray-800 h-[5vh] flex justify-between text-white font-thin">
          <div className="flex justify-items-start gap-3 pl-12">
            <div>File</div>
            <div>Edit</div>
            <div>Selection</div>
            <div>View</div>
            <div>Go</div>
            <div>Run</div>
            <div>Terminal</div>
            <div>Help</div>
          </div>
          <div>TailwindCss.jsx-react_project_one-Visual Studio Code</div>
          <div className="flex justify-items-end gap-1 pr-3">
            <div>copilot</div>
            <div>C Layout</div>
            <div>P Side</div>
            <div>Toggle</div>
            <div>S Side</div>
          </div>
        </nav>
        <div className="w-full h-[6vh] bg-gray-700"></div>
      </div>

      <div className="flex h-auto w-auto]">
        <div className="flex">
          <aside className="w-[5vw] h-[89vh] bg-gray-800 flex flex-col text-white font-thin pl-3 pt-2 justify-between">
            <div className="flex justify-items-start gap-3 flex-col">
              <div>Explo</div>
              <div>Search</div>
              <div>Scon</div>
              <div>Exten</div>
            </div>
            <div className="flex justify-items-end flex-col gap-3 pb-12">
              <div>Acc</div>
              <div>Sett</div>
            </div>
          </aside>
          <aside className="w-[20vw] h-[89vh] bg-gray-900 text-gray-300  flex flex-col gap-12">
            <div className="pl-4 font-thin">EXPLORER</div>
            <div className="pl-4 font-semibold"><h3>REACT_PROJECT</h3></div>
          </aside>
        </div>
        <div>
          <main className="h-[65vh] w-[75vw] bg-gray-950"></main>
          <div className="h-[24vh] bg-slate-950 border-t-[1px] border-gray-500 flex align-top">
            <div className="h-[3vh] bg-gray-900 text-gray-500 w-[75vw] justify-items-start flex gap-3 text-xs">
              <div>PROBLEM</div>
              <div>OUTPUT</div>
              <div>DEBUGCONSOLE</div>
              <div className="underline decoration-yellow-200">TERMINAL</div>
              <div>PORTS</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TailwindCss;
