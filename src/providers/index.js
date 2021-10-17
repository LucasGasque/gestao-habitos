import { LoginProvider } from "./Login/Login"
import { RegisterProvider } from "./register/Register"
import { HabitsProvider } from "./Habits/Habits";
import { GoalsProvider } from "./Goals/Goals";

const Providers = ({children}) => {
    return(
        <RegisterProvider>
            <LoginProvider>
                <HabitsProvider>
                    <GoalsProvider>
                {children}
                </GoalsProvider>
                </HabitsProvider>
            </LoginProvider>
        </RegisterProvider>
    );
};

export default Providers
