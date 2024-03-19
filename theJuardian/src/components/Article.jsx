const Article = ({ article, index }) => {
  return (
    <div className="articleContainer" key={index}>
      <a href={article.webUrl} target='_blank' rel="noreferrer">
        <img src={article.fields.thumbnail ? article.fields.thumbnail : "/breakingNews.png"} alt="Thumbnail image depciting article" />
        <h1>{article.fields.headline}</h1>
        <p>{article.fields.bodyText}</p>
      </a>
    </div>
  )
}

export default Article