import IWorkOutType from '@/app/types/type';
import Image from 'next/image';

import { FaFireFlameCurved, FaRegStar } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import MscleGroups from './mscleGroups';
import Link from 'next/link';

   interface IWorkOutCardType {
    data : IWorkOutType;
   }
const WorkOutCard = ( {data} : IWorkOutCardType) => {

      const {image,equipment, name, duration,caloriesBurned, rating, muscleGroups,id} = data ;
    return (
         <section>
        <Link href={`workOut/${id}`}>
         <div className="w-full max-w-sm overflow-hidden rounded-xl border border-[#292D35] bg-[#15171D] transition duration-300 hover:-translate-y-1 hover:border-[#3A3F49]">
      
      {/* Workout Image */}
      <div className="relative h-57 w-full ">
        <Image
          src={image}
          alt={name}
          fill
         
          className="object-content"
        />
      </div>

      {/* Card Content */}
      <div className="p-5">

        {/* Tags */}
        <div className="mb-3 flex items-center gap-2">
            {
                muscleGroups.map((exercise : string, index : number) => <MscleGroups key ={index} exercise ={exercise}></MscleGroups> )
            }

          {/*  */}
        
         
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold uppercase text-white">
          {name}
        </h3>

        {/* Equipment */}
        <p className="mt-1 text-xs text-[#858A94]">
          {equipment}
        </p>

        {/* Divider */}
        <div className="my-4 h-px bg-[#292D35]" />

        {/* Workout Information */}
        <div className="flex items-center gap-4 text-xs text-[#9CA3AF]">

          {/* Duration */}
          <div className="flex items-center gap-1.5">
            <FiClock  className="h-3.5 w-3.5" />
            <span>{duration} min</span>
          </div>

          {/* Calories */}
          <div className="flex items-center gap-1.5">
            
            <FaFireFlameCurved className="h-3.5 w-3.5" />
            <span>{caloriesBurned} kcal</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1.5">
           
            <FaRegStar  className="h-3.5 w-3.5" />
            <span>{rating}</span>
          </div>

        </div>
      </div>
          </div>
        </Link>

           </section>
    );
};

export default WorkOutCard;