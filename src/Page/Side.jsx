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
import group from '../img/Mask group (1).png'
import  elleps  from '../img/Ellipse 77.png'
import left from '../img/akar-icons_arrow-left.png'
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
    <div className="bg-card ">
       <div className='flex text-text bg-card   fixed-left hidone lg:viseable'>
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
      <div className='rounded-3xl bg-gray relative  '> 
      <img src={group} className=""/>
      <p className='absolute top-5 font-bold left-5 '>50% Discount!</p>
<p className='absolute top-14 text-sm pr-5 left-5 '>Get a discount on certain days and don’t miss it.</p>
<img src={elleps} className="absolute top-32 text-sm pr-5 left-5 animate-bounce"/>
<img src={left} className="absolute top-32 text-sm py-1.5 left-7 animate-bounce"/>

</div>
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
