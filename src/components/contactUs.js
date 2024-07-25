import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });

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
       
      };
    
  return (
    <>
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
export default ContactUs
