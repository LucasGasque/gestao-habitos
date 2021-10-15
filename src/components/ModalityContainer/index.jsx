import { Container, ArrowButton, Box } from "./style";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { useState } from "react";

const ModalityContainer = ({title, children}) =>{

    const [show, setShow] = useState(false)

    return(
        <Container>
            <div>
                <p>{title}</p>
            </div>
            <Box
                    show={show}>
                    {children}
            </Box>
            <div>
                <ArrowButton
                    onClick={()=>setShow(!show)}>
                    {!show ? 
                        <KeyboardArrowDownIcon/> : 
                        <KeyboardArrowUpIcon/>
                    }
                </ArrowButton>
            </div>
        </Container>
    )
}

export default ModalityContainer