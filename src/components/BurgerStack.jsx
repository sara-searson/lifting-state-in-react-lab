// `src/components/BurgerStack.jsx`
const BurgerStack = (props) => {
  const {stack, handleRemoveBurger} = props

  return <ul>
    {stack.map((ingredient, index) => (
      <li key={index} style={{ backgroundColor: ingredient.color }}>{ingredient.name}
      <button onClick={() => handleRemoveBurger(ingredient, index)}>-</button>
      </li>
    ))}
  </ul>;
  };
  
  export default BurgerStack;
  