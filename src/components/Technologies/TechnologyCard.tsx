import type IData from "../../type";
import { FaStar } from "react-icons/fa";

interface TechnologyCardProps {
  technology: IData;
  stack: IData[];
  handleAddToStack: (technology: IData) => void;
}

const TechnologyCard = ({
  technology,
  stack,
  handleAddToStack,
}: TechnologyCardProps) => {
  return (
    <div className="card border border-gray-200 bg-base-100 p-4 shadow-sm">
  
      <div className="flex items-center justify-between">
        <img src={technology.icon} alt={technology.name} className="h-8 w-8" />

        <span className="badge badge-info bg-green-200">{technology.badge}</span>
      </div>


      <h2 className="mt-4 text-lg font-bold">{technology.name}</h2>


      <p className="mt-2 text-sm  text-gray-500">
        {technology.description}
      </p>


      <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3">
        <span className="badge badge-ghost">{technology.category}</span>

        <span className="text-xs text-gray-500">{technology.difficulty}</span>

        <span className="text-sm text-yellow-500"><FaStar /> {technology.rating}</span>
      </div>

      <button
  onClick={() => handleAddToStack(technology)}
  className="btn mt-4 w-full bg-gray-900 text-white"
>
  Add to Stack
</button>
    </div>
  );
};

export default TechnologyCard;
