import DuRequest from "./request";
import { BASE_URL, TIME_OUT } from "./config";

const duRequest = new DuRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export default duRequest