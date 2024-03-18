import { useEffect, useState } from "react";

const NewsFeed = () => {
  const [articles, setArticles] = useState();

  useEffect(() => {
    fetch(`https://content.guardianapis.com/search?q=&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${import.meta.env.VITE_API_KEY}`)
    .then(response => response.json())
    .then(data => setArticles(data.response.results))
  }, []);

  console.log(articles);

  return (
    <main>
      { articles && articles.map((article, index) => (
        <div className="articleContainer" key={index}>
          <img src={article.fields.thumbnail} alt="Thumbnail image depciting article" />
          <h1>{article.fields.headline}</h1>
        </div>
      )) }
    </main>
  )
}

export default NewsFeed