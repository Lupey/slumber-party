import React from 'react';
import { neonifyText } from '../../utils/neon-utils';

export interface HeaderProps {

}

const Header: React.FunctionComponent<HeaderProps> = () => {
  return (<>
    <div style={{
      fontFamily: 'Sacramento',
      fontSize: 90,
      color: 'white',
      textAlign: 'center',
      textShadow: neonifyText('#2de2e6'),
    }}>
      slumber
    </div>
  </>);
};

export default Header;