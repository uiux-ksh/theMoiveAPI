import {useAxios} from "../../hooks/useAxios";
import {API_URL, API_KEY, IMAGE_BASE_URL} from "../../config/config";


function LandingPage() {
    const {data} = useAxios('movie/popular');



    return(
        <div style={{width:"100%", margin:0}}>
             <div style={{width:"85%", margin:"1rem auto"}}>
                 <h2>Movies by latest</h2>
                 <hr/>


             </div>

            <div style={{display:'flex', justifyContent:'center'}}>
                <button>더보기</button>
            </div>
        </div>
    )
}
export  default  LandingPage;