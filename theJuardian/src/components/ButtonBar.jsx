const ButtonBar = ({ articlesPerPage, totalArticles, changeContent, currentPage }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="buttonBar">
      {pageNumbers.map(n => (
        <button 
          className={ currentPage === n ? 'activeButton' : 'inactiveButton' }  
          key={n}
          onClick={ () => changeContent(n) }
        >{ n }</button>
      ))}
    </div>
  )
}

export default ButtonBar