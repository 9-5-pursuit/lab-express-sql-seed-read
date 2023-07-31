const axios = require("axios");
require("dotenv").config();

const options = {
  method: "GET",
  url: "https://deezerdevs-deezer.p.rapidapi.com/search",
  params: { q: "pop" },
  headers: {
    "X-RapidAPI-Key": process.env.RapidAPI_Key,
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

async function deezerData() {
  const res = await axios.request(options);
  const { data } = res.data;
  return data;
}

module.exports = deezerData;
