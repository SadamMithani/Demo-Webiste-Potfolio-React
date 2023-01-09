import React from 'react';
import './potfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

// Data
const data=[
  {
    id: 1,
    image: IMG1,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Lorem ipsum dolor sit amet.',
    github: 'www.github.com',
    Demo: 'www.github.com/demo'
  }
]

const potfolio = () => {
  return (
    <section id="potfolio">
      <h5>My Recent Work</h5>
      <h2>Potfolio</h2>
      <div className="container potfolio__container">
       {
        data.map(({id, image, title, github, demo})=>{
          return(
            <article className="potfolio__item">
            <div className="potfolio__item-image">
              <img src={image} alt={title}/>
            </div>
            <h3>{title}</h3>
            <div className="potfolio__item-cta">
            <a href={github} className='btn'>Github</a>
            <a href={demo} className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
          )
        })
      }
      </div>
    </section>
  );
}

export default potfolio;
