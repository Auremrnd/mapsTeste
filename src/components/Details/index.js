import React, {Component} from 'react';
import {
  Container,
  TypeTitle,
  TypeDescription,
  TypeImage,
  RequestButton,
  RequestButtonText,
} from './styles';
import uberx from '../../assets/uberx.png';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Borai Aí</TypeTitle>
        <TypeDescription>Caroneiro</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>Pegar Carona</TypeTitle>
        <TypeDescription>R$ 3,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>SOLICITAR CARONA</RequestButtonText>
        </RequestButton>
      </Container>
    );
  }
}
