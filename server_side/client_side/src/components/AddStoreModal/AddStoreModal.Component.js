import React from "react";
import "./AddStoreModal.style.scss";
import { AiOutlineClose } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

const AddStoreModal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="AddStoreModal">
      <div className="AddStoreModal__container">
        <h3 className="AddStoreModal__title">
          <GrAdd className="AddStoreModal__titleIcon" />
          Add a Store
        </h3>
        <form className="AddStoreModal__form">
          <div className="AddStoreModal__formGroup">
            <label>Store name</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>Total football</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>New football</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>Returning football</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>Total time spent in the shop</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>Total departments</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
          <div className="AddStoreModal__formGroup">
            <label>Total departments vistied</label>
            <input type="text" className="AddStoreModal__formInputs" />
          </div>
        </form>

        <span className="AddStoreModal__closeBtn" onClick={onClose}>
          <AiOutlineClose />
        </span>
      </div>
    </div>
  );
};

export default AddStoreModal;
