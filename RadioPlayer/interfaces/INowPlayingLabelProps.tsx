import { IRadioStation } from "./IRadioStation";

export interface INowPlayingLabelProps {
    language: string;
    selectedRadio: IRadioStation | null;
}
