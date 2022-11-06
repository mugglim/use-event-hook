import Header from '@components/Header';

const Home = () => {
  return (
    <>
      <h2>Hello. This is useEvent hook playground</h2>
      <span></span>
      <a
        href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi"
        target="_blank"
      >
        React Developer Tools
      </a>
      을 설치 후 `Profiler` 기능을 통해 리렌더링을 확인해보시는 걸 추천합니다.
      <Header />
    </>
  );
};

export default Home;
