import styled from 'styled-components';

export const Title = styled.h2`
  color: #333;
  font-size: 24px;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  background-color: #181f36; 
  display: flex;
  align-items: center; 
  justify-content: center; 
  padding: 20px;
  height: 100vh;
  flex-direction: column; 
`;

export const TopBackground = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const InputLabel = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;

  span {
    color: red;
  }
`;