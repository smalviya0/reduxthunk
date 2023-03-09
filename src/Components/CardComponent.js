import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPostsSuccess } from "../redux/DemoSlice";
import { fetchPosts } from "../redux/DemoThunk";

export default function CardComponent() {
  const dispatch = useDispatch();
  const { posts, isLoading, error } = useSelector((state) => state.posts);
  console.log(posts, 'posts')
  useEffect(() => {
    // dispatch(fetchPosts());
    dispatch(fetchPosts())
    .unwrap()
    .then((originalPromiseResult) => {
      dispatch(fetchPostsSuccess(originalPromiseResult))
    })
    .catch((rejectedValueOrSerializedError) => {
      console.log('rejectedValueOrSerializedError', rejectedValueOrSerializedError)
    })
  }, [dispatch]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div className="grid gap-2 lg:grid-cols-4">
        {posts?.map((item) => (
          <div className="w-full rounded-lg shadow-md lg:max-w-sm" key={item.id}>
            <div className="p-4">
              <h4 className="text-xl font-semibold text-blue-600">{item.title}</h4>
              <p className="mb-2 leading-normal">{item.body}</p>
              <Link
                to={
                  `/post/${item.id}`
                }
                state={{ post: item } }
                className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow"
              >
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
