import Separator from '@shared/Separator';
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';
import Carousel from '@shared/dogs/CarouselDog';
// hook
import usePosts from 'hooks/usePosts';

const CarouselDogs = ({ preloadPosts }) => {
  //const { posts } = usePosts(preloadPosts);

  return (
    <>
      <Section top="2.8rem" id="novedades">
        <TitleSection variant="h2" section="Criadero">
          Novedades
        </TitleSection>
      </Section>
      {/* <Carousel data={posts} /> */}
    </>
  );
};

export default CarouselDogs;
