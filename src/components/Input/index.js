import styled from 'styled-components';

const Input = styled.input`
  order: 1px solid #fff;
  background: transparent;
  padding: 20px 140px;
  border-radius: 50px;
  width: 200px;
  color: #fff;
  font-size: 16px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: #fff;
    font-size: 16px;
  }
`;

export default Input;
