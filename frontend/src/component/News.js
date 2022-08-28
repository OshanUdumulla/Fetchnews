import React, { useEffect, useState } from "react";
import './Style.css'

const Getnews = () => {
  const [news, setNews] = useState([]);
  const [searchItem, setsearchItem] = useState(`react`);
  const [url, seturl] = useState(
    `http://hn.algolia.com/api/v1/search?query=react`
  );
const[loading,setloading] =useState(false)

  const fetchednews = () => {

    setloading(true);
    fetch(url)
      .then((res) => res.json())
      .then(data => (setNews(data.hits),setloading(false)))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchednews();
  }, [url]);

  const Handlechange = (e) => {
    setsearchItem(e.target.value);
  };

  const Handlesubmit = (e) => {
    e.preventDefault();

    seturl(`http://hn.algolia.com/api/v1/search?query=${searchItem}`);
  };

  return (
    <div>
      <h1>Hellow this is News Headlines</h1>

      {loading ? <h2>loading...</h2> : ""}
      <form onSubmit={Handlesubmit}>
        <input type="text" value={searchItem} onChange={Handlechange} />
        <button>Search</button>
      </form>
      {news.map((n, i) => (
        <p key={i}> {n.title} </p>
      ))}
    </div>
  );
};

export default Getnews;


