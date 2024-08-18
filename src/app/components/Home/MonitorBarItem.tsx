export interface MonitorBarItemProps {
    name: string;
    isHovered: boolean;
    scaleClass: string;
    // background: string;
}

const MonitorBarItem: React.FC<MonitorBarItemProps> = ({ name, isHovered, scaleClass }) => {
    return(
        <div className="relative">
            <div 
                className={`w-11 rounded-[10px] aspect-square bg-white transition-transform ${scaleClass}`}
            >

                {isHovered && (
                    <div className="absolute w-fit left-full ml-2 px-2 py-1 bg-gray-200 rounded">
                        {name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MonitorBarItem