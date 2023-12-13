import React, { ChangeEvent, useState } from "react";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { Radiostations } from "@/public/utils/Radiostations";
import ErrorBoundary from "./ErrorBoundary";
import { IRadioStationSelectorProps } from "@/interfaces/IRadioStationSelectorProps";

const RadioStationSelector: React.FC<IRadioStationSelectorProps> = ({
    onChange,
    language,
}) => {
    const [selectedStationId, setSelectedStationId] = useState<string | null>(
        null
    );

    const handleRadioChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const stationId = event.target.value;
        setSelectedStationId(stationId);
        const selectedStation = Radiostations.find(
            (station) => station.id === stationId
        );
        onChange(selectedStation || null);
    };

    return (
        <ErrorBoundary>
            <div className="relative">
                <label className="text-white mt-4 mb-2 block">
                    {language === "de"
                        ? "Radiosender auswählen:"
                        : "Select Radio Station:"}
                </label>
                <select
                    onChange={handleRadioChange}
                    value={selectedStationId || ""}
                    className="bg-gray-700 text-white p-2 rounded appearance-none block w-full overflow-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-700"
                    style={{
                        // Customize scrollbar using inline styles
                        scrollbarWidth: "thin",
                        scrollbarColor: "#4A5568 #2D3748",
                    }}
                >
                    <option value="" disabled>
                        {language === "de"
                            ? "Bitte auswählen"
                            : "Please select"}
                    </option>
                    {Radiostations.map((station: IRadioStation) => (
                        <option key={station.id} value={station.id}>
                            {station.name}
                        </option>
                    ))}
                </select>
            </div>
        </ErrorBoundary>
    );
};

export default RadioStationSelector;
