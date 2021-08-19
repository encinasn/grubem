import Post from '@shared/Post';

const data = [
  {
    id: 1,
    timeago: 'Hace 1 dia',
    description: 'Este es el primer post!',
    image: '/images/photos/1.png',
  },
  {
    id: 2,
    timeago: 'Hace 3 dias',
    description: 'Este es el segundo post!',
    image: '/images/photos/1.png',
  },
];

const PostsList = () => {
  return (
    <>
      <ul>
        {data.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>

      <style jsx>{``}</style>
    </>
  );
};

export default PostsList;
