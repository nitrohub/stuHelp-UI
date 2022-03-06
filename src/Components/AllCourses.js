import React, { Component } from 'react';
import CoursePack from './CoursePack';


class AllCourses extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <>
                <div className="jumbotron">
                    <h1>Courses Available</h1>
                </div>
                {/* One Course pack will contain the courses contained in the particular Standard */}
                <CoursePack />  
                <CoursePack />  
            </>
        )
    }
}

export default AllCourses;