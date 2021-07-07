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

import Icon1 from '../../../resources/landing/images/svg1.svg';
import Icon2 from '../../../resources/landing/images/svg1.svg';
import Icon3 from '../../../resources/landing/images/svg1.svg';

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>
            We help you get a better book and incrtease your income
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>
            We help you get a better book and incrtease your income
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Some Benefits</ServicesH2>
          <ServicesP>
            We help you get a bsadfasdfasdfasdfadsfasdfsadfasdetter book and incrtease your income
          </ServicesP>
        </ServicesCard>
  
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
