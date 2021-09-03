import Separator from '@shared/Separator';
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';
import Carrousel from '@feature/home/Carrousel';
// hook
import useDogs from 'hooks/useDogs';

const CarrouselSection = ({ preloadDogs }) => {
  const { dogs } = useDogs(preloadDogs);

  return (
    <>
      {dogs.male.length && (
        <>
          <Section top="2rem">
            <TitleSection variant="h2" section="ovejeros">
              Machos
            </TitleSection>
          </Section>
          <Carrousel data={dogs.male} type="male"/>
        </>
      )}

      {dogs.female.length && (
        <>
          <Section>
            <Separator />
            <TitleSection variant="h2" separator={false}>
              Hembras
            </TitleSection>
          </Section>
          <Carrousel data={dogs.female} type="female" />
        </>
      )}

      {dogs.puppy.length && (
        <>
          <Section>
            <Separator />
            <TitleSection variant="h2" separator={false}>
              Cachorros
            </TitleSection>
          </Section>
          <Carrousel data={dogs.puppy} type="puppy"/>
        </>
      )}      
    </>
  );
};

export default CarrouselSection;
