import { RegisterProvider } from "./RegisterProvider"

const Providers = ({children}) => {
    return(
        <RegisterProvider>
            {children}
        </RegisterProvider>
    );
};

export default Providers