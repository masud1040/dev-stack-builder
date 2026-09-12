import { Suspense, useState } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import type IData from "./type";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/footer";

const DataPromise = async (): Promise<IData[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();

  return data;
};

function App() {
  const data = DataPromise();
  // console.log(data);

  const [stack, setStack] = useState<IData[]>([]);

  const handleAddToStack = (technology: IData) => {
    setStack([...stack, technology]);
  };
 const handleRemoveFromStack = (id: string) => {
  const remainingStack = stack.filter((technology) => technology.id !== id);

  setStack(remainingStack);


};
  const handleRemoveAll = () => {
  setStack([]);
};

  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div>Loading..</div>}>
 <Technologies
  data={data}
  stack={stack}
  handleAddToStack={handleAddToStack}
  handleRemoveFromStack={handleRemoveFromStack}
  handleRemoveAll={handleRemoveAll}
/>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
