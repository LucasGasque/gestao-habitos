import { Container } from "./style";
import { BsFillGearFill } from "react-icons/bs";
import { useContext, useState } from "react";
import { LoginContext } from "../../providers/Login/Login";
import EditUser from '../EditUser'

const HeaderProfile = ({ title }) => {
  const { avatar, user } = useContext(LoginContext);
  const [ useVisible, setUseVisible] = useState(false)

  return (
    <>
    <Container>
      <img src={avatar} alt="avatar" />
      <h1>{user}</h1>
      <h2>{title}</h2>
      <button>
        <BsFillGearFill 
          onClick={()=>setUseVisible(true)}
          size="1.5em" />
      </button>
    </Container>
    <EditUser
      userVisible={useVisible}
      setUserVisible={setUseVisible}
    />
    </>
  );
};

export default HeaderProfile;
