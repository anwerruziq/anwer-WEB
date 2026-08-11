
import './Contact.css';

const Contact = () => {

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
                                <i className='bx bxl-instagram btn-icon-floating'></i>
                            </a>
                            <a href="https://www.facebook.com/anwar.ruziq?mibextid=ZbWKwL" className="floating-button float-2" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-facebook btn-icon-floating'></i>
                            </a>
                            <a href="https://github.com/anwerruziq" className="floating-button float-3" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-github btn-icon-floating'></i>
                            </a>
                            <a href="https://wa.me/967778568777" className="floating-button float-4" target="_blank" rel="noopener noreferrer">
                                <i className='bx bxl-whatsapp btn-icon-floating'></i>
                            </a>
                        </div>

                    </div>


                </div>
            </div>
        </section>
    );
};

export default Contact;
