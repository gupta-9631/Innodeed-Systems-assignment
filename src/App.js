import "./App.css";
import Cars from "./api/cars.json";
import CarPage from "./components/CarPage";
import { useRef, useState } from "react";

function App() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
  };
  return (
    <>
      <div className="app" ref={scrl} onScroll={scrollCheck}>
        {Cars.map((item) => (
          <CarPage
            key={item.id}
            type={item.bodyType}
            name={item.modelName}
            modelType={item.modelType}
            carImage={item.imageUrl}
          />
        ))}
      </div>
      <div className="app-btn_container">
        <button className="left-btn button" onClick={() => slide(-400)}>
          <img src="./images/chevron-circled.svg" alt="Right Button" />
        </button>
        <button className="right-btn button" onClick={() => slide(+400)}>
          <img src="./images/chevron-circled.svg" alt="Left Button" />
        </button>
      </div>
    </>
  );
}

export default App;
