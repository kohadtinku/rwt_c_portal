import React from 'react';

const Blog = () => {
  return (
    <section className="section blog has-bg-image" id="blog" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Latest Articles</p>
        <h2 className="h2 section-title">Get News With Eduweb</h2>
        <ul className="grid-list">
          {/* Map over blog data to render blog cards */}
        </ul>
      </div>
    </section>
  );
}

export default Blog;
