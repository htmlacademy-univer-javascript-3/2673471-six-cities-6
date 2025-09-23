import Main from '../../pages/main/main.tsx';

type AppProps = {
  offersCount : number;
}
export default function App({offersCount} : AppProps){
  return (
    <Main offersCount={offersCount} />
  );
}
