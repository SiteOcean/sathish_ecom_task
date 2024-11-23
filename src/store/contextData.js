const { createContext, useState, useContext } = require("react");

const EcomComtext = createContext();

const ContextComponent = ({ children }) => {
  const [cartData, setCartData] = useState([]);
  const [order, setOrder] = useState(null);

  const addToCart = (pro) => {
    let obj = { ...pro, quantity: 1 };
    setCartData((prev) => [...prev, obj]);
  };

  const increaseQuantity = (id) => {
    setCartData((prev) =>
      prev.map((val) => {
        if (val.id === id) {
          return { ...val, quantity: val.quantity + 1 }; 
        }
        return val; 
      })
    );
  };

  const decreaseQuantity = (id) => {
    setCartData((prev) =>
      prev.map((val) => {
        if (val.id === id) {
          return { ...val, quantity: val.quantity > 1 ? val.quantity - 1 : 1 }; 
        }
        return val;
      })
    );
  };

  const removeFromCart = (id) => {
    setCartData((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <EcomComtext.Provider
      value={{
        cartData,
        addToCart,
        order,
        setOrder,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart
      }}
    >
      {children}
    </EcomComtext.Provider>
  );
};

export default ContextComponent;

export const getContextData = () => {
  return useContext(EcomComtext);
};
