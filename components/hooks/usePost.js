import { useContext } from "react";
import { PostContext } from "../context/PostProvider";

export const usePost = () => {
  return useContext(PostContext);
};
export default usePost;
