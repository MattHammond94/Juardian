import { useEffect, useState } from "react";
import axios from "axios";
import Article from "./Article";
import ButtonBar from "./ButtonBar";

const NewsFeed = () => {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(8);

  useEffect(() => {
    const fetchArticles = async () => {
      const res = await axios.get(`https://content.guardianapis.com/search?q=&query-fields=headline&page-size=40&show-fields=bodyText,thumbnail,headline,byline&order-by=newest&api-key=${import.meta.env.VITE_API_KEY}`);
      setArticles(res.data.response.results);
    }

    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  console.log(articles);

  return (
    <main>
      <div className="feedContainer">
        { currentArticles && currentArticles.map((article, index) => (
          <Article key={index} article={article} />
        ))}
      </div>
      <ButtonBar articlesPerPage={ articlesPerPage } totalArticles={ articles.length }/>
    </main>
  )
}

export default NewsFeed