import React  from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsItem = (props) => {
    let { title, description, imageurl, sourcepage, author, date, source } = props;
    return (
        <Card style={{ width: 'auto ' }}>
            <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger " style={{ zIndex: '1', left: '90%' }}>
                <span className="visually ">{source}</span>
            </span>
            <Card.Img variant="top" src={imageurl} style={{ height: '200px' }} />
            <Card.Body>
                <Card.Title>{title}...</Card.Title>
                <Card.Text>
                    {description}...
                </Card.Text>
                <small className=" text-danger">by {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small>
                <br />
                <Button variant="outline-info" href={sourcepage} target="blank" >View News</Button>
            </Card.Body>
        </Card>
    )
}

export default NewsItem
