import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 65px;
  text-align: center;

  ul {
    margin: 20px 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    list-style: none;
    max-width: 1000px;
    margin: 0 auto;
    padding-top: 68px;
  }

  li {
    margin: 5px 0;
  }

  @media (min-width: 768px) {
    padding-left: 268px;

    ul {
      padding-top: 156.567px;
    }
  }
`;

export const SearchBox = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);
  position: fixed;
  z-index: 1;

  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    height: 155.55px;
    justify-content: space-evenly;
    left: 130px;

    h1 {
      display: block;
      color: var(--white);
    }
  }
`;
