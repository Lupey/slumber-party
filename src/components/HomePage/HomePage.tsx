import React from 'react';
import Signup from './Signup/Signup';
import Users from './Users/Users';

export interface HomePageProps {

}

const HomePage: React.FunctionComponent<HomePageProps> = () => {
  return (<>
    <Signup /> 
    <Users />
  </>);
};

export default HomePage;