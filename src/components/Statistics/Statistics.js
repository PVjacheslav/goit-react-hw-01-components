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
      {title !== 0 && <h2>{title}</h2>}
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
