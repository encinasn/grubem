import Separator from '@shared/Separator';
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';
import Carousel from '@shared/dogs/CarouselDog';
// hook
import useDogs from 'hooks/useDogs';

const CarouselDogs = ({ preloadDogs }) => {
  const { dogs } = useDogs(preloadDogs);

  return (
    <>
      {dogs.puppy.length ? (
        <>
          <Section top="2.8rem" id="cachorros">
            <TitleSection variant="h2" section="Ejemplares">
              Cachorros
            </TitleSection>
          </Section>
          <Carousel data={dogs.puppy} />
        </>
      ) : null}

      {dogs.male.length ? (
        <>
          <Section top="3.2rem" id="machos">
            <TitleSection variant="h2" separator={false}>
              Machos
            </TitleSection>
          </Section>
          <Carousel data={dogs.male} />
        </>
      ) : null}

      {dogs.female.length ? (
        <>
          <Section top="3.2rem" id="hembras">
            <TitleSection variant="h2" separator={false}>
              Hembras
            </TitleSection>
          </Section>
          <Carousel data={dogs.female} />
        </>
      ) : null}

      <Section top="2.8rem" id="contacto">
        <Separator />
        <TitleSection variant="h2" section="Criadero">
          Contacto
        </TitleSection>
      </Section>
    </>
  );
};

export default CarouselDogs;
