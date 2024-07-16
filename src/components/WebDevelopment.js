import React from 'react'
import web from '../assets/webdevelopment.jpeg'
import img13 from "../assets/jfs.webp"
import img14 from "../assets/mern.jpg"
import img15 from "../assets/phpfull.webp"
import img19 from '../assets/blog-bg.svg'
import img20 from '../assets/react.jpg'
import img21 from '../assets/js.jpeg'
import img22 from '../assets/blog-3.jpg'
import java from '../assets/java.jpg'
import node from '../assets/node.jpeg'
import php from '../assets/php.jpg'
import html from '../assets/html.png'
const WebDevelopment = () => {

    const courses = [
        {
          imgSrc: img13,
          title: 'Master Full Stack Development with Java ',
          rating: 5.0,
          students: 37,
          duration: '3 Weeks',
        },
        {
          imgSrc: img14,
          title: 'Build a Web App with MERN Stack Development',
          rating: 4.8,
          students: 45,
          duration: '4 Weeks',
        },
        {
            imgSrc: img15,
            title: 'Build a Web App with PHP and MySQL Development',
            rating: 4.8,
            students: 45,
            duration: '4 Weeks',
          },
        // Add more course objects as needed
      ];

      const frontend = [
        {
          imgSrc: img20,
          title: 'Build a Dyanamic Single page Applications with React',
          students: 37,
          duration: '4 Weeks',
        },
        {
          imgSrc: img21,
          title: 'Learn javaScript with fun',
          students: 37,
          duration: '4 Weeks',
        },
        {
            imgSrc: html ,
            title: 'Build Responsive Real World Websites with HTML and CSS',
            students: 37,
            duration: '4 Weeks',
          },
        // Add more blog objects as needed
      ];


      const Backend = [
        {
          imgSrc: java,
          title: 'Java Programing Master class ',
          students: 37,
          duration: '4 Weeks',
        },
        {
          imgSrc: node,
          title: 'Mastering JavaScript for BAckend development like node js',
          students: 37,
          duration: '4 Weeks',
        },
        {
            imgSrc: php,
            title: 'Learn Php to build a dyanamic websites',
            students: 37,
            duration: '4 Weeks',
          },
        // Add more blog objects as needed
      ];

  return (
    <>
      
      <div className=" mt-0 lg:mt-36 sm:mt-28 mb-28">
      <div className="relative h-96">
      <div className="w-full h-350px " >
        <img
          src={web}
          alt=""
          className=" inset-0 w-full h-full object-cover brightness-75"
          style={{ filter: "brightness(50%)" }}
        />
        <p className='absolute inset-0 flex items-center justify-center text-white text-5xl lg:text-7xl font-medium  top-48 lg:top-32'>Web Development</p>
        </div>
        {/* <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-medium"> */}
          {/* <p className="text-2xl"> */}
            {/* <span className="hover:underline uppercase cursor-pointer text-2xl">
              Home
            </span>{" "}
            /{" "}
            <span className="hover:underline uppercase cursor-pointer text-2xl">
              Categories
            </span>{" "}
            / <span className="uppercase text-xl">Wallets</span> */}
            {/* WebDevlopment
          </p>
        </div> */}
      </div>
      </div>

      <section className="section course" id="courses" aria-labelledby="course-label">
            <div className="container">
              <div className="title-wrapper">
                <p className="section-subtitle" id="course-label">Full Stack Development Courses</p>
                <h2 className="h2 section-title">
                  Pick A Course To Get Started
                </h2>
              </div>
              <ul className="grid-list">
              {courses.map((course, index) => (
        <li key={index}>
          <div className="course-card has-before">
            <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 220 }}>
              <img src={course.imgSrc} width="370" height="220" loading="lazy" alt={course.title} className="img-cover" />
            </figure>
            <div className="card-content">
              <span className="badge">Free</span>
              <h3 className="h3">
                <a href="#" className="card-title">{course.title}</a>
              </h3>
              <div className="wrapper">
                <div className="rating-wrapper">
                  {[...Array(5)].map((star, i) => (
                    <ion-icon key={i} name="star" aria-hidden="true"></ion-icon>
                  ))}
                </div>
                <p className="rating-text">{course.rating}</p>
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


          <section className="section blog has-bg-image" id="blog" aria-label="blog" 
        //   style={{ backgroundImage: `url(${img19})` }}
          >
            <div className="container">
              <p className="section-subtitle">Frontend Development</p>
              <h2 className="h2 section-title">
                Get Started With <span className="span">Frontend</span>
              </h2>
              <ul className="grid-list">
              {frontend.map((blog, index) => (
        <li key={index}>
          <div className="blog-card">
            <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
              <img src={blog.imgSrc} width="370" height="270" loading="lazy" alt={blog.title} className="img-cover" />
            </figure>
            <div className="card-content">
              <a href="#" className="card-btn" aria-label="read more">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
              <h3 className="h3">
                <a href="#" className="card-title">{blog.title}</a>
              </h3>
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                  <span className="span">{blog.students}</span>
                </li>
                <li className="card-meta-item">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <span className="span">{blog.duration}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
                {/* <li>
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
                </li> */}
              </ul>
            </div>
          </section>


          <section className="py-11 blog has-bg-image " id="blog" aria-label="blog" 
        //   style={{ backgroundImage: `url(${img19})` }}
          >
            <div className="container">
              <p className="section-subtitle">Backend Development</p>
              <h2 className="h2 section-title">
               Explore The  <span className="span">Backend</span> development courses
              </h2>
              <ul className="grid-list">
              {Backend.map((blog, index) => (
        <li key={index}>
          <div className="blog-card">
            <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
              <img src={blog.imgSrc} width="370" height="270" loading="lazy" alt={blog.title} className="img-cover" />
            </figure>
            <div className="card-content">
              <a href="#" className="card-btn" aria-label="read more">
                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
              </a>
              <h3 className="h3">
                <a href="#" className="card-title">{blog.title}</a>
              </h3>
              <ul className="card-meta-list">
                <li className="card-meta-item">
                  <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                  <span className="span">{blog.students}</span>
                </li>
                <li className="card-meta-item">
                  <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
                  <span className="span">{blog.duration}</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
      ))}
               
              </ul>
            </div>
          </section>





    </>
  )
}

export default WebDevelopment