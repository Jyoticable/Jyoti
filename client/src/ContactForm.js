import React, { useState } from 'react';
import axios from 'axios';

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
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://server.jyoticables.in/submit', formData);
            console.log('Email sent:', response.data);
            
            setFormData({
                name: '',
                email: '',
                phone: '',
                city: '',
                country: '',
                subject: '',
                inquiry: [],
                message: ''
            });
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    return (
        <div className="main-form" data-aos="fade-up">
            <h2>Submit Your Inquiry</h2>
            <form onSubmit={handleSubmit} className='page-width contact-form-form'>
                <div className='grid-fields'>
                    <div className='form-field-box'>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' required data-aos="fade-up"/>
                    </div>
                    <div className='form-field-box'>
                        <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' required data-aos="fade-up"/>
                    </div>
                    <div className='form-field-box'>
                        <input type="number" name="phone" value={formData.phone} onChange={handleInputChange} placeholder='Phone' required data-aos="fade-up"/>
                    </div>
                    <div className='form-field-box'>
                        <input type="text" name="city" value={formData.city} onChange={handleInputChange} placeholder='City' required data-aos="fade-up"/>
                    </div>
                    <div className='form-field-box'>
                        <input type="text" name="country" value={formData.country} onChange={handleInputChange} placeholder='Country' required data-aos="fade-up"/>
                    </div>
                    <div className='form-field-box'>
                        <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} placeholder='Subject' required data-aos="fade-up"/>
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
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder='Your Message' required className='text-area-cnt-frm' rows='10' data-aos="fade-up"></textarea>
                <button type="submit" className='form-submit-button' data-aos="fade-up">Send</button>
            </form>
        </div>
    );
};

export default ContactForm;
