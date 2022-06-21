import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./NewsPage.module.css";
import NewsSearchItem from "../NewsSearchItem/NewsSearchItem";
import NewsSkeleton from "../Skeletons/NewsSkeleton/NewsSkeleton";

import AppsBar from "../AppsBar/AppsBar";
import NavBar from "../NavBar/NavBar";

import axios from "axios";
import Footer from "../Footer/Footer";

const NewsPage = () => {
  const [articles, setArticles] = useState([]);
  const [totalArticles, setTotalArticles] = useState(0);
  const params = useParams();

  useEffect(() => {
    const url = `https://gnews.io/api/v4/search?q=${params.id}&token=${process.env.REACT_APP_NEWS_API_KEY}&lang=en`;
    const fetchData = async () => {
      const result = await axios.get(url);
      setArticles(result.data.articles);
      setTotalArticles(result.data.totalArticles);
    };

    fetchData();
  }, [params.id]);

  return (
    <div>
      <NavBar />
      <AppsBar />
      <div className={classes.searchContent}>
        <div className={classes.searchInfo}>
          {articles.length > 0 && `About ${totalArticles} results`}
        </div>

        <div className={classes.results}>
          <ul>
            {articles.length > 0
              ? articles.map((article, index) => (
                  <NewsSearchItem article={article} key={index} />
                ))
              : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e, index) => (
                  <NewsSkeleton key={index} />
                ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
