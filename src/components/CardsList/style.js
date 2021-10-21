import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  position: relative;
`;

export const FilterContainer = styled.div`
  border-bottom: 1px solid var(--grey);
  width: 100%;
  padding: 5px;
  display: flex;
  justify-content: ${(props) =>
    props.type === "habit" ? "space-between" : "flex-start"};
`;

export const CardContainer = styled.div`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
