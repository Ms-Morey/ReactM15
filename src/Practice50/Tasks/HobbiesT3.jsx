
const HobbiesT3 = ({ hobbies }) => {
  // console.log(hobbies);

  return (
    <div>
      <ul className="list-disc pl-5 space-y-2">
        {hobbies.map((val, i) => (
          <li className="p-3 font-semibold" key={i}>
            {val}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HobbiesT3;
