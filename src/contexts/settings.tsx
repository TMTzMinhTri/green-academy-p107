import { PaletteMode } from "@mui/material";
import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

interface ISettingContext {
  setting: ISetting;
  saveSetting: (setting: ISetting) => void;
}

export interface ISetting {
  mode: PaletteMode;
  language: string;
}
const initialState: ISetting = {
  mode: "light",
  language: "vi",
};

const SettingContext = createContext<ISettingContext | undefined>(undefined);

const restoreSettings = (): ISetting | null => {
  let settings = null;
  try {
    const storedData: string | null = window.localStorage.getItem("settings");
    if (storedData) {
      settings = {
        ...JSON.parse(storedData),
      };
    } else {
      settings = initialState;
    }
  } catch (error) {
    console.error(error);
  }
  return settings;
};

const storeSettings = (setting: ISetting) => {
  window.localStorage.setItem("settings", JSON.stringify(setting));
};

const SettingProvider: FC<PropsWithChildren> = ({ children }) => {
  const [setting, setSetting] = useState<ISetting>({ ...initialState });

  const saveSetting = (updatedSetting: ISetting) => {
    setSetting(updatedSetting);
    storeSettings(updatedSetting);
  };

  useEffect(() => {
    const restoredSettings = restoreSettings();
    if (restoredSettings) {
      setSetting({ ...restoredSettings });
    }
  }, []);

  return (
    <SettingContext.Provider value={{ setting, saveSetting }}>
      {children}
    </SettingContext.Provider>
  );
};

export const useSetting = () => {
  const settingContext = useContext(SettingContext);
  if (!settingContext) {
    throw new Error("useSetting must be used within a SettingProvider");
  }
  return settingContext;
};

export default SettingProvider;
