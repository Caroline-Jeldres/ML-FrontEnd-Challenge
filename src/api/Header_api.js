import request from "../Utils/request";
const search = (q, {limit, offset, sort, filter}) => {
    return request({
        url: '/sites/MLC/search',
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        params: {q, limit, offset, sort, filter}
      })
      
}
const searchResultCategory = (category) => {
  return request({
      url: '/sites/MLC/search',
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
      params: {category}
    })
    
}


const Header_api = {
    search,
    searchResultCategory
  }
  
  export default Header_api