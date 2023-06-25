import { createContext } from "react";

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const getPosts = async () => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const datos = await res.json();
      return datos;
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <PostContext.Provider value={{ getPosts }}>
      {children}
    </PostContext.Provider>
  );
};
