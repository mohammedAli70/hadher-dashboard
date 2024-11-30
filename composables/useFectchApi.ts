import { useRuntimeConfig } from "#app";

export function useFetchApi() {
  const baseURL = useRuntimeConfig().public.baseURL;
  // const globalStore = useGlobalStore();

  // const getRequest = async (url = "/", filters = {}) => {        
  //   const token = globalStore.authToken || useCookie("token");
  //   const { data, error, status } = await useFetch(`${baseURL + url}`, {
  //     query: { filters },
  //     headers: {
  //       accept: "*/*",
  //       "Content-type": "application/json",
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  //   let res: any = {};
  //   if (status.value === "success") {
  //     res = data.value;
  //   } else {
  //     res = error.value?.data;
  //   }
  //   return res;
  // };

  const getRequest = async (url = "/", filters = {}) => {
    // const token = globalStore.authToken || useCookie("token");
    
    // Convert filters object to query string
    const queryString = new URLSearchParams(filters).toString();
    
    const fullUrl = `${baseURL + url}?${queryString}`;
    
    const { data, error, status } = await useFetch(fullUrl, {
      headers: {
        accept: "*/*",
        "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    
    let res: any = {};
    if (status.value === "success") {
      res = data.value;
    } else {
      res = error.value?.data;
    }
    
    return res;
  };
  const postRequest = async (url = "/", body = { formData: {} }) => {
    // const token = globalStore.authToken || useCookie("token");
    const { data, error, status } = await useFetch(`${baseURL + url}`, {
      // query: { locale },
      body: body.formData,
      method: "POST",
      headers: {
        accept: "*/*",
        // "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    let res: any = {};
    if (status.value === "success") {
      res = data.value;
    } else {
      res = error.value?.data;
    }
    return res;
  };
  const deleteRequest = async (url = "/") => {
    // const token = globalStore.authToken || useCookie("token");
    const { data, error, status } = await useFetch(`${baseURL + url}`, {
      method: "DELETE",
      headers: {
        accept: "*/*",
        // "Content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    let res: any = {};
    if (status.value === "success") {
      res = data.value;
    } else {
      res = error.value?.data;
    }
    return res;
  }

  return { getRequest, postRequest, deleteRequest };
}
