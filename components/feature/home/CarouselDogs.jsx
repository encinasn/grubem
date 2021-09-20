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
          <Section top="2.8rem" id="ejemplares">
            <TitleSection variant="h2" section="Ejemplares">
              Cachorros
            </TitleSection>
          </Section>
          <Carousel data={dogs.puppy} />
        </>
      ) : null}

      {dogs.male.length ? (
        <>
          <Section>
            <TitleSection variant="h2" separator={false}>
              Machos
            </TitleSection>
          </Section>
          <Carousel data={dogs.male} />
        </>
      ) : null}

      {dogs.female.length ? (
        <>
          <Section>
            <TitleSection variant="h2" separator={false}>
              Hembras
            </TitleSection>
          </Section>
          <Carousel data={dogs.female} />
        </>
      ) : null}

      <Section top="2.8rem" id="contacto">
        <Separator />
        <TitleSection variant="h2" separator={false}>
          Contacto
        </TitleSection>
      </Section>
    </>
  );
};

export default CarouselDogs
