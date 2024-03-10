import {format, parseISO} from 'date-fns';
import iconMap from '../library/icon-map';
import {IconType} from '../library/types';

type WeatherProperties = {
  label: string;
  temperature: number;
  icon: IconType;
  dateTime: string;
};

const Weather = ({
  label,
  temperature,
  icon,
  dateTime,
}: WeatherProperties): JSX.Element => {
  const parsedDate = parseISO(dateTime);
  const day = format(parsedDate, 'E io');
  const time = format(parsedDate, 'h:mm a');
  const Icon = iconMap[icon];

  return (
    <div className="flex gap-4 justify-between items-center font-light">
      <div>
        <h4 className="ml-1 text-sm">{label}</h4>
        <span className="text-5xl ml-3 text-white">{temperature}°</span>
        <div className="flex text-xs gap-2 mt-0.5">
          <span>{day}</span>
          <span>{time}</span>
        </div>
      </div>
      <div>
        <Icon className="size-20 text-white" />
      </div>
    </div>
  );
};
export default Weather;

export type {WeatherProperties as WeatherProps};
