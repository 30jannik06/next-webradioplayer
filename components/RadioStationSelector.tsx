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

    const groupedStations: { [key: string]: IRadioStation[] } = {};

    Radiostations.forEach((station) => {
        const group = station.group || "Other"; // Default to "Other" if no group is specified
        if (!groupedStations[group]) {
            groupedStations[group] = [];
        }
        groupedStations[group].push(station);
    });

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
                        scrollbarWidth: "thin",
                        scrollbarColor: "#4A5568 #2D3748",
                    }}
                >
                    <option value="" disabled>
                        {language === "de"
                            ? "Bitte auswählen"
                            : "Please select"}
                    </option>
                    {Object.entries(groupedStations).map(
                        ([group, stations]) => (
                            <optgroup key={group} label={group}>
                                {stations.map((station) => (
                                    <option key={station.id} value={station.id}>
                                        {station.name}
                                    </option>
                                ))}
                            </optgroup>
                        )
                    )}
                </select>
            </div>
        </ErrorBoundary>
    );
};

export default RadioStationSelector;
