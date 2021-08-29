import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Postlist.css";

const PostList = (props) => {
  return (
    <>
      {props.posts.map((post) => (
        <div className="card-cards">
          <div className="card-body">
            <div>
              <h5 className="card-title"> {post.name}</h5>
            </div>
            <div>
              <img src={post.data} alt="meme" />
            </div>
          </div>
          <div className="button">
            <button className="btno">
              <NavLink to={`/feed/${post._id}`}>Edit</NavLink>
            </button>
            <button
              className="btno"
              id={post._id}
              onClick={() => {
                axios.delete(
                  `http://localhost:4000/app/feed/${post._id}`,
                  window.location.reload()
                );
              }}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostList;
