import { useState } from "react"

export default function Card({card, backside, getCard, deck, alternate}) {
    const [isFlipped, setIsFlipped] = useState(false)

    function Altrnate(boolean, string) {
        if (string === 'one') {
            return boolean
        } else {
            return !boolean
        }
    }

    const flipping = ()=>{
        getCard({
            type: deck,
            cardId: card.id,
        })
        
        //console.log(isFlipped);
        if (!isFlipped) {
            setIsFlipped(true)

            setTimeout(()=>{
                setIsFlipped(false)
            }, 5000)
            
        } 
    }
    return (
        <div className={`${(card.isMatched || Altrnate(alternate, deck)) && 'pointer-events-none'} w-40 h-56 rounded-lg overflow-hidden my-1 border ${card.isMatched? "border-green-600" : "border-black"} border-3`} onClick={flipping} key={card.description}>
            <img src={card.isMatched || isFlipped ? card.url: backside.url} alt={isFlipped? card.description: backside.description} className="w-full h-full object-cover"></img>
        </div>
    )
}