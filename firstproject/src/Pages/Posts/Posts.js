import React,{useState,useEffect} from 'react'
import axios from 'axios';
import PostList from './Postlist'

const Posts = () => {
    const [Data, setData] = useState([]);

    const getPosts = () =>{
        axios.get('http://localhost:4000/app/feed')
        .then(response => setData(response.data))
    }

    useEffect(()=>{
        getPosts();
    }, [])


  return (
    <div className="container-fluid">
      <div className="text-center">
    <div style={{width : "auto", margin: "0 auto" }}>
    <PostList posts={Data} />
  
    </div>
</div>
</div>
  )
}

export default Posts
