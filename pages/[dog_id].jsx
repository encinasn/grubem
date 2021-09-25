import TitleSection from '@shared/TitleSection';
import ImageCarrousel from '@feature/dogInfo/ImageCarrousel';
import Link from 'next/link';
//icons
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { HiX } from 'react-icons/hi';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hook
import useTimeAgo from 'hooks/useTimeAgo';
import ButtonExternalLink from '@shared/ButtonExternalLink';
import ItemDetail from '@feature/dogInfo/ItemDetail';
import MetaData from '@shared/MetaDataDog';
// hooks
import useLockBodyScroll from 'hooks/useLockBodyScroll';
// services
import { getDogs, getDogById } from 'firebase/client';

const isPuppy = (timestamp) => {
  const now = Date.now();
  const elapsed = (now - timestamp) / 1000;
  return elapsed < 31556900;
};

const DogPage = ({ dog }) => {
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
  } = dog;

  const backUrl = isPuppy(dateOfBirth)
    ? '/#cachorros'
    : gender === 'female'
    ? '/#hembras'
    : '/#machos';

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

      <div className="container">
        <Link href={backUrl}>
          <a className="background"></a>
        </Link>

        <section className="layout">
          <Link href={backUrl}>
            <a className="close">
              <HiX size="2.8rem" />
            </a>
          </Link>

          <ImageCarrousel data={picture} name={`${first_name} ${last_name}`} />

          <section className="info">
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
        </section>
      </div>

      <style jsx>{`
        div.container {
          position: relative;
          width: 100vw;
          height: 100vh;
        }
        a.background {
          position: absolute;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.9);
        }
        section.layout {
          position: relative;

          display: grid;
          grid-template: auto 1fr / auto;
          width: 100vw;
          height: 100%;
          min-height: 100vh;
          border-radius: var(--normal-radius);
          background-color: var(--background);
          z-index: 200;
        }

        a.close {
          position: absolute;
          top: 16px;
          right: 16px;
          color: var(--white);
          cursor: pointer;
          z-index: 210;
          filter: drop-shadow(0 1px 10px #000000);
        }

        section.info {
          padding: 0 2.8rem 2.8rem;
        }
        .name-gender {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        @media (min-width: ${BREAKPOINTS.tab}) {
          div.container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          section.layout {
            grid-template: 1fr/ 1fr auto;
            width: auto;
            height: 90vh;
            min-height: 0;
            overflow: hidden;
          }

          a.close {
            color: var(--font);
            filter: none;
          }

          section.info {
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

export default DogPage;

export async function getStaticPaths() {
  const dogs = await getDogs(true);

  const paths = dogs.map((dog) => ({
    params: { dog_id: dog.id },
  }));

  return { paths: paths, fallback: false };
}

export async function getStaticProps(context) {
  const dog_id = context.params.dog_id;
  const dog = await getDogById(dog_id);

  return {
    props: {
      dog,
    },
  };
}
