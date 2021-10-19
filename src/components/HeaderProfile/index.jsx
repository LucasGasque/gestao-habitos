import { Container } from "./style";
import { BsFillGearFill } from 'react-icons/bs';
import { useContext } from "react";
import { LoginContext } from "../../providers/Login/Login";

const HeaderProfile = ({title}) => {

  const { avatar, user } = useContext(LoginContext);

  return( 
    <Container>
      <img src={avatar} alt='avatar'/>
      <h1>{user}</h1>
      <h2>{title}</h2>
      <button>
        <BsFillGearFill
          size='1.5em'
        />
      </button>
    </Container>
  );
};

export default HeaderProfile;
