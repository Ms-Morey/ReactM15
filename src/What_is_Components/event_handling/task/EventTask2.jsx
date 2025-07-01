import React from 'react'

const EventTask2 = () => {
    let hadnleOnMounseEnter = (e, a)=>{
        e.target.style.backgroundColor = "Red";
        console.log(e);
        console.log(a);
    };
  return (
    <>
        <div  
        // onMouseOver={(e)=>{
        //     e.target.style.backgroundColor = "yellow";
        // }}

        onMouseEnter={(e)=>{hadnleOnMounseEnter(e, 10)}}

        onMouseLeave={(e)=>{
            e.target.style.backgroundColor = "green";
        }}

        > This is My Div</div>
    </>
  )
}

export default EventTask2;