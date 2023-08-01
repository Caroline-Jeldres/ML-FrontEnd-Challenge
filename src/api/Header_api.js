import request from "../Utils/request";
const search = (q, {limit, offset}) => {
    return request({
        url: '/sites/MLC/search',
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
        },
        params: {q, limit, offset}
      })
      
}

const Header_api = {
    search
  }
  
  export default Header_api