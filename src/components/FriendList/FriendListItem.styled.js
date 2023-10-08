import styled from 'styled-components';

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 4px;
  background-color: #dbedeb;
  margin-bottom: 16px;
  box-shadow: 4px 4px 8px rgba(0, 0, 255, 0.3);
`;

export const StatusItem = styled.span`
  width: 16px;
  height: 16px;
  background: ${({ $isOnline }) => ($isOnline ? 'green' : 'red')};
  border-radius: 8px;
  margin-left: 8px;
`;

export const NameItem = styled.p`
  font-size: 28px;
`;
