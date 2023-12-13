import React, { useState } from "react";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { VolumeControl } from "./VolumeControl";
import { RadioStationSelector } from "./RadioStationSelector";
import { NowPlayingLabel } from "./NowPlayingLabel";
import AudioController from "./AudioController";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { IAudioPlayerProps } from "@/interfaces/IAudioPlayerProps";
import { useLanguage } from "./LanguageProvider";

export const AudioPlayer: React.FC<IAudioPlayerProps> = ({ streamUrl }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [selectedRadio, setSelectedRadio] = useState<IRadioStation | null>(
        null
    );

    const { language } = useLanguage();

    const togglePlay = () => {
        setPlaying(!isPlaying);
    };

    const handleVolumeChange = (newVolume: number) => {
        setVolume(newVolume);
    };

    const handleRadioChange = (selectedStation: IRadioStation | null) => {
        setSelectedRadio(selectedStation);
    };

    return (
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <div className="flex flex-col items-center justify-center mb-4">
                <Button
                    className={`${
                        isPlaying ? "bg-red-500" : "bg-blue-500"
                    } text-white p-4 rounded-full mb-4 text-lg flex items-center`}
                    onClick={togglePlay}
                >
                    {isPlaying ? (
                        <PauseIcon className="mr-2" />
                    ) : (
                        <PlayIcon className="mr-2" />
                    )}
                    {isPlaying ? "Pause" : "Play"}
                </Button>

                <NowPlayingLabel
                    language={language}
                    selectedRadio={selectedRadio}
                />
                <AudioController
                    isPlaying={isPlaying}
                    volume={volume}
                    selectedRadio={selectedRadio}
                    onTogglePlay={togglePlay}
                    onVolumeChange={handleVolumeChange}
                />
                <VolumeControl
                    volume={volume}
                    onVolumeChange={handleVolumeChange}
                    language={language}
                />
                <RadioStationSelector
                    onChange={handleRadioChange}
                    language={language}
                />
            </div>
        </div>
    );
};
