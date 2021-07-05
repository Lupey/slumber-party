import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
// import { neonifyContainer } from './utils/neon-utils';

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
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