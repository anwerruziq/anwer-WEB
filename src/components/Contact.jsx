import { useState } from 'react';
import { FaPaperPlane, FaWhatsapp, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulating form submission
        alert('شكراً لرسالتك! سأتواصل معك قريباً.');
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="contact">
            <div className="container">
                <h2 className="section-title">
                    تواصل <span className="highlight">معي</span>
                </h2>

                <div className="contact-grid">
                    <div className="contact-info">
                        <h3 className="contact-subtitle">دعنا نبني شيئاً مذهلاً</h3>
                        <p className="contact-description">
                            أنا متاح دائماً للمشاريع الجديدة والتعاون الإبداعي. لا تتردد في مراسلتي!
                        </p>

                        <div className="floating-icons-container">
                            <a href="https://www.instagram.com/a_r.coder?igsh=MTFuMzhwdHRsb2t4dA==" className="floating-button float-1" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="btn-icon-floating" />
                            </a>
                            <a href="https://www.facebook.com/anwar.ruziq?mibextid=ZbWKwL" className="floating-button float-2" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="btn-icon-floating" />
                            </a>
                            <a href="https://github.com/anwerruziq" className="floating-button float-3" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 20 20" className="btn-svg" fill="#fff">
                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" transform="translate(-84, -7399)"></path>
                                </svg>
                            </a>
                            <a href="https://wa.me/967778568777" className="floating-button float-4" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp className="btn-icon-floating" />
                            </a>
                        </div>

                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="الاسم"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="البريد الإلكتروني"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="رسالتك"
                                rows="5"
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary submit-btn">
                            إرسال <FaPaperPlane className="btn-icon" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
