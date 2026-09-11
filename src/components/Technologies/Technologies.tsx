import { use } from "react";
import type IData from "../../type";
import TechnologyCard from "./TechnologyCard";

interface TechnologiesProps {
  data: Promise<IData[]>;
}

const Technologies = ({ data }: TechnologiesProps) => {
  const technologies = use(data);

  console.log(technologies);

  return (
    <div className="container mx-auto px-4 py-6">
      <div>
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Explore the{" "}
            <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="text-sm text-gray-500">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
              <TechnologyCard technology={technology} key={technology.id} />
            ))}
          </div>

          <div className="w-full lg:w-64">
            <div className="card border border-gray-200 bg-base-100 p-5 shadow-sm">
              <h2 className="text-lg font-bold">Your Stack</h2>

              <p className="text-xs text-gray-400">
                No technologies selected yet.
              </p>

              <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-6 text-center text-xs text-gray-400">
                Your stack is empty.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
