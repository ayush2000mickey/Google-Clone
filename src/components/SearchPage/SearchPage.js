import React, { useState, useEffect } from "react";
import classes from "./SearchPage.module.css";
import { useParams } from "react-router-dom";
import axios from "axios";

import AppsBar from "../AppsBar/AppsBar";
import NavBar from "../NavBar/NavBar";
import AllSearchItem from "../AllSearchItem/AllSearchItem";
import TextSkeleton from "../Skeletons/TextSkeleton/TextSkeleton";
import Footer from "../Footer/Footer";

const SearchPage = () => {
  const [items, setItems] = useState([]);
  const [searchInfo, setSearchInfo] = useState(0);
  const params = useParams();

  useEffect(() => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_SEARCH_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${params.id}&gl=in`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setSearchInfo(result.data.searchInformation);
      setItems(result.data.items);
    };

    fetchData();
  }, [params.id]);

  console.log(items);

  return (
    <div>
      <NavBar />
      <AppsBar />
      <div className={classes.searchContent}>
        <div className={classes.searchInfo}>
          {items.length > 0 &&
            `About ${searchInfo.formattedTotalResults} results in (${searchInfo.formattedSearchTime} seconds)`}
        </div>
        <div className={classes.results}>
          <ul>
            {items.length > 0
              ? items.map((item) => (
                  <AllSearchItem item={item} key={item?.cacheId} />
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
                  <TextSkeleton key={index} />
                ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SearchPage;
