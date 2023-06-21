import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {DetailsHeader, Error, Loader, RelatedSongs} from "../components";
import {setActiveSong, playPause} from "../redux/features/playerSlice";
import {useGetSongDetailsQuery, useGetSongRelatedQuery} from "../redux/services/shazamCore";

const SongDetails = () => {
   const dispatch = useDispatch();
   const { activeSong, isPlaying } = useSelector((state) => state.player);
   const { songid } = useParams();
   const { data: songData, isFetching, error } = useGetSongDetailsQuery(songid);
   const { data: relatedSongData } = useGetSongRelatedQuery(songData?.artists[0]?.adamid);

   console.log(relatedSongData, 1111)

   return <div className="flex flex-col">
      <DetailsHeader artistId={""} songData={songData}/>
      <div className="mb-10">
         <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
         <div className="mt-5">
            {songData?.sections[1]?.type === "LYRICS" ?
            songData?.sections[1]?.text?.map((line, i) => (<p key={i} className="text-gray-400 text-base my-1">{line}</p>)) : <p>Sorry, no lyrics found!</p>}
         </div>
      </div>
      <RelatedSongs />
   </div>
};

export default SongDetails;
