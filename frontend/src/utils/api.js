import axios from "axios";

//comunicate with backend api
export default axios.create({
    baseURL:'http://localhost:5000',

})

