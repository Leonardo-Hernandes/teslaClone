import React from 'react';
import useWrapperScroll from '../Model/UseWrapperScroll';
import { useTransform } from 'framer-motion';

import { Container, Header, Logo, Burger, Footer} from './styles';

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo/>
        <Burger/>
      </Header>

      <Footer>
        <ul>
          <li>
            <a href="#">Ui Clone</a>
          </li>
          <li>
            <a href="#">made with Rocketseat Video</a>
          </li>
          <li>
            <a href="#">by Leonardo Hernandes</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay;
