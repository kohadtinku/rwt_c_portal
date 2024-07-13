import React from 'react';

const Courses = () => {
  return (
    <section className="section course" id="courses" aria-label="course">
      <div className="container">
        <p className="section-subtitle">Popular Courses</p>
        <h2 className="h2 section-title">Pick A Course To Get Started</h2>
        <ul className="grid-list">
          {/* Map over course data to render course cards */}
        </ul>
        <a href="#" className="btn has-before">
          <span className="span">Browse more courses</span>
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </section>
  );
}

export default Courses;
