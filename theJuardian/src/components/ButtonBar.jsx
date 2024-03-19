const ButtonBar = ({ articlesPerPage, totalArticles }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <div className="buttonBar">
      {pageNumbers.map(n => (
        <button key={n}>{ n }</button>
      ))}
    </div>
  )
}

export default ButtonBar