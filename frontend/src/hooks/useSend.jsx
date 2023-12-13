import { useState } from 'react';
import axios from 'axios';

const useSend = (url) => {
 const [response, setResponse] = useState(null);
 const [error, setError] = useState(null);

 const sendData = async (data) => {
   try {
     const res = await axios.post(url, data);
     setResponse(res.data);
   } catch (err) {
     setError(err.response.data.error);
   }
 };

 return { response, error, sendData };
};

export default useSend;
