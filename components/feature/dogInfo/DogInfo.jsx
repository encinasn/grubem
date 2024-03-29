import TitleSection from '@shared/TitleSection';
import ImageCarrousel from './ImageCarrousel';
//icons
import { IoMdFemale, IoMdMale } from 'react-icons/io';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import ButtonExternalLink from '@shared/ButtonExternalLink';
import ItemDetail from './ItemDetail';
import MetaData from '@shared/MetaDataDog';

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

  const description = `Ejemplar ${
    gender === 'female' ? 'hembra' : 'macho'
  } de  ${age} con ${selection}`;

  return (
    <>
      <MetaData
        name={`${first_name} ${last_name}`}
        description={description}
        image={picture[0]}
      />

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

        <TitleSection variant="h3" separator={false}>
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
          disabled={!pedigreeUrl}
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

        @media (min-width: ${BREAKPOINTS.tab}) {
          section {
            padding: 4rem 2.8rem 2.8rem;
            height: 100%;
          }
          .name-gender {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: max-content;
          }
        }
      `}</style>
    </>
  );
};

export default DogInfo;
