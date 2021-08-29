import React from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import './Postlist.css';


const PostList = (props) => {


    return (
        <>
            {props.posts.map((post) => (
                <div className="card-cards" >
                    <div className="card-body">
                        <h5 className="card-title"> {post.name}</h5>
                        <img src={post.data} alt="meme" />
                        {/* <button className='btn btn-danger btn-group2' id={post._id} onClick={() => { axios.delete(`http://localhost:4000/app/feed/${post._id}`, window.location.reload()) }} >Delete</button> */}
                    </div>
                    <div className="button">
                        <NavLink to = {`/feed/${post._id}`}><button className="btno"  >Edit</button></NavLink>
                        <button className='btno' id={post._id} onClick={() => { axios.delete(`http://localhost:4000/app/feed/${post._id}`, window.location.reload()) }} >Delete</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default PostList
