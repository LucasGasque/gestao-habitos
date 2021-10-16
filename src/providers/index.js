import { LoginProvider } from "./Login/Login"

const Providers = ({children}) => {
    return(
        <LoginProvider>
            {children}
        </LoginProvider>
    );
};

export default Providers