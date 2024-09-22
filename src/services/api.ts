import axios from 'axios';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

async function doPost(url: string, data: any, token: string) {
  let auth = false;
  try {
    const response = await apiClient.post(url, data, {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }

    return { success: false, msg: 'Erro do post', auth };
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 401) {
      auth = false;
    }
    return { success: false, msg: 'Erro do post', auth };
  }
}

async function doGet(url: string, token: string) {
  let auth = false;
  try {
    const response = await apiClient.get(url, {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }

    return { success: false, msg: 'Erro do get', auth: true };
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 401) {
      auth = false;
    }
    return { success: false, msg: 'Erro do get', auth };
  }
}

async function doDelete(url: string, token: string) {
  let auth = false;
  try {
    const response = await apiClient.delete(url, {
      headers: { Authorization: token },
    });

    if (response.status === 200) {
      auth = true;
      return { ...response.data, auth };
    }

    return { success: false, msg: 'Erro do delete', auth: true };
  } catch (error) {
    console.log(error);
    if (error?.response?.status === 401) {
      auth = false;
    }
    return { success: false, msg: 'Erro do delete', auth };
  }
}

export { doPost, doGet, doDelete };
