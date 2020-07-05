import styled from "styled-components";

export const CollectionPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media screen and (max-width: 800px) {
    align-items: center;
  }
`;

export const TitleContainer = styled.h1`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
  &:hover {
    color: grey;
  }
  @media screen and (max-width: 800px) {
    text-align: center;
    margin-bottom: 15px;
  }
`;

export const ViewMoreText = styled.span`
  font-size: 19px;
  margin: 0 0 25px 7px;
  @media screen and (max-width: 800px) {
    display: block;
    margin: -5px 0 0 0;
    text-align: center;
  }
`;

export const PreviewContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
  }
`;
