import React, { useState } from 'react';

const App = () => {
  // 함수 상수 변수 상태들을 선언하는 곳
  // 리턴이하는 화면에 보여지는 부분

  const [value, setValue] = useState('');
  const [agree, setAgree] = useState(false);
  console.log('PPPPPPPPPPPPPPPPPPP', agree);
  console.log('ddddddddd', value);

  // const changeA = (a) => {
  //   setValue(a);
  // };
  return (
    <div>
      {value}
      <input type='checkbox' value={agree} onChange={() => setAgree(!agree)} />
      <input
        type='text'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <button onClick={changeA('안녕하세요')}>값 변경하기</button> */}
    </div>
  );
};

export default App;
