export interface IVolumeControlProps {
    volume: number;
    onVolumeChange: (volume: number) => void;
    language: string;
}