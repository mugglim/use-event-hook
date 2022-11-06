import Link from 'next/link';

const LINKS = [
  '/1-use-state',
  '/2-react-memo',
  '/3-use-callback',
  '/4-use-event',
];

const Header = () => {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', rowGap: 10 }}>
      {LINKS.map((link) => (
        <li>
          <Link href={link}>{link.replace('/', '')}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Header;
