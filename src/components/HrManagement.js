import React, { useState } from 'react';
import mobileapp from '../assets/hr.jpeg'
import ContactUs from './contactUs';

const HrManagement = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    const handleButtonClick = () => {
        // setIsModalOpen(true);
        const modalElement = document.getElementById('modal');
        if (modalElement) {
          modalElement.scrollIntoView({ behavior: 'smooth' });
        }
      };

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
           
<div className="font-sans p-8 pt-44 lg:pt-52 pb-20 tracking-wide max-lg:max-w-2xl mx-auto text-justify">
      <div className="grid items-start grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-4 text-center lg:sticky top-80">
          <div className="bg-gray-100 p-4 flex items-center sm:h-[380px] rounded-lg">
            <img src={mobileapp} alt="Product" className="w-full max-h-full object-contain object-top" />
          </div>
        </div>

        <div className="max-w-6xl">
          <div>
            <h2 className=" text-4xl lg:text-6xl leading-normal font-extrabold text-gray-800">Mastering HR Management</h2>
            <p className="text-2xl text-gray-600 mt-8">Unlock the potential of your organization's workforce with our HR Management course. This program provides a deep dive into essential HR functions, including recruitment, performance management, and employee development. Equip yourself with the tools and strategies to effectively manage and nurture talent, ensuring a productive and positive work environment. </p>
          </div>

          {/* <div className="flex space-x-1 mt-4">
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
          </div> */}

<div className="flex space-x-1 mt-4">
                        <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-yellow-400" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
                        <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                        </svg>
</div>

          <div className="mt-4">
            <h3 className="text-gray-800 text-4xl font-bold">&#8377;6000</h3>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              type="button"
              className="min-w-[200px] min-h-[40px] px-4 py-3 bg-yellow-400 hover:bg-yellow-500 text-white text-4xl font-semibold rounded-lg"
              onClick={handleButtonClick}
            >
              Enroll now
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
              <p className="text-xl text-gray-600 mt-4">Mastering HR Management: Strategies for Success is a comprehensive course designed to equip you with the essential skills and knowledge to excel in human resources. This course covers key areas such as recruitment, employee relations, performance management, and organizational development, providing you with practical tools and strategies to effectively manage and develop talent within any organization.</p>

              <ul className="space-y-3 list-disc mt-6 pl-4 text-xl text-gray-600">
               
                  <li >In-depth Coverage: Learn all aspects of HR management, from hiring to employee development.</li>
                 <li>Practical Insights: Gain real-world knowledge from experienced HR professionals.</li> 
                  <li> Interactive Learning: Engage in hands-on activities and case studies for practical application.</li>
               
              </ul>
            </div>
          </div>
        </div>
      </div>    
      </div>        
             {/* {isModalOpen && ( */}
        <div className="modal" id='modal'>

    <ContactUs/>
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

export default HrManagement
