import { IAudioControllerProps } from "@/interfaces/IAudioControllerProps";
import React, { useEffect, useRef } from "react";

const AudioController: React.FC<IAudioControllerProps> = ({
    isPlaying,
    volume,
    selectedRadio,
    onTogglePlay,
    onVolumeChange,
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);

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

    return (
        <>
            <audio
                ref={audioRef}
                src={selectedRadio?.streamUrl}
                title="Song Title"
            />
            {/* ... other components that use isPlaying, volume, etc. */}
        </>
    );
};

export default AudioController;
