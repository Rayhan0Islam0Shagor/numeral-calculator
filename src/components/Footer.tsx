import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <Container className="flex items-center justify-between">
        <p className="text-sm font-bold">
          All Right Reserved, &copy;{new Date().getFullYear()}.
        </p>

        <a
          href="https://github.com/Rayhan0Islam0Shagor"
          target="_blank"
          rel="noopener noreferrer"
          className="text-base font-semibold"
        >
          Rayhan Islam
        </a>
      </Container>
    </footer>
  );
};

export default Footer;
