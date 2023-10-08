import styled from 'styled-components';

export const Stats = styled.section`
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 320px;
  padding: 60px 60px;
  background-color: #dbedeb;
  border-radius: 10px;
  box-shadow: 4px 4px 8px rgba(0, 0, 255, 0.3);
`;

export const Title = styled.h2`
  margin-left: auto;
  margin-right: auto;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  background-color: white;
  font-size: 20px;
  font-weight: 700;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const StatList = styled.ul`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  padding: 0;
`;

export const StatItem = styled.li`
  padding: 10px 5px;
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

export const Percentage = styled.span`
  font-weight: 700;
  font-size: 18px;
  margin-top: 5px;
`;
