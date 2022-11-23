import { useState } from "react";
import Modal from "../Modal/Modal";
import classes from "./AddMovie.module.css";

const AddMovie: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <button className={classes.btn} onClick={() => toggle()}>
        + Add Movie
      </button>
      <Modal show={modal} close={toggle} title="Add Movie">
        This is add movie form
      </Modal>
    </>
  );
};

export default AddMovie;
