
"use client";

import { createContext, ReactNode, useContext, useState } from "react";
import IWorkOutType from "@/app/types/type";

interface IWorkoutContextType {
  plan: IWorkOutType[];
  saved: IWorkOutType[];

  addToPlan: (workout: IWorkOutType) => void;
  saveForLater: (workout: IWorkOutType) => void;

  removeFromPlan: (workoutId: number) => void;
  removeFromSaved: (workoutId: number) => void;
}

const WorkoutContext = createContext<IWorkoutContextType | null>(null);

export const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);
  const [saved, setSaved] = useState<IWorkOutType[]>([]);

  const addToPlan = (workout: IWorkOutType) => {
    const alreadyAdded = plan.some(
      (item) => item.id === workout.id
    );

    if (alreadyAdded) {
      return;
    }

    setPlan((previousPlan) => [
      ...previousPlan,
      workout,
    ]);
  };

  const saveForLater = (workout: IWorkOutType) => {
    const alreadySaved = saved.some(
      (item) => item.id === workout.id
    );

    if (alreadySaved) {
      return;
    }

    setSaved((previousSaved) => [
      ...previousSaved,
      workout,
    ]);
  };

  const removeFromPlan = (workoutId: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (item) => item.id !== workoutId
      )
    );
  };

  const removeFromSaved = (workoutId: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter(
        (item) => item.id !== workoutId
      )
    );
  };

  return (
    <WorkoutContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        saveForLater,
        removeFromPlan,
        removeFromSaved,
      }}
    >
      {children}
    </WorkoutContext.Provider>
  );
};

export const useWorkout = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error(
      "useWorkout must be used inside WorkoutProvider"
    );
  }

  return context;
};