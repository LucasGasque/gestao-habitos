import { Container, Ondas, Box, Img, Article } from "./style";
import lucas from '../../img/devs/lucas.jpg'
import DevInfo from '../../components/DevInfo/index'

const Home = () => {

  const devs = [
    {name: 'Gyl Monteiro', img: 'https://ca.slack-edge.com/TQZR39SET-U01SDMECLGZ-d40f9dbb46b7-512' ,linkedin: 'https://www.linkedin.com/in/gyl-monteiro-dos-santos-73783b31/' , github: 'https://github.com/gylmonteiro'},
    {name: 'Heric Felix', img: 'https://ca.slack-edge.com/TQZR39SET-U02342JTFRQ-322ef95a552e-512' ,linkedin: 'https://www.linkedin.com/in/hericfelix/' , github: 'https://github.com/hericfelix'},
    {name: 'Lucas Gasque', img: lucas ,linkedin:'https://www.linkedin.com/in/lucasgasque/' , github: 'https://github.com/LucasGasque'},
    {name: 'Pedro Kopsch', img: 'https://ca.slack-edge.com/TQZR39SET-U023KGX868Y-272454b993fa-512' ,linkedin: 'https://www.linkedin.com/in/pedro' , github: 'https://github.com/kopsch'},
  ]

  return (
    <Container>
      <Box>
        <h1>Pequenas mudanças geram grandes resultados!</h1>
        <Img src='' alt='img'/>
      </Box>
      <Box>
        <h2>Crie habitos</h2>
        <Img src="" alt="img" />
        <Article>
          <h2>Crie habitos</h2>
          <p>Crie cards para cada hábito que deseja desenvolver, e acompanhe seu desempenho com o passar dos dias.</p>
        </Article>
      </Box>
      <Ondas/>
      <Box>
        <h2>Participe de grupos</h2>
        <Img src="" alt="img" />
        <Article>
          <h2>Participe de grupos</h2>
          <p>Entre em grupos com pessoas que possuem metas similares às suas, e se impulsionem juntos para alcançar os objetivos definidos pelo grupo.</p>
        </Article>
      </Box>
      <Ondas/>
      <Box>
        <h2>Mude sua vida</h2>
        <Img src="" alt="img" />
        <Article>
          <h2>Mude sua vida</h2>
          <p>Crie cards para cada hábito que deseja desenvolver, e acompanhe seu desempenho com o passar dos dias.</p>
        </Article>
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
