import React from 'react';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import { neonifyContainer } from './utils/neon-utils';

export interface AppProps {

}

const App: React.FunctionComponent<AppProps> = () => {
  return (<>
    <div style={{
      margin: 24,
      padding: 16,
      minHeight: 'calc(100vh - 88px)',
      border: '4px solid #fff',
      borderRadius: 4,
      boxShadow: neonifyContainer('#ff3864'),
    }}>
      <Header />
      <HomePage />
    </div>
  </>);
};

export default App;