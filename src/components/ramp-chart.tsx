import {useCallback, useEffect, useState} from 'react';
import {PieChart, Pie, ResponsiveContainer, Cell} from 'recharts';
import {getRampAlgorithms} from 'src/api/ramp';
import type {Algorithm, RampData} from 'src/api/ramp';

type Shape = {
  cx: number;
  cy: number;
  innerRadius: number;
  outerRadius: number;
  startAngle: number;
  midAngle: number;
  percent: number;
  index: number;
  value: number;
  endAngle: number;
};

type State = Array<{
  label: Algorithm;
  value: number;
}>;

const COLORS = ['#2dd4bf', '#5eead4', '#99f6e4', '#14b8a6'];

const renderCustomisedLabel = (properties: Shape): JSX.Element => (
  <text
    {...properties}
    fill="#2dd4bf"
    className="text-xs font-medium"
  >{`${Math.floor(properties.percent * 100)}%`}</text>
);

const RampChart = (): JSX.Element => {
  const [rampData, setRampData] = useState<State>([]);

  const handleDataUpdate = useCallback((data: RampData[]) => {
    const groupedData: Record<Algorithm, number> = data.reduce(
      (accumulator, currentValue) => {
        const {algorithm} = currentValue;
        accumulator[algorithm] = (accumulator[algorithm] || 0) + 1;
        return accumulator;
      },
      {
        'Algorithm 1': 0,
        'Algorithm 2': 0,
        'Algorithm 3': 0,
        'Algorithm 4': 0,
        'Algorithm 5': 0,
      }
    );
    const updatedData = Object.keys(groupedData).map(algorithm => ({
      label: algorithm as Algorithm,
      value: groupedData[algorithm as Algorithm],
    }));

    setRampData(updatedData);
  }, []);

  useEffect(() => {
    getRampAlgorithms(handleDataUpdate);
  }, []);

  return (
    <ResponsiveContainer width="100%" height={220}>
      <PieChart width={220} height={200} className="mx-auto">
        <Pie
          isAnimationActive={false}
          data={rampData}
          nameKey="label"
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={40}
          outerRadius={60}
          labelLine={false}
          label={renderCustomisedLabel}
        >
          {rampData.map((entry, index) => (
            <Cell key={entry.value} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};
export default RampChart;
