import React from "react";
import { GrLocation } from "react-icons/gr";
import {
  AiOutlineSearch,
  AiOutlineThunderbolt,
  AiOutlineShoppingCart
} from "react-icons/ai";

import MercadoLivreLogo from "../../assets/mercado-livre.png";

import {
  Container,
  LogoContainer,
  Cep,
  SearchContainer,
  Search,
  Tabs,
  SignContainer
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <img src={MercadoLivreLogo} alt="mercado livre" />
        <Cep>
          <GrLocation size={30} color="#000" />
          <span>
            Infrome seu <strong>CEP</strong>
          </span>
        </Cep>
      </LogoContainer>

      <SearchContainer>
        <Search>
          <input
            type="text"
            placeholder="Buscar produtos, marcas e muito mais..."
          />
          <button type="submit">
            <AiOutlineSearch size={20} color="#7b7b7b" />
          </button>
        </Search>

        <Tabs>
          <a href="#">Categorias</a>
          <a href="#">Ofertas do dia</a>
          <a href="#">Histórico</a>
          <a href="#">Supermercados</a>
          <a href="#">Lojas oficiais</a>
          <a href="#">Vender</a>
          <a href="#">Contato</a>
        </Tabs>
      </SearchContainer>

      <SignContainer>
        <div className="message">
          <AiOutlineThunderbolt size={35} color="#000" />
          <span>Aproveite preços incríveis todos os dias</span>
        </div>

        <div className="tabs">
          <AiOutlineShoppingCart size={25} color="#000" />
          <a href="#">Compras</a>
          <a href="#">Entre</a>
          <a href="#">Crie sua conta</a>
        </div>
      </SignContainer>
    </Container>
  );
};

export default Header;
