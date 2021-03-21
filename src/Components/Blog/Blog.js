import React from "react";
import { Card } from "react-bootstrap";
import blogData from "../../FakeData/blogData";
import "./Blog.css";

const Blog = () => {
  return (
    <div>
      <h1 className="blog-header">
        Destini<strong className="blog-header-strong">Go</strong> Blog
      </h1>
      {blogData.map((blog) => {
        const { title, news, date } = blog;
        return (
          <Card className="card-style">
            <Card.Header>{date}</Card.Header>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{news}</Card.Text>
              <button className="card-button">Go somewhere</button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Blog;
