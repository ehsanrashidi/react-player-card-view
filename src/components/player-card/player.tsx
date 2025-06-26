import { FavoriteIcon } from "./icons/favorite-icon";
import { MusicIcon } from "./icons/music-icon";
import { SpeakerIcon } from "./icons/speaker-icon";
import { StarIcon } from "./icons/star-icon";

export const PlayerCard = () => {
    return (
        <div className="w-full max-w-[320px] mx-auto bg-white shadow-md rounded-lg overflow-hidden dark:bg-zinc-900">
            <div className="flex justify-between items-center px-6 py-4">
                <div className="flex items-center">
                    <MusicIcon />
                    <div className="mx-3">
                        <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">مرغ سحر</h3>
                        <p className="text-gray-500 dark:text-gray-400">استاد محمدرضا شجریان</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <FavoriteIcon />
                    <StarIcon />
                </div>
            </div>
            <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center" />
            </div>
            <div className="px-6 py-4">
                <div className="flex items-center">
                    <p className="text-sm text-gray-500 dark:text-gray-400">50%</p>
                    <div className="w-full mx-3">
                        <div className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden dark:bg-gray-800">
                            <div className="absolute left-0 top-0 h-full bg-yellow-500 w-1/2" />
                        </div>
                    </div>
                    <SpeakerIcon />
                </div>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-3">
                    <span> 3:35 </span>
                    <span> 00:03 </span>
                </div>
            </div>
        </div>
    );
};
