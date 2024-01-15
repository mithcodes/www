import './Videos.css';

function Video(props){
return <div>Video  {props.title}</div>
}

//  function Thumb(props){
//     return <div>{props.add}Thumb</div>
//  }

//ab hmlog props ko destructing karenga or bahut sara elmnt props mai a sakta han

function Thumb({add}){
   return <div>{add}Thumb</div>
}

function  Img(){
   let topics="mithlesh"
   let bg='dark'
   return (
      <>
      {/* fragment k hlp sa bina div k ek sath multiple elemnt likh sakta han */}
      <img
        src="https://i.imgur.com/MK3eW3Am.jpg"
        alt="Katherine Johnson"
      />
      <div className={bg} style={{backgroundColor:'red'}}>{topics}react js tutorial</div>
      </>
      // aha backgroun or styling as objec passes kar raha han
    )
}


//  export default Video agar ek function export karna ho
// export default Video
export {Video,Thumb,Img} 
//agar ek sa jada function export karna ho