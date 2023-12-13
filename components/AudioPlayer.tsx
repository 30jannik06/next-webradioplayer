import React, { useState, useEffect, useRef } from "react";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { IAudioPlayerProps } from "@/interfaces/IAudioPlayerProps";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { useLanguage } from "./LanguageProvider";
import {VolumeControl} from "./VolumeControl";
import {RadioStationSelector} from "./RadioStationSelector";

export const AudioPlayer: React.FC<IAudioPlayerProps> = ({ streamUrl }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [selectedRadio, setSelectedRadio] = useState<IRadioStation | null>(
        null
    );
    const audioRef = useRef<HTMLAudioElement>(null);
    const { language } = useLanguage();

    useEffect(() => {
        const { current: audioElement } = audioRef;

        if (audioElement) {
            audioElement.volume = volume;

            if (isPlaying) {
                audioElement.play();
            } else {
                audioElement.pause();
            }
        }
    }, [isPlaying, volume, selectedRadio]);

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
                    {isPlaying
                        ? language === "de"
                            ? "Pause"
                            : "Pause"
                        : language === "de"
                        ? "Abspielen"
                        : "Play"}
                </Button>
                <Label className="text-white mb-2">
                    {selectedRadio
                        ? `${
                              language === "de"
                                  ? "Gerade läuft:"
                                  : "Now playing:"
                          } ${selectedRadio.name}`
                        : language === "de"
                        ? "Kein Sender ausgewählt"
                        : "No station selected"}
                </Label>
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
            <audio
                ref={audioRef}
                src={selectedRadio?.streamUrl || streamUrl}
                title="Song Title"
            />
        </div>
    );
};

