import { use } from "react";
import type IData from "../../type";

interface TechnologiesProps {
  data: Promise<IData[]>;
}

const Technologies = ({ data }: TechnologiesProps) => {
  const technologies = use(data);

  console.log(technologies);

  return (
    <div>
        <div>
            <h1>Explore the Technologies </h1>
            <p>Pick one technology per category to build your ideal stack.</p>
            <div>
                {technologies.map((technology) => (
                    <div key={technology.id}>
                        <h2>{technology.name}</h2>
                        <p>{technology.description}</p>
                        <img src={technology.icon} alt={technology.name} />
                    </div>
                ))}
            </div>


        </div>

      
    </div>
  );
};

export default Technologies;