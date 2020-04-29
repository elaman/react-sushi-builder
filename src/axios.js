import axios from "axios";

const instance = axios.create();
instance.defaults.baseURL = "https://sushi-builder.firebaseio.com";

export default instance;
