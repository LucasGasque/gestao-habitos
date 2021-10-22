import { LoginProvider } from "./Login/Login";
import { RegisterProvider } from "./register/Register";
import { HabitsProvider } from "./Habits/Habits";
import { GoalsProvider } from "./Goals/Goals";
import { GroupProvider } from "./Group/Group";
import { ActivitiesProvider } from "./Activities/Activities";
import { CategoriesProvider } from "./Categories/Categories";
import { DeleteModalProvider } from "./DeleteModal/DeleteModal";
import { EditModalProvider } from "./EditModal/EditModal";

const Providers = ({ children }) => {
  return (
    <RegisterProvider>
      <LoginProvider>
        <HabitsProvider>
          <GroupProvider>
            <GoalsProvider>
              <ActivitiesProvider>
                <CategoriesProvider>
                  <DeleteModalProvider>
                    <EditModalProvider>{children}</EditModalProvider>
                  </DeleteModalProvider>
                </CategoriesProvider>
              </ActivitiesProvider>
            </GoalsProvider>
          </GroupProvider>
        </HabitsProvider>
      </LoginProvider>
    </RegisterProvider>
  );
};

export default Providers;
