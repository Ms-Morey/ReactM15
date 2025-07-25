import Loader from '../Loader'

const HomePage = () => {
const colorsArr = [
  "border-blue-600",
  "border-red-600",
  "border-green-600",
  "border-yellow-600",
  "border-cyan-600",
  "border-pink-600",
  "border-indigo-600",
  "border-rose-600",
  "border-teal-600",
  "border-orange-600"
];

const names = [
  "Aarav",
  "Isha",
  "Rohan",
  "Sneha",
  "Kabir",
  "Priya",
  "Aditya",
  "Neha",
  "Kunal",
  "Ananya"
];

 
//  console.log(a)
  return (
    <div className='h-screen flex gap-4 items-center bg-slate-50 flex-wrap'>
        {colorsArr.map((val, i)=>{
            return <div className='bg-slate-200 h-40 w-36 shadow-neutral-900 shadow-md flex gap-2 flex-col items-center justify-center' key={i}>
                <Loader color={colorsArr[Math.floor(Math.random()*10)]}/>
                <h3>{names[i]}</h3>
            </div>
            
        })}
    </div>
  )
}

export default HomePage