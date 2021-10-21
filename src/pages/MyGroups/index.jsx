import {Redirect} from 'react-router-dom'
import { LoginContext } from "../../providers/Login/Login";
import {useContext} from 'react'


const MyGroups = () => {
    const { authenticated } = useContext(LoginContext);

    if (!authenticated) return <Redirect to="/login" />;

    return(
        <>
        </>
    );
};

export default MyGroups