import { message } from "antd";
import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  timeout: 20000,
});

instance.interceptors.response.use((response) => response, errorHandler);

async function errorHandler(e) {
  if (!e.response) throw e;
  else if (e.response.status === 401 && window.location.pathname !== "/login") {
    message.error(e.response.data.message);
    window.history.pushState(null, "", "../login");
  }
  throw e;
}

function isAxiosError(candidate) {
  return candidate.isAxiosError;
}

export default instance;
export { isAxiosError };
