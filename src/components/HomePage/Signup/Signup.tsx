import React from 'react';
import { neonifyContainer } from '../../../utils/neon-utils';

export interface SignupProps {

}

const Signup: React.FunctionComponent<SignupProps> = () => {
  return (<>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{
        boxShadow: neonifyContainer('#791e94'),
        border: '3px solid white',
        borderRadius: 3,
        display: 'flex',
      }}>
        <input placeholder="Name" className="monospace" style={{
          borderBlock: 'none',
          borderInline: 'none',
          color: '#444444',
          fontSize: 24,
          padding: 9,
          outline: 'none',
          width: '100%',
          border: 'none',
          height: '100%',
          borderRadius: 0,
        }} type="text" />
      </div>
      <button className="code" style={{
        // border: '3px solid white',
        borderRadius: '3px',
        marginTop: '16px',
        width: '80px',
        alignSelf: 'flex-end',
        backgroundColor: '#ffffff2e',
        color: 'white',
        fontSize: '18px',
        padding: '8px',
        border: 'none',
      }}>Join</button>
    </div>
  </>);
};

export default Signup;