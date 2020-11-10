import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 80%;
  margin: 0 auto;
  padding-top: 40px;

  @media (max-width: 765px) {
    max-width: 90%;
    flex-direction: column;
    margin: auto;
  }
`;

export const ImageContainer = styled.div`
  margin-right: 140px;
`;

export const Img = styled.img`
  width: 400px;
`;

export const ContentContainer = styled.div`
  @media (max-width: 765px) {
    margin-top: 30px;
  }
`;

export const Heading = styled.h1`
  font-size: 20px;
  font-weight: 200;
`;

export const Price = styled.span`
  margin: 15px 0;
  padding: 10px 0;
  display: block;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
`;

export const Paragraph = styled.p`
  color: #888888;
  font-size: 0.8rem;
  line-height: 25px;
`;

export const SizeContainer = styled.div`
  color: #888888;
`;

export const SmallHeading = styled.h3`
  margin: 15px 0;
`;

export const SizeTiles = styled.div`
  margin: 20px 0;
`;

export const SmallBtn = styled.button`
  border: 1px solid #cccccc;
  background-color: #fff;
  padding: 15px;
  cursor: pointer;
  margin-right: 5px;
  color: #888888;
`;

export const Star = styled.span`
  color: #c90000;
`;
