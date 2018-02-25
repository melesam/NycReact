import axios from "axios";

export default {
    getNYTSearch: () => {
        return axios.get("/api/nytimes");
    }
}
