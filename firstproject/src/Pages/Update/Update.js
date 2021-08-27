import React,{useState} from 'react'
import '../Home/Home.css';
import axios from 'axios';

const UpdatePost = (props) => {

    
    const [name, setname] = useState(" ");
    const [data, setdata] = useState(" ");


    const AddPostHandler = event => {
        event.preventDefault();
        const post = {
            name: name.toString(),
            data: data.toString(),
        };

        let check = true;

        if(name.length === 0 || data.length === 0 ){
            check = false;
        }

        setname('');
        setdata('');

        if(!check ){
            alert("Title or URL is empty.Please Write Something..")
        }
        else{
            axios.patch(`http://localhost:4000/app/feed/${props._id}`, post)
        }

        
    };




    const NameChange = event => {
        setname(event.target.value);
    }

    const DataChange = event => {
        setdata(event.target.value);
    }



    return (
        <div className="container">
            <h1 className="new-post">Update Post</h1>
            {/* <br/> */}
            <form onSubmit={AddPostHandler} >
                <div className="posttext">
                    <label className="label">Post Title</label>
                    <br/>
                    <input type="text" value={name} onChange={NameChange}  placeholder="Please Write"/>
                </div>
                    
                <div className="posttext">
                    <label className="label">URL</label>
                    <br/>
                    <input type="text"  value = {data} onChange={DataChange} placeholder="Please Write"/>
                </div>
                <div className="posttext">
                    <button type="submit" style={{paddingBottom:"4"}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default UpdatePost
