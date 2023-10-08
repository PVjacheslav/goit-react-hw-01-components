import styled from 'styled-components';

export const ProCard = styled.section`
  width: 328px;
  height: 100%;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid #cbdcda;
  border-radius: 8px;
  box-shadow: 4px 4px 8px rgba(0, 0, 255, 0.3);
  background-color: #fff;
`;

export const Wrapper = styled.div`
  padding: 28px;
  text-align: center;
`;

export const Picture = styled.img`
  border-radius: 32px;
  background: #dbedeb;
`;

export const Title = styled.p`
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  text-align: center;
  background-color: #dbedeb;
`;

export const ListItem = styled.li`
  width: 100%;
  padding: 12px 0px;
  border: 1px solid #cbdcda;
  list-style: none;
`;

export const Quantity = styled.span`
  display: flex;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
`;
