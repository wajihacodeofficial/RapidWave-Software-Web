import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react';

interface WaveParams {
  color: string;
  speed: number;
  frequency: number;
  amplitude: number;
}

interface WaveContextType {
  waveParams: WaveParams;
  setWaveParams: (params: Partial<WaveParams>) => void;
  resetWaveParams: () => void;
}

const defaultParams: WaveParams = {
  color: '#00d2ff',
  speed: 1.0,
  frequency: 0.2,
  amplitude: 1.2,
};

const WaveContext = createContext<WaveContextType | undefined>(undefined);

export const WaveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [waveParams, setParams] = useState<WaveParams>(defaultParams);

  const setWaveParams = (newParams: Partial<WaveParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  };

  const resetWaveParams = () => {
    setParams(defaultParams);
  };

  return (
    <WaveContext.Provider
      value={{ waveParams, setWaveParams, resetWaveParams }}
    >
      {children}
    </WaveContext.Provider>
  );
};

export const useWave = () => {
  const context = useContext(WaveContext);
  if (!context) throw new Error('useWave must be used within a WaveProvider');
  return context;
};
