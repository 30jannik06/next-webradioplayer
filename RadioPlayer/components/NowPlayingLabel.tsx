import React from "react";
import { Label } from "./ui/label";
import { IRadioStation } from "@/interfaces/IRadioStation";

interface NowPlayingLabelProps {
    language: string;
    selectedRadio: IRadioStation | null;
}

export const NowPlayingLabel: React.FC<NowPlayingLabelProps> = ({
    language,
    selectedRadio,
}) => {
    return (
        <Label className="text-white mb-2">
            {selectedRadio
                ? `${language === "de" ? "Gerade läuft:" : "Now playing:"} ${
                      selectedRadio.name
                  }`
                : language === "de"
                ? "Kein Sender ausgewählt"
                : "No station selected"}
        </Label>
    );
};
