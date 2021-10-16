import { LoginProvider } from "./LoginProvider"

const Providers = ({children}) => {
    return(
        <LoginProvider>
            {children}
        </LoginProvider>
    );
};

export default Providers