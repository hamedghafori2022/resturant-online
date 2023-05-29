import React from 'react'
import '../styles/About.css';
import MultiplePizzas from '../assets/masala.jpg'

function About() {
  return (
    <div className='about'>
      <div className="aboutTop"
      
      style={{backgroundImage: `url(${MultiplePizzas})`}}>
        
      </div>
      <div className="aboutBottom">
        <h1>ABOUT US</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum animi earum quibusdam nisi eos iste debitis vel autem neque quo quis voluptatibus eligendi obcaecati numquam est excepturi consequuntur, velit doloremque fugiat sapiente ipsa dolorem enim! Ad temporibus, in ea ex quae quas amet? Magnam, ex nulla voluptates provident labore quam vero doloribus hic ab iure maiores distinctio. Placeat ut repellendus deserunt repudiandae perspiciatis ullam iste consectetur labore necessitatibus laborum ipsam ea et voluptatibus dolorem expedita rem natus similique maxime, sit perferendis, culpa fugit autem. Earum quidem qui optio libero accusamus autem facilis consectetur repellat alias, error minus facere quia inventore ipsum ullam nam, asperiores pariatur provident eum quibusdam maiores quasi sunt repudiandae architecto! Laudantium pariatur quam iure tenetur esse iste ipsam est delectus, dolorem atque! Architecto autem labore veritatis aperiam repellendus neque iusto, ratione iure. Nemo, asperiores excepturi cumque minima explicabo nulla quod officia atque, qui ducimus velit, veniam quis!</p>
      </div>
    </div>
  )
}

export default About