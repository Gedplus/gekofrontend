import React ,{useState} from 'react'
import MiniSlider from '../Components/Slider/MiniSlide'
import emaili from "../Components/Assets/email.png"
import maps from "../Components/Assets/maps.png"
import smart from "../Components/Assets/smartphone.png"
import phone from "../Components/Assets/phone-call.png"
import fax from "../Components/Assets/fax.png"
const Contact = () => { 
    const [state, setState] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    
      const { name, email, subject, message } = state;
      const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !subject || !message) {
          console.log("Please provide value in each input field");
        } else {

          setState({ name: "", email: "", subject: "", message: "" });
         console.log("Form Submitted Successfully");
        }
      };
    
      const handleInputChange = (e) => {
        let { name, value } = e.target;
        setState({ ...state, [name]: value }); 
      };
      const map ="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.7515842554676!2d10.730300399999999!3d34.7114451!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13002c936d494c11%3A0x1dbc40f314a111a2!2sMedichem%20Industry!5e0!3m2!1sen!2stn!4v1709033152009!5m2!1sen!2stn" 
    return(  
        <>   <section className='back3'>
        <div className="boxB">
    </div> 
      </section>   <section className='backContact'>
               <section className="contact-section">
      <div >
      
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="wrapper">
              <div className="row  g-0">
                <div className="col-md-7 contact-wrap">
                  <div className=" w-100 p-lg-5 p-4">
                    <h3 className="mb-4">Envoie-nous un message</h3>
                    <form
                      id="contactForm"
                      className="contactForm"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="name"
                              placeholder="Name"
                              onChange={handleInputChange}
                              value={name}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              name="email"
                              placeholder="Email"
                              onChange={handleInputChange}
                              value={email}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              name="subject"
                              placeholder="Subject"
                              onChange={handleInputChange}
                              value={subject}
                            />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <textarea
                              type="text"
                              className="form-control"
                              name="message"
                              placeholder="Message"
                              cols="30"
                              rows="6"
                              onChange={handleInputChange}
                              value={message}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="button-57 btn-contact" 
                              
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch info-wrap">
                  <div className=" w-100 p-lg-5 p-4 ">
                    <h3>Contactez-nous</h3>
                    <p className="mb-4 text-dark">
                    Nous sommes heureux de discuter de votre projet et de répondre à toutes vos questions
                    </p>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon  align-items-center justify-content-center">
                       <img src={maps} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Addresse:</span>
                       
                 
                        </p>
        
                        <p>   <a href="">
                        Rte de Gabes Km 3, B.P 406, 3062 Sfax – Tunisia
                          </a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon  align-items-center justify-content-center">
                       <img src={emaili} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Email:</span>
                       
                 
                        </p>
        
                        <p>   <a href="mailto:contact@geko.tn">
                          contact@geko.tn
                          </a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon  align-items-center justify-content-center">
                      <img src={smart} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>GSM:</span>
                   
                        </p><p>       <a href="tel://+(216) 28 526 000">(+216) 28 526 000</a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon  align-items-center justify-content-center">
                      <img src={phone} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Tel:</span>

                        </p><p>                          <a href="tel://+(216) 74 453 229">(+216) 74 453 229</a></p>
                      </div>
                    </div>
                    <div className="dbox w-100 d-flex align-items-center">
                      <div className="icon  align-items-center justify-content-center">
                      <img src={fax} />
                      </div>
                      <div className="text pl-3">
                        <p>
                          <span>Fax:</span>
                     
                        </p><p>     <a href="tel://(+216) 74 453 086">(+216) 74 453 086</a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
            </section>
            <section className='backContactmap '>
            <iframe src={map}></iframe>
                </section></>
     )}


export default Contact