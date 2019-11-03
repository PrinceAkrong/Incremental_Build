import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

import { Card as CardWrapper } from '../ui';

const ImageContainer = styled.div`
  position: relative;
  padding-bottom: 30%;
`;

const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
`;

const Title = styled.h2`
  margin-top: 1.8rem;
  font-size: 3.4rem;
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 600;
  color: ${({ theme }) => theme.color.font};
  letter-spacing: -0.748px;
`;

const Description = styled.p`
  font-size: 2.4rem;
  margin-top: 1rem;
  color: ${({ theme }) => theme.color.fontLight};
  font-family: ${({ theme }) => theme.font.contentSans};
  font-weight: 300;
`;

const MetaWrapper = styled.div`
  font-family: ${({ theme }) => theme.font.contentSans};
  font-size: 1.6rem;
  font-weight: 300;
  color: ${({ theme }) => theme.color.font};

  display: flex;

  margin-top: 2rem;
  justify-content: flex-end;
  align-items: center;
`;

const MetaText = styled.p`
  margin-left: 8px;
`;

const Card = ({ image, title, description, date, timeToRead, slug }) => {
  const { t } = useTranslation();
  return (
    <CardWrapper>
      <Link to={slug}>
        <ImageContainer>
          <Image src={image} width={700} height={210} />
        </ImageContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Link>
      <MetaWrapper>
        <MetaText>{date}</MetaText>
        <MetaText>.</MetaText>
        <MetaText>{t('blog.readTime', { minutes: timeToRead })}</MetaText>
      </MetaWrapper>
    </CardWrapper>
  );
};

export default Card;
