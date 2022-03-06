import React, { Component } from 'react';
import AboutUs from './AboutUs';
import Appointment from './Appointment';
import Courses from './Courses';
import Testimonials from './Testimonials';
import Intro from './Intro';


class Landing extends Component{
 render(){
   return(
     <>
      <Intro />
      <AboutUs />
      <Appointment />
      <Courses />
      <Testimonials />
     </>
   )
 }
}

export default Landing