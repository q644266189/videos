import { useEffect, useState } from "react";
import youtube from "../api/youtube";

const useVideos = (defaultTerm) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => Search(defaultTerm), [defaultTerm]);
  const Search = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });
    setVideos(response.data.items);
  };
  return [videos, Search];
};

export default useVideos;
