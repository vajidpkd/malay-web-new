import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://malaya.profitoneerp.com/index.php/Admin/",
});


export { axiosInstance };
