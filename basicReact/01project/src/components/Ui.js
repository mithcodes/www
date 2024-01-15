import './Ui.css';

function Youtube({mobile,name='suraj'}){
    //hm default prps de sakta han
  //hm object banakar key value pass kar sakta haan props k form mai
  let obj={
    mobile:'iphone 12',
    name:'mithlesh'

  }


    return(
        <>
        <div className='bg'>
<div>testt</div>
<div>college</div>

<img src='https://images.pexels.com/photos/14198675/pexels-photo-14198675.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>

<div>{mobile} and shooted by {name}</div>
</div>
<div {...obj}></div>
//object bankar spread operator  k jaisa paas kar sakta han
        </>
    )
    }

export default Youtube