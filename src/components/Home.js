import React from 'react'
import img from "../assets/hero-bg.svg"
import img1 from "../assets/hero-banner-1.jpg"
import img2 from "../assets/hero-banner-2.jpg"
import img3 from "../assets/hero-shape-1.svg"
import img4 from "../assets/hero-shape-1.svg"
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
const Home = () => {
  return (
    <>
    <main>
        <article>
          <section className="section hero has-bg-image" id="home" aria-label="home"
            style={{ backgroundImage: {img} }}>
            <div className="container">
              <div className="hero-content">
                <h1 className="h1 section-title">
                  The Best Program to <span className="span">Enroll</span> for Exchange
                </h1>
                <p className="hero-text">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                </p>
                <a href="#" className="btn has-before">
                  <span className="span">Find courses</span>
                  <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                </a>
              </div>
              <figure className="hero-banner">
                <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
                  <img src={img1} width="270" height="300" alt="hero banner" className="img-cover" />
                </div>
                <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
                  <img src={img2} width="240" height="370" alt="hero banner" className="img-cover" />
                </div>
                <img src={img3}  width="380" height="190" alt="" className="shape hero-shape-1" />
                <img src={img4} width="622" height="551" alt="" className="shape hero-shape-2" />
              </figure>
            </div>
          </section>

          <section className="section category" aria-label="category">
            <div className="container">
              <p className="section-subtitle">Categories</p>
              <h2 className="h2 section-title">
                Online <span className="span">Classes</span> For Remote Learning.
              </h2>
              <p className="section-text">Consectetur adipiscing elit sed do eiusmod tempor.</p>
              <ul className="grid-list">
                <li>
                  <div className="category-card" style={{ '--color': '170, 75%, 41%' }}>
                    <div className="card-icon">
                      <img src={img5} width="40" height="40" loading="lazy" alt="Online Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Online Degree Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">7 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '351, 83%, 61%' }}>
                    <div className="card-icon">
                      <img src={img6} width="40" height="40" loading="lazy" alt="Non-Degree Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Non-Degree Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">4 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '229, 75%, 58%' }}>
                    <div className="card-icon">
                      <img src={img7} width="40" height="40" loading="lazy" alt="Off-Campus Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Off-Campus Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
                  </div>
                </li>
                <li>
                  <div className="category-card" style={{ '--color': '42, 94%, 55%' }}>
                    <div className="card-icon">
                      <img src={img8} width="40" height="40" loading="lazy" alt="Hybrid Distance Programs" className="img" />
                    </div>
                    <h3 className="h3">
                      <a href="#" className="card-title">Hybrid Distance Programs</a>
                    </h3>
                    <p className="card-text">
                      Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                    </p>
                    <span className="card-badge">8 Courses</span>
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
                  Take A Tour <span className="span">EduWeb</span>
                </h2>
                <p className="section-text">
                  Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod tempor incididunt labore dolore magna
                  aliquaenim ad minim veniam quis nostrud exercitation ullamco.
                </p>
                <ul className="about-list">
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                  </li>
                  <li className="about-item">
                    <div className="about-icon">
                      <ion-icon name="checkmark-circle" aria-hidden="true"></ion-icon>
                    </div>
                    <p className="about-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
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
                <h2 className="h2 section-title">
                  Pick A Course To Get Started
                </h2>
              </div>
              <ul className="grid-list">
                <li>
                  <div className="course-card has-before">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                      <img src={img13} width="370" height="220" loading="lazy" alt="Build Responsive Real World Websites with HTML and CSS" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <span className="badge">Free</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">Build Responsive Real World Websites with HTML and CSS</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">5.0</p>
                      </div>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">37 Students</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">3 Weeks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card has-before">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                      <img src={img14} width="370" height="220" loading="lazy" alt="Java Programming Masterclass for Software Developers" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <span className="badge">Free</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">Java Programming Masterclass for Software Developers</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star-half-outline" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">4.8</p>
                      </div>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">42 Students</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">5 Weeks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="course-card has-before">
                    <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
                      <img src={img15} width="370" height="220" loading="lazy" alt="The Complete Camtasia Course for Content Creators" className="img-cover" />
                    </figure>
                    <div className="card-content">
                      <span className="badge">Free</span>
                      <h3 className="h3">
                        <a href="#" className="card-title">The Complete Camtasia Course for Content Creators</a>
                      </h3>
                      <div className="wrapper">
                        <div className="rating-wrapper">
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                          <ion-icon name="star" aria-hidden="true"></ion-icon>
                        </div>
                        <p className="rating-text">5.0</p>
                      </div>
                      <ul className="card-meta-list">
                        <li className="card-meta-item">
                          <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                          <span className="span">37 Students</span>
                        </li>
                        <li className="card-meta-item">
                          <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                          <span className="span">3 Weeks</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
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