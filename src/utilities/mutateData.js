import axios from 'axios';
import {
   useMutation
 } from 'react-query'
import { API_URL } from './urlConstants';

const useMutateData = (param) => {
    const {isLoading, error, data, mutate} = useMutation(async (body) => {
     const {data:{data}} = await axios.post(`${API_URL + param}`, body, {
       headers: {
            'Content-Type': 'multipart/form-data'
            },
     })
     return data;
   })
    
    return {isLoading, error, data, mutate };
}

export default useMutateData;