import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 5%;
  min-height: 300px;
  margin: auto;
  transition: all 0.5s;

  @media screen and (min-width: 500px) {
    padding: 0 10%;
  }
`;
