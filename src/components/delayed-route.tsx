import {FaArrowDownLong} from 'react-icons/fa6';
import {Status} from 'src/library/types';

type DelayedRouteProperties = {
  name: string;
  via: string[];
  distance: number;
  duration: number;
  status: Status;
};

const statusClasses: Record<Status, string> = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-red-500',
};

const DelayedRoute = ({
  name,
  via,
  distance,
  duration,
  status,
}: DelayedRouteProperties): JSX.Element => (
  <div className="text-sm">
    <div className="flex gap-4 justify-between items-center">
      <div className="flex gap-2 items-center">
        <span className={`size-2 ml-1 rounded-full ${statusClasses[status]}`} />
        <h5>{name}</h5>
      </div>
      <span className="text-xs">{`${distance} km`}</span>
    </div>
    <div className="flex gap-4 justify-between items-center">
      <div className="flex gap-1 items-center">
        <FaArrowDownLong className="size-4" />
        <div className="text-xs">
          {via.map(name => (
            <span key={name} className="block">
              {name}
            </span>
          ))}
        </div>
      </div>
      <div>
        <span className="font-medium text-base text-white">{duration}</span>
        <span className="ml-0.5 text-white">min</span>
      </div>
    </div>
  </div>
);

export default DelayedRoute;

export type {DelayedRouteProperties as DelayedRouteProps};
