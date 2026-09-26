import React from 'react';
import WorkOutCard from './workOutData/WorkOutCard';
import IWorkOutType from '../types/type';


const GetWorkOutData = async()=> {
    const response = await fetch('https://api.api-store.workers.dev/api/fitlog');
    const data = await response.json();
    return data ;

}

const WorkOutPage = async() => {

        const workOutData : IWorkOutType[] = await GetWorkOutData();
        console.log(workOutData);
    return (
         <section className='container mx-auto '>
            <div className='px-3 mb-8'>
                <h2 className ='text-[30px] font-bold text-[#FFFFFF] font-serif '>THE LIBRARY</h2>
                <p className='text-sm text-[#9CA3AF] '>Twelve lifts covering every major muscle group.</p>
            </div>


           {/* card section :  */}
            <div className='grid grid-cols-3 gap-5 px-3'>
                {
                    workOutData.map( (data)  => <WorkOutCard key={data.id}  data = {data}></WorkOutCard>)
                }

            </div>
                   
         </section>
    );
};

export default WorkOutPage;