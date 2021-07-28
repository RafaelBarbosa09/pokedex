import styled from "styled-components";
import { transparentize } from "polished";

export const Container = styled.main`
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .profile strong {
    margin-top: 1rem;
  }

  .CircularProgressbar {
    width: 100px;
    height: 100px;
  }
  .CircularProgressbar-path {
  stroke: var(--purple);
}

.CircularProgressbar-text {
  fill: var(--text);
}
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  background: var(--card-body);
  border-radius: .5rem;
  border: 1px solid rgba(0,0,0,.125);
  box-shadow: 0 6px 10px -4px rgb(0 0 0 / 15%);
  padding: 2rem;
  margin: .5rem;
  width: 100%;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 120px;
    height: 120px;
  }

  p, strong {
    color: var(--text);
    font-size: 1.2rem;
  }
`;

export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Types = styled.div`
  padding: .2rem;

  p {
    padding: .2rem .5rem;
    border-radius: .2rem;
  }

  .poison {
    background: var(--purple);
  }

  .grass {
    background: var(--green);
  }

  .fire {
    background: var(--orange);
  }

  .flying {
    background: ${transparentize(0.6, '#17a2b8')};
  }

  .water {
    background: var(--blue);
  }

  .bug {
    background: ${transparentize(0.4, '#dc3545')};
  }

  .normal {
    background: ${transparentize(0.4, '#ffc107')};
  }
`;

export const Stats = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;

    &+div {
      margin-left: 1rem;
    }

    p {
      font-size: .8rem;
      font-weight: 600;
    }
  }
`;