import React from "react";
import UseStateTask1 from "./Tasks/UseStateTask1";
import UsetStateTask2 from "./Tasks/UsetStateTask2";
import UseStateTask3 from "./Tasks/UseStateTask3";
import UseStateTask4 from "./Tasks/UseStateTask4";
import UseStateTask5 from "./Tasks/UseStateTask5";
import UseStateTask6 from "./Tasks/UseStateTask6";
import UseStateTask7 from "./Tasks/UseStateTask7";
import UseStateTask8 from "./Tasks/UseStateTask8";
import UseStateTask9 from "./Tasks/UseStateTask9";
import UseStateTask10 from "./Tasks/UseStateTask10";
import UseStateTask11 from "./Tasks/UseStateTask11";

const UseStateIntro = () => {
  return (
    <>
      {/* <div>
        <UseStateTask1 />
      </div> */}

      {/* <div>
        <UsetStateTask2 />
      </div> */}

      {/* <div>
        <UseStateTask3/>
      </div> */}

      {/* <div>
        <UseStateTask4/>
      </div> */}

      {/* //!dark/light mode */}
      {/* <div>
        <UseStateTask5 />
      </div> */}

      {/* <div>
        <UseStateTask6/>
      </div> */}

      {/* <div>
        <UseStateTask7/>
      </div> */}

      {/* <div>
        <UseStateTask8 />
      </div> */}

      {/* <div>
        <UseStateTask9 />
      </div> */}

      {/* <div>
        <UseStateTask10/>
      </div> */}

    </>
  );
};

export default UseStateIntro;

//What is useState Hook ?

// useState() is a inbuild hook in react which allows you to create and manage the state in function based component.
//const [state, setState] = useState(0);

//Difference betweeen state and props.

// Features                   Props                           State
// Mutability              Immutable                    Mutable using setState()
// Passed from             Parent Component             Inside a Component
// Purpose                 pass data                    Hold data that changes
// Managed by              Parent                       Component itself
// 
// Can Change              YES it'll re-render the      It'll re-render if there is change in the state.
//                          child component if there 
//                          is change in the props.
//
//
