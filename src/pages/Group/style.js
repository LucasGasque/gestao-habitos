import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 68px;
  background-color: var(--purple);
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
  padding-right: 16px;
  > :last-child {
    color: ${(props) => (!props.isCreator ? "var(--white)" : "none")};
  }
  @media (min-width: 768px) {
    width: calc(100% - 268px);
    height: 120px;
    justify-content: space-between;
    margin-left: 268px;
    align-items: center;
  }
`;

export const ImgContainer = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 5px;
  background-color: var(--grey);
  > img {
    width: 60px;
    height: 60px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    width: 100%;
    display: flex;
    justify-content: ${(props) =>
      props.isCreator ? "space-between" : "flex-start"};
    align-items: center;
    margin-left: 30px;
    padding-right: 15px;
    color: var(--white);

    > :last-child {
      cursor: pointer;
    }
    > div {
      display: flex;
      align-items: center;
      h3 {
        font-weight: normal;
        font-size: 22px;
      }
      div {
        width: 90px;
        height: 90px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--white);
        margin-right: 20px;
        img {
          width: 70px;
          height: 70px;
        }
      }
    }
  }
`;

export const Content = styled.div`
  border-bottom: 3px solid #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 10px;
  gap: 10px;
  > h3 {
    font-weight: 500;
  }
  > p {
    font-size: 12px;
    color: var(--grey);
    width: 230px;
    text-align: left;
  }
  @media (min-width: 768px) {
    width: calc(100% - 268px);
    margin-left: 268px;
    padding: 10px;
    padding-right: 15px;
    padding-left: 30px;
    flex-direction: row-reverse;
    justify-content: space-between;
    h3 {
      display: none;
    }
    p {
      width: 500px;
      font-size: 14px;
    }
  }
`;

export const CardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  padding-bottom: 70px;
  min-height: 200px;
  gap: 10px;
  @media (min-width: 768px) {
    width: calc(100% - 268px);
    margin-left: 268px;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding-left: 30px;
    flex-grow: 1;
    padding-bottom: 0;
  }
  @media (min-width: 1040px) {
    gap: 80px;
  }
`;
