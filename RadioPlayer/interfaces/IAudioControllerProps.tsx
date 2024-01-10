import { IRadioStation } from "./IRadioStation";

export interface IAudioControllerProps {
    isPlaying: boolean;
    volume: number;
    selectedRadio: IRadioStation | null;
    onTogglePlay: () => void;
    onVolumeChange: (newVolume: number) => void;
}