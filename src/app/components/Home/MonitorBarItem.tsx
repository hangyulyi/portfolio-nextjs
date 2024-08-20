export interface MonitorBarItemProps {
    name: string;
    isHovered: boolean;
    scaleClass: string;
    onClick: () => void;
    background: string;
}

const MonitorBarItem: React.FC<MonitorBarItemProps> = ({ name, isHovered, scaleClass, onClick, background }) => {
    return(
        <div className={`relative transition-transform rounded-[10px] ${scaleClass}`}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <div 
                className="w-11 aspect-square bg-cover bg-center"
                style={{backgroundImage: `url(${background})` }}
            >

                {isHovered && (
                    <div className="absolute left-full ml-3 px-2 py-1 bg-gray-200 rounded whitespace-nowrap">
                        {name}
                    </div>
                )}
            </div>
        </div>
    )
}

export default MonitorBarItem