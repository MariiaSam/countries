import { useParams } from 'react-router-dom';
import { Section, Container, CountryInfo, Loader, Heading } from 'components';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/country-service';

export const Country = () => {
  const { countryId } = useParams();
  const [error, setError] = useState('');
  const [country, setCountry] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      setError('');

      try {
        const resp = await fetchCountry(countryId);
        setCountry(resp);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [countryId]);


  return (
    <Section>
      <Container>
        {isLoading && <Loader />}
        {error && <Heading>{error}</Heading>}
        <CountryInfo country={country}></CountryInfo>
      </Container>
    </Section>
  );
};
