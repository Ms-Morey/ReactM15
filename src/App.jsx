import { useContext } from "react";
import HooksIntro from "./What_is_Components/Hooks/HooksIntro";
import TailwindCss from "./What_is_Components/component_intro/Day1/tailwind/TailwindCss";
import PropsIntro from "./What_is_Components/props/PropsIntro";
import EventsIntro from "./What_is_Components/event_handling/EventsIntro";
import BootStrapIntro from "./What_is_Components/Bootstrap/BootStrapIntro";
import CrudIntro from "./What_is_Components/crud/CrudIntro";
import Crud from "./What_is_Components/crud/Crud";
import ContextIntro from "./What_is_Components/ContextAPI/ContextIntro";
import { context } from "./What_is_Components/ContextAPI/SubComponents/Store";



const App = () => {
  const data = useContext(context);
  console.log(data);
    return (
      <div>
        {/* jsx Introduction and rules ! */}
        {/* <div>
          <ComponentIntro />
        </div> */}

        {/* ! ALL HOOKS */}
        {/* <div>
          <HooksIntro />
        </div> */}

        {/* <div>
          <TailwindCss/>
        </div> */}

        {/* <div>
         <PropsIntro/>
        </div> */}

        {/* <div>
          <EventsIntro/>
        </div> */}
        {/* <div>
          <BootStrapIntro/>
        </div> */}

        {/* <div>
          <CrudIntro/>
        </div> */}
        {/* <div>
          <Crud/>
        </div> */}
        <div>
          <ContextIntro/>
        </div>
      </div>
    );
  }

export default App