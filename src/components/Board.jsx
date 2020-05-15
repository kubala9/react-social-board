import React, { useState, useEffect } from "react";
import { Post } from "./Post";
import Spinner from "react-bootstrap/Spinner";
import useInfiniteScroll from "../utils/useInfiniteScroll";
import { fetchData } from "../utils/fetchData";

const limit = 10;

export const Board = (props) => {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isFetching, setIsFetching] = useInfiniteScroll(fetchMoreData);
  const [isAllDataLoaded, setIsAllDataLoaded] = useState(false);

  const loadData = () => {
    fetchData(0, limit).then((res) => {
      setData(res);
      setOffset((prevState) => prevState + limit);
    });
  };

  function fetchMoreData() {
    fetchData(offset, limit).then((res) => {
      setTimeout(() => {
        if (res.length < limit)
          setIsAllDataLoaded(true);
        setData([...data, ...res]);
        setOffset((prevState) => prevState + limit);
        setIsFetching(false);       
      }, 1000);
    });
  }

  const removePost = (id) => {
    setData(data.filter((p) => p.id !== id));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      {data.map((post) => {
        return (
          <Post
            data={post.messageData}
            content={post.content}
            id={post.id}
            key={post.id}
            handleRemovePost={(id) => removePost(id)}
          ></Post>
        );
      })}
      {isFetching && !isAllDataLoaded && (
        <Spinner
          animation="grow"
          variant="secondary"
          style={{ display: "block", margin: "5% auto" }}
        />
      )}
    </div>
  );
};
