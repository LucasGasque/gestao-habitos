import { LoginProvider } from "./Login/Login";
import { RegisterProvider } from "./register/Register";
import { HabitsProvider } from "./Habits/Habits";
import { GroupProvider } from "./Group/Group";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <HabitsProvider>
            <GroupProvider>
                {children}
            </GroupProvider>
        </HabitsProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
