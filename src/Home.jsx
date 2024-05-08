import React, { useState, useEffect } from 'react'
import NewsItems from './NewsItems'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function Home(props) {
  let [articles, setArticles] = useState([])
  let [totalResults, setTotalResults] = useState(0)
  let [page, setPage] = useState(1)
  let [query, setQuery] = useState("")


  let getAPIData = async (query = "All") => {
    setQuery(query)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${query}&language=${props.language}&page=1&pageSize=12&sortBy=publishedAt&apiKey=32faf7cd8b3945ba8b112ff46baa998c`)
    response = await response.json()
    setArticles(response.articles.filter((item) => item.articles !== "[Removed]"))
    setTotalResults(response.totalResults)
  }

  let fetchData = async () => {
    setPage(page + 1)
    let response = await fetch(`https://newsapi.org/v2/everything?q=${props.q}&language=${props.language}&page=${page}&pageSize=12&sortBy=publishedAt&apiKey=32faf7cd8b3945ba8b112ff46baa998c`)
    response = await response.json()
    setArticles(articles.concat(response.articles.filter((item) => item.articles !== "[Removed]")))
  }

  useEffect(() => {
    if (props.search === "")
      getAPIData(props.q)
    else
      getAPIData(props.search)
  }, [props])


  return (
    <>
      <div className='container-fluid'>
        <h4 className='background text-light text-center my-2 p-2 text-capitalize'>{query} Articles</h4>
        <InfiniteScroll
          dataLength={articles.length} //This is important field to render the next data
          next={fetchData}
          hasMore={articles.length < totalResults}
          loader={
            <div className='w-100 text-center p-5'>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          }>
          <div className="row">
            {
              articles.map((item, index) => {
                return <NewsItems
                  key={index}
                  pic={item.urlToImage}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                />
              })
            }
          </div>
        </InfiniteScroll>
      </div>
    </>
  )
}
