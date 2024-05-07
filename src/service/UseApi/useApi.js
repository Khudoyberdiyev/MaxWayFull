import api from "../axios";


const useApi = {
    getFoods: () => api.get('/foods'),
}

export default useApi;