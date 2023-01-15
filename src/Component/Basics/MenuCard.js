import React from 'react'

const MenuCard = ({ menuData }) => {
 //console.log(menuData);
  return (
    <>
      <section className='main-card--container'>
      
      {menuData.map((curElem)=>{
        //Destructing
        const {id, name , category, image, description } = curElem;

        {/* Destructing Arrays
          Here is the old way of assigning array items to a variable:

          Before:
          const vehicles = ['mustang', 'f-150', 'expedition'];

          // old way
          const car = vehicles[0];
          const truck = vehicles[1];
          const suv = vehicles[2];
          Here is the new way of assigning array items to a variable:

          With destructuring:
          const vehicles = ['mustang', 'f-150', 'expedition'];

          const [car, truck, suv] = vehicles; */}

        return(
          
          <>
          <div className="card-container" key={id}>
      <div className='card'>
      <div className='card-body'>
        <span className='card-number card-circle subtle'>{id}</span>
        <span className='card-author subtle'>{name}</span>
        <h2 className='card-title'>{name}</h2>
        <span className='card-description subtle'>
        {description}
        </span>  
        <div className='card-read'>Read</div>   
      </div>
      
      <img src={image} alt="image" className='card-media' />
      <span className='card-tag subtle'>Order Now</span>
      </div>
    </div>
        </>


          /* <>
          <div className="card-container" key={curElem.id}>
      <div className='card'>
      <div className='card-body'>
        <span className='card-number card-circle subtle'>{curElem.id}</span>
        <span className='card-author subtle'>{curElem.name}</span>
        <h2 className='card-title'>{curElem.name}</h2>
        <span className='card-description subtle'>
        {curElem.description}
        </span>  
        <div className='card-read'>Read</div>   
      </div>
      
      <img src={curElem.image} alt="image" className='card-media' />
      <span className='card-tag subtle'>Order Now</span>
      </div>
    </div>
        </> */
        
        );
      })}
      </section>

    </>
  )
}

export default MenuCard