import axios from "axios";

export const streamResponse = async () => {
  const apiUrl = import.meta.env.PROD
    ? import.meta.env.VITE_BACKEND_PORT_PROD
    : import.meta.env.VITE_BACKEND_PORT_LOCAL;
  try {
    const results = await axios.post(`${apiUrl}/api/streams`);
    if (results) {
      return results.data;
    }
  } catch (error) {
    return { error };
  }
};
