import {useState, useContext, useCallback, useMemo, createContext} from 'react';
import {FaChevronDown} from 'react-icons/fa6';

type ContainerContextType = {
  toggleActivePanel?: (label: string) => void;
  activePanels: string[];
};

type ContainerProperties = {
  children: JSX.Element[];
};

type PanelProperties = {
  children: JSX.Element | JSX.Element[];
  label: string;
};

const ContainerContext = createContext<ContainerContextType>({
  activePanels: [],
});

const Container = ({children}: ContainerProperties): JSX.Element => {
  const [activePanels, setActivePanels] = useState<string[]>([]);

  const toggleActivePanel = useCallback(
    (label: string) => {
      setActivePanels(
        activePanels.includes(label)
          ? activePanels.filter(panel => panel !== label)
          : [...activePanels, label]
      );
    },
    [activePanels]
  );

  const context = useMemo(
    () => ({
      toggleActivePanel,
      activePanels,
    }),
    [toggleActivePanel, activePanels]
  );

  return (
    <section className="space-y-4">
      <ContainerContext.Provider value={context}>
        {children}
      </ContainerContext.Provider>
    </section>
  );
};

const Panel = ({children, label}: PanelProperties): JSX.Element => {
  const {toggleActivePanel, activePanels} = useContext(ContainerContext);

  const handleTogglePanel = useCallback(() => {
    toggleActivePanel?.(label);
  }, [toggleActivePanel, label]);

  const isActive = useMemo(
    () => activePanels.includes(label),
    [activePanels, label]
  );

  return (
    <article className="rounded-t-sm bg-[#222931]">
      <header>
        <button
          key={label}
          className="w-full flex justify-between items-center px-4 py-2 border border-white/10"
          type="button"
          onClick={handleTogglePanel}
        >
          <span className="uppercase">{label}</span>
          <FaChevronDown
            className={`size-4 transition ${isActive ? 'rotate-180' : ''}`}
          />
        </button>
      </header>
      {isActive && <div>{children}</div>}
    </article>
  );
};

const Accordion = {
  Container,
  Panel,
};

export default Accordion;

export type {
  ContainerContext,
  ContainerProperties as ContainerProps,
  PanelProperties as PanelProps,
};
