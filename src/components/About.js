import React from 'react';
import about1 from "../assets/About-royals.avif"
import img19 from '../assets/blog-bg.svg'
import img20 from '../assets/gurupornima.jpg'
import img21 from '../assets/blog-2.jpg'
import img22 from '../assets/blog-3.jpg'
const About = () => {
  return (
    <>
    {/* // <section className="section about" id="about" aria-label="about">
    //   <div className="container">
    //     <figure className="about-banner">
    //       <div className="img-holder" style={{ "--width": "520", "--height": "370" }}>
    //         <img src="./assets/images/about-banner.jpg" width="520" height="370" loading="lazy" alt="about banner" className="img-cover" />
    //       </div>
    //       <img src="./assets/images/about-shape-1.svg" width="360" height="420" loading="lazy" alt="" className="shape about-shape-1" />
    //       <img src="./assets/images/about-shape-2.svg" width="371" height="220" loading="lazy" alt="" className="shape about-shape-2" />
    //       <img src="./assets/images/about-shape-3.png" width="722" height="528" loading="lazy" alt="" className="shape about-shape-3" />
    //     </figure>
    //     <div className="about-content">
    //       <p className="section-subtitle">About Us</p>
    //       <h2 className="h2 section-title">Over 10 Years in <span className="span">Distant learning</span> for Skill Development</h2>
    //       <p className="section-text">Lorem ipsum dolor sit amet consectur adipiscing elit sed eiusmod ex tempor incididunt labore dolore magna aliquaenim ad minim.</p>
    //       <ul className="about-list">
    //         <li className="about-item">
    //           <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    //           <span className="span">Expert Trainers</span>
    //         </li>
    //         <li className="about-item">
    //           <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    //           <span className="span">Online Remote Learning</span>
    //         </li>
    //         <li className="about-item">
    //           <ion-icon name="checkmark-done-outline" aria-hidden="true"></ion-icon>
    //           <span className="span">Lifetime Access</span>
    //         </li>
    //       </ul>
    //       <img src="./assets/images/about-shape-4.svg" width="100" height="100" loading="lazy" alt="" className="shape about-shape-4" />
    //     </div>
    //   </div>
    // </section> */}


<section >
<div className='flex flex-col lg:flex-row sm:flex-row pt-40 lg:pt-80  lg:p-20 lg:px-20 bg-[#f6f9fc]'>
<div className='flex-1 p-10 text-left'>
<h1 className='text-5xl lg:text-8xl text-[#101010] font-league-spartan lg:pl-20 lg:pt-10 flex items-center'>
  About <span className='text-[#ee4962] ml-2'>Royals</span>
</h1>
  <p className=' lg:pl-20 lg:pt-10'>Royals Webtech Pvt. Ltd. is an innovative insightful imaginative company doing broadactivities in the field of Website Designing , Website Development Software Development and Mobile Application Development.</p>

</div>
  <div className='flex-1 '>
    <img src={about1} style={{height:"300px"}} className="lg:ml-40 px-10"/>

  </div>

  </div>
 
</section>

<section>
  <section>
  {/* <div class="mx-auto max-w-screen-xl  px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16"> */}
  <div class="mx-auto max-w-screen-xl max-h-fit px-8 py-16 sm:px-12 sm:py-20 lg:px-16 lg:py-24">
  <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
    <div class="relative h-96 overflow-hidden rounded-lg sm:h-112 lg:h-full">
      <img
        alt="Grow your audience"
        src="https://www.hubspot.com/hs-fs/hubfs/grow-better.jpg?width=567&height=378&name=grow-better.jpg"
      />
    </div>

    <div class="lg:py-24">
    <h2 class="text-6xl text-[#0f0e0f] font-league-spartan">
    Our Mission: Helping Millions of Students Grow Better
  </h2>

      <p class="mt-4  text-gray-600 text-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
        eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
        quidem quam repellat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
      </p>

    
    </div>
  </div>
</div>

  {/* </div> */}
</section>
</section>


<section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-20 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
        <img
          alt=""
          src="https://www.hubspot.com/hs-fs/hubfs/Rangan-Halligan.jpg?width=567&height=378&name=Rangan-Halligan.jpg"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-24">
        <h2 className="text-6xl text-[#0f0e0f] font-league-spartan">Our Story</h2>

        <p className="mt-4 text-gray-600 text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
          eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
          quidem quam repellat.
        </p>

       
      </div>
    </div>
  </div>
</section>


<section className="section blog has-bg-image" id="blog" aria-label="blog" style={{ backgroundImage: `url(${img19})` }}>
            <div className="container">
              <p className="section-subtitle">Blog & News</p>
              <h2 className="h2 section-title">
              Highlights from Recent Events at  <span className="span">Royals</span>
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

    </>
  );
}

export default About;
