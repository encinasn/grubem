import Separator from '@shared/Separator';
import Section from '@shared/Section';
import TitleSection from '@shared/TitleSection';
import Carousel from '@shared/posts/CarouselPost';
// hook
import usePosts from 'hooks/usePosts';

const CarouselPosts = ({ preloadPosts }) => {
  //const { posts } = usePosts(preloadPosts);

  return (
    <>
      <div className="gradient">
        <Section id="novedades" gradient>
          <TitleSection variant="h2" section="Criadero" margin="1.2rem">
            Novedades
          </TitleSection>
        </Section>
        <Carousel data={[1, 2, 3, 4, 1, 1, 1, 1]} />
      </div>
    </>
  );
};

export default CarouselPosts;
