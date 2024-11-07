// src/components/IngredientList.jsx
const IngredientList = (props) => {
  const {stack, handleAddBurger} = props

    return <ul>
      {stack.map((ingredient, index) => (
        <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
        <button onClick={() => handleAddBurger(ingredient)}>+</button>
        </li>
      ))}
    </ul>;
  };
  
  export default IngredientList;
  