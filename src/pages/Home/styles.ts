import styled from "@emotion/styled";

export const Container = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .action {
    display: flex;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  height: 48px;
  margin-bottom: 10px;

  .Title {
    font-size: 24px;
    font-weight: bold;
  }

  .addProduct {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    border-radius: 4px;
    background: green;
    color: #fff;
    border: 1px solid #ccc;
    cursor: pointer;
    > svg {
      margin-right: 10px;
    }
  }
`;
