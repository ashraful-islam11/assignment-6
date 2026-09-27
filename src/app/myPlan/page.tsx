import React from 'react';

const MyPlanPage = () => {
    return (
        <section className=' container mx-auto px-7 py-10  '>
             {/* my plan heading :  */}
            <div className='pb-6 '>
            <h2 className='text-3xl font-bold font-serif text-[#ffffff] mb-2 '>MY PLAN </h2>
            <p className='text-sm text-[#8A92A0] '>Cap of five lifts for today. Finish them, then load more.</p>
           </div>

           {/* my plan stats :  */}
           <div className="stats w-full shadow bg-[#13161D] border border-[#232732] rounded-xl mb-6 ">
                <div className="stat">
                    
                    <div className="stat-title">Exercises</div>
                    <div className="stat-value text-[#CCFF00]">{0} </div>
                    
                </div>

                <div className="stat ">
                   
                    <div className="stat-title">Minutes</div>
                    <div className="stat-value">{0}</div>
                
                 </div>

                <div className="stat">
                    
                    <div className="stat-title">Calories</div>
                    <div className="stat-value">{0}</div>
                
                </div>
          </div>

          {/* tabs :  */}
          {/* name of each tab group should be unique */}
            <div className="tabs tabs-box flex gap-2  w-[20%] ">
            <input type="radio" name="my_tabs_6" className="tab rounded-2xl px-2  " aria-label={`Today’s Plan ${0}`}defaultChecked />

            <input type="radio" name="my_tabs_6" className="tab rounded-xl px-2 " aria-label={`Saved ${0} `}  />
           

           
            </div>


        </section>
    );
};

export default MyPlanPage;
