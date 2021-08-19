import Link from 'next/link';
import IconItem from '@shared/IconItem';

const data = [
  { id: 1, icon: 'dog', title: 'Inicio', path: '/' },
  { id: 1, icon: 'dog', title: 'Contacto', path: '/contacto' },
  { id: 1, icon: 'dog', title: 'Competencias', path: '/competencias' },
  { id: 1, icon: 'dog', title: 'Machos', path: '/ejemplares/machos' },
  { id: 1, icon: 'dog', title: 'Hembras', path: '/ejemplares/hembras' },
  { id: 1, icon: 'dog', title: 'Cachorros', path: '/ejemplares/cachorros' },
];

const Shortcuts = () => {
  return (
    <ul>
      {data.map(({ id, icon, title, path }) => (
        <Link href={path} key={id}>
          <a>
            <IconItem icon={icon} title={title} />
          </a>
        </Link>
      ))}
    </ul>
  );
};

export default Shortcuts;
