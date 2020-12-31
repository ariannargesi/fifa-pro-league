import React,{useState, useRef} from 'react'
import useToggle from '../../hooks/useToggle'
import useClickOutside from '../../hooks/useClickOutside'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import './Modal.scss'
export default  (props) => {
    const [state, setState] = useToggle(false)
    const [anim, setAnim] = useState("modal")
    const divRef = useRef(null)
    const clickHandler = () => {
        setState(true)
            setTimeout(() => {
               setAnim("modal modal-open")
           },1)
    }

    const clickOutsideHandler = () => {
        setAnim("modal")
        setTimeout(() => {
            setState(false)
        },300)    }
    useClickOutside(divRef, clickOutsideHandler)
    return (
        <div className="modal-wrapper">
            <span className="modal-title" onClick={clickHandler}>{props.title}</span>
            { state &&
            <div className={anim}>
                <FontAwesomeIcon className='close-modal' size='2x' cursor='pointer' color='red'icon={faWindowClose} />
                <div className="modal-content" ref={divRef}>
                    {
                        props.children
                    }
                </div>
            </div>
            }
        </div>
    )
}