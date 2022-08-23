import styled from "styled-components";
import { Modal } from "@mui/material";

export const Container = styled(Modal)`
  .header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    flex-direction: column;

    > label {
      margin: 5px 0;
    }

    > input {
      height: 30px;
    }
  }
`;

export const Button = styled.button`
  margin-top: 20px;
  width: 150px;
  height: 30px;
  background: #ff4842;
  border: 0;
  border-radius: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
  color: #f5ebdc;
`;
