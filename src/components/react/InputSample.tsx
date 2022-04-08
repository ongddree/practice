import { useState, useRef } from 'react';

const InputSample = () => {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });

  const { name, nickname } = inputs;

  const nameInput = useRef<HTMLInputElement>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    //전개구문을 이용해 기존객체를 복사하는 방식으로 불변성을 지켜야, 컴포넌트에서 상태 업데이트를 감지하고 필요한 리렌더링이 진행된다.
    //input[name]=value 이런 식으로 기존 상태를 수정하면 값을 바꿔도 리렌더링이 일어나지 않는다.
    // 불변성을 지켜주어야 컴포넌트 업데이트 성능 최적화 가능
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    if (nameInput.current) {
      nameInput.current.focus();
    }
  };

  return (
    <div>
      <input
        placeholder="이름"
        type="text"
        name="name"
        value={name}
        onChange={onChange}
        ref={nameInput}
      />
      <input
        placeholder="닉네임"
        type="text"
        name="nickname"
        value={nickname}
        onChange={onChange}
      />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} {nickname}
      </div>
    </div>
  );
};
export default InputSample;
