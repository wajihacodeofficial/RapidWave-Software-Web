import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';

interface WaveParams {
  color: string;
  speed: number;
  frequency: number;
  amplitude: number;
}

interface WaveDispatchContextType {
  setWaveParams: (params: Partial<WaveParams>) => void;
  resetWaveParams: () => void;
}

const defaultParams: WaveParams = {
  color: '#00d2ff',
  speed: 1.0,
  frequency: 0.2,
  amplitude: 1.2,
};

const WaveParamsContext = createContext<WaveParams | undefined>(undefined);
const WaveDispatchContext = createContext<WaveDispatchContextType | undefined>(
  undefined
);

export const WaveProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [waveParams, setParams] = useState<WaveParams>(defaultParams);

  const setWaveParams = useCallback((newParams: Partial<WaveParams>) => {
    setParams((prev) => ({ ...prev, ...newParams }));
  }, []);

  const resetWaveParams = useCallback(() => {
    setParams(defaultParams);
  }, []);

  const dispatchValue = useMemo(
    () => ({
      setWaveParams,
      resetWaveParams,
    }),
    [setWaveParams, resetWaveParams]
  );

  return (
    <WaveParamsContext.Provider value={waveParams}>
      <WaveDispatchContext.Provider value={dispatchValue}>
        {children}
      </WaveDispatchContext.Provider>
    </WaveParamsContext.Provider>
  );
};

export const useWaveParams = () => {
  const context = useContext(WaveParamsContext);
  if (context === undefined)
    throw new Error('useWaveParams must be used within a WaveProvider');
  return context;
};

export const useWaveDispatch = () => {
  const context = useContext(WaveDispatchContext);
  if (context === undefined)
    throw new Error('useWaveDispatch must be used within a WaveProvider');
  return context;
};

// Legacy support
export const useWave = () => {
  const params = useWaveParams();
  const dispatch = useWaveDispatch();
  return { waveParams: params, ...dispatch };
};
