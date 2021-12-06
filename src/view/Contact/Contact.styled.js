import styled from "styled-components";

export const Column = styled.div`
  background-image: ${({ theme }) => theme.gradient};
  padding: 10px 20px;
  margin-bottom: 20px;
  margin: 20px auto;
  width: 90%;
  line-height: 1.5;
  color: ${({ theme }) => theme.description};
  & h3 {
    color: ;
  }
  & a {
    color: ${({ theme }) => theme.ahref};
  }
  & textarea {
    color: rgb(94, 97, 252);
    ::placeholder {
      color: ${({ theme }) => theme.description};
    }
    & input {
      background-color: red;
      color: red;
    }
  }

  @media screen and (min-width: 670px) and (max-width: 930px) {
    display: flex;
    width: 48%;
    flex-direction: column;
    padding: 10px;
    &:last-child {
      width: 100%;
      margin: auto;
      margin-top: 20px;
    }
  }
  @media screen and (min-width: 930px) {
    display: flex;
    width: 32%;
    flex-direction: column;
    padding: 10px 20px;
    background-image: ${({ theme }) => theme.gradient};
  }
  @media screen and (max-width: 450px) {
    width: 100%;
  }
`;

export const ContactStyle = styled.div`
  font-size: 1.3rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  &b {
    color: red;
  }
`;
