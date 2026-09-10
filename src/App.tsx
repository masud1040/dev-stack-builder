import { Suspense } from "react";
import "./App.css";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import type IData from "./type";
import Technologies from "./components/Technologies/Technologies";

const DataPromise = async (): Promise<IData[]> => {
  const response = await fetch("/data.json");
  const data = await response.json();

  return data;
};

function App() {
  const data = DataPromise();
  // console.log(data);
  return (
    <>
      <Navbar />
      <Hero />

      <Suspense fallback={<div>Loading...</div>}>
        <Technologies data={data} />
      </Suspense>
    </>
  );
}

export default App;