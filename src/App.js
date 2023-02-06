import React, { createContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { MemberList } from "./component/Collection/Collection";
import Home from "./component/Home/Home";

/********* Export data collection to all section part *************/
export const Data = createContext();
/*****************************************************************/

const App = () => {
  const [member, setMember] = useState(MemberList);

  return (
    <Data.Provider value={{ member, setMember }}>
      <BrowserRouter>
        <div className="App">
          <Home />
        </div>
      </BrowserRouter>
    </Data.Provider>
  );
};

export default App;
