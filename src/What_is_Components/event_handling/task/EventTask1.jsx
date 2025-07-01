import React from 'react'

//On mouse hover change the color of div
const EventTask1 = () => {
    let hadnleOnMounseEnter = (e)=>{
        e.target.style.backgroundColor = "Red";
        console.log(e);
    };
    
  return (
    <>
        <div  
        // onMouseOver={(e)=>{
        //     e.target.style.backgroundColor = "yellow";
        // }}

        onMouseEnter={hadnleOnMounseEnter}

        onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "";
        }}

        > This is My Div</div>
    </>
  )
}

export default EventTask1;

// synthetic event 
// Event handling in different ways

// #1. Directly using arrow fuction inside a event 
// eg. onMouseLeave={(e)=>{
//     e.target.style.backgroundColor = "green";
// }}

//#2. using another function to do that without argrument
// eg. onMouseEnter={hadnleOnMounseEnter}

//#3 Using another function with argument
// eg. let hadnleOnMounseEnter = (e, a)=>{
//     e.target.style.backgroundColor = "Red";
//     console.log(e);
//     console.log(a);
// };
// onMouseEnter={(e)=>{hadnleOnMounseEnter(e, 10)}}
