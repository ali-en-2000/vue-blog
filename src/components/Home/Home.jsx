import React from 'react'
import './Home.css'

import Hero from '../Hero/Hero'
import Blogs from '../Blogs/Blogs'

const Home = (props) => {
  const { blogData } = props;
  return (
    <div>
      <Hero />
      <Blogs
        blogData={blogData}
      />
    </div>
  )
}

export default Home