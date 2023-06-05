import React from "react";
import { usePostQuery, usePostsQuery } from "./services/PostsApi";

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
                  <h3>Get By ID: Method</h3>
                  <span>
                    <PostDetail id={post.id} />
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export const PostDetail = ({ id }: { id: String }) => {
  const { data } = usePostQuery(id);

  return (
    <>
      <div>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    </>
  );
};

export default App;
