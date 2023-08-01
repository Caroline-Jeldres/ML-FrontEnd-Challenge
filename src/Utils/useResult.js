import { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Header_api from '../api/Header_api';

export default function useResult () {
    const { id: searchId } = useParams();
    const [dataResult, setDataResult] = useState();
    const [totalData, setTotalData]  = useState(0);
    const [fetchConfig, setFetchConfig] = useState({
      limit: 40,
      offset: 0
      
    })
 
  const getData = useCallback(async () => {
    const {limit, offset} = fetchConfig
    await Header_api.search(searchId, {limit, offset})
      .then((response) => {
        const { data } = response;
        setDataResult(data);
        setTotalData(data?.paging?.total)
      })
      .catch((error) => console.log("error", error));
  }, [fetchConfig, searchId]);

  useEffect(() => {
    getData();
  }, [getData]);
  
    return {
        dataResult,
        setFetchConfig,
        fetchConfig,
        totalData
    }
}    