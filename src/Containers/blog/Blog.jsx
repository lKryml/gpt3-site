import React from 'react'
import "./blog.css";
import { Article } from '../../Components'
import { blog01, blog02, blog03, blog04, blog05 } from "./imports.js"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date={"1 Nov 2023"} title={"Bozo"} />
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date={"1 Nov 2023"} title={"Bozo"} />
          <Article imgUrl={blog03} date={"1 Nov 2023"} title={"Bozo"} />
          <Article imgUrl={blog04} date={"1 Nov 2023"} title={"Bozo"} />
          <Article imgUrl={blog05} date={"1 Nov 2023"} title={"Bozo"} />
        </div>
      </div>
    </div>
  )
}

export default Blog