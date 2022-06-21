import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./VideosPage.module.css";
import VideosSearchItem from "../VideosSearchItem/VideosSearchItem";
import VideosSkeleton from "../Skeletons/VideosSkeleton/VideosSkeleton";
import axios from "axios";

import AppsBar from "../AppsBar/AppsBar";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const VideosPage = () => {
  const [items, setItems] = useState([]);
  const [searchInfo, setSearchInfo] = useState(0);
  const params = useParams();

  useEffect(() => {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${params.id}&key=${process.env.REACT_APP_SEARCH_API_KEY}&maxResults=10&type=video`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setSearchInfo(result.data.pageInfo.totalResults);
      setItems(result.data.items);
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <NavBar />
      <AppsBar />
      <div className={classes.searchContent}>
        <div className={classes.searchInfo}>
          {items.length > 0 && `About ${searchInfo} results in (0.36 seconds)`}
        </div>
        <div className={classes.results}>
          <ul>
            {items.length > 0
              ? items.map((item) => (
                  <VideosSearchItem video={item} key={item.id.videoId} />
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
                  <VideosSkeleton key={index} />
                ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VideosPage;
