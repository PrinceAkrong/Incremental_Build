/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React from 'react';
import styled from 'styled-components';

import Layout from '../../components/Layout';
import { BlogGlobalStyle } from '../../styles/blogPost';
import { useIntl } from '../../context/react-intl';
import usesPt from './uses.md';
import usesEn from './uses.en.md';
import { LOCALES } from '../../types/Locales';

const StyledLayout = styled(Layout)``;

const Uses: React.FC = () => {
  const { locale } = useIntl();

  const content = locale === LOCALES.EN ? usesEn : usesPt;

  return (
    <StyledLayout>
      <BlogGlobalStyle />
      <main dangerouslySetInnerHTML={{ __html: content }} />
    </StyledLayout>
  );
};

export default Uses;
