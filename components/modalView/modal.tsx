import {FC} from 'react';
interface ModalProps {
    active: boolean;
    setActive: (active: boolean) => boolean;
}
const Modal:FC<ModalProps> = ({active, setActive}) => {
    return (
        <div style={active ? {width: 200, height: 200, backgroundColor: 'red'} : {display: 'none'}}>
            <button onClick={() => setActive(!active)}>close</button>
        </div>
    );
};

export default Modal;