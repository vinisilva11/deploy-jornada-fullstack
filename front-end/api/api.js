// Fetch ou Axios
import "dotenv/config";
import axios from "axios";

// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api";
const URL = "https://deploy-jornada-fullstack-4tfe.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;

// console.log(responseArtists.data);
