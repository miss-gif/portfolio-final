// src/components/StyledModal.js
import styled from "@emotion/styled";
import React from "react";
import Modal from "react-modal";

// 스타일이 적용된 모달 컴포넌트
const StyledModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={contentLabel}
    >
      {children}
    </ModalWrapper>
  );
};

export default StyledModal;
const ModalWrapper = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 350px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  z-index: 1000;

  animation: fadeIn 0.3s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(-50%, -40%);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  h3 {
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
    color: #666;
    margin: 0;
    text-align: center;
    line-height: 1.5;
  }

  div {
    display: flex;
    gap: 10px;
  }

  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #0056b3;
    }

    &:first-of-type {
      background-color: #28a745;

      &:hover {
        background-color: #218838;
      }
    }

    &:last-of-type {
      background-color: #dc3545;

      &:hover {
        background-color: #c82333;
      }
    }
  }
`;
