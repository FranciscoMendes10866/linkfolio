import { useQuery } from "react-query";
import axios from "axios";

import PostsDTO from "../components/list/posts.dto";

const getPosts = async (): Promise<PostsDTO[] | undefined> => {
  try {
    const { data } = await axios.get(
      "https://dev.to/api/articles?username=franciscomendes10866"
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

const useFetch = (): PostsDTO[] => {
  const { data } = useQuery("posts", getPosts);
  return data as PostsDTO[];
};

export default useFetch;
