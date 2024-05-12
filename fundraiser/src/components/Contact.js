// import React, { useState } from 'react';
// // import { FaPaperPlane, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDownload, FaGlobe, FaExclamationCircle } from 'react-icons/fa';
// // // import '../Components/Contact.css';
// // import { FaPaperPlane, FaEnvelope, FaPhone, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaDownload, FaGlobe, FaExclamationCircle } from 'react-icons/fa';


// function Contact() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const scriptURL = 'https://script.google.com/macros/s/AKfycbw67fnfwiG3J5aeQVIoqGfmXzFl1y8f-kZBd2tavF8N3s4M45OSbWyuwUGuzJaismL_LQ/exec';
//         const form = e.target;
//         const msg = document.getElementById("msg");

//         try {
//             const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
//             if (response.ok) {
//                 msg.innerHTML = "Your message has been sent successfully!";
//                 setTimeout(() => {
//                     msg.innerHTML = "";
//                 }, 5000);
//                 form.reset();
//             } else {
//                 throw new Error('Network response was not ok.');
//             }
//         } catch (error) {
//             console.error('Error!', error.message);
//         }
//     };

//     return (
//         <div>
//             <div id="contact">
//                 <div className="contact-container">
//                     <div className="row">
//                         <div className="contact-left">
//                             <h1 className="sub-title">Contact Us</h1>
//                             <p><FaEnvelope /> enochblake9@gmail.com</p>
//                             <p><FaPhone /> 254719268295</p>
//                             <p><FaGlobe /> www.mazingira.org</p>
//                             <div className="social-icons">
//                                 <a href="https://www.facebook.com/mazingira"><FaFacebook /></a>
//                                 <a href="https://twitter.com/mazingira"><FaTwitter /></a>
//                                 <a href="https://www.instagram.com/mazingira/"><FaInstagram /></a>
//                                 <a href="https://www.linkedin.com/company/mazingira/"><FaLinkedin /></a>
//                             </div>
//                             <a href="/downloads/mazingira_listings.pdf" className='listings' download><FaDownload /> Download Available Listings</a>
//                         </div>
//                         <div className="contact-right">
//                             <form onSubmit={handleSubmit}>
//                                 <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
//                                 <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
//                                 <textarea name="message" type="text" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
//                                 <button type="submit" className="btn btn2">Send Message</button>
//                             </form>
//                             <span id="msg"></span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="copyright">
//                 <p>&copy; {new Date().getFullYear()} Mazingira. All rights reserved. <FaExclamationCircle /> Unauthorized reproduction of any content is prohibited.</p>
//             </div>
//         </div>
//     );
// }

// export default Contact;


import React, { useState } from 'react';
import { RiMailLine, RiPhoneLine, RiGlobeLine, RiFacebookLine, RiTwitterLine, RiInstagramLine, RiLinkedinLine, RiDownloadLine, RiAlertLine } from 'react-icons/ri';
// import '../Components/Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const scriptURL = 'https://script.google.com/macros/s/AKfycbw67fnfwiG3J5aeQVIoqGfmXzFl1y8f-kZBd2tavF8N3s4M45OSbWyuwUGuzJaismL_LQ/exec';
        const form = e.target;
        const msg = document.getElementById("msg");

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: new FormData(form) });
            if (response.ok) {
                msg.innerHTML = "Your message has been sent successfully!";
                setTimeout(() => {
                    msg.innerHTML = "";
                }, 5000);
                form.reset();
            } else {
                throw new Error('Network response was not ok.');
            }
        } catch (error) {
            console.error('Error!', error.message);
        }
    };

    return (
        <div>
            <div id="contact">
                <div className="contact-container">
                    <div className="row">
                        <div className="contact-left">
                            <h1 className="sub-title">Contact Us</h1>
                            <p><RiMailLine /> enochblake9@gmail.com</p>
                            <p><RiPhoneLine /> 254719268295</p>
                            <p><RiGlobeLine /> www.mazingira.org</p>
                            <div className="social-icons">
                                <a href="https://www.facebook.com/mazingira"><RiFacebookLine /></a>
                                <a href="https://twitter.com/mazingira"><RiTwitterLine /></a>
                                <a href="https://www.instagram.com/mazingira/"><RiInstagramLine /></a>
                                <a href="https://www.linkedin.com/company/mazingira/"><RiLinkedinLine /></a>
                            </div>
                            <a href="/downloads/mazingira_listings.pdf" className='listings' download><RiDownloadLine /> Download Available Listings</a>
                        </div>
                        <div className="contact-right">
                            <form onSubmit={handleSubmit}>
                                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                                <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                                <textarea name="message" type="text" rows="6" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                                <button type="submit" className="btn btn2">Send Message</button>
                            </form>
                            <span id="msg"></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Mazingira. All rights reserved. <RiAlertLine /> Unauthorized reproduction of any content is prohibited.</p>
            </div>
        </div>
    );
}

export default Contact;

