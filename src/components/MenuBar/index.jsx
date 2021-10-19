import { LoginContext } from '../../providers/Login/Login';
import { Container, Box, Button, GraphButton, GearButton, User } from './style';
import { useContext } from 'react';
import { HiUserGroup, HiUser } from 'react-icons/hi';
import { BiSearchAlt } from 'react-icons/bi';
import { IoMdLogOut } from 'react-icons/io';
import { FiPieChart } from 'react-icons/fi';
import { BsFillGearFill } from 'react-icons/bs';
import { useHistory } from 'react-router';

const MenuBar = () => {

    const { avatar, handleLogOut, user } =  useContext(LoginContext);
    const history = useHistory()

    return(
        <Container>
            <User>
                <img src={avatar} alt="avatar" />
                <h1>{user.username}</h1>
                <GearButton>
                    <BsFillGearFill size='2.5em'/>
                </GearButton>
            </User>
            <Box>
                <GraphButton>
                    <FiPieChart size='2.5em'/>
                    <p>Gráficos</p>
                </GraphButton>
                <Button onClick={()=> history.push('/profile')}>
                    <HiUser size='2.5em'/>
                    <p>Dashboard</p>
                </Button>
                <Button onClick={()=>history.push('group-search')}>
                    <BiSearchAlt size='2.5em'/>
                    <p>Pesquisar</p>
                </Button>
                <Button onClick={()=> history.push('/group')}>
                    <HiUserGroup size='2.5em'/>
                    <p>Meus grupos</p>
                </Button>
                <Button onClick={handleLogOut}>
                    <IoMdLogOut size='2.5em'/>
                    <p>Sair</p>
                </Button>
            </Box>
        </Container>
    );
};

export default MenuBar;