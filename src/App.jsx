import './App.css';
import IngredientList from './components/IngredientList';
import BurgerStack from './components/BurgerStack';
import { useState } from 'react';

export const availableIngredients = [
  { name: 'Kaiser Bun', color: 'saddlebrown' },
  { name: 'Sesame Bun', color: 'sandybrown' },
  { name: 'Gluten Free Bun', color: 'peru' },
  { name: 'Lettuce Wrap', color: 'olivedrab' },
  { name: 'Beef Patty', color: '#3F250B' },
  { name: 'Soy Patty', color: '#3F250B' },
  { name: 'Black Bean Patty', color: '#3F250B' },
  { name: 'Chicken Patty', color: 'burlywood' },
  { name: 'Lettuce', color: 'lawngreen' },
  { name: 'Tomato', color: 'tomato' },
  { name: 'Bacon', color: 'maroon' },
  { name: 'Onion', color: 'lightyellow' },
  { name: 'Cheddar Cheese', color: '#FDE18B' },
  { name: 'Swiss Cheese', color: '#F1E1A8' },
];

const App = () => {
  const [burgerStack, setBurgerStack] = useState([])

  const handleAddBurger = (ingredient) => {
    setBurgerStack([...burgerStack, ingredient])
  }

  const handleRemoveBurger = (ingredient) => {
    let index = burgerStack.findIndex((current) => current === ingredient)

    index !==-1 ? 
    setBurgerStack([...burgerStack.slice(0, index), ...burgerStack.slice(index + 1)]) :
    alert("Ingredient not found!")
  }

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <IngredientList stack={availableIngredients} handleAddBurger={handleAddBurger}/>   
        <BurgerStack stack={burgerStack} handleRemoveBurger={handleRemoveBurger}/>
      </section>
    </main>
  );
};

export default App;
