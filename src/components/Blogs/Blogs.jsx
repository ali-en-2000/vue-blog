import React from 'react'
import './Blogs.css'
import { FiSearch } from "react-icons/fi";

const Blogs = (props) => {
  const { blogData } = props;

  return (
    <div className="blogs container mt-4">
      <div className="row gap-5">

        <div className="col-12 col-md-8 ">
          <div className="row d-flex align-items-center justify-content-between ">
            {
              blogData.posts.map((item) => (
                <div key={item.id} className="card m-2" style={{ width: "48%" }} >
                  <img src={item.photo} className="card-img-top w-100" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              ))
            }
          </div>
        </div>









        <div className="col-3 d-none d-lg-block border">

          <div className="search-container my-4">
            <h5 className="text-center mb-3"> جستجو </h5>
            <div className="input-group mb-3">
              <button className="btn btn-primary" type="button" > <FiSearch/> </button>
              <input type="text" className="form-control" placeholder=" دنبال چی هستی؟ " />
            </div>
          </div>

          <hr />

          <div className="last-posts">
            <h5 className="text-center mb-3"> پست های اخیر </h5>
            {
              blogData.posts.map((item) => (

                <div key={item.id} className="last-posts-item d-flex align-items-center justify-content-between my-2">

                  <div className="img-container">
                    <img src={item.photo} alt="" />
                  </div>

                  <div className="ditails">
                    <p>{item.title}</p>
                  </div>

                </div>
              ))
            }
          </div>

          <hr />

          <h5 className="text-center mb-3"> تگ ها </h5>
          <div className="tags">
            <a href="#" className="tag-item"> کسب و کار </a>
            <a href="#" className="tag-item"> برنامه نویسی </a>
            <a href="#" className="tag-item"> دانشگاه </a>
            <a href="#" className="tag-item"> کسب و کار </a>
            <a href="#" className="tag-item"> برنامه نویسی </a>
            <a href="#" className="tag-item"> کسب و کار </a>
            <a href="#" className="tag-item"> کسب و کار </a>
            <a href="#" className="tag-item"> برنامه نویسی </a>

          </div>

        </div>
      </div>
    </div >
  )
}

export default Blogs