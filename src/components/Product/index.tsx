import React from 'react';

import SellerInfo from '../SellerInfo';
import tshirtImage from '../../assets/tshirt.png';
import ProductAction from '../ProductAction';

import { 
  Container, 
  Row, 
  Panel, 
  Column, 
  Gallery,
  Section,
  Description  
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={tshirtImage} alt="T-Shirt"/>
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};


const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descriçao do produto</h2>

    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare justo non metus egestas aliquet. Sed fringilla nisl et justo varius, id sodales sem maximus. Curabitur vel vestibulum massa, hendrerit fringilla dolor. Cras nec diam interdum, rutrum urna et, fermentum augue.
    <br/>
    <br/>
    Items inclusos: <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    - 1x LED <br/>
    <br/>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare justo non metus egestas aliquet. Sed fringilla nisl et justo varius, id sodales sem maximus. Curabitur vel vestibulum massa, hendrerit fringilla dolor. Cras nec diam interdum, rutrum urna et, fermentum augue.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ornare justo non metus egestas aliquet. Sed fringilla nisl et justo varius, id sodales sem maximus. Curabitur vel vestibulum massa, hendrerit fringilla dolor. Cras nec diam interdum, rutrum urna et, fermentum augue.
    </p>
  </Description>
);

export default Product;
