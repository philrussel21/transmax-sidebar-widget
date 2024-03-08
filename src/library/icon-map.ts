import {FaCloudRain, FaRegSnowflake, FaSun, FaWind} from 'react-icons/fa';
import {IconType} from './types';

const iconMap: Record<IconType, React.ElementType> = {
  sunny: FaSun,
  windy: FaWind,
  snowy: FaRegSnowflake,
  rainy: FaCloudRain,
};

export default iconMap;
