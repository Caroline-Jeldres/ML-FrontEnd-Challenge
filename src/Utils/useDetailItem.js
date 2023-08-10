import { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import DetailsItem_api from '../api/DetailItem_api';

export default function useDetailItem () {
    const { id: itemId } = useParams();
    const [dataDetail, setDataDetail] = useState();
    const [description, setDescription] = useState()
 
  const getData = useCallback(async () => {
    await DetailsItem_api.detailProduct(itemId)
      .then((response) => {
        const { data } = response;
        setDataDetail(data);
      })
      .catch((error) => console.log("error", error));
  }, [itemId]);

  useEffect(() => {
    getData();
  }, [getData]);

  const getDescription = useCallback(async () => {
    await DetailsItem_api.description(itemId)
      .then((response) => {
        const { data } = response;
        setDescription(data.plain_text);
      })
      .catch((error) => console.log("error", error));
  }, [itemId]);

  useEffect(() => {
    getDescription();
  }, [getDescription]);

  
    return {
        dataDetail,
        description
    }
}    