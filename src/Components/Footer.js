import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/">Courses</a>
        </li>
        <li>
          <a href="/appointment">Book free Counselling</a>
        </li>
        <li>
          <a href="/">Contact Us</a>
        </li>
        <li>
          <a href="/">Privacy Policy</a>
        </li>
      </ul>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.437408513231!2d72.89732401393022!3d19.08845765654337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c71489bad6e7%3A0xf8a75902b619a0fa!2sRam%20Kadam%20Hall!5e0!3m2!1sen!2sin!4v1646568514556!5m2!1sen!2sin" width="450" height="350" style={{border:'0'}} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </footer>
  )
}

export default Footer