import styled, { keyframes } from "styled-components";

export const blinkKeyframe = keyframes`
  from, to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
`;

export const BlinkingCharacter = styled.span`
  animation: 1s ${blinkKeyframe} step-end infinite;
`;
