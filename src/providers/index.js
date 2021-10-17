import { LoginProvider } from "./Login/Login"
import { RegisterProvider } from "./register/Register"
import { HabitsProvider } from "./Habits/Habits";

const Providers = ({children}) => {
    return(
        <RegisterProvider>
            <LoginProvider>
                <HabitsProvider>
                {children}
                </HabitsProvider>
            </LoginProvider>
        </RegisterProvider>
    );
};

export default Providers
