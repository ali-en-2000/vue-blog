import React from 'react'
import './Blogs.css'

const Blogs = (props) => {
  const { blogData } = props;

  return (
    <div className="blogs container mt-4">
      <div className="row">

        <div className="col-12 col-md-9 bg-info">
          <div className="row d-flex align-items-center justify-content-between ">
            {
              blogData.posts.map((item) => (
                <div className="card m-4" style={{width: "45%"}} >
                  <img src={item.photo} className="card-img-top" alt="..." />
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









        <div className="col-3 bg-danger d-none d-lg-block">
          Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  )
}

export default Blogs