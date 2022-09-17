import React from 'react'
import {BrowserRouter as Router,Route,Routes,Link,useLocation,Nav} from 'react-router-dom'
import img1 from '../img/Bg (1).png'
import img2 from '../img/Group 37026.png'
import img3 from '../img/Group 37039.png'
import bookmark from '../img/noun-bookmark-5116977 1.png'
import setting from '../img/noun-setting-4547794 1.png'
import maile from '../img/noun-mail-4547835 1.png'
import ticket from '../img/noun-ticket-4213441 1.png'
import wallet from '../img/noun-wallet-4547857 1.png'
import logout from '../img/noun-logout-4587969 1.png'
import fovourite from '../img/noun-rupee-842807 1.png'
import Setting from '../img/noun-setting-4547794 1.png'
import offer from '../img/offer.png'
export default function Side() {
    const nav={
side:[
    {icon:ticket,title:"My Tickets"}
    ,{icon:bookmark,title:"Fovourite"}
    ,{icon:maile,title:"Message"}
    ,{icon:wallet,title:"Transaction"}
    ,{icon:Setting,title:"Setting"}
   
],
logout:[{icon:logout,title:"Logout"}],

    }
  return (
    <div >
       <div className='flex text-text bg-card   fixed-left'>
       {/* <img src={img1} className=''/>
        */}
        <div className=' py-5 space-y-10 p-5'>
        <img src={img3}/>
<button className=" hover:file:bg-violet-100"><img src={img2}/></button>
       {nav.side.map((data,index)=>(
        <>
        <div key={index} className='flex gap-x-4'>
            <img src={data.icon}/>
            <p  className=' text-text truncate hover:text-bnt'>{data.title}</p>
        </div>
        </>
       ))}
       <img src={offer} className="pt-10"/>

       {nav.logout.map((data,index)=>(
  <div key={index} className='flex gap-x-4'>
  <img src={data.icon}/>
  <p className='truncate hover:text-bnt'>{data.title}</p>
</div>
       ))}
        </div>
       </div>
    </div>
  )
}
