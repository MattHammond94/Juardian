import { useEffect, useState } from "react";
import axios from "axios";

const NewsFeed = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {

    const fetchArticles = async () => {
      const res = await axios.get(`https://content.guardianapis.com/search?q=&query-fields=headline&page-size=30&show-fields=bodyText,thumbnail,headline,byline&order-by=newest&api-key=${import.meta.env.VITE_API_KEY}`);
      setArticles(res.data.response.results);
    }

    fetchArticles();
  }, []);

  console.log(articles);

  return (
    <main>
      <div className="feedContainer">
        { articles && articles.map((article, index) => (
          <div className="articleContainer" key={index}>
            <a href={article.webUrl} target='_blank' rel="noreferrer">
              <img src={article.fields.thumbnail} alt="Thumbnail image depciting article" />
              <h1>{article.fields.headline}</h1>
              <p>{article.fields.bodyText}</p>
            </a>
          </div>
        ))}
      </div>
    </main>
  )
}

export default NewsFeed