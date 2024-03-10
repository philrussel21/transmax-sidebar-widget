import iconMap from 'src/library/icon-map';
import {IconType} from 'src/library/types';

type ForecastItemProperties = {
  label: string;
  value: string;
  meta?: string;
  icon?: IconType;
};

type ForecastProperties = {
  items: ForecastItemProperties[];
};

const ForecastItem = ({
  label,
  value,
  meta,
  icon,
}: ForecastItemProperties): JSX.Element => {
  const Icon = icon !== undefined ? iconMap[icon] : undefined;
  return (
    <li className="flex gap-5 text-sm items-center">
      <span className="font-light flex-1">{label}</span>
      <span className="flex gap-0.5 items-center w-1/3">
        <span className="font-medium text-base text-white">{value}</span>
        {meta !== undefined && meta.length > 1 && (
          <span className="font-light">{meta}</span>
        )}
        {Icon !== undefined && <Icon className="size-4 text-white" />}
      </span>
    </li>
  );
};

const Forecast = ({items}: ForecastProperties): JSX.Element => (
  <ul className="space-y-0.5">
    {items.map(item => (
      <ForecastItem
        key={item.label}
        label={item.label}
        value={item.value}
        meta={item.meta}
        icon={item.icon}
      />
    ))}
  </ul>
);

export default Forecast;

export type {
  ForecastItemProperties as ForecastItemProps,
  ForecastProperties as ForecastProps,
};
