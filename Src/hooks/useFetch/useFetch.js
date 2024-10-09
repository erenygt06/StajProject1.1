import {useEffect, useState} from 'react';
import axios from 'axios';
function useFetch(url) {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, seterror] = useState(null);
  const fetchData = async () => {
    try {
      const {data:responseData} = await axios.get(url);
      setdata(responseData);
      setLoading(false);
    } catch (err) {
      seterror(err.message);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return{error,loading,data};
}
export default useFetch;
