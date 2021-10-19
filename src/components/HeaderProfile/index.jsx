import { Container } from "./style";
import { BsFillGearFill } from 'react-icons/bs'
import { useContext } from "react";
import { LoginContext } from "../../providers/Login/Login";

const HeaderProfile = () => {

  const { avatar } = useContext(LoginContext);

  return( 
    <Container>
      <img src={avatar} alt='avatar'/>
      <button>
        <BsFillGearFill
          size='1.5em'
        />
      </button>
    </Container>
  );
};

export default HeaderProfile;
