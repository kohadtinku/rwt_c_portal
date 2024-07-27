import React from 'react'
import img from "../assets/hero-bg.svg"
import img1 from "../assets/hero-banner-1.jpg"
import img2 from "../assets/hero-banner-2.jpg"
import img3 from "../assets/hero-shape-1.svg"
import img4 from "../assets/hero-shape-1.svg"
import call from "../assets/call-logo-removebg-preview.png"
import img5 from "../assets/category-1.svg"
import img6 from "../assets/category-2.svg"
import img7 from "../assets/category-3.svg"
import img8 from "../assets/category-4.svg"
import img9 from "../assets/about-banner.jpg"
import img10 from "../assets/about-shape-1.svg"
import img11 from "../assets/about-shape-2.svg"
import img12 from "../assets/about-shape-3.png"
import img13 from "../assets/course-1.jpg"
import img14 from "../assets/course-2.jpg"
import img15 from "../assets/course-3.jpg"
import img16 from '../assets/video-bg.png'
import img17 from '../assets/video-banner.jpg'
import img18 from '../assets/video-shape-1.png'
import img19 from '../assets/blog-bg.svg'
import img20 from '../assets/blog-1.jpg'
import img21 from '../assets/blog-2.jpg'
import img22 from '../assets/blog-3.jpg'
import web from '../assets/web.jpg'
import Android from '../assets/Android.jpeg'
import hr from '../assets/hr2.jpeg'
import digital from '../assets/digital.webp'

import { Link } from 'react-router-dom'
const Home = () => {

  const courses = [
    {
      id: 6,
      image: img13, // Replace with actual import or URL
      title: "Build Responsive Real World Websites with HTML and CSS",
      rating: 5.0,
      students: 37,
      duration: "3 Weeks",
      badge: "Free",
    },
    {
      id: 7,
      image: img14, // Replace with actual import or URL
      title: "Java Programming Masterclass for Software Developers",
      rating: 4.8,
      students: 42,
      duration: "5 Weeks",
      badge: "Free",
    },
    {
      id: 4,
      image: img15, // Replace with actual import or URL
      title: "Build a Dyanamic Single page Applications with React",
      rating: 5.0,
      students: 37,
      duration: "3 Weeks",
      badge: "Free",
    },
  ];

  return (
    <>
    <main>
        <article>
          <section className="section hero has-bg-image" id="home" aria-label="home"
            style={{ backgroundImage: {img} }}>
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                  The Best Program to <span className="span">Enroll</span> for Industrial Training
                </h1>
                <p className="hero-text">
                Unlock Your Potential: Explore Our Top-Rated Courses and Start Learning Today!
                </p>
                <a href="#category" className="btn has-before">
                  <span className="span">Find courses</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <figure className="hero-banner">
  <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
    <img src={img1} width="270" height="300" alt="hero banner" className="img-cover" />
  </div>
  <div className="img-holder two" style={{ '--width': 240, '---height': 370 }}>
    <img src={img2} width="240" height="370" alt="hero banner" className="img-cover" />
  </div>
  <div className="online_support">
    <span>
      <b style={{ color: "gray" }}>ONLINE SUPPORT</b>
    </span>
    <span className="contact-info">
      <img src={call} style={{ height: "40px" }} alt="Call" />
      <b style={{ color: "red" }}>+91 7276081626</b>
    </span>
  </div>
</figure>

            </div>
          </section>

          <section className="section category" aria-label="category" id="category">
            <div className="container">
              <p className="section-subtitle">Courses</p>
              <h2 className="h2 section-title">
              In-Person  <span className="span">Classes</span> For Comprehensive Learning.
              </h2>
              <p className="section-text">Unlock Your Potential with Our Diverse Range of Courses</p>
              <ul className="grid-list">
                <li>
                  <div className="category-card" style={{ '--color': '170, 75%, 41%' }}>
                    <div className="card-icon">
                      <img src={web} style={{borderRadius:'50px'}} loading="lazy" alt="Online Degree Programs" className="img" />
                    </div>
                    <h3 className="h3" >
                      <Link to="/webdevelopment" className="card-title" >Web Development</Link>
                    </h3>
                    <p className="card-text">

                    Transform Your Ideas into Stunning Websites with Our Comprehensive Web Development Course                    </p>
                    <Link to="/webdevelopment"><span className="card-badge">Learn More</span></Link>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '351, 83%, 61%' }}>
                    <div className="card-icon">
                      <img src={Android}  style={{borderRadius:' var(--radius-circle)',width:"80px", height:"80px"}}  loading="lazy" alt="Non-Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <Link to="/mobileApp" className="card-title">Android App Development</Link>
                    </h3>
                    <p className="card-text">
                    Bring Your Mobile Innovations to Life with Our Expert-Led Course                    </p>
                    <Link to="/mobileApp"><span className="card-badge">Learn More</span></Link>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '229, 75%, 58%' }}>
                    <div className="card-icon">
                      <img src={hr} style={{borderRadius:' var(--radius-circle)',width:"80px", height:"80px"}}  loading="lazy" alt="Off-Campus Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="/hrManagement" className="card-title">HR Management</a>
                    </h3>
                    <p className="card-text">
                    Master the Art of Human Resource Management and lead your organization with confidence.                 </p>
                    <Link to="/hrManagement"><span className="card-badge">Learn More</span></Link>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '42, 94%, 55%' }}>
                    <div className="card-icon">
                      <img src={digital} style={{borderRadius:' var(--radius-circle)',width:"80px", height:"80px"}} loading="lazy" alt="Hybrid Distance Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <Link to="" className="card-title">Digital MArketing</Link>
                    </h3>
                    <p className="card-text">

                    Unlock the power of Digital Marketing and drive your business forward.                    </p>
                    <span className="card-badge">Learn More</span>
                  </div>
                </li>
              </ul>
            </div>
          </section>

          <section className="section about" id="about" aria-label="about">
            <div className="container">
              <figure className="about-banner">
                <div className="img-holder" style={{ '--width': 520, '--height': 370 }}>
                  <img src={img9} width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
                </div>
                <img src={img10} width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
                <img src={img11} width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
                <img src={img12} width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
              </figure>
              <div className="about-content">
                <p className="section-subtitle">About Us</p>
                <h2 className="h2 section-title">
                  Take A Tour  <span className="span">Royals</span>
                </h2>
                <p className="section-text text-justify">
                Royals Webtech Pvt. Ltd. is an innovation insightful imaginative company doing broadactivities in the field of Website Designing , Website Development Software Development and Mobile Application Development.
                </p>
                <ul className="about-list text-justify">
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
               Empowering Minds, Shaping Futures: Experience the Royal Standard in Education Today!
                    </p>
                  </li>
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
                    We take an iterative approach to both our work and our practice, always looking for ways to improve what we do.
                    </p>
                  </li>
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
                    We’re a creative agency
