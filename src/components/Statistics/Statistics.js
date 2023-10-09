import { getRandomHexColor } from './RandomHex';
import {
  Label,
  Percentage,
  StatList,
  StatItem,
  Stats,
  Title,
} from './Statistics.styled';

export const StatisticData = ({ stats, title }) => {
  return (
    <Stats>
      <Title>Upload stats</Title>
      {title && <Title>{title}</Title>}
      <StatList>
        {stats.map(stat => (
          <StatItem
            key={stat.id}
            style={{ backgroundColor: getRandomHexColor }}
          >
            <Label>{stat.label}</Label>
            <Percentage>{stat.percentage}%</Percentage>
          </StatItem>
        ))}
      </StatList>
    </Stats>
  );
};
