import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

function App() {

const [items, setItems] = useState([]);
const [visible, setVisible] = useState(3);

function showMoreFood() {
setVisible(a=>a+=3)

}






 useEffect(() => {
   fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=british")
     .then((res) => res.json())
     .then((data) => setItems(data.meals));
 }, []);

  return (
    <div className="App">
      <h1 className="header">
        British Meals
      
        <img
         src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Flag_of_Great_Britain_%281707%E2%80%931800%29.svg/2560px-Flag_of_Great_Britain_%281707%E2%80%931800%29.svg.png" />
      </h1>

     <div className="container">
     {items.slice(0,visible).map((item) =>(
      <div className="card"  >
        <div className="image">
          <img src={item.strMealThumb} alt="" />
        </div>
        <p>{item.strMeal}</p>
      </div>
     ))} 
      

      <button onClick={showMoreFood}  >Click For More Food</button>  
      </div>
    </div>
  );
}

export default App;
