// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import {Header} from "@stores/header"
export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="bikes" />
      <div />
    </>
  );
}

export default App;
