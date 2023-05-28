import React from 'react'
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';

const Destinations = () => {
  return (
      <>
        <div className="grid">
            <h3>We are currently serving 100 students</h3>
            <div className='grid-items'>
                <div>
                    <img src={image2} alt="image2"/>
                    <h4>Fly to Aruba</h4>
                    <p>Lorem ipsum...   </p>
                </div>
                <div>
                    <img src={image3} alt="image3"/>
                    <h4>Experience Mumbasa</h4>
                    <p>Lorem ipsum...   </p>
                </div>
                <div>
                    <img src={image4} alt="image4"/>
                    <h4>Wajra warriors</h4>
                    <p>Lorem ipsum...   </p>
                </div>
            </div>
        </div>
      </>
  )
}

export default Destinations