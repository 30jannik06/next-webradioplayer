import React, { ChangeEvent } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { IVolumeControlProps } from "@/interfaces/IVolumeControlProps";

export const VolumeControl: React.FC<IVolumeControlProps> = ({
    volume,
    onVolumeChange,
    language,
}) => {
    const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>) => {
        onVolumeChange(parseFloat(event.target.value));
    };

    return (
        <div className="flex flex-col items-center mb-4">
            <Label className="text-white mt-4 mb-3">
                {language === "de" ? "Lautstärke:" : "Volume:"}
            </Label>
            <div className="relative w-full">
                <Input
                    type="range"
                    min={0}
                    max={1}
                    step={0.01}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-full h-6 appearance-none bg-gray-700 rounded-full"
                />
                <div className="absolute left-1/2 top-0 transform -translate-x-1/2 mt-6 text-white">
                    {Math.round(volume * 100)}%
                </div>
            </div>
        </div>
    );
};
