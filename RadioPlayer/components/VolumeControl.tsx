import React, { ChangeEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IVolumeControlProps } from "@/interfaces/IVolumeControlProps";
import { SpeakerLoudIcon, SpeakerOffIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const SPEAKER_LOUD_ICON = <SpeakerLoudIcon className="mr-2" />;
const SPEAKER_OFF_ICON = <SpeakerOffIcon className="mr-2" />;

export const VolumeControl: React.FC<IVolumeControlProps> = ({
    volume,
    onVolumeChange,
    language,
}) => {
    const stepPercentage = 5;
    const [isMuted, setIsMuted] = useState(false);
    const previousVolume = 0.5;

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (!isMuted) {
            onVolumeChange(parseFloat(event.target.value));
        }
    };

    const handleMuteToggle = () => {
        if (isMuted) {
            onVolumeChange(previousVolume);
        } else {
            onVolumeChange(0);
        }
        setIsMuted(!isMuted);
    };

    const calculateStep = () => {
        return 1 / (100 / stepPercentage);
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <Label className="text-white mt-4 mb-3 text-lg">
                {language === "de" ? "Lautstärke:" : "Volume:"}
            </Label>
            <div className="relative w-full flex items-center justify-center">
                <Button
                    onClick={handleMuteToggle}
                    className="mr-4 text-white cursor-pointer focus:outline-none"
                >
                    {isMuted ? SPEAKER_OFF_ICON : SPEAKER_LOUD_ICON}
                </Button>
                <div className="w-full">
                    <Input
                        type="range"
                        min={0}
                        max={1}
                        step={calculateStep()}
                        value={volume}
                        onChange={handleVolumeChange}
                        className="w-full h-6 appearance-none bg-red-500 rounded-full"
                    />
                </div>
                <div className="ml-4 text-white">
                    {Math.round(volume * 100)}%
                </div>
            </div>
        </div>
    );
};
