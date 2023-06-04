import React from "react";
import { usePostsQuery } from "./services/PostsApi";

const App = () => {
  const { data, error, isLoading, isFetching, isSuccess } = usePostsQuery();
  return (
    <>
      <div className="App">
        <h1>React Redux Toolkit RTK Query</h1>
        {isLoading && <h1>Loading...</h1>}
        {error && <h1>Something went Wrong</h1>}
        {isFetching && <h1>Fetching....</h1>}
        {isSuccess && (
          <div>
            {data?.map((post, index) => {
              return (
                <div className="data" key={index}>
                  <h3>Title: {post.title}</h3>
                  <p>Body: {post.body}</p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default App;
