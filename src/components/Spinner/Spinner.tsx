import styled from 'styled-components'

const Spinner = (): JSX.Element => {
  return <StyledSpinner />
}

const StyledSpinner = styled.div`
  display: inline-block;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid ${({ theme }) => theme.color.primary};
  width: 120px;
  height: 120px;
  -webkit-animation: spin 1s linear infinite; /* Safari */
  animation: spin 1s linear infinite;

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export default Spinner
