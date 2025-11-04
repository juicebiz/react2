import { useState } from "react"
import Modal from "@/components/UI/Modal/Modal";

export default function HomePage() {
  const [ notice, setNotice ] = useState(false);

  return <div>
    <h1>HomePage</h1>
    <hr/>
    <button onClick={() => setNotice(true)} type="button">Open</button>
    <Modal 
      show={notice} 
      backdrop="static"
      onClose={() => setNotice(false)} 
      title="Hello, world"
    >
      <Modal.Header>
        <h1>Ура!</h1>
      </Modal.Header>
      <Modal.Body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, mollitia a ea adipisci, quas ad deleniti sunt voluptate qui perferendis rem, repellendus commodi! Ratione sunt sapiente nesciunt, distinctio officia necessitatibus.</p>
      </Modal.Body>
    </Modal>
  </div>
}