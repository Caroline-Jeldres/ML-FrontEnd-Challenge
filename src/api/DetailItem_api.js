import request from "../Utils/request";
const detailProduct = (id) => {
    return request({
        url: `/items/${id}`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      })
      
}

const description = (id) => {
    return request({
        url: `/items/${id}/description`,
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        }
      })
      
}



const DetailsItem_api = {
    detailProduct,
    description
  }
  
  export default DetailsItem_api