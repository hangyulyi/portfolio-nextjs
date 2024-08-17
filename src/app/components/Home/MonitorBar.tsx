import React from "react";

import MonitorBarItem from "./MonitorBarItem";

export default function MonitorBar() {
    return(
        <div className="backdrop-blur-md flex items-center">
            <div className="rounded-[12px] h-4/5 w-16 flex flex-col items-center py-2 border-zinc-400 border-solid border">

                <div className="space-y-3">
                    <MonitorBarItem name="About me" />
                    <MonitorBarItem name="About me" />
                    <MonitorBarItem name="About me" />
                </div>

            </div>
        </div>
    )
}