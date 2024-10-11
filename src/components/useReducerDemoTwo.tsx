import { useEffect, useReducer } from "react";
import axios from "axios"; // alternative to fetch
import { reducerTwo } from "@/utils/reducer";
import { type State, type Post } from "@/types/useReducerTypes";

export default function UseReducerDemoTwo() {
  const initialState: State = {
    // initial state for postsResult state variable
    loading: true, // true when loading and no data in posts
    posts: [], // empty until data is fetched
    error: "", // empty unless there was an error
  };

  const [postsResult, dispatch] = useReducer(reducerTwo, initialState);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5") // modify this URL to test the error case
      .then((response) => {
        // object passed to dispatch holds all data needed for updating state: both type of update and associated data
        dispatch({ type: "FETCH_SUCCESS", payload: response.data }); // dispatch calls reducer function and triggers re-render
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message }); // lets us handle different types of state changes differently
      });
  }, []);

  // returned JSX uses the 3 things stored in postsResult state object to conditionally render data or an error message
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <h2 className="text-2xl font-bold m-4">
        Realistic Use of useReducer Demo
      </h2>

      <div>
        {postsResult.loading ? (
          <div>Loading posts...</div>
        ) : (
          postsResult.posts.map(
            (
              post: Post // list of posts is just one of the things stored in the postsResult state object
            ) => (
              <div key={post.id}>
                <h3>
                  Post #{post.id}: {post.title}
                </h3>
                <p>{post.body}</p>
              </div>
            )
          )
        )}
        <div>{postsResult.error}</div>
      </div>
    </div>
  );
}
