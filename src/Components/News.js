import React from 'react'
import NewsItem from './NewsItem'
// import Button from 'react-bootstrap/Button';
import Spinnerclass from './Spinnerclass';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useState } from 'react'



const News = (props) => {
    let apikey = "09706822a5d74df68d8d42a475245914"
    //  mien:= a9a3df2985644ea49f834727a0e9e416
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(false)
    const [page, setpage] = useState(1)
    const [tpage, settpage] = useState(0)


    const fetchdata = async ()=> {
        console.log("hello from mount");
        props.setProgress(0);
        setloading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page}&pageSize=${props.pagesize}`
        let data = await fetch(url);
        let parseddata = await data.json()
        setloading(false)
        props.setProgress(100)
        console.log(page);
        setarticles(parseddata.articles)
        settpage(parseddata.totalResults)
    }

     useEffect( () => {
        fetchdata();
        // eslint-disable-next-line   
    }, [])
    
    const changepagenext = async () => {
        setTimeout(async () => {
            console.log("next button clicked")
            var url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apikey}&page=${page + 1}&pageSize=${props.pagesize}`
            let data = await fetch(url);
            let parseddata = await data.json()
            setarticles(articles.concat(parseddata.articles))
            setpage(page + 1)
            console.log(page);
        }, 1000);

    }
    const  fetchMoreData = () => {
        changepagenext();
    }
    return (
        <>
            <div className="container my-2">
                <h1 className="my-5 text-center">Welcome to Top Headings-{props.category}</h1>
                {loading ? <Spinnerclass /> : ""}
                <div className="text-center">
                    {/* {this. state.loading && <Spinnerclass />} */}
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== tpage}
                    loader={<Spinnerclass />}
                >
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-3 my-2" key={element.url}>
                                <NewsItem title={element.title ? element.title.slice(0, 50) : "Not Known"} description={element.description ? element.description.slice
                                    (0, 80) : "Not Available"} imageurl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?k=20&m=1182477852&s=612x612&w=0&h=I3wdSzT_5h1y9dHq_YpZ9AqdIKg8epthr8Guva8FkPA="} sourcepage={element.url} date={element.publishedAt} author={element.author} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </InfiniteScroll>
            </div>
            <div className="container my-5 d-flex justify-content-between" style={{ textAlign: 'center' }}>
            </div>
        </>
    )
}

export default News
