import * as React from 'react';

// Reactのコンポーネントが message と言うプロパティを受け取って
// そしてそのメッセージは文字列(string)であることを示している
const Aleat: React.FC<{ message: string }> = ({ message }) => {
  return (
    <div style={{ backgroundColor: 'green', color: '#fff', padding: '1em' }}>
      {message}
    </div>
  );
};

export default Aleat;

// このようにTSを使うと型の定義をJSに組み込むことができる。
