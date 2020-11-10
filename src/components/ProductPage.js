import React from 'react';
import Button from './Button';

import img from '../assets/classic-tee.jpg';

import {
  PageContainer,
  ImageContainer,
  ContentContainer,
  SizeContainer,
  SmallBtn,
  SizeTiles,
  Star,
  SmallHeading,
  Heading,
  Price,
  Paragraph,
} from './ProductPage.Styles';

function ProductPage() {
  return (
    <>
      <PageContainer>
        <ImageContainer>
          <img src={img} alt='tee-shirt' />
        </ImageContainer>
        <ContentContainer>
          <Heading>Classic Tee</Heading>
          <Price>$75.00</Price>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            ducimus illum pariatur enim repudiandae hic porro corrupti
            voluptatibus at quibusdam, totam quod laboriosam ullam officiis
            beatae corporis voluptate voluptatum quo minima! Exercitationem
            labore laborum officiis ab, rem provident nemo nisi perspiciatis,
            soluta veniam recusandae, aspernatur laboriosam error qui excepturi.
            Nihil.
          </Paragraph>
          <SizeContainer>
            <SmallHeading>
              SIZE <Star>*</Star>
            </SmallHeading>
            <SizeTiles>
              <SmallBtn>S</SmallBtn>
              <SmallBtn>M</SmallBtn>
              <SmallBtn>L</SmallBtn>
            </SizeTiles>
          </SizeContainer>
          <Button />
        </ContentContainer>
      </PageContainer>
    </>
  );
}

export default ProductPage;
