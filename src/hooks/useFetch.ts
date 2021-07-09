import { useQuery } from "react-query";
import axios from "axios";

import PostsDTO from "../components/list/posts.dto";

type Result = {
  data: PostsDTO[]
  isError: boolean
  isLoading: boolean
}

const getPosts = async () => {
  try {
    const { data } = await axios.get(
      "https://dev.to/api/articles?username=franciscomendes10866"
    );
    return data;
  } catch (err) {
    console.error(err);
  }
};

const useFetch = (): Result => {
  const { data, isError, isLoading }  = useQuery("posts", getPosts);
  return { data, isError, isLoading }
};

export default useFetch;
