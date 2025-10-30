import useClickOutside from '@/hooks/useClickOutside';
import styles from './modal.module.css'

export default function Modal({ 
  show,
  onOk,
  onClose,
  children,
  css = {},
  title = '',
  onClickOutside = () => {},
  backdrop = 'none', // 'none', 'simple', 'static'
  hideHeader = false,
  hideFooter = false
}){
  const ref = useClickOutside(onClickOutside);

  const childrenArr = Array.isArray(children) ? children : [ children ];
  const header = childrenArr.filter(child => child.type === ModalHeader);
  const body = childrenArr.filter(child => child.type === ModalBody);
  const footer = childrenArr.filter(child => child.type === ModalFooter);

  const classes = ['modal'];

  if(show){
    classes.push('d-block');
  }
  
  classes.push(backdrop === 'none' ? styles.smallModal : styles.backdrop);

  function checkClose(e){
    if(e.target === e.currentTarget && backdrop === 'simple'){
      onClose();
    }
  }

  return <div onClick={checkClose} className={ classes.join(' ') } style={css} tabIndex="-1" ref={ref}>
      <div className="modal-dialog">
        <div className="modal-content">
            { !hideHeader && <div className="modal-header">
              { header.length > 0 ? header : <>
                <h5 className="modal-title">{ title }</h5>
                <button onClick={ onClose } type="button" className="btn-close" aria-label="Close"></button>
              </> }
            </div> }
            <div className="modal-body">
              { body }
            </div>
            { !hideFooter && <div className="modal-footer">
              { footer.length > 0 ? footer : <>
                <button onClick={ onOk } type="button" className="btn btn-secondary">Ok</button>
                <button onClick={ onClose } type="button" className="btn btn-primary">Cancel</button>
              </> }
            </div> }
        </div>
      </div>
  </div>;
}

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

function ModalHeader({ children }){
  return children;
}

function ModalBody({ children }){
  return children;
}

function ModalFooter({ children }){
  return children;
}