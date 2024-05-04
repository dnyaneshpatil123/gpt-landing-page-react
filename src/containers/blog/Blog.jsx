import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Jan 3, 2024" text="GPT-3 Surpasses Expectations, Redefining the Boundaries of Language Models" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2023" text="GPT-3 and Open  AI is the Future. Let us Exlore how it is?" />
        <Article imgUrl={blog03} date="Oct 13, 2023" text="GPT-3: Empowering Businesses, Inspiring Minds, and Shaping the Future" />
        <Article imgUrl={blog04} date="Nov 04, 2023" text="Unlocking the Potential of GPT-3: How AI is Reshaping Our World?" />
        <Article imgUrl={blog05} date="Dec 17, 2023" text="The Future is Here: GPT-3 Leads the Way in Artificial Intelligence Innovation" />
      </div>
    </div>
  </div>
);

export default Blog;
