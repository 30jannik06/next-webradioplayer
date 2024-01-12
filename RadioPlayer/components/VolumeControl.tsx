import React, { ChangeEvent } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IVolumeControlProps } from "@/interfaces/IVolumeControlProps";

export const VolumeControl: React.FC<IVolumeControlProps> = ({
    volume,
    onVolumeChange,
    language,
}) => {
    const stepPercentage = 5;

    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onVolumeChange(parseFloat(event.target.value));
    };

    const calculateStep = () => {
        return 1 / (100 / stepPercentage);
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <Label className="text-white mt-4 mb-3 text-lg">
                {language === "de" ? "Lautstärke:" : "Volume:"}
            </Label>
            <div className="relative w-full">
                <Input
                    type="range"
                    min={0}
                    max={1}
                    step={calculateStep()}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-6 appearance-none bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                />
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 mt-6 text-white">
                    {Math.round(volume * 100)}%
                </div>
            </div>
        </div>
    );
};
