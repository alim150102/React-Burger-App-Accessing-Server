import Axios from "axios";

const instance = Axios.create({
    baseURL : `https://react-burger-app-f382d.firebaseio.com/`
})

export default instance