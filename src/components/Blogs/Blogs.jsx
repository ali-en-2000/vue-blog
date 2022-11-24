import React from 'react'
import './Blogs.css'
import { FiSearch, FiArrowLeft } from "react-icons/fi";

const Blogs = (props) => {
  const { blogData } = props;

  return (
    <div className="blogs container mt-4">
      <div className="row gap-5">

        <div className="col-12 col-md-8 blog-post-container ">
            {
              blogData.posts.map((item) => (
                <div key={item.id} className="blog-card m-2 rounded " >
                  <img src={item.photo} className="blog-thumbnail w-100 h-50" alt="..." />
                  <div className="blog-card-body">
                    <h5 className="blog-card-title mb-3">{item.title}</h5>
                    <p className="blog-card-text">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است                     </p>
                    <button className="button read-more-btn"> بیشتر بخوانید <FiArrowLeft/> </button>
                  </div>
                </div>
              ))
            }
        </div>









        <div className="col-3 d-none d-lg-block border">

          <div className="search-container my-4">
            <h5 className="text-center mb-3"> جستجو </h5>
            <div className="input-group mb-3">
              <button className="btn btn-primary" type="button" > <FiSearch /> </button>
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