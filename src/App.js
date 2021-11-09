import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Card from "./components/Card";
import Header from "./components/Header";
import Spinner from "./components/Spinner";

function App() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  useEffect(async () => {
    const data = await fetchComments();
    setItems(data);
    setPage(page + 1);
  }, []);

  const fetchComments = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`
    );
    const data = await res.json();
    return data;
  };

  const fetchData = async () => {
    const data = await fetchComments();
    setItems([...items, ...data]);
    if (data.length < 20) sethasMore(false);
    setPage(page + 1);
  };
  return (
    <>
      <Header />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Spinner />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        <div className="container">
          <div className="row">
            {items.map((item) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
}

export default App;
