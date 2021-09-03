import TitleSection from '@shared/TitleSection';
import ImageCarrousel from './ImageCarrousel';
//icons
import { IoMdFemale, IoMdMale } from 'react-icons/io';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import ButtonExternalLink from '@shared/ButtonExternalLink';
import ItemDetail from './ItemDetail';

const DogInfo = ({ data }) => {
  const {
    picture,
    gender,
    name,
    dateOfBirth = 1630163183,
    selection,
    femaleParent,
    maleParent,
    elbowPlate,
    hipPlate,
    pedigreeUrl = '',
  } = data;
  
  const timeago = useTimeAgo(dateOfBirth);
  const age = timeago.replace('hace', '');

  return (
    <>
      <ImageCarrousel data={picture} name={name} />
      <section>
        <div className="name-gender">
          <TitleSection variant="h3" separator={false} margin="0">
            {name}
          </TitleSection>
          {gender === 'female' ? (
            <IoMdFemale size="2.4rem" color="var(--grey-700)" />
          ) : (
            <IoMdMale size="2.4rem" color="var(--grey-700)" />
          )}
        </div>

        <TitleSection variant="h3" separator={false} margin="0">
          {selection}
        </TitleSection>

        <ItemDetail title="Edad" first>
          {age}
        </ItemDetail>

        <ItemDetail title="Placa de codo">
          {elbowPlate ? 'Si' : 'No'}
        </ItemDetail>
        <ItemDetail title="Placa de cadera">
          {hipPlate ? 'Si' : 'No'}
        </ItemDetail>

        <ItemDetail title="Padre">{maleParent}</ItemDetail>
        <ItemDetail title="Madre">{femaleParent}</ItemDetail>

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
