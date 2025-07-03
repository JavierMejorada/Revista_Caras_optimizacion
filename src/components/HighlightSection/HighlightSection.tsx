import React from 'react';
import {
  HighlightContainer,
  SectionTitle,
  BenefitsContainer,
  BenefitCard,
  BenefitImage,
  BenefitDescription
} from './styles.ts';

export const HighlightSection = () => (
  <HighlightContainer className="highlight">
    <SectionTitle>¿Por qué suscribirse?</SectionTitle>
    <BenefitsContainer className="highlight-content">
      <BenefitCard className="benefit">
        <BenefitImage 
          src="/img/SI_MEXIS_Angel_Independencia_1920x1080.jpg" 
          alt="Beneficio 1" 
        />
        <BenefitDescription>
          Acceso exclusivo a contenido premium.
        </BenefitDescription>
      </BenefitCard>

      <BenefitCard className="benefit">
        <BenefitImage
          src="/img/quite-the-noise-el-espectacular-anuncio-de-apple-para-promocionar-los-nuevos-airpods.jpg"
          alt="Beneficio 2"
        />
        <BenefitDescription>
          Recibe las últimas noticias y tendencias.
        </BenefitDescription>
      </BenefitCard>

      <BenefitCard className="benefit">
        <BenefitImage
          src="/img/sunset-manhattan-williamsburg-panoramic-photography-wallpaper.jpg"
          alt="Beneficio 3"
        />
        <BenefitDescription>
          Ofertas y promociones especiales solo para suscriptores.
        </BenefitDescription>
      </BenefitCard>
    </BenefitsContainer>
  </HighlightContainer>
);