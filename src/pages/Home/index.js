import { useEffect, useState } from "react";
import api from '../../services/api'

function Home(){
    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        
        async function loadFilmes(){
            const response = await api.get("movie/now_playing", {
                params:{
                    api_key: "e20ebd797d83e800c5b9fb08eee33e8a", 
                    language: "pt-BR",
                    page: 1,
                }
            })

            console.log(response);
        }

        loadFilmes();

    }, []);

    return(
        <div>
            
        </div>
    )
}

export default Home;