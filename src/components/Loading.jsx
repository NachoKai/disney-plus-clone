import styled from "styled-components";

const Loading = () => {
  return (
    <Container>
      <div className="loading">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  .loading {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px;
    border-radius: 4px;
  }

  .loading-dot {
    width: 8px;
    height: 8px;
    margin: 0 4px;
    background: white;
    border-radius: 50%;
    opacity: 0;
    box-shadow: 0 0 2px black;
    animation: loadingFade 1s infinite;
  }
  .loading-dot:nth-child(1) {
    animation-delay: 0s;
  }
  .loading-dot:nth-child(2) {
    animation-delay: 0.1s;
  }
  .loading-dot:nth-child(3) {
    animation-delay: 0.2s;
  }
  .loading-dot:nth-child(4) {
    animation-delay: 0.3s;
  }

  @keyframes loadingFade {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.8;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Loading;
