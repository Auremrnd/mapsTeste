import React, {Component} from 'react';
import {
  Container,
  TyperTitle,
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
        <TyperTitle>Caroneiro</TyperTitle>
        <TypeDescription>Pegar Carona</TypeDescription>

        <TypeImage source={uberx} />
        <TyperTitle>Bora Aí</TyperTitle>
        <TypeDescription>R$ 3,00</TypeDescription>

        <RequestButton onPress={() => {}}></RequestButton>
        <RequestButtonText>SOLICITAR CARONA</RequestButtonText>
      </Container>
    );
  }
}
