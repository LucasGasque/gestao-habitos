import { LoginProvider } from "./Login/Login";
import { RegisterProvider } from "./register/Register";
import { HabitsProvider } from "./Habits/Habits";
import { GoalsProvider } from "./Goals/Goals";
import { GroupProvider } from "./Group/Group";
import { ActivitiesProvider } from "./Activities/Activities";

const Providers = ({children}) => {
    return(
        <RegisterProvider>
            <LoginProvider>
                <HabitsProvider>
                    <GoalsProvider>
                      <GroupProvider>
                        <ActivitiesProvider>{children}</ActivitiesProvider>
                       </GroupProvider>
                    </GoalsProvider>
                </HabitsProvider>
            </LoginProvider>
        </RegisterProvider>
    );
}

export default Providers;
