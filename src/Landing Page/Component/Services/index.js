import React from 'react';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

import Icon1 from '../../../resources/landing/images/books4.jpeg';
import Icon2 from '../../../resources/landing/images/books5.jpg';
import Icon3 from '../../../resources/landing/images/books6.jpg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Get a library card</ServicesH2>
          <ServicesP>
            It's free and easy to get access to our library. Just signup for a new acccount.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Search Catalog</ServicesH2>
          <ServicesP>
            Already have an account? Sign in to access our library and find a book.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Renew Book</ServicesH2>
          <ServicesP>
            Looking to keep the book you already have checked out? Renew your book now.
          </ServicesP>
        </ServicesCard>
  
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