with an expertise in make custom websites.                     </p>
                  </li>
                </ul>
                <a href="#" className="btn has-before">
                  <span className="span">Learn more</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
            </div>
          </section>

          <section className="section course" id="courses" aria-labelledby="course-label">
      <div className="container">
        <div className="title-wrapper">
          <p className="section-subtitle" id="course-label">Popular Courses</p>
          <h2 className="h2 section-title">Pick A Course To Get Started</h2>
        </div>
        <ul className="grid-list">
          {courses.map(course => (
            <li key={course.id}>
              <div className="course-card has-before">
                <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                  <img src={course.image} width="370" height="220" loading="lazy" alt={course.title} className="img-cover" />
                </figure>
                <div className="card-content">
                  <span className="badge">{course.badge}</span>
                  <h3 className="h3">
                  <Link to={`/coursedetail/${course.id}`} className="card-title">
                  {course.title}
                </Link>                  </h3>
                  <div className="wrapper">
                    <div className="rating-wrapper">
                      {[...Array(5)].map((_, i) => (
                        <svg
                        key={i}
                        className={`w-5 ${i < Math.floor(course.rating) ? 'fill-yellow-400' : 'fill-[#CED5D8]'}`}
                        viewBox="0 0 14 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                      </svg>
                      ))}
                    </div>
                    {/* <p className="rating-text">{course.rating}</p> */}
                  </div>
                  <ul className="card-meta-list">
                    <li className="card-meta-item">
                      <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                      <span className="span">{course.students} Students</span>
                    </li>
                    <li className="card-meta-item">
                      <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                      <span className="span">{course.duration}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>

          <section className="section video has-bg-image" aria-label="video" style={{ backgroundImage: `url(${img16})` }}>
          <div className="container">
              <div className="video-card">
                <div className="video-banner img-holder has-after" style={{ '--width': 1024, '--height': 646 }}>
                  <img src={img17} width="1024" height="646" loading="lazy" alt="video banner" className="img-cover" />
                  <button className="play-btn" aria-label="play video">
                    <ion-icon name="play" aria-hidden="true"></ion-icon>
                  </button>
                </div>
                <img src={img18} width="1390" height="872" loading="lazy" alt="" className="shape video-shape-1" />
              </div>
            </div>
          </section>

          {/* <section className="section stats" aria-label="stats">
            <div className="container">
              <ul className="grid-list">
                <li>
                  <div className="stats-card">
                    <h3 className="card-title">500+</h3>
                    <p className="card-text">Global Students</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card">
                    <h3 className="card-title">50+</h3>
                    <p className="card-text">Trainers</p>
                  </div>
                </li>
                <li>
                  <div className="stats-card">
                    <h3 className="card-title">Note: Online</h3>
                    <p className="card-text">Courses</p>
                  </div>
                </li>
              </ul>
            </div>
          </section> */}

          <section className="section blog has-bg-image" id="blog" aria-label="blog" style={{ backgroundImage: `url(${img19})` }}>
            <div className="container">
              <p className="section-subtitle">Blog & News</p>
              <h2 className="h2 section-title">
                Get News With <span className="span">EduWeb</span>
              </h2>
              <ul className="grid-list">
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
                      <img src={img20}width="370" height="270" loading="lazy" alt="Build Education & Online Courses." className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Build Education & Online Courses.</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                          <span className="span">07 Jan, 2022</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">By Admin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
                      <img src={img21} width="370" height="270" loading="lazy" alt="Online Learning Courses." className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Online Learning Courses.</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                          <span className="span">07 Jan, 2022</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">By Admin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="blog-card">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
                      <img src={img22} width="370" height="270" loading="lazy" alt="Build Education & Online Courses." className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <a href="#" className="card-btn" aria-label="read more">
                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                      </a>
                      <h3 className="h3">
                        <a href="#" className="card-title">Build Education & Online Courses.</a>
                      </h3>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                          <span className="span">07 Jan, 2022</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">By Admin</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </main>
    </>
  )
}

export default Home