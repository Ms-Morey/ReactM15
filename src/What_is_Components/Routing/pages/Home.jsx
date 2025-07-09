import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav className="bg-blue-400 h-[10vh] w-full">
        <Link to='/home'>Home</Link>
        <Link to='/home/about'>About</Link>
        <Link to='/home/contact'>Contact</Link>
        <Link to='/home/help'>Help</Link>

      </nav>
      <div className='flex'>
        <aside className="bg-gray-600  w-[20vw] h-[90vh] "></aside>
          <Outlet/>
      </div>
    </div>
  );
};

export default Home;
