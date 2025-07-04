import Hoc1 from "./Hoc1";
import Cbc1 from "./Cbc1";

let ReturenedComponent = Hoc1(Cbc1);

const HOCTask1 = () => {
  return (
    <div>
      <ReturenedComponent />
    </div>
  );
};

export default HOCTask1;
