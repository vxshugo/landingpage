import React from "react";
import "./index.css"


const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal__content active" : "modal__content"} onClick={e => e.stopPropagation()}>
                <div className="close" onClick={() => setActive(false)}></div>
                <div className="content">
                    {children}
                    <div className="panel" onClick={() => setActive(false)}>
                        <div className="close-button">Закрыть</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal