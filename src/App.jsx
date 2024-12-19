import React, { useState } from "react";
import Modal from "./Components/Modal/Modal";
// import Modal from "./Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Custom Modal Example</h1>
      <button onClick={openModal}>Open Modal</button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Hello!</h2>
        <p>This is a custom modal built with React.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
