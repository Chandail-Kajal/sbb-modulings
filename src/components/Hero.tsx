import { CirclePlay } from "lucide-react"
import Image from "next/image"

export const Hero=()=>{
    return <div className="h-full w-full overflow-hidden relative">
        <div className="inset-0 absolute bg-black/10 flex flex-row justify-center items-center">
            <CirclePlay className="text-white sm:size-30 stroke-1" />
        </div>
        <Image className="h-full w-full object-cover" src={"/hero_thumbnail.png"} alt="hero" height={1080} width={1280} />
    </div>
}