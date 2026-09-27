
"use client";

import IWorkOutType from "@/app/types/type";
import { useWorkout } from "@/app/context/Provider";

import { BiSolidCalendarPlus } from "react-icons/bi";
import { MdBookmarkBorder } from "react-icons/md";

interface IWorkoutActionsProps {
  workout: IWorkOutType;
}

const WorkoutActions = ({
  workout,
}: IWorkoutActionsProps) => {
  const {
    addToPlan,
    saveForLater,
  } = useWorkout();

  const handleAddToPlan = () => {
    addToPlan(workout);
  };

  const handleSaveForLater = () => {
    saveForLater(workout);
  };

  return (
    <div className="mt-4 flex flex-wrap gap-2">
      <button
        onClick={handleAddToPlan}
        className="
          flex items-center gap-1.5
          rounded-md
          bg-[#C2F800]
          px-3 py-2
          text-[9px]
          font-bold
          text-black
          transition
          hover:bg-[#b7eb00]
        "
      >
        <BiSolidCalendarPlus className="h-3 w-3" />
        Add to today's plan
      </button>

      <button
        onClick={handleSaveForLater}
        className="
          flex items-center gap-1.5
          rounded-md
          border border-[#30353E]
          px-3 py-2
          text-[9px]
          text-[#A1A5AD]
          transition
          hover:border-[#555B65]
          hover:text-white
        "
      >
        <MdBookmarkBorder className="h-3 w-3" />
        Save for later
      </button>
    </div>
  );
};

export default WorkoutActions;
