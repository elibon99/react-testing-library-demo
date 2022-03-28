import React, {useState} from 'react'
import "./EasterEgg.css"
import EasterEggModal from "./EasterEggModal";

const EasterEgg = () => {
    const [showModal, setShowModal] = useState(false)
    return(
        <>
        <div className="container" onClick={() => setShowModal(true)}>

        </div>
        <EasterEggModal showModal={showModal} setShowModal={setShowModal}/>
        </>
    )
}
export default EasterEgg