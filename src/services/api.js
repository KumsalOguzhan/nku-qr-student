import axios from "axios";

export default axios.create({
    baseURL: 'http://localhost:62540/api'
})