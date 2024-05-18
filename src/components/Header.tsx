import Container from './Container';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <Container className="flex items-center justify-between min-h-10 py-4">
        <h1 className="text-4xl font-bold">
          ICT{' '}
          <span className="hidden md:inline-block text-purple-400 animate-pulse duration-500">
            BONDHU
          </span>
        </h1>
        <nav className="flex items-center gap-4">
          {[
            {
              name: 'Home',
              href: '/',
            },
            {
              name: 'About',
              href: '/about',
            },
          ]?.map(({ name, href }) => (
            <a key={name} href={href} className="text-lg">
              {name}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  );
};

export default Header;
