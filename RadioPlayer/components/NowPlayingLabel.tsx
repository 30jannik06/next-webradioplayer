import React from "react";
import { Label } from "./ui/label";
import { INowPlayingLabelProps } from "@/interfaces/INowPlayingLabelProps";



export const NowPlayingLabel: React.FC<INowPlayingLabelProps> = ({
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
