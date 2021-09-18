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
        <>
          <Section top="2.8rem" id="novedades">
            <TitleSection variant="h2" section="Criadero">
              Novedades
            </TitleSection>
          </Section>
          <Carrousel data={[1,2,3,4]} />
        </>

      {dogs.puppy.length && (
        <>
          <Section top="2.8rem" id="ejemplares">
            <TitleSection variant="h2" section="Ejemplares">
              Cachorros
            </TitleSection>
          </Section>
          <Carrousel data={dogs.puppy} type="cachorro" />
        </>
      )}

      {dogs.male.length && (
        <>
          <Section>
            <TitleSection variant="h2" separator={false}>
              Machos
            </TitleSection>
          </Section>
          <Carrousel data={dogs.male} type="macho" />
        </>
      )}

      {dogs.female.length && (
        <>
          <Section>
            <TitleSection variant="h2" separator={false}>
              Hembras
            </TitleSection>
          </Section>
          <Carrousel data={dogs.female} type="hembra" />
        </>
      )}
    </>
  );
};

export default CarrouselSection;
