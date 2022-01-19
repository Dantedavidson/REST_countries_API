const axios = require('axios');

export const fetchAll = async () => {
  try {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    return response.data;
  } catch (error) {
    return null;
  }
};

export const fetchSingle = async (name: string | undefined) => {
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return response.data[0];
  } catch (error) {
    return null;
  }
};

export const fetchBorders = async (codes: string[] | undefined) => {
  if (!codes) return null;
  try {
    const response = await axios.get(
      `https://restcountries.com/v3.1/alpha?codes=${codes.toString()}`
    );
    return response.data.map((country: any) => country.name.common);
  } catch (error) {
    return null;
  }
};
