
import SongPlayer from "./SongPlayer"
import MonitorBar from "./MonitorBar"

// TODO: Fix responsive screen size on smaller monitors (Current max-w does not work on smaller monitors)

export default function Monitor () {
    return(
        <>
            <div className="flex justify-center p-4">

            
                <div className="w-screen max-w-7xl aspect-video bg-[url('/img/wallpaper.jpg')] bg-cover rounded-lg md:w-10/12">

                    <div className="p-2 flex items-center">
                        <MonitorBar />
                    </div>

                </div>
            </div>
        </>
    )
}