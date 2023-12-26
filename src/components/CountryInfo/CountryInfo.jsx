import { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { GoBackBtn } from 'components';
import {
  CountryWrapper,
  CountryDescription,
  Flag,
  Image,
  CountryTitle,
  CountryCapital,
  CountryDetail,
  Accent,
} from './CountryInfo.styled';

export const CountryInfo = ({
  country: { flag, capital, country, languages = [], population },
}) => {
  const location = useLocation();
  console.log(location)

  const goBack = useRef(location?.state?.from ?? '/');
  return (
    <>
      <GoBackBtn path={goBack.current}>Go back</GoBackBtn>
      <CountryWrapper>
        <Flag>
          <Image src={flag} alt={capital} />
        </Flag>
        <CountryDescription>
          <CountryCapital>
            Capital: <Accent>{capital}</Accent>
          </CountryCapital>

          <CountryTitle>{country}</CountryTitle>

          <CountryDetail>
            Population: <Accent>{population}</Accent>
          </CountryDetail>

          <CountryDetail>
            Languages: <Accent>{languages.join(', ')}</Accent>
          </CountryDetail>
        </CountryDescription>
      </CountryWrapper>
    </>
  );
};