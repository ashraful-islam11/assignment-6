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

  clearPlan: () => void;

  clearSaved: () => void;
}

const WorkoutContext = createContext<IWorkoutContextType | null>(null);

export const WorkoutProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<IWorkOutType[]>([]);

  const [saved, setSaved] = useState<IWorkOutType[]>([]);

  // Add workout to Today's Plan
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

  // Save workout for later
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

  // Remove one workout from Today's Plan
  const removeFromPlan = (workoutId: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (item) => item.id !== workoutId
      )
    );
  };

  // Remove one workout from Saved
  const removeFromSaved = (workoutId: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter(
        (item) => item.id !== workoutId
      )
    );
  };

  // Mark Today's Plan as Done
  // This will clear all workouts from Today's Plan
  const clearPlan = () => {
    setPlan([]);
  };

  // Mark Saved as Done
  // This will clear all workouts from Saved
  const clearSaved = () => {
    setSaved([]);
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
        clearPlan,
        clearSaved,
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