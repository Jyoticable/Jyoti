import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    country: '',
    subject: '',
    inquiry: [],
    message: ''
  });

  const [sendinfo, setsendInfo] = useState();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        inquiry: checked
          ? [...formData.inquiry, value]
          : formData.inquiry.filter((i) => i !== value)
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  
    const messageHtml = `
      <div>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Inquiry:</strong> ${formData.inquiry.join(', ')}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      </div>
    `;
  
    setsendInfo({
      'subject': formData.subject,
      'message': messageHtml,
      'from_email': 'jyoticables01@gmail.com',
      'recipient_list': ['deepanshu@prpwebs.in']
    });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Deepkjfds",formData);

    // Send a POST request to your Django server endpoint
    const response = await fetch('http://127.0.0.1:8000/send-email/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(sendinfo),
    });
    console.log("bhairav", response)
    if (response.ok) {
      console.log('Form submitted');
    } else {
      console.error('Form submission failed');
    }
  };

  return (

    <div class="main-form" data-aos="fade-up">

      <h2>Submit your Inquiry</h2>
    <form onSubmit={handleSubmit} className='page-width contact-form-form'>
  <div className='grid-fields'>
   <div className='form-field-box'>
      {/* <label htmlFor="name">Name:</label> */}
      <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' required data-aos="fade-up"/>
      </div>

      <div className='form-field-box'>
      {/* <label htmlFor="email">Email:</label> */}
      <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email'  required data-aos="fade-up"/>
</div>
 <div className='form-field-box'>
      {/* <label htmlFor="phone">Phone:</label> */}
      <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Phone'  required data-aos="fade-up"/>
</div>
 <div className='form-field-box'>
      {/* <label htmlFor="city">City:</label> */}
      <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder='City'  required data-aos="fade-up"/>
</div>
<div className='form-field-box'>
      {/* <label htmlFor="country">Country:</label> */}
      <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder='Country' required data-aos="fade-up"/>
</div>
<div className='form-field-box'>
{/* <label htmlFor="subject">Subject:</label> */}
      <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder='Subject'  required data-aos="fade-up"/>
</div>
   </div>
      
      <div className='cntc-form-inq' data-aos="fade-up">
      <label className='y-i-a-text'>Your Inquiry is about:</label>
      <label>
        <input
          type="checkbox"
          name="inquiry"
          value="Human Resources & Publicity"
          onChange={handleInputChange}
          checked={formData.inquiry.includes("Human Resources & Publicity")}
        />
        Human Resources & Publicity
      </label>
      <label>
        <input
          type="checkbox"
          name="inquiry"
          value="Domestic Inquiry"
          onChange={handleInputChange}
          checked={formData.inquiry.includes("Domestic Inquiry")}
        />
        Domestic Inquiry
      </label>

      <label>
        <input
          type="checkbox"
          name="inquiry"
          value="Exports Inquiry"
          onChange={handleInputChange}
          checked={formData.inquiry.includes("Exports Inquiry")}
        />
        Exports Inquiry
      </label>

      <label>
        <input
          type="checkbox"
          name="inquiry"
          value="Purchase"
          onChange={handleInputChange}
          checked={formData.inquiry.includes("Purchase")}
        />
        Purchase
      </label>

      </div>
      {/* <label htmlFor="message">Your Message:</label> */}
      <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder='Your Message' required className='text-area-cnt-frm' rows='10' data-aos="fade-up"></textarea>

      <button type="submit" className='form-submit-button' data-aos="fade-up">Send</button>
    </form>
    </div>
  );
};

export default ContactForm;