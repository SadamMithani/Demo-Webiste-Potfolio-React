import React from 'react';
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        {/* UI/UX Design */}
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
          </ul>
        </article>
         {/* End of UI/UX Design */}

              {/* Web Developemt */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
          </ul>
        </article>
         {/* End of Web Developemt */}

              {/* Content Creation */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>
          <ul className="service__list">
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
            <li><BiCheck className='service__list-icon'/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, velit.</p></li>
          </ul>
        </article>
         {/* End of Content Creation */}
      </div>
    </section>
  );
}
export default services;
