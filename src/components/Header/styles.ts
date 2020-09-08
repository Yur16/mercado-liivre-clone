import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  background: var(--color-header);
  border-bottom: 1px solid var(--color-border);

  display: grid;
  grid-gap: 50px;
  grid-template-columns: 1fr 4.5fr 2.5fr;

  padding: 8px 80px;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;

  > img {
    width: 100%;
    height: 35px;
  }
`;

export const Cep = styled.div`
  display: flex;
  flex-direction: row;

  max-width: 100px;

  margin-top: 15px;

  > span {
    color: var(--color-black);
    font-size: 11px;
    font-weight: 200;

    > strong {
      font-size: 13px;
      font-weight: 500;
    }
  }
`;

export const SearchContainer = styled.div`
  width: 100%;
`;

export const Search = styled.div`
  display: flex;
  background: #fff;

  width: 100%;
  height: 40px;

  border-radius: 2px;

  border-bottom: 1px solid var(--color-border);
  box-shadow: 0px 2px 3px -3px var(--color-black);

  > input {
    flex: 1;
    padding: 0 15px;
    border: 0;
    font-size: 14px;

    ::placeholder {
      color: var(--color-search-placeholder);
    }
  }

  > button {
    padding: 10px;
    border-left: 1px solid var(--color-border);
  }
`;

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;

  margin-top: 15px;
  padding: 5px 0;

  > a {
    color: var(--color-black);
    font-size: 13px;
    text-decoration: none;

    margin-right: 15px;
    opacity: 0.7;
  }
`;

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;

  .message {
    display: flex;
    align-items: center;
    align-self: flex-end;

    > span {
      font-size: 15px;
      color: var(--color-black);
      font-weight: 500;
    }
  }

  .tabs {
    display: flex;
    align-items: center;
    flex-direction: row-reverse;

    margin-top: 20px;

    > a {
      color: var(--color-black);
      font-size: 13px;
      text-decoration: none;

      margin-right: 15px;
    }
  }
`;
