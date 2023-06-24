import { useParams } from "react-router-dom";
import {DetailsHeader, Error, Loader,} from "../components";
import {useGetSongDetailsQuery} from "../redux/services/shazamCore";

const SongDetails = () => {
   const { songid } = useParams();
   const { data: songData, isFetching: isFetchingSongDetails, error: songDetailsError } = useGetSongDetailsQuery(songid);

   if(isFetchingSongDetails) {
      return (<Loader title="Searching song details..."/>);
   }

   if(songDetailsError){
      return (<Error/>);
   }


   return <div className="flex flex-col">
      <DetailsHeader artistId={""} songData={songData}/>
      <div className="mb-10">
         <h2 className="text-white text-3xl font-bold">Lyrics:</h2>
         <div className="mt-5">
            {songData?.sections[1]?.type === "LYRICS" ?
            songData?.sections[1]?.text?.map((line, i) => (<p key={i} className="text-gray-400 text-base my-1">{line}</p>)) : <p>Sorry, no lyrics found!</p>}
         </div>
      </div>
   </div>
};

export default SongDetails;
