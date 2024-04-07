import MainPage from '../pages/main-page/main-page';

type AppPageProps = {
  cardsNumber: number;
};

function App({cardsNumber}:AppPageProps): JSX.Element {
  return (
    <MainPage cardsNumber = {cardsNumber}/>
  );
}

export default App;
