import React from 'react'
import calander from '../img/Calendar.png'
import profile from '../img/Notification (1).png'
import vect from '../img/down arrow.png'
import mimage1 from '../img/Rectangle 1911 (1).png'
import mimage2 from '../img/Rectangle 1911 (2).png'
import mimage3 from '../img/Rectangle 1911.png'
import culd from '../img/akar-icons_calendar.png'

export default function Rightside() {
    const file={     
        most:[
            {image:mimage1,title:"Goa",start:'India',date:'16 Apr-20 Apr',icon:culd,color:'#D1F366',textcol:"rgb(0 0 0)"}
            , {image:mimage2,title:"Shimla",start:'Thalind',date:'16 Jan-25 Jun',icon:culd,color:'#1C1F37',textcol:'rgb(255 255 255)'}
            , {image:mimage3,title:"Andaman",start:'Paris',date:'07 Vav-20 Nav',icon:culd,color:'#1C1F37',textcol:'rgb(255 255 255)'}
            
        ]
            }
  return (
    <div className='bg-bg flex-auto py-8'>
    <div className='flex text-white justify-center mx-auto gap-x-4'>
    <div className='rounded-full w-16 h-16 bg-card'>  
      <img src={profile} className='w-16 h-15'/></div>
        <div> 
            <p>misael</p>
            <p>Travel Pro</p>
        </div>
        <img src={vect} className='w-8 h-8'/>
    </div>
    <img src={calander} />
   <div className='relative'>
<p className=' text-white'>Bookings</p>
<p className='text-bnt  absolute top-0 right-5'>View All</p>
   </div>
   <div className='grid grid-cols-1  gap-x-4 pr-5'>

{file.most.map((data,index)=>(
    <a href="#" class="group block      ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
 
   <div key={index} className="truncate hover:bg-hover hover:text-bnt  flex mt-5 bg-card  rounded-3xl  text-white">
    <img src={data.image} className="p-3 w-20 h-20"/>
    <div className='p-3'>
   
    <p >{data.title}</p>
   
    <div className='flex text-white gap-x-4 text-sm'> <img src={data.icon} className='w-5 h-5' /> 
    <p >{data.date}</p> 
</div>
   
        </div>
    </div>
    </a>
))}
  </div>  
    </div>
  )
}
