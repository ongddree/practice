import styled, { css } from 'styled-components';
import { useState } from 'react';

const Toggle = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleToggle = () => {
    isChecked ? setIsChecked(false) : setIsChecked(true);
  };
  return (
    <Wrapper>
      <ToggleSwitch
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
        id="toggle-switch"
      />
      <YesBtn onClick={() => setIsChecked(true)} isChecked={isChecked}>
        예
      </YesBtn>
      <ToggleCircleWrap htmlFor="toggle-switch" isChecked={isChecked}>
        <ToggleCircle isChecked={isChecked} />
      </ToggleCircleWrap>
      <NoBtn onClick={() => setIsChecked(false)} isChecked={!isChecked}>
        아니오
      </NoBtn>
    </Wrapper>
  );
};

export default Toggle;

const Wrapper = styled.div`
  border: 1px solid black;
  position: relative;
  display: flex;
  align-items: center;
`;

const ToggleSwitch = styled.input`
  display: none;
`;

const ToggleCircleWrap = styled.label<{ isChecked: boolean }>`
  position: relative;
  width: 50px;
  height: 26px;
  background-color: #0066ff;
  border-radius: 50px;
  display: flex;
  align-items: center;
  transition: all 0.23s ease-in-out;
  ${({ isChecked }) =>
    isChecked ? 'background-color: #0066ff' : 'background-color: #d3d3d3'};
`;

const ToggleCircle = styled.div<{ isChecked: boolean }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #fff;
  position: absolute;
  transition: transform 0.23s ease-in-out;
  left: 4px;
  ${({ isChecked }) => !isChecked && 'transform:translateX(22px)'};
`;

const YesBtn = styled.button<{ isChecked: boolean }>`
  background-color: transparent;
  border: none;
  ${({ isChecked }) => (isChecked ? 'font-weight: 700' : 'font-weight: 300')};
  font-size: 14px;
`;

const NoBtn = styled(YesBtn)<{ isChecked: boolean }>``;
