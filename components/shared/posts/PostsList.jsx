import Post from '@shared/posts/Post';
// utils
import { BREAKPOINTS } from 'utils/breakpoints';
// hooks
import usePosts from 'hooks/usePosts';

const PostsList = () => {
  const { posts, loading, error } = usePosts();

  return (
    <>
      <ul>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <style jsx>{`
        @media screen and (min-width: ${BREAKPOINTS.tab}) {
          ul {
            padding: 2rem 12%;
            background-color: var(--grey-100);
          }
        }
        @media screen and (min-width: ${BREAKPOINTS.desktop}) {
          ul {
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: var(--grey-100);
          }
        }
      `}</style>
    </>
  );
};

export default PostsList;
