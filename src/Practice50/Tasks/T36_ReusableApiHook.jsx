import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../../What_is_Components/Loader';

const useApiFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    axios.get(url)
      .then((res) => setData(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));

  }, [url]);

  return { data, loading, error };
};

const T36_ReusableApiHook = () => {
  const { data, loading, error } = useApiFetch('https://official-joke-api.appspot.com/random_joke');

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow w-full max-w-md">
        <h1 className="text-xl font-bold mb-4 text-center">API Fetch Hook</h1>

        {loading && <div className="text-blue-500 text-center"><Loader/></div>}
        {error && <p className="text-red-500 text-center">Error : {error}</p>}

        {data && (
          <div className="flex gap-2">
            <h2 className="text-lg font-semibold">{data.title}</h2>
            <p>{data.body}</p>
            <p className="text-sm text-gray-500">ID : {data.id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default T36_ReusableApiHook;
