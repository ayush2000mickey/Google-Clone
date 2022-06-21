import React, { useState, useEffect } from "react";
import classes from "./ImagesPage.module.css";

import { useParams } from "react-router-dom";
import axios from "axios";

import AppsBar from "../AppsBar/AppsBar";
import NavBar from "../NavBar/NavBar";
import ImageSearchItem from "../ImageSearchItem/ImageSearchItem";
import ImageSkeleton from "../Skeletons/ImageSkeleton/ImageSkeleton";
import Footer from "../Footer/Footer";

const ImagesPage = () => {
  const [items, setItems] = useState([]);
  const params = useParams();

  useEffect(() => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.REACT_APP_SEARCH_API_KEY}&cx=${process.env.REACT_APP_SEARCH_ENGINE_ID}&q=${params.id}&gl=in&searchType=image`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setItems(result.data.items);
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <NavBar />
      <AppsBar />
      <div className={classes.results}>
        {items.length > 0
          ? items.map((item, index) => (
              <ImageSearchItem item={item} key={index} />
            ))
          : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
              <ImageSkeleton key={index} />
            ))}
      </div>
      <Footer />
    </div>
  );
};

export default ImagesPage;
