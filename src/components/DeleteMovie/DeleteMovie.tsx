import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./DeleteMovie.module.css";

const DeleteMovie: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        Delete
      </button>
      <Modal show={modal} close={toggle} title="Delete Movie">
        <form>
          <p>Are you sure you want to delete this movie?</p>
        </form>
      </Modal>
    </>
  );
};

export default DeleteMovie;
