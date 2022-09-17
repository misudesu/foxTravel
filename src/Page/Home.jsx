import React from 'react'
import search from '../img/akar-icons_search.png'
import notification from '../img/Notification.png'
import card from '../img/Rectangle 1901.png'
import image1 from '../img/Rectangle 1907.png'
import image2 from '../img/Rectangle 1908.png'
import image3 from '../img/Rectangle 1907 (1).png'
import rupee from '../img/noun-rupee-842807 1 (1).png'
import rupee1 from '../img/noun-rupee-842807 1 (2).png'
import rupee2 from '../img/noun-rupee-842807 1.png'

import mimage1 from '../img/Rectangle 1911 (1).png'
import mimage2 from '../img/Rectangle 1911 (2).png'
import mimage3 from '../img/Rectangle 1911.png'
import mimage4 from '../img/Rectangle 1911 (3).png'
import location from '../img/fa6-solid_location-dot.png'


export default function Home() {
    const file={
Visa:[
    {image:image1,title:"Bali",start:'Starting at',pric:'19,600',icon:rupee,color:'#D1F366',textcol:"rgb(0 0 0)"}
, {image:image2,title:"Dubai",start:'Starting at',pric:'21,700',icon:rupee1,color:'#1C1F37',textcol:'rgb(255 255 255)'}
, {image:image3,title:"Maldives",start:'Starting at',pric:'11,300',icon:rupee1,color:'#1C1F37',textcol:'rgb(255 255 255)'}
],
most:[
    {image:mimage1,title:"Kerala",start:'India',pric:'248',icon:rupee2,color:'#D1F366',textcol:"rgb(0 0 0)"}
    , {image:mimage2,title:"Sukhothai Old City",start:'Thalind',pric:'248',icon:rupee2,color:'#1C1F37',textcol:'rgb(255 255 255)'}
    , {image:mimage3,title:"Eiffel Tower Tour",start:'Paris',pric:'248',icon:rupee2,color:'#1C1F37',textcol:'rgb(255 255 255)'}
    , {image:mimage4,title:"Kashmir",start:'India',pric:'248',icon:rupee2,color:'#1C1F37',textcol:'rgb(255 255 255)'}
   
]
    }
  return (
    <div className='bg-bg text-text pr-5 pt-8 pl-8'>
  <div  className='flex'>
  <div className='flex bg-card gap-x-4 p-1  items-center rounded-md '>
<img className='w-5 h-5 ml-3' src={search}/>
<input type="text"   
class="truncate text-white placeholder:hover:text-bnt bg-card rounded-md grow w-96 mt-1 block  px-3 py-2   text-sm shadow-sm placeholder-slate-400" placeholder='Search for your favourit Destination'/>
    <button type="submit" class="inline-flex justify-center rounded-md  bg-bnt py-3 px-4 text-sm font-medium  shadow-sm  truncate hover:text-bg">
      Search</button>   
        </div>
        <img className=' ml-5' src={notification}/>
       
  </div>
<p className='font-bold text-white text-xl pt-5'>Hello Anni!</p>
<p>Welcome back and explore the world.</p>
<div className='relative font-bold mt-3'>
    <h1 className='text-white'>Easy Visa Destinations</h1>
    <p className='absolute top-0 right-0 text-bnt'>View All</p>
    <div className='flex  gap-x-4'>

{file.Visa.map((data,index)=>(
   <div key={index} className="truncate hover:bg-hover hover:text-bnt mt-5 bg-card rounded-3xl   ">
    <img src={data.image} className="p-3 w-52 h-44"/>
    <p className="mx-5 pt-1 font-bold " style={{ color:'rgb(255 255 255)'}}>{data.title}</p>
    <hr/>
    <div style={{backgroundColor: data.color, color:data.textcol}}  className=' relative rounded-b-2xl pt-2 pl-5'>
    <p className=''>{data.start}  </p>
   
    <div className=' absolute flex  top-2 right-2 text-white text-sm'  >
    <img src={data.icon} className='' /> 
    <p >{data.pric}</p>

    </div>
        </div>
    </div>
))}
    </div>
</div>
{/* next section */}
<div className='relative text-text font-bold mt-3  '>
    <div className='flex gap-x-8 mt-8'>
    <h1 className='text-white truncate hover:text-bnt'>Most Popular</h1>
    <p className='truncate hover:text-bnt'>Special Offers</p>
    <p className='truncate hover:text-bnt '>Near Me</p>
    </div>
    <div className='grid grid-cols-2  gap-x-4'>

{file.most.map((data,index)=>(
    <a href="#" class="group block     ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
 
   <div key={index} className="truncate hover:bg-hover hover:text-bnt flex mt-5 bg-card  rounded-3xl ">
    <img src={data.image} className="p-3 w-24 h-24"/>
    <div className='p-3'>
   
    <p >{data.title}</p>
    <div className='flex text-white gap-x-2'>
     <img src={location} className='w-3 my-2 h-3' /> 
   
    <p className='group-hover:text-white text-sm font-semibold'>{data.start}  </p>
    </div>
    <div className='flex text-white'> <img src={data.icon} className='' /> 
    <p >{data.pric}</p> <span>/Day</span>
</div>
   
        </div>
    </div>
    </a>
))}
    </div>
</div>

        </div>
  )
}
