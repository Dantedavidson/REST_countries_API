import { useState, useEffect } from "react";
const axios = require("axios");

export const useFetchAll = () => {
  let [countries, setCountries] = useState<any>();

  async function getCountries() {
    try {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      console.log(response);
      setCountries(response);
    } catch (error) {
      console.error(error);
      setCountries(null);
    }
  }
  useEffect(() => {
    getCountries();
  }, []);
  return countries;
};
