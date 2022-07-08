import { onAuthStateChanged } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';
import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
// import { neonifyContainer } from './utils/neon-utils';
import { auth, signIn } from './services/firebase/auth';

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
  React.useEffect(() => {
    signIn();
    console.log('singing in');
  }, []);

  console.log('yo');

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(user);
      
      const functions = getFunctions();
      const initRoom = httpsCallable(functions, 'initRoom');
      initRoom().then((result) => {
        console.log(result.data);
      }).catch(reason => console.log(reason));
        // ...
      } else {
        console.log('not logged in');
        // User is signed out
        // ...
      }
  });

  return (<>
    <div style={{
      padding: 24,
      minHeight: 'calc(100vh - 88px)',
      // margin: 24,
      // padding: 16,
      // border: '4px solid #fff',
      // boxShadow: neonifyContainer('#ff3864'),
      // borderRadius: 4,
    }}>
      <Header />
      <HomePage />
    </div>
  </>);
};

export default App;