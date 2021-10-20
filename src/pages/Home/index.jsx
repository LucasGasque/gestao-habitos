import { Container, Ondas, Box, Img, Article, BoxMain } from "./style";
import { Button } from "@mui/material";
import lucas from '../../img/devs/lucas.jpg'
import DevInfo from '../../components/DevInfo/index'
import Header from '../../components/Header/index'
import { useHistory } from "react-router";
import jogging from '../../img/svgs/jogging.svg';
import check_box from '../../img/svgs/check_box.svg'

const Home = () => {

  const history = useHistory()
  const devs = [
    {name: 'Gyl Monteiro', img: 'https://ca.slack-edge.com/TQZR39SET-U01SDMECLGZ-d40f9dbb46b7-512' ,linkedin: 'https://www.linkedin.com/in/gyl-monteiro-dos-santos-73783b31/' , github: 'https://github.com/gylmonteiro'},
    {name: 'Heric Felix', img: 'https://ca.slack-edge.com/TQZR39SET-U02342JTFRQ-322ef95a552e-512' ,linkedin: 'https://www.linkedin.com/in/hericfelix/' , github: 'https://github.com/hericfelix'},
    {name: 'Lucas Gasque', img: lucas ,linkedin:'https://www.linkedin.com/in/lucasgasque/' , github: 'https://github.com/LucasGasque'},
    {name: 'Pedro Kopsch', img: 'https://ca.slack-edge.com/TQZR39SET-U023KGX868Y-272454b993fa-512' ,linkedin: 'https://www.linkedin.com/in/pedro-kopsch' , github: 'https://github.com/kopsch'},
  ]

  return (
    <>
      <Header/>
      <Container>
        <BoxMain>
          <span>
            <section>
              <h4>Faça acontecer</h4>
              <h1><strong>Make it</strong> Habit te ajuda a criar novos e poderosos hábitos.</h1>
              <p>Pequenas mudanças geram grandes resultados!</p>
              <Button
                variant='contained'
                sx={{
                  width: '138px',
                  height: '30px',
                  margin: '5px 0',
                  fontWeight: 'bold'
                }}
                onClick={()=>history.push('/register')}>
                Começar!
              </Button>
            </section>
            <Img src={jogging} alt='img'/>
          </span>
        </BoxMain>
        <Box>
          <span>
            <h2>Crie habitos</h2>
            <Img src={check_box} alt="img" />
            <Article>
              <h4>Organize-se!</h4>
              <h2>Crie habitos</h2>
              <p>Crie cards para cada hábito que deseja desenvolver,  e  acompanhe seu desempenho com o passar dos dias.</p>
            </Article>
          </span>
        </Box>
        <Ondas/>
        <Box>
          <span>
            <h2>Participe de grupos</h2>
            <Img src='' alt="img" />
            <Article>
              <h4>Interaja!</h4>
              <h2>Participe de grupos</h2>
              <p>Entre em grupos com pessoas que possuem metas    similares às suas, e se impulsionem juntos para   alcançar   os objetivos definidos pelo grupo.</p>
            </Article>
          </span>
        </Box>
        <Ondas/>
        <Box>
          <span>
            <h2>Mude sua vida</h2>
            <Img src="" alt="img" />
            <Article>
              <h4>Evolua!</h4>
              <h2>Mude sua vida</h2>
              <p>Crie cards para cada hábito que deseja desenvolver,  e  acompanhe seu desempenho com o passar dos dias.</p>
            </Article>
          </span>
        </Box>
        <Ondas/>
        <Box>
          <span>
            <h2>Desenvolvido por</h2>
            <Article>
              <h2>Desenvolvido por</h2>
            </Article>
            <ul>
              {devs.map((dev, index)=><DevInfo
                key={index}
                gitHub={dev.github}
                linkedin={dev.linkedin}
                img={dev.img}
                name={dev.name}
              />)}
            </ul>
          </span>
        </Box>
      </Container>
    </>
  );
};

export default Home;
