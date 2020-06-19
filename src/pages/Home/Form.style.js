import styled from 'styled-components';

export const FormContainer = styled.form`
  margin: 20px 0 0;
  display: flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 18px;
`;

export const Input = styled.input`
  width: 370px;
  height: 36px;
  margin: 0 10px;
  padding: 0 15px;
  font-size: 14px;
  color: #000000;
  border: 1px solid #d5d5d5;

  :focus, :active {
    border: 1px solid #d5d5d5;
  }
`;
