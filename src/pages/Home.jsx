import { Container, CountryList, Heading, Loader, Section } from 'components';
import { useEffect, useState } from 'react';
import { getCountries } from 'service/country-service';

export const Home = () => {
  const [error, setError] = useState('');
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  
  useEffect(()=>{
  const getData = async () => {
  try {
    const resp = await getCountries()
    setCountries(resp)
    setError('')
  } catch (error) {
    setError(error.message)
    } finally {
        setIsLoading(false)}

  }

  getData()
  
  }, [])


  return (

    <Section>
    <Container>
      {isLoading && <Loader/>}
      {error && <Heading>{error}</Heading>}
       <CountryList countries={countries}/>
    </Container>
  </Section>

  );
};
