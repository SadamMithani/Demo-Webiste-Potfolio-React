import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
const contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>dummyemail@gmail.com</h5>
          <a href="mailto:dummyemail@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Messanger</h4>
          <h5>dummyemail@gmail.com</h5>
          <a href="mailto:dummyemail@gmail.com">Send a message</a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+917016727244</h5>
          <a href="https://api.whatsapp.com/send?phone=+917016727244">Send a message</a>
        </article>   
      </div>
      {/* End of contact options */}
      <form action="">
        <input type="text" className='name' placeholder='Your Full Name' required/>
        <input type="text" className='email' placeholder='Your Email' required/>
        <textarea name="message" rows="7" placeholder='Your Mesaage' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default contact