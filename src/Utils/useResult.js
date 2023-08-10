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
    const [sortSelected, setSortSelected] = useState()
    const [filter, setFilter] = useState()
    const [filterCategory, setFilterCategory] = useState()
    
 
  const getData = useCallback(async () => {
    const {limit, offset} = fetchConfig
    await Header_api.search(searchId, {limit, offset, sort: sortSelected, filter})
      .then((response) => {
        const { data } = response;
        setDataResult(data);
        setTotalData(data?.paging?.total)
      })
      .catch((error) => console.log("error", error));
  }, [fetchConfig, searchId, sortSelected, filter]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getDataByCategory = useCallback(async () => {
    if (dataResult) {
      const category = Object.values(dataResult.filters)?.filter((item)=> item.id === 'category' )
      const categoryID = category[0].values[0].id

      await Header_api.searchResultCategory(categoryID)
      .then((response) => {
        const { data } = response;
        console.log('data', data)
        setFilterCategory(data.available_filters);
      })
      .catch((error) => console.log("error", error));
    }

  }, [dataResult])


  useEffect(() => {
    getDataByCategory();
  }, [getDataByCategory]);
  
    return {
        dataResult,
        setFetchConfig,
        fetchConfig,
        totalData,
        setSortSelected,
        setFilter,
        getData,
        sortSelected,
        filter, 
        filterCategory
    }
}    