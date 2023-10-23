import { useState } from "react"

export default function Card({detail, backside, getCard, mazzo}) {
    const [isFlipped, setIsFlipped] = useState(false)

    const flipping = (e)=>{
        getCard(e, mazzo)
        
        //console.log(isFlipped);
        if (!isFlipped) {
            setIsFlipped(true)

            setTimeout(()=>{
                setIsFlipped(false)
            }, 5000)
            
        } 
    }
    return (
        <div data-label={mazzo} className="w-40 h-56 rounded-lg overflow-hidden col-span-2 my-1 border border-black border-3" onClick={()=> flipping(detail.id)}>
            <img src={isFlipped? detail.url: backside.url} alt={isFlipped? detail.description: backside.description} className="w-full h-full object-cover"></img>
        </div>
    )
}