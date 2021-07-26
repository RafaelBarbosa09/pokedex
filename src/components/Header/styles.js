import styled from "styled-components";

export const Container = styled.header`
    background: var(--header-bg);
    height: 8rem; 
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .3rem;
  background: var(--card-body);
  border-radius: .5rem;
  width: 100%;
  margin: 0 20rem;

  @media (max-width: 992px) {
    margin: 3rem;
  }

  @media (max-width: 576px) {
    margin: 1.5rem;
  } 
  
  input {
    width: 100%;
    padding: 0.8rem 0;
    margin-left: 1rem;
    background: transparent;
    border: none;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text);
    &::placeholder {
      color: var(--text);
    }
  }

  svg {
    color: var(--gray);
    height: 1.8rem;
    width: 1.8rem;
  }
`;