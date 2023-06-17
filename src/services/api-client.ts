import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params:{
        key: '8a00a088d57e476193153a3760775eb3'
    }
}
)