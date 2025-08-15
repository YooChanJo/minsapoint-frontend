import axios from "axios";
import { Platform } from "react-native";

/* Such url should all be cleaned up as one file in deployment and modified */
/* in config deep-linking there is also frontend links to be cleaned up */
function parseAPIRequestURL(url: string) {
  // later on replace this defaultPrefix with backend deployed host(including port)
  const defaultPrefix =
    Platform.OS === "android"
      ? "http://10.0.2.2:3000" // only for emulator use
      : "http://localhost:3000";
  /* /api would be mapped to http://localhost:3000/api in web dev and https://minsapoint_backend_deploy/api in deploy */
  return url.startsWith("/") ? defaultPrefix + url : url;
}

interface AxiosConfigType {
  headers?: {
    // if headers section exist it must be such
    Authorization?: string; // if Authorization exists it must be a string
    [key: string]: any;
  };
  [key: string]: any; // any other property allowed
}

const HTTPRequestAPI: {
  normal: { get: Function; post: Function };
  private: { get: Function; post: Function };
} = {
  normal: {
    get: (url: string, config?: AxiosConfigType) => axios.get(parseAPIRequestURL(url), config),
    post: (url: string, data: any, config?: AxiosConfigType) =>
      axios.post(parseAPIRequestURL(url), data, config),
  },
  /* Use private if jwt authentication is needed */
  private: {
    get: (url: string, accessToken: string, config?: AxiosConfigType) => {
      if (config) {
        if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
        else config.headers = { Authorization: `Bearer ${accessToken}` };
        return axios.get(parseAPIRequestURL(url), config);
      } else
        return axios.get(parseAPIRequestURL(url), {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
    },
    post: (url: string, data: any, accessToken: string, config?: AxiosConfigType) => {
      if (config) {
        if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
        else config.headers = { Authorization: `Bearer ${accessToken}` };
        return axios.post(parseAPIRequestURL(url), data, config);
      } else
        return axios.post(parseAPIRequestURL(url), data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        });
    },
  },
};

export default HTTPRequestAPI;
