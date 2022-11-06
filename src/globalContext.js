import React, { createContext } from "react";
const ContextContext = createContext();

const ContextProvider = ({ children }) => {
    const [places, setPlaces] = React.useState(21);
    const [xp, setXp] = React.useState(295);
    const [level, setLvl] = React.useState(2);
    const discover = () => {
        setPlaces(places + 1);
        setXp((xp + 3)%100);
        setLvl(Math.floor(xp/100));
    };
    return (
        <ContextContext.Provider value={{ places, xp, discover, level }}>
            {children}
        </ContextContext.Provider>
    );
};

const withContext = (Child) => (props) => (
    <ContextContext.Consumer>
      {(context) => <Child {...props} {...context} />}
    </ContextContext.Consumer>
  );

export {ContextProvider, withContext, ContextContext};