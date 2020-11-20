import * as React from 'react';
import styled from 'styled-components';

// 今までの通常のstylesheetはブラウザ全体に影響を及ぼすが、
// 一方でここで定義した(↓)styleはこのAleatにしか影響を及ぼさない
// なので一切他のコンポーネントに影響を及ぼさないので
// 大規模開発において管理がしやすくなる。
const AlertContainer = styled.div`
  background-color: green;
  color: #fff;
  padding: 1em;
`;


const Aleat: React.FC<{ message: string }> = ({ message }) => {
  return (
    <AlertContainer>
      {message}
    </AlertContainer>
  );
};

export default Aleat;
