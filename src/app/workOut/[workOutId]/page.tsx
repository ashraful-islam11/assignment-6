
import IWorkOutType from "@/app/types/type";
import Image from "next/image";
import WorkoutActions from "@/app/components/workOutData/WorkoutActions";

interface IParamsType {
  params: Promise<{ workOutId: string }>;
}

const WorkOutDetailsPage = async ({ params }: IParamsType) => {
  const { workOutId } = await params;

  const response = await fetch(
    `https://api.api-store.workers.dev/api/fitlog/${workOutId}`
  );

  const data: IWorkOutType = await response.json();

  const {
    image,
    name,
    description,
    muscleGroups,
    equipment,
    difficulty,
    sets,
    reps,
    duration,
    caloriesBurned,
    rating,
    instructions,
  } = data;

  return (
    <section className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
      <div className="grid gap-6 rounded-2xl border border-[#242932] bg-[#0D0F13] p-3 sm:p-5 lg:grid-cols-[450px_1fr]">
        
        {/* Image */}
        <div className="relative h-[340px] w-full overflow-hidden rounded-lg sm:h-[400px] lg:h-[450px]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          
          {/* Title & Description */}
          <div>
            <h1 className="text-2xl font-bold uppercase leading-tight text-white sm:text-3xl">
              {name}
            </h1>

            <p className="mt-1 max-w-2xl text-[11px] leading-4 text-[#8B919B]">
              {description}
            </p>
          </div>

          {/* Muscle Groups */}
          <div className="mt-3 flex flex-wrap gap-2">
            {muscleGroups.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#C2F800] px-3 py-1 text-[9px] font-bold uppercase text-black"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Key Specs */}
          <div className="mt-4 overflow-hidden rounded-lg border border-[#252A33] bg-[#15181E]">
            
            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Equipment
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {equipment}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Difficulty
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {difficulty}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Sets
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {sets}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Reps
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {reps}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Duration
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {duration}
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-[#252A33] px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Calories
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {caloriesBurned} kcal
              </span>
            </div>

            <div className="flex items-center justify-between px-3 py-2.5">
              <span className="text-[9px] uppercase tracking-wide text-[#737A86]">
                Rating
              </span>
              <span className="text-[10px] text-[#D1D5DB]">
                {rating}
              </span>
            </div>

          </div>

          {/* Instructions */}
          <div className="mt-4">
            <h2 className="text-[10px] font-bold uppercase tracking-wide text-white">
              Instructions
            </h2>

            <ol className="mt-2 space-y-1.5">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="text-[9px] leading-4 text-[#9CA3AF]"
                >
                  {index + 1}. {instruction}
                </li>
              ))}
            </ol>
          </div>

          {/* Buttons */}
          <WorkoutActions workout={data} />

        </div>
      </div>
    </section>
  );
};

export default WorkOutDetailsPage;
