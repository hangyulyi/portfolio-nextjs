import { IconType } from "react-icons";

export interface MonitorBarItemProps {
    name: string;
    isHovered: boolean;
    scaleClass: string;
    onClick: () => void;
    Icon: IconType;
    color?: string;
}

const MonitorBarItem: React.FC<MonitorBarItemProps> = ({ name, isHovered, scaleClass, onClick, Icon, color='black' }) => {
    return(
        <div className={`relative w-11 h-11 transition-transform aspect-square flex items-center justify-center ${scaleClass}`}
            onClick={onClick}
            style={{ cursor: 'pointer' }}
        >
            <div className="bg-white rounded-md w-full h-full">
                <Icon size='100%' color={color} />
            </div>
            

                {isHovered && (
                    <div className="absolute left-full ml-3 px-2 py-1 bg-gray-200 rounded whitespace-nowrap">
                        {name}
                    </div>
                )}
            
        </div>
    )
}

export default MonitorBarItem