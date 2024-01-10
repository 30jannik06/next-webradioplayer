import React, { ChangeEvent, useState, useEffect } from "react";
import { IRadioStation } from "@/interfaces/IRadioStation";
import { ErrorBoundary } from "./ErrorBoundary";
import { IRadioStationSelectorProps } from "@/interfaces/IRadioStationSelectorProps";
import { Input } from "./ui/input";

// Importieren Sie Ihre Radio-Stationen aus der JSON-Datei
import radioStationsData from "@/data/radioStation.json";

export const RadioStationSelector: React.FC<IRadioStationSelectorProps> = ({
    onChange,
    language,
}) => {
    const [selectedStationId, setSelectedStationId] = useState<string | null>(
        null
    );

    const handleRadioChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const stationId = event.target.value;
        setSelectedStationId(stationId);
        const selectedStation = radioStationsData.find(
            (station) => station.id === stationId
        );
        onChange(selectedStation || null);
    };

    const groupedStations: { [key: string]: IRadioStation[] } = {};

    radioStationsData.forEach((station) => {
        const group = station.group || "Other";
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
                    {/* Custom-Option für eigenen Stream-Link */}
                    <option value="custom">
                        {language === "de"
                            ? "Eigener Stream-Link"
                            : "Custom Stream Link"}
                    </option>
                </select>
                {/* Eingabefeld für den eigenen Stream-Link */}
                {selectedStationId === "custom" && (
                    <Input
                        type="text"
                        placeholder={
                            language === "de"
                                ? "Eigenen Link eingeben"
                                : "Enter custom link"
                        }
                        onChange={(e) =>
                            onChange({
                                id: "custom",
                                name: e.target.value,
                                streamUrl: e.target.value,
                            })
                        }
                        className="bg-gray-700 text-white p-2 rounded mt-2 block w-full"
                    />
                )}
            </div>
        </ErrorBoundary>
    );
};
