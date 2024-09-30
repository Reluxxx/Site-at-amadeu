import React from 'react';
import styled from 'styled-components';

const ProgressContainer = styled.div`
  width: 300px;
  background-color: #e0e0e0;
  border-radius: 5px;

  @media (max-width: 162px) {
    width: 150px;
  }
`;

const ProgressFill = styled.div`
  height: 20px;
  background-color: #4caf50;
  border-radius: 5px;
  width: ${props => `${props.progress}%`};
  transition: width 0.5s ease-in-out;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressContainer>
      <ProgressFill progress={progress} />
    </ProgressContainer>
  );
};

export default ProgressBar;