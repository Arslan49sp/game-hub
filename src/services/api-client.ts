import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: 'a6b81d50a3f0401c82252ccbcfbec903'
    }
})