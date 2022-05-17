import { useState } from "react";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => { 
  const [userLoginDetails, setUserLoginDetails] = useState({email: 'matheus@gmail.com', password: '123456', userName: 'Matheus', phone:'+55 31 9 9999 9999', nationality: 'Brasileiro', editable: false, color: '#42C1C7'});

  const states = { userLoginDetails };
  const setters = { setUserLoginDetails };
  
  return (
    <GlobalStateContext.Provider value={{ states, setters }}>
      {props.children}
    </GlobalStateContext.Provider>
  );
};
export default GlobalState;
