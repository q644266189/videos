import axios from "axios";
const KEY = "AIzaSyCqZZ9BoEKSMTHSi4S-xt51YFbZeSDxzGY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
