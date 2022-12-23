import styled, { keyframes } from 'styled-components';

const load = keyframes`
  0% {
    clip-path:polygon(50% 50%,0 0,0 0,0 0,0 0,0 0)
  }

  25% {
    clip-path:polygon(50% 50%,0 0,100% 0,100% 0,100% 0,100% 0)
  }

  50% {
    clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,100% 100%,100% 100%)
  }

  75% {
    clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 100%)
  }

  100% {
    clip-path:polygon(50% 50%,0 0,100% 0,100% 100%,0 100%,0 0)
    }
`;

const round = keyframes`
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled.div`
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  position: relative;
  animation: ${round} 1.8s linear infinite;

  &::before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: ${({ borderSize }) => `${borderSize}px`} solid ${({ theme }) => theme.colors.primary.main};
    animation: ${load} 2s linear infinite;
  }
`;
