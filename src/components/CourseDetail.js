import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { courses } from './CoursesData';

const CourseDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const { id } = useParams();

  // Convert id to integer and find the course by id
  const courseId = parseInt(id, 10);
  const course = courses.find(course => course.id === courseId);
  console.log("hello")
  console.log(course)
  if (!course) {
    return <div>Course not found</div>;
  }
  

  const handleButtonClick = () => {
    // setIsModalOpen(true);
    const modalElement = document.getElementById('modal');
    if (modalElement) {
      modalElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const CloseButtonClick = () => {
    setIsModalOpen(false);
  };

  // const handleFormSubmit = (event) => {
  //   event.preventDefault();
    
  // };



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    setIsModalOpen(false);
  };

    
  
  
  return (
    <>

<div className="font-sans p-8 pt-44 pb-20 tracking-wide max-lg:max-w-2xl mx-auto">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-center lg:sticky top-8">
          <div className="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded-lg">
            <img src={course.imgSrc} alt="Product" className="w-full max-h-full object-contain object-top" />
          </div>
        </div>

        <div className="max-w-6xl">
          <div>
            <h2 className="text-6xl leading-loose font-extrabold text-gray-800">{course.title}</h2>
            <p className="text-2xl text-gray-600 mt-2">{course.description}</p>
          </div>

          <div className="flex space-x-1 mt-4">
            {Array.from({ length: 5 }, (_, index) => (
              <svg
                key={index}
                className={`w-5 ${index < Math.floor(course.rating) ? 'fill-yellow-400' : 'fill-[#CED5D8]'}`}
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
              </svg>
            ))}
          </div>

          <div className="mt-4">
            <h3 className="text-gray-800 text-4xl font-bold">&#8377;{course.price}</h3>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className="min-w-[200px] min-h-[40px] px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-white text-4xl font-semibold rounded-lg"
              onClick={handleButtonClick}
            >
              Buy now
            </button>
          </div>

          <div className="mt-8">
            <ul className="flex border-b">
              <li className="text-gray-800 font-bold text-4xl bg-gray-100 py-3 px-8 border-b-2 border-yellow-400 cursor-pointer transition-all">
                Description
              </li>
            </ul>

            <div className="mt-8">
              <h3 className="text-2xl font-bold text-gray-800">Course Description</h3>
              <p className="text-xl text-gray-600 mt-4">{course.description}</p>

              <ul className="space-y-3 list-disc mt-6 pl-4 text-xl text-gray-600">
                {course.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>    
      </div>        
             {/* {isModalOpen && ( */}
        <div className="modal" id='modal'>
          {/* <div
            class="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
            <div class="w-full h-fit max-w-4xl  bg-white shadow-lg rounded-lg p-8 relative ">
                <div class="flex items-center">
                    <h3 class="text-blue-600 text-4xl font-bold flex-1">Add New Product</h3>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 ml-2 cursor-pointer shrink-0 fill-gray-400 hover:fill-red-500"
                        viewBox="0 0 320.591 320.591" onClick={CloseButtonClick}>
                        <path
                            d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                            data-original="#000000"></path>
                        <path
                            d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                            data-original="#000000"></path>
                    </svg>
                </div>

                <form class="space-y-4 mt-8">
                    <div>
                        <labe class="text-gray-800 text-2xl mb-2 block">Name of the product</labe>
                        <input type="text" placeholder="Enter product name"
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-2xl border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <labe class="text-gray-800 text-2xl mb-2 block">Descriptions</labe>
                        <textarea placeholder='Write about the product'
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-2xl border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" rows="3"></textarea>
                    </div>

                    <div>
                        <labe class="text-gray-800 text-2xl mb-2 block">Quantity</labe>
                        <input type="number" placeholder="Enter quantity"
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-2xl border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <labe class="text-gray-800 text-2xl mb-2 block">Selling price</labe>
                        <input type="number" placeholder="Enter price"
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-2xl border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div>
                        <labe class="text-gray-800 text-2xl mb-2 block">Category</labe>
                        <input type="number" placeholder="Enter product category"
                            class="px-4 py-3 bg-gray-100 w-full text-gray-800 text-2xl border-none focus:outline-blue-600 focus:bg-transparent rounded-lg" />
                    </div>

                    <div class="flex justify-end gap-4 !mt-8">
                        <button type="button"
                            class="px-6 py-3 rounded-lg text-gray-800 text-2xl border-none outline-none tracking-wide bg-gray-200 hover:bg-gray-300" onClick={CloseButtonClick}>Cancel</button>
                        <button type="button"
                            class="px-6 py-3 rounded-lg text-white text-2xl border-none outline-none tracking-wide bg-blue-600 hover:bg-blue-700"  onClick={handleFormSubmit}>Submit</button>
                    </div>
                </form>
            </div>
        </div>    */}

        
<div className="enquiryForm_container">
      <span className="enquiryForm_big-circle"></span>
      <img src="img/shape.png" className="enquiryForm_square" alt="" />
      <div className="enquiryForm_form">
        <div className="enquiryForm_contact-info">
          <h3 className="enquiryForm_title">Let's get in touch</h3>
          <p className="enquiryForm_text">
          Let's get in touch! Whether you have questions or need support, we're here to help. Reach out to us anytime and we'll respond as soon as possible.
          </p>

          <div className="enquiryForm_info">
            <div className="enquiryForm_information">
              <i className="fas fa-map-marker-alt"></i> &nbsp;&nbsp;
              <p>4th floor, A Wing, Block No. 8, Mangalwari Complex, near Government Polytechnic, Sadar, Nagpur, Maharashtra 440001</p>
            </div>
            <div className="enquiryForm_information">
              <i className="fas fa-envelope"></i> &nbsp;&nbsp;
              <p>lorem@ipsum.com</p>
            </div>
            <div className="enquiryForm_information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p> 087884 47944</p>
            </div>
          </div>

          <div className="enquiryForm_social-media">
            <p>Connect with us :</p>
            <div className="enquiryForm_social-icons">
              <a href="https://www.facebook.com/royalswebtech">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/royalswebtechpvtltd/">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.instagram.com/royalswebtechpvtltd/">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="enquiryForm_contact-form">
          <span className="enquiryForm_circle one"></span>
          <span className="enquiryForm_circle two"></span>

          <form onSubmit={handleSubmit} autoComplete="off">
            <h3 className="enquiryForm_title">Contact us</h3>
            <div className="enquiryForm_input-container">
              <input
                type="text"
                name="name"
                className="enquiryForm_input"
                value={formData.name}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc} 
              />
              <label htmlFor="name">Your Name</label>
              {/* <span>Username</span> */}
            </div>
            <div className="enquiryForm_input-container">
              <input
                type="email"
                name="email"
                className="enquiryForm_input"
                value={formData.email}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="email">Email</label>
              {/* <span>Email</span> */}
            </div>
            <div className="enquiryForm_input-container">
              <input
                type="tel"
                name="phone"
                className="enquiryForm_input"
                value={formData.phone}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="phone">Contact No</label>
              {/* <span>Phone</span> */}
            </div>

            <div className="enquiryForm_input-container">
              <input
                type="tel"
                name="phone"
                className="enquiryForm_input"
                value={formData.phone}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="text">Education</label>
              {/* <span>Phone</span> */}
            </div>

            <div className="enquiryForm_input-container">
              <input
                type="tel"
                name="phone"
                className="enquiryForm_input"
                value={formData.phone}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc}
              />
              <label htmlFor="text">Course Name You want to join</label>
              {/* <span>Phone</span> */}
            </div>

            {/* <div className="enquiryForm_input-container enquiryForm_textarea">
              <textarea
                name="message"
                className="enquiryForm_input"
                value={formData.message}
                onChange={handleChange}
                onFocus={focusFunc}
                onBlur={blurFunc}
              ></textarea>
              <label htmlFor="message">Message</label> */}
              {/* <span>Message</span> */}
            {/* </div> */}
            <input type="submit" value="Submit" className="enquiryForm_btn" />
          </form>
        </div>
      </div>
    </div>
    </div>
      {/* )} */}
        
    </>
  )
}
const focusFunc = (e) => {
  const parent = e.target.parentNode;
  parent.classList.add('focus');
};

const blurFunc = (e) => {
  const parent = e.target.parentNode;
  if (e.target.value === '') {
    parent.classList.remove('focus');
  }
};
export default CourseDetail
