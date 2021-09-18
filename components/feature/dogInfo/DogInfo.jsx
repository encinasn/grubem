import TitleSection from '@shared/TitleSection';
import ImageCarrousel from './ImageCarrousel';
//icons
import { IoMdFemale, IoMdMale } from 'react-icons/io';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import ButtonExternalLink from '@shared/ButtonExternalLink';
import ItemDetail from './ItemDetail';
import HeadDogs from '@shared/HeadDogs';

const DogInfo = ({ data }) => {
  const {
    picture = [],
    gender,
    first_name,
    last_name,
    dateOfBirth = 1630163183,
    selection,
    femaleParent,
    maleParent,
    elbow,
    hip,
    pedigreeUrl = '',
  } = data;

  const timeago = useTimeAgo(dateOfBirth);
  const age = timeago.replace('hace', '');

  return (
    <>
      <HeadDogs name={`${first_name} ${last_name}`} image={picture[0]} />

      <ImageCarrousel data={picture} name={`${first_name} ${last_name}`} />
      <section>
        <div className="name-gender">
          <TitleSection variant="h3" separator={false} margin="0">
            {first_name}
          </TitleSection>
          {gender === 'female' ? (
            <IoMdFemale size="2.4rem" color="var(--grey-700)" />
          ) : (
            <IoMdMale size="2.4rem" color="var(--grey-700)" />
          )}
        </div>

        <TitleSection variant="h3" separator={false} margin="0">
          {last_name}
        </TitleSection>

        <ItemDetail title="Selección" first>
          {selection}
        </ItemDetail>

        <ItemDetail title="Edad">{age}</ItemDetail>

        <ItemDetail title="Padre">{maleParent}</ItemDetail>
        <ItemDetail title="Madre">{femaleParent}</ItemDetail>

        <ItemDetail title="Placa de codo">{elbow && 'Si'}</ItemDetail>
        <ItemDetail title="Placa de cadera">{hip && 'Si'}</ItemDetail>

        <ButtonExternalLink
          path={pedigreeUrl}
          variant="primary"
          margin="1.6rem 0 0 0"
        >
          Pedigree Database
        </ButtonExternalLink>
      </section>

      <style jsx>{`
        section {
          padding: 0 2.8rem 2.8rem;
        }
        .name-gender {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      `}</style>
    </>
  );
};

export default DogInfo;
