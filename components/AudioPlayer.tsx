import React, { useState, useEffect, useRef } from "react";
import { BsPlay, BsPause } from "react-icons/bs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { IAudioPlayerProps } from "@/interfaces/IAudioPlayerProps";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { Radiostations } from "@/public/utils/Radiostations";

interface Translations {
    [key: string]: {
        nowPlaying: string;
        noStationSelected: string;
        play: string;
        pause: string;
        selectRadioStation: string;
    };
}

const AudioPlayer: React.FC<IAudioPlayerProps> = ({ streamUrl }) => {
    const [isPlaying, setPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [selectedRadio, setSelectedRadio] = useState<IRadioStation | null>(
        null
    );
    const audioRef = useRef<HTMLAudioElement>(null);
    const [selectedLanguage, setSelectedLanguage] = useState("en");

    const translations: Translations = {
        en: {
            nowPlaying: "Now playing:",
            noStationSelected: "No station selected",
            play: "Play",
            pause: "Pause",
            selectRadioStation: "Select Radio Station:",
        },
        de: {
            nowPlaying: "Gerade läuft:",
            noStationSelected: "Kein Sender ausgewählt",
            play: "Abspielen",
            pause: "Pause",
            selectRadioStation: "Radiosender auswählen:",
        },
        // Füge hier weitere Sprachen hinzu
    };

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

    const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVolume(parseFloat(event.target.value));
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedStationId = event.target.value;
        const selectedStation = Radiostations.find(
            (station) => station.id === selectedStationId
        );

        if (selectedStation) {
            setSelectedRadio(selectedStation);
        }
    };

    const handleChangeLanguage = (
        event: React.ChangeEvent<HTMLSelectElement>
    ) => {
        const newLanguage = event.target.value;
        setSelectedLanguage(newLanguage);
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
                        <BsPause className="mr-2" />
                    ) : (
                        <BsPlay className="mr-2" />
                    )}
                    {isPlaying
                        ? translations[selectedLanguage].pause
                        : translations[selectedLanguage].play}
                </Button>
                <Label className="text-white mb-2">
                    {selectedRadio
                        ? `${translations[selectedLanguage].nowPlaying} ${selectedRadio.name}`
                        : translations[selectedLanguage].noStationSelected}
                </Label>
                <Input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full"
                />
                <Label className="text-white mt-4 mb-3">
                    {translations[selectedLanguage].selectRadioStation}
                </Label>
                <select
                    onChange={handleRadioChange}
                    className="bg-gray-700 text-white p-2 rounded appearance-none"
                >
                    {Radiostations.map((station) => (
                        <option key={station.id} value={station.id}>
                            {station.name}
                        </option>
                    ))}
                </select>
            </div>
            <audio
                ref={audioRef}
                src={selectedRadio?.streamUrl || streamUrl}
                title="Song Title"
            />
        </div>
    );
};

export default AudioPlayer;
