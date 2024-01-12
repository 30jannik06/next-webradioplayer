import React from "react";
import { PlayIcon, PauseIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ITogglePlayProps } from "@/interfaces/ITogglePlayProps";

const PLAY_ICON = <PlayIcon className="mr-2" />;
const PAUSE_ICON = <PauseIcon className="mr-2" />;

export const TogglePlay: React.FC<ITogglePlayProps> = ({
    isPlaying,
    onTogglePlay,
}) => {
    return (
        <Button
            className={`${
                isPlaying ? "bg-red-500" : "bg-blue-500"
            } text-white p-4 rounded-full mb-4 text-lg flex items-center`}
            onClick={onTogglePlay}
        >
            {isPlaying ? PAUSE_ICON : PLAY_ICON}
            {isPlaying ? "Pause" : "Play"}
        </Button>
    );
};
