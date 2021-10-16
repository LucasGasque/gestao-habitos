import { LoginProvider } from "./Login/Login"
import { RegisterProvider } from "./register/Register"

const Providers = ({children}) => {
    return(
        <RegisterProvider>
            <LoginProvider>
                {children}
            </LoginProvider>
        </RegisterProvider>
    );
};

export default Providers
