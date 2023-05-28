import React, { Component } from 'react';
import ThemeBack from './ThemeBack';
import Expert from './Expert';
import malteshSirImage from '../assets/MalteshSir.jpeg';

class Counselling extends Component{ 

    render(){
        const heading= "Welcome! Book your free session";
        const subHeading = "Get hand-holding guidance from Experts for free!! Limited seats.";
        const message = "Laboris velit officia adipisicing ipsum dolor sunt exercitation in. Minim ullamco sunt velit laboris nisi amet nulla est tempor tempor cillum eu eu aliqua. Exercitation ut fugiat mollit aliqua. Qui occaecat labore aliqua consectetur velit sit esse dolore.";
        const professors=[
        {name:"Maltesh sir",image:malteshSirImage, Experience:"25",Bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        availability:[{date:"2023-05-26",timeSlot:["9-9:50","10-10:50","11-11:50","12-12:50","14-14:50","15-15:50","16-16:50","17-17:50","18-18:50","19-19:50","20-20:50"]},
        {date:"2023-05-28",timeSlot:["9-9:50","10-10:50","11-11:50","12-12:50","14-14:50","15-15:50","16-16:50","17-17:50","18-18:50","19-19:50","20-20:50"]}
        ,{date:"2023-05-30",timeSlot:["9-9:50","10-10:50","11-11:50","12-12:50","14-14:50","15-15:50","16-16:50","17-17:50","18-18:50","19-19:50","20-20:50"]}        
        ,{date:"2023-06-2",timeSlot:["9-9:50","10-10:50","11-11:50","12-12:50","14-14:50","15-15:50","16-16:50","17-17:50","18-18:50","19-19:50","20-20:50"]}
    ]},
        {name:"Nitesh sir",availability:[],image:"",Experience:"5",Bio:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"},
        {name:"Kamlesh sir",image:"",Experience:"5",Bio:"",availability:[]}]
        return(
            <>
                <ThemeBack heading={heading} subHeading={subHeading} message={message} />
                {professors.map((professor, index)=>{
                    return(
                    <Expert key={index} availability={professor.availability}  name={professor.name} image={professor.image} experience={professor.Experience} bio={professor.Bio} />
                    )
                })}
            </>

        )
    }
}

export default Counselling;