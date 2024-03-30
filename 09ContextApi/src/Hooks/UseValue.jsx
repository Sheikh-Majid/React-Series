import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
    const [value, setValue] = useState(0);

    const increment = () => {
        if (value == 20) {
           alert("Please Decrease the value")
        } else {
             setValue(value + 1);
       }
    }
    const decrement = () => {
        if (value == 0) {
            alert("Please Increase the value")
        } else {
             setValue(value - 1);
        }
    }
    
    return (
        <MyContext.Provider value={{value , increment , decrement}}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContext, MyProvider };
