
"use client";

import { createContext, ReactNode, useContext, useState } from "react";

interface IWorkout {
  id: number;
  name: string;
  image: string;
  category: string[];
  equipment: string;
  duration: number;
  calories: number;
  rating: number;
  difficulty: string;
  sets: number;
  reps: string;
  description: string;
  instructions: string[];
}

interface IWorkoutContext {
  plan: IWorkout[];
  saved: IWorkout[];

  addToPlan: (workout: IWorkout) => void;
  saveForLater: (workout: IWorkout) => void;

  removeFromPlan: (id: number) => void;
  removeFromSaved: (id: number) => void;
}

const WorkoutContext = createContext<IWorkoutContext | null>(null);

export const WorkoutProvider = ({ children }: { children: ReactNode }) => {
  const [plan, setPlan] = useState<IWorkout[]>([]);
  const [saved, setSaved] = useState<IWorkout[]>([]);

  // Add workout to Today's Plan
  const addToPlan = (workout: IWorkout) => {
    const alreadyAdded = plan.some((item) => item.id === workout.id);

    if (alreadyAdded) {
      return;
    }

    setPlan((previousPlan) => [...previousPlan, workout]);
  };

  // Add workout to Saved
  const saveForLater = (workout: IWorkout) => {
    const alreadySaved = saved.some((item) => item.id === workout.id);

    if (alreadySaved) {
      return;
    }

    setSaved((previousSaved) => [...previousSaved, workout]);
  };

  // Remove workout from Today's Plan
  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== id)
    );
  };

  // Remove workout from Saved
  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== id)
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
    throw new Error("useWorkout must be used inside WorkoutProvider");
  }

  return context;
};

