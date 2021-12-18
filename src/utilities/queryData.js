import axios from 'axios';
import {
   useQuery,
 } from 'react-query'
import { API_URL } from './urlConstants';

const useQueryData = (param) => {
    const { isLoading, error, data } = useQuery(param, async () =>
        {
            const {data: {data}} = await axios.get(`${API_URL + param}`)
            return data;
        }
    );
    return {isLoading, error, data };
}

export default useQueryData;