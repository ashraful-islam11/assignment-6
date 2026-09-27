
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useWorkout } from "@/app/context/Provider";
import IWorkOutType from "@/app/types/type";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    removeFromPlan,
    removeFromSaved,
    clearPlan,
    clearSaved,
  } = useWorkout();

  const [activeTab, setActiveTab] = useState<
    "plan" | "saved"
  >("plan");

  // Current tab's workouts
  const currentWorkouts: IWorkOutType[] =
    activeTab === "plan" ? plan : saved;

  // Current tab's statistics
  const totalExercises = currentWorkouts.length;

  const totalMinutes = currentWorkouts.reduce(
    (total, workout) => total + workout.duration,
    0
  );

  const totalCalories = currentWorkouts.reduce(
    (total, workout) => total + workout.caloriesBurned,
    0
  );

  // Remove one workout
  const handleRemove = (workoutId: number) => {
    if (activeTab === "plan") {
      removeFromPlan(workoutId);
    } else {
      removeFromSaved(workoutId);
    }
  };

  // Mark all workouts in the active tab as done
  const handleMarkAsDone = () => {
    if (activeTab === "plan") {
      clearPlan();
    } else {
      clearSaved();
    }
  };

  return (
    <section className="container mx-auto px-7 py-10">
      {/* My Plan Heading */}
      <div className="pb-6">
        <h2 className="mb-2 font-serif text-3xl font-bold text-[#ffffff]">
          MY PLAN
        </h2>

        <p className="text-sm text-[#8A92A0]">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      {/* My Plan Stats */}
      <div className="stats mb-6 w-full rounded-xl border border-[#232732] bg-[#13161D] shadow">
        <div className="stat">
          <div className="stat-title text-[#8A92A0]">
            Exercises
          </div>

          <div className="stat-value text-[#CCFF00]">
            {totalExercises}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-[#8A92A0]">
            Minutes
          </div>

          <div className="stat-value text-white">
            {totalMinutes}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-[#8A92A0]">
            Calories
          </div>

          <div className="stat-value text-white">
            {totalCalories}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex w-fit gap-2 rounded-xl bg-[#13161D] p-1">
        <button
          onClick={() => setActiveTab("plan")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activeTab === "plan"
              ? "bg-[#CCFF00] text-black"
              : "text-[#8A92A0] hover:text-white"
          }`}
        >
          Today’s Plan ({plan.length})
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
            activeTab === "saved"
              ? "bg-[#CCFF00] text-black"
              : "text-[#8A92A0] hover:text-white"
          }`}
        >
          Saved ({saved.length})
        </button>
      </div>

      {/* Workout List */}
      {currentWorkouts.length > 0 ? (
        <div className="space-y-4">
          {currentWorkouts.map((workout) => (
            <div
              key={workout.id}
              className="
                flex
                flex-col
                gap-5
                rounded-xl
                border
                border-[#232732]
                bg-[#13161D]
                p-4
                transition
                hover:border-[#CCFF00]/40
                sm:flex-row
                sm:items-center
              "
            >
              {/* LEFT SIDE - Image + Information */}
              <div className="flex min-w-0 flex-1 items-center gap-4">
                {/* Workout Image */}
                <div className="relative h-28 w-40 shrink-0 overflow-hidden rounded-lg">
                  <Image
                    src={workout.image}
                    alt={workout.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Workout Information */}
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold uppercase text-white">
                    {workout.name}
                  </h3>

                  <p className="mt-1 text-xs text-[#8A92A0]">
                    {workout.equipment}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-3 text-xs text-[#A8AFBB]">
                    <span>
                      {workout.duration} min
                    </span>

                    <span>•</span>

                    <span>
                      {workout.caloriesBurned} kcal
                    </span>

                    <span>•</span>

                    <span>
                      ★ {workout.rating}
                    </span>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - X + Actions */}
              <div className="flex shrink-0 flex-col sm:ml-auto ">
                {/* X BUTTON */}
                <button
                  onClick={() => handleRemove(workout.id)}
                  className="
                    ml-auto
                    mb-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-[#30353E]
                    text-sm
                    text-[#8A92A0]
                    transition
                    hover:border-red-500
                    hover:text-red-500
                  "
                  aria-label={`Remove ${workout.name}`}
                  
                >
                  ×
                </button>

                {/* BUTTONS - INLINE */}
                <div className="flex flex-row gap-2">
                  <Link
                    href={`/workOut/${workout.id}`}
                    className="
                      rounded-md
                      border
                      border-[#30353E]
                      px-3
                      py-2
                      text-center
                      text-xs
                      font-semibold
                      text-white
                      transition
                      hover:border-[#CCFF00]
                      hover:text-[#CCFF00]
                    "
                  >
                    View Details
                  </Link>

                  <button
                    onClick={handleMarkAsDone}
                    className="
                      rounded-md
                      bg-[#CCFF00]
                      px-3
                      py-2
                      text-xs
                      font-bold
                      text-black
                      transition
                      hover:bg-[#b8e600]
                    "
                  >
                    ✓ Mark as Done
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="rounded-xl border border-dashed border-[#30353E] bg-[#13161D] px-6 py-16 text-center">
          <h3 className="text-xl font-bold text-white">
            NOTHING HERE YET
          </h3>

          <p className="mx-auto mt-2 max-w-md text-sm text-[#8A92A0]">
            {activeTab === "plan"
              ? "Your plan is empty. Add workouts from the library to build your routine."
              : "You haven't saved any workouts yet. Save workouts from the library for later."}
          </p>

          <Link
            href="/workOut"
            className="
              mt-6
              inline-block
              rounded-md
              bg-[#CCFF00]
              px-5
              py-2.5
              text-xs
              font-bold
              text-black
              transition
              hover:bg-[#b8e600]
            "
          >
            GO TO WORKOUTS
          </Link>
        </div>
      )}
    </section>
  );
};

export default MyPlanPage;

