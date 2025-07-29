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
import HomeTask from "./HomeTasks/HomeTask";
import UseEffectIntro from "./What_is_Components/Hooks/useEffectHook/UseEffectIntro";
import AxiosIntro from "./What_is_Components/Axios/AxiosIntro";
import HOCIntro from "./What_is_Components/HigherOrderComponent/HOCIntro";
import UseMemoIntro from "./What_is_Components/Hooks/useMemoHook/UseMemoIntro";
import MemoizationIntro from "./What_is_Components/Memoization/MemoizationIntro";
import Loader from "./What_is_Components/Loader";
import RouteIntro from "./What_is_Components/Routing/RouteIntro";
import UseReducerIntro from "./What_is_Components/Hooks/useReducerHook/UseReducerIntro";
import CustomHookIntro from "./What_is_Components/CustomHooks/CustomHookIntro";
import HomePage from "./What_is_Components/ComponentReusability/HomePage";
import ReduxApp from "./ReduxToolkit/ReduxApp";
import Practice from "./Practice50/Practice";



const App = () => {
  // const data = useContext(context);
  // console.log(data);
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
        {/* <div>
          <ContextIntro/>
        </div> */}
        {/* <div>
          <HomeTask/>
        </div> */}
        {/* <div>
          <UseEffectIntro/>
        </div> */}
        {/* <div>
          <AxiosIntro/>
        </div> */}
         {/* <div>
          <HOCIntro/>
        </div> */}
        {/* <div>
          <UseMemoIntro/>
        </div> */}
        
        {/* <div> */}
          {/* <Loader/> */}
          {/* <MemoizationIntro/> */}
        {/* </div> */}
        {/* <div>
          <RouteIntro/>
        </div> */}
        {/* <div>
          <UseReducerIntro/>
        </div> */}

        {/* <div>
          <CustomHookIntro/>
        </div> */}
        {/* <div>
          <HomePage/>
        </div> */}
        {/* <div>
          <ReduxApp/>
        </div> */}
        <div>
          <Practice/>
        </div>
      </div>
    );
  }

export default App