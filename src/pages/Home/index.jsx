import { Container, Ondas, Box } from "./style";
import lucas from '../../img/devs/lucas.jpg'
import DevInfo from '../../components/DevInfo/index'

const Home = () => {

  const devs = [
    {name: 'Gyl Monteiro', img: '' ,linkedin: '' , github: ''},
    {name: 'Heric Felix', img: '' ,linkedin: '' , github: ''},
    {name: 'Lucas Gasque', img: lucas ,linkedin:'https://www.linkedin.com/in/lucasgasque/' , github: 'https://github.com/LucasGasque'},
    {name: 'Pedro Kopsch', img: '' ,linkedin: '' , github: ''},
  ]

  return (
    <Container>
      <Box>
        <h1>Pequenas mudanças geram grandes resultados!</h1>
        <img src='' alt='img'/>
      </Box>
      <Box>
        <h2>Crie habitos</h2>
        <img src="" alt="" />
        <p>Crie cards para cada hábito que deseja desenvolver, e acompanhe seu desempenho com o passar dos dias.</p>
      </Box>
      <Ondas/>
      <Box>
        <h2>Participe de grupos</h2>
        <img src="" alt="" />
        <p>Entre em grupos com pessoas que possuem metas similares às suas, e se impulsionem juntos para alcançar os objetivos definidos pelo grupo.</p>
      </Box>
      <Ondas/>
      <Box>
        <h2>Mude sua vida</h2>
        <img src="" alt="" />
        <p>Crie cards para cada hábito que deseja desenvolver, e acompanhe seu desempenho com o passar dos dias.</p>
      </Box>
      <Ondas/>
      <Box>
        <h2>Desenvolvido por</h2>
        <ul>
          {devs.map((dev, index)=><DevInfo
            key={index}
            gitHub={dev.github}
            linkedin={dev.linkedin}
            img={dev.img}
            name={dev.name}
          />)}
        </ul>
      </Box>
    </Container>
  );
};

export default Home;
