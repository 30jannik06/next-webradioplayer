import { IRadioStation } from "./IRadioStation";

export interface IRadioStationSelectorProps {
    onChange: (selectedStation: IRadioStation | null) => void;
    language: string;
}