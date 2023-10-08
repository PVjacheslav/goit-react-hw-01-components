import styled from 'styled-components';

export const TabConteiner = styled.section`
  margin: 16px;
`;

export const Table = styled.table`
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  border-radius: 4px;
  box-shadow: 2px 1px 3px 2px rgba(0, 0, 255, 0.3);
  border: 1px solid #cbdcda;
`;

export const TabHead = styled.thead`
  height: 48px;
  color: #fff;
  background-color: #6ef3e5;
  border: 1px solid #cbdcda;
`;

export const TabBodyRow = styled.tr``;

export const TabCellHead = styled.th`
  padding: 10px;
  border: 1px solid #cbdcda;
`;

export const TabCell = styled.th`
  font-weight: normal;
  padding: 10px;
  border: 1px solid #cbdcda;

  & tr:nth-of-type(even) {
    background-color: #cbdcda;
  }
`;
