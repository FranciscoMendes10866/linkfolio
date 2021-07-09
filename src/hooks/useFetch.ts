import { useEffect, useState } from "react";
import axios from "axios";

import PostsDTO from "../components/list/posts.dto";

type Result = {
  data: PostsDTO[];
};

const useFetch = (): Result => {
  const [data, setData] = useState<PostsDTO[]>([]);
  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(
          "https://dev.to/api/articles?username=franciscomendes10866"
        );
        setData(data);
      } catch (err) {
        console.error(err);
      }
    };
    getPosts();
  }, []);
  return { data };
};

export default useFetch;
