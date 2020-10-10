import React from 'react';

import {
  InformationWrapper,
  Name,
  InfoList,
  InfoItem,
  InfoLink,
} from './styled';

function normalizePhoneNumber(phone: string): string {
  return phone.replace(/\s/g, '');
}

export const Info: React.FC<any> = ({
  full_name,
  phone,
  city,
  email,
  linkedIn,
  github,
  country,
}) => {
  const cityAndCountry = `${city}, ${country}`;

  return (
    <InformationWrapper>
      <Name>{full_name}</Name>
      <InfoList>
        <InfoItem>
          <InfoLink href={`tel:${normalizePhoneNumber(phone!)}`}>
            {phone}
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink
            href={`https://www.google.com/maps/place/${cityAndCountry}`}
          >
            {cityAndCountry}
          </InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={`mailto:${email}`}>{email}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={linkedIn?.url!}>{linkedIn?.display_name}</InfoLink>
        </InfoItem>
        <InfoItem>
          <InfoLink href={github?.url!}>{github?.display_name}</InfoLink>
        </InfoItem>
      </InfoList>
    </InformationWrapper>
  );
};
