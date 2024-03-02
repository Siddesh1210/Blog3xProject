import React from "react";
import "../App.css";
import "../components/CSS/CreateBlog.css";

const CreateBlog = () => {
  return (
    <>
      <div className="emptySpace"></div>
      <div className="blog-parent">
        <div className="blog">
          <h6 style={{color:"black",textAlign:"center"}}>Create a Blog</h6>
          <div>
            <label style={{color:"black"}}>Blog Title</label>
            <input type="text" />
          </div>
          <div >
            <label style={{color:"black"}}>Blog Description</label>
            <textarea/>
          </div>
          <div >
            <label style={{color:"black"}}>Blog Image</label>
            <input type="file" />
          </div>
          <button>Create Blog</button>
        </div>
      </div>
    </>
  );
};

export default CreateBlog;
