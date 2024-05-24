import { createContext,useState } from "react";

const myContext = createContext();

const ContextApi = ({children})=>{
    const [darkClass,setDarkClass] = useState('')
    const [toggle,settoggle] = useState('hide')
    const [moreData,setMoreData] = useState([])
    const [page,setPage] = useState(1)
    const [perimeter,setPerimeter] = useState('general')
    const [loadingComponent,setLoadingComponent] = useState(true)
    return (
<myContext.Provider value={{darkClass,setDarkClass,perimeter,setPerimeter,toggle,settoggle,page,setPage,moreData,setMoreData,setLoadingComponent,loadingComponent}}>    
{children}
</myContext.Provider>   
 )
}

export default ContextApi;
export {myContext}