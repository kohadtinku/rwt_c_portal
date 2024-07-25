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
import { Link } from 'react-router-dom'
// import { courses } from './CoursesData';
const WebDevelopment = () => {

    const courses = [
        {
          id:1,
          imgSrc: img13,
          title: 'Master Full Stack Development with Java ',
          rating: 5.0,
          students: 37,
          duration: '3 Weeks',
        },
        {
          id:2,
          imgSrc: img14,
          title: 'Build a Web App with MERN Stack Development',
          rating: 4.8,
          students: 45,
          duration: '4 Weeks',
        },
        {
          id:3,
            imgSrc: img15,
            title: 'Build a Web App with PHP and MySQL Development',
            rating: 4.8,
            students: 45,
            duration: '4 Weeks',
          },
        
      ];

      const frontend = [
        {
          id:4,
          imgSrc: img20,
          title: 'Build a Dyanamic Single page Applications with React',
          students: 37,
          duration: '4 Weeks',
        },
        {
          id:5,
          imgSrc: img21,
          title: 'Learn javaScript with fun',
          students: 37,
          duration: '4 Weeks',
        },
        {
             id:6,
            imgSrc: html ,
            title: 'Build Responsive Real World Websites with HTML and CSS',
            students: 37,
            duration: '4 Weeks',
          },
        // Add more blog objects as needed
      ];


      const Backend = [
        {
          id:7,
          imgSrc: java,
          title: 'Java Programing Master class ',
          students: 37,
          duration: '4 Weeks',
        },
        {
          id:8,
          imgSrc: node,
          title: 'Mastering JavaScript for BAckend development like node js',
          students: 37,
          duration: '4 Weeks',
        },
        {
          id:9,
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
              {courses.map(course => (
        <li key={course.id} className="course-card has-before">
          <div className="course-card-content">
            <figure className="card-banner img-holder" style={{ '--width': '370px', '--height': '220px' }}>
              <img 
                src={course.imgSrc} 
                width="370" 
                height="220" 
                loading="lazy" 
                alt={course.title} 
                className="img-cover" 
              />
            </figure>
            <div className="card-content">
              <span className="badge">Free</span>
              <h3 className="h3">
                <Link to={`/coursedetail/${course.id}`} className="card-title">
                  {course.title}
                </Link>
              </h3>
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


          <section className="section blog has-bg-image" id="blog" aria-label="blog" 
        //   style={{ backgroundImage: `url(${img19})` }}
          >
            <div className="container">
              <p className="section-subtitle">Frontend Development</p>
              <h2 className="h2 section-title">
                Get Started With <span className="span">Frontend</span>
              </h2>
              <ul className="grid-list">
              {frontend.map((course) => (
  <li key={course.id}>
    <div className="blog-card">
      <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
        <img src={course.imgSrc} width="370" height="270" loading="lazy" alt={course.title} className="img-cover" />
      </figure>
      <div className="card-content">
        <a href="#" className="card-btn" aria-label="read more">
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
        <h3 className="h3">
        <Link to={`/coursedetail/${course.id}`} className="card-title">
                  {course.title}
                </Link>        </h3>
        <ul className="card-meta-list">
          <li className="card-meta-item">
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            <span className="span">{course.students} Students</span>
          </li>
          <li className="card-meta-item">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
            <span className="span">{course.duration}</span>
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
              {Backend.map((course) => (
  <li key={course.id}>
    <div className="blog-card">
      <figure className="card-banner img-holder" style={{ '--width': 370, '--height': 270 }}>
        <img src={course.imgSrc} width="370" height="270" loading="lazy" alt={course.title} className="img-cover" />
      </figure>
      <div className="card-content">
        <a href="#" className="card-btn" aria-label="read more">
          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
        <h3 className="h3">
        <Link to={`/coursedetail/${course.id}`} className="card-title">
                  {course.title}
                </Link> 
        </h3>
        <ul className="card-meta-list">
          <li className="card-meta-item">
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
            <span className="span">{course.students} Students</span>
          </li>
          <li className="card-meta-item">
            <ion-icon name="person-outline" aria-hidden="true"></ion-icon>
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





    </>
  )
}

export default WebDevelopment
