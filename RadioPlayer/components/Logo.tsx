import Image from "next/image";
import React from "react";
import logi from "@/public/webradioLogo.png";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "./ui/tooltip";
import { Label } from "./ui/label";

export const Logo = () => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger className="ml-5 sm:ml-5">
                    <Image
                        src={logi}
                        alt="Web Radio Logo"
                        className="h-10 w-auto sm:h-12 md:h-16 lg:h-20 xl:h-24 ml-5 sm:ml-0"
                        draggable="false"
                    />
                </TooltipTrigger>
                <TooltipContent className={tooltipContentStyles}>
                    <Label>Was ein geiles Logo</Label>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

const tooltipContentStyles = `
    z-50
    overflow-hidden
    rounded-md
    bg-primary
    px-3
    py-1.5
    text-xs
    text-primary-foreground
    animate-in
    fade-in-0
    zoom-in-95
    data-[state=closed]:animate-out
    data-[state=closed]:fade-out-0
    data-[state=closed]:zoom-out-95
    data-[side=bottom]:slide-in-from-top-2
    data-[side=left]:slide-in-from-right-2
    data-[side=right]:slide-in-from-left-2
    data-[side=top]:slide-in-from-bottom-2
    sm:ml-5
`;
