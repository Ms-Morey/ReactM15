import React, { useEffect, useState } from "react";
import Loader from "../../What_is_Components/Loader";
import axios from "axios";

const T23_LoadingData = () => {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const joke = axios.get("https://official-joke-api.appspot.com/random_joke")
                    .then((data)=>{console.log(data)})
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-2xl font-bold mb-4">Data Fetcher</h1>

      {loading ? (
        <Loader/>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-xl font-bold mb-2">{}</h2>
          <p className="text-gray-700">{}</p>
        </div>
      )}
    </div>
  );
};

export default T23_LoadingData;
