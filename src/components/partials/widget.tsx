import {
  Accordion,
  DelayedRoute,
  Forecast,
  RampChart,
  Weather,
} from 'src/components';
import data from 'src/data/widget';

const Widget = (): JSX.Element => (
  <div className="p-4 bg-[#15191E]">
    <div className="px-4">
      <Weather
        label={data.weather.label}
        temperature={data.weather.temperature}
        dateTime={data.weather.dateTime}
        icon={data.weather.icon}
      />
      <div className="mt-5">
        <Forecast items={data.forecast} />
      </div>
    </div>
    <div className="mt-8">
      <Accordion.Container>
        <Accordion.Panel label="Delayed Routes">
          {data.delayedRoutes.map(route => (
            <div
              key={route.id}
              className="py-2 px-4 border-x border-b first:border-t-0 border-white/10"
            >
              <DelayedRoute
                name={route.name}
                via={route.via}
                status={route.status}
                distance={route.distance}
                duration={route.duration}
              />
            </div>
          ))}
        </Accordion.Panel>
        <Accordion.Panel label="Ramp chart">
          <div className="mt-4 mx-auto">
            <RampChart />
          </div>
        </Accordion.Panel>
      </Accordion.Container>
    </div>
  </div>
);

export default Widget;
