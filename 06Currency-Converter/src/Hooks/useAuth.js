import { useState } from "react";


function useAuth() {
    

    const[islogin, setLogin] = useState(false);

    const login = () => {
        setLogin(true);
    };
    const logout = () => {
        setLogin(false);
    };
    return { islogin, login, logout };
}

export default useAuth;
