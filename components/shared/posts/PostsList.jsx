import Post from '@shared/posts/Post';
import Loading from '@shared/Loading';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
import usePosts from 'hooks/usePosts';

const PostsList = ({ preloadPosts }) => {
  const { posts, loading, error } = usePosts(preloadPosts);

  if (loading.get) return <Loading />;

  if (error.get) return <h2>Ocurrio un error inesperado</h2>;

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <style jsx>{`
          ul {
            background-color: var(--background-low);
          }
        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          ul {
            padding: 2rem 12%;
          }
        }
        @media screen and (min-width: ${BREAKPOINTS.desktop}) {
          ul {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
};

export default PostsList;
