import imagemDeLoading from '../Style/Loader/loader1.gif'
import {CoatinerLoader} from '../Style/Loader/LoaderStyle'

export default function Loader(){

    return(

        <CoatinerLoader>
            <img src={imagemDeLoading}></img>
        </CoatinerLoader>
    )
}