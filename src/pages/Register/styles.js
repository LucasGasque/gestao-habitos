import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;
  box-shadow: 0px 0px 1px 2px #f5f5f5;
  border-radius: 5px;
  width: 300px;
  height: 460px;
  @media (min-width: 768px) {
    & {
      width: 400px;
      height: 500px;
    }
  }
`;

export const RegisterTitle = styled.h2`
  font-weight: bold;
  font-size: 22pt;
  margin: 25px 0 10px 0;
  color: var(--purple);
`;

export const Link = styled.span`
  color: var(--grey);
  font-size: 10pt;
  margin: 0 0 30px 0;
  a {
    color: var(--purple);
    cursor: pointer;
    transition: 0.1s;
    text-decoration: none;
  }

  a:hover {
    color: var(--darkPurple);
  }
`;

export const Image = styled.img`
  width: 500px;
  height: 500px;
  display: none;
  @media (min-width: 768px) {
    & {
      display: block;
    }
  }
`;

export const Container = styled.section`
  max-width: 1170px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    & {
      flex-flow: row-reverse nowrap;
      justify-content: space-around;
    }

    ${Image} {
      display:block;
    }
  }
`;
