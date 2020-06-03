import axios from "axios";

export default axios.create({
  baseURL: "https://apistudentexchange.azurewebsites.net/",
  responseType: "json"
});

