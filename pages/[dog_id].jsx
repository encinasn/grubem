import TitleSection from '@shared/TitleSection';
import ImageCarrousel from '@feature/dogInfo/ImageCarrousel';
import Link from 'next/link';
//icons
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import { HiArrowLeft, HiOutlineShare } from 'react-icons/hi';
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
import Available from '@feature/dogInfo/Available';

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
    available,
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
          <ImageCarrousel data={picture} name={`${first_name} ${last_name}`} />

          <section className="info">
            <div className="actions">
              <Link href={backUrl}>
                <a className="close">
                  <HiArrowLeft size="2.4rem" />
                </a>
              </Link>

              <div className="share">
                Compartir
                <span className="share_icon">
                  <HiOutlineShare size="2rem" />
                </span>
              </div>
            </div>

            <div className="name-gender">
              <TitleSection variant="h1" section="ejemplar" margin="0.4rem">
                {first_name}
              </TitleSection>

              <span className="gender_icon">
                {gender === 'female' ? (
                  <IoMdFemale size="2.4rem" />
                ) : (
                  <IoMdMale size="2.4rem" />
                )}
              </span>
            </div>

            <TitleSection variant="h2" separator={false}>
              {last_name}
            </TitleSection>

            <Available value={available} />

            <ItemDetail title="Selección" first>
              {selection}
            </ItemDetail>

            <ItemDetail title="Edad">{age}</ItemDetail>

            <ItemDetail title="Padre">{maleParent}</ItemDetail>
            <ItemDetail title="Madre">{femaleParent}</ItemDetail>

            <ItemDetail title="Placa de codo">{elbow && 'Si'}</ItemDetail>
            <ItemDetail title="Placa de cadera">{hip && 'Si'}</ItemDetail>

            <div className="link_button">
              <ButtonExternalLink
                path={pedigreeUrl}
                variant="red"
                margin="1.6rem 0 0 0"
                //disabled={!pedigreeUrl}
              >
                Pedigree Database
              </ButtonExternalLink>
            </div>
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
          background-color: var(--background);
          z-index: 200;
        }

        .share,
        a.close {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 3.6rem;

          color: var(--font);
          background-color: var(--background);
          border-radius: 10rem;
          cursor: pointer;
          z-index: 210;
        }
        a.close {
          width: 3.6rem;
        }
        .share {
          padding: 0 1.6rem;
          font-weight: 500;
        }

        section.info {
          padding: 0 2.8rem 2.8rem;
        }

        .name-gender {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
        }
        .gender_icon {
          height: 2.4rem;
          margin-bottom: 1rem;
          color: var(--red);
          opacity: 0.8;
        }

        @media (max-width: ${BREAKPOINTS.tab}) {
          .share,
          a.close {
            position: absolute;
            top: 16px;
          }
          a.close {
            left: 16px;
          }
          .share {
            right: 16px;
          }

          .share_icon {
            display: none;
          }
        }
        @media (min-width: ${BREAKPOINTS.tab}) {
          div.container {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          section.layout {
            grid-template: 1fr / auto 1fr;
            width: 100vw;
            height: 100vh;
            min-height: 0;
            overflow: hidden;
          }

          section.info {
            padding: 2.8rem 6rem 2.8rem;
            height: 100%;
          }

          .actions {
            display: flex;
            justify-content: space-between;
            margin-bottom: 3.2rem;
          }

          a.close,
          .share {
            border: 1px solid var(--border);
          }
          a.close {
          }
          .share {
            font-size: 1.6rem;
          }
          .share_icon {
            height: 2rem;
            margin-left: 0.8rem;
          }
          .gender_icon {
            margin-bottom: 1.6rem;
          }

          .link_button {
            width: 60%;
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
