import React, {useRef} from 'react'
import "./EasterEggModal.css"
import HorizontalLineIcon from "./HorizontalLine";


const EasterEggModal = ({showModal, setShowModal}) => {
    const modalRef = useRef()

    const closeModal = e => {
        if(modalRef.current === e.target) {
            setShowModal(false)
        }
    }

    return(
        <>
            {showModal &&
            <div className="background" ref={modalRef} onClick={closeModal}>
                <div className="modalWrapper">
                    <div className="modalTitleContainer">
                        <h3 className="modalTitle">
                            Lucky you! You just found an easter egg!
                        </h3>
                        <HorizontalLineIcon/>
                    </div>
                    <div className="modalInnerContainer">
                        <p>
                            So far you've probably got the chance to look through the project and learn how React Testing Library
                            can be utilized to automate testing in React applications. Quite cool right? <br/> <br/> Now, since you were so lucky you will here learn another cool feature about
                            React Testing Library. In particular it has to do with Code Coverage which is a software testing metric that identifies the number of lines of code
                            that is validated in the test cases. <br/> <br/>

                            In particular, you can run <code>npm test -- --coverage</code>, which will produce a coverage report along with your test cases. Try it out and have a look!
                        </p>
                    </div>
                </div>
            </div>
            }
        </>
    )
}
export default EasterEggModal