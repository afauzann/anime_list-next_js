import { getAnimeResponse } from "@/app/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"

export default async function Page({params: { id }}) {
    const anime = await getAnimeResponse(`anime/${id}`)
   
    return (
    <>
    <div className="pt-4 px-4">
    <h3 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h3>
    </div>
    <div className="pt-4 px-4 flex text-color-primary gap-2 overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Peringkat</h3>
            <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Score</h3>
            <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Anggota</h3>
            <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border border-color-primary p-2">
            <h3>Episode</h3>
            <p>{anime.data.episodes}</p>
        </div>
    </div>
    <div className="flex sm:flex-nowrap flex-wrap gap-2 pt-4 px-4 text-color-primary">
        <Image 
            src={anime.data.images.webp.image_url} 
            alt={anime.data.images.jpg.image_url} 
            width={350} 
            height={350}
            className="w-full rounded object-cover"
        />
        <p className="justify text-xl">{anime.data.synopsis}</p>
    </div>
    <div>
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
    </div>
    </>
    )
}