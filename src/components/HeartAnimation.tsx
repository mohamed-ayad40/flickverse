import styled from 'styled-components';

interface HeartAnimationProps {
  isVisible: boolean;
  size?: number;
}

const HeartAnimation = ({ isVisible, size = 1.2 }: HeartAnimationProps) => {
  if (!isVisible) return null;
  return (
    <StyledWrapper $size={size}>
      <div className="cssload-main">
        <div className="cssload-heart">
          <span className="cssload-heartL" />
          <span className="cssload-heartR" />
          <span className="cssload-square" />
        </div>
        <div className="cssload-shadow" />
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ $size: number }>`
  .cssload-main {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    pointer-events: none;
  }

  /* Keep all other CSS the same */
  .cssload-main * {
    font-size: ${props => props.$size}em;
  }
  
  .cssload-heart {
    animation: cssload-heart 1.4s cubic-bezier(0.75, 0, 0.5, 1) forwards;
    position: relative;
  }

  .cssload-heartL {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    position: absolute;
    display: block;
    border-radius: 100%;
    animation: cssload-heartL 1.4s cubic-bezier(0.75, 0, 0.5, 1) forwards;
    transform: translate(-28px, -27px);
  }

  .cssload-heartR {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    position: absolute;
    display: block;
    border-radius: 100%;
    transform: translate(28px, -27px);
    animation: cssload-heartR 1.2s cubic-bezier(0.75, 0, 0.5, 1) forwards;
  }

  .cssload-square {
    width: 1em;
    height: 1em;
    border: 1px solid rgb(252, 0, 101);
    background-color: rgb(252, 0, 101);
    position: relative;
    display: block;
    transform: scale(1) rotate(-45deg);
    animation: cssload-square 1.2s cubic-bezier(0.75, 0, 0.5, 1) forwards;
  }

  .cssload-shadow {
    top: 97px;
    left: 50%;
    position: relative;
    display: block;
    width: 1em;
    height: .24em;
    background-color: rgb(215,215,215);
    border: 1px solid rgb(215,215,215);
    border-radius: 50%;
    animation: cssload-shadow 1.2s cubic-bezier(0.75, 0, 0.5, 1) forwards;
  }

  @keyframes cssload-square {
    50% {
      border-radius: 100%;
      transform: scale(1) rotate(-45deg);
    }
    100% {
      transform: scale(0) rotate(-45deg);
      opacity: 0;
      border-radius: 0;
    }
  }

  @keyframes cssload-heart {
    50% {
      transform: rotate(360deg) scale(1);
    }
    100% {
      transform: rotate(720deg) scale(0.4);
      opacity: 0;
      border-radius: 0;
    }
  }

  @keyframes cssload-heartL {
    60% {
      transform: translate(-10px, -10px) scale(0.6);
    }
    100% {
      transform: translate(-10px, -10px) scale(0);
      opacity: 0;
    }
  }

  @keyframes cssload-heartR {
    40% {
      transform: translate(10px, -10px) scale(0.6);
    }
    100% {
      transform: translate(10px, -10px) scale(0);
      opacity: 0;
    }
  }

  @keyframes cssload-shadow {
    50% {
      transform: scale(0.5);
      border-color: rgb(228,228,228);
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }
`;

export default HeartAnimation;