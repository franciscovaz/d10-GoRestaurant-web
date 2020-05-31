import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, minmax(250px, 1fr));
  grid-gap: 32px;

  object-fit: cover;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
  }
`;
