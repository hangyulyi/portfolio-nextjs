export interface MonitorBarItemProps {
    name: string;
}

const MonitorBarItem: React.FC<MonitorBarItemProps> = ({ name }) => {
    return(
        <div>
            <div className="w-11 rounded-[10px] aspect-square bg-white transition hover:scale-125">
            </div>
        </div>
    )
}

export default MonitorBarItem