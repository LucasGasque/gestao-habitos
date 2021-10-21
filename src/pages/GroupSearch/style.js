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
  }

  li {
    margin: 5px 0;
  }
  > div {
    width: 100%;
    span {
      margin: 0 auto;
    }
  }

  @media (min-width: 768px) {
    padding-left: 268px;
  }
`;

export const SearchBox = styled.div`
  height: 68px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple);

  h1 {
    display: none;
  }

  @media (min-width: 768px) {
    height: 156.567px;
    flex-direction: column;
    justify-content: space-evenly;

    h1 {
      display: block;
      color: var(--white);
    }
  }
`;
