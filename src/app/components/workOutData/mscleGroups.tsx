import React from 'react';

const MscleGroups = ({exercise} :{exercise:string}) => {
    return (
        <div>
            <span className="rounded-full bg-[#C2F800] px-3 py-1 text-[10px] font-bold uppercase text-black">
                {exercise}
            
          </span>
            
        </div>
    );
};

export default MscleGroups;