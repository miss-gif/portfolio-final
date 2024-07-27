import React, { useState } from "react";
import "./MouseCursor.scss";

const MouseCursor = () => {
  // 커서 위치를 저장할 상태 변수
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // 커서 상태를 저장할 상태 변수
  const [isCursorActive, setCursorActive] = useState(false);

  // 리플 효과를 저장할 상태 변수
  const [ripples, setRipples] = useState([]);

  // 마우스 움직임 이벤트 핸들러
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  // 마우스 다운 이벤트 핸들러
  const handleMouseDown = () => {
    setCursorActive(true);
  };

  // 마우스 업 이벤트 핸들러
  const handleMouseUp = () => {
    setCursorActive(false);
  };

  // 리플 생성 함수
  const createRipple = (e) => {
    const newRipple = {
      x: e.clientX,
      y: e.clientY,
    };
    setRipples((ripples) => [...ripples, newRipple]);
  };

  // 리플 삭제 함수
  const removeRipple = (index) => {
    setRipples((ripples) => {
      const updatedRipples = [...ripples];
      updatedRipples.splice(index, 1);
      updatedRipples.splice(index, 2);
      return updatedRipples;
    });
  };

  return (
    <div
      className={`cursor ${isCursorActive ? "cursor--active" : ""}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={createRipple}
    >
      {/* 커서 디폴트 모양 */}
      <div
        className="cursor__default__inner"
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
      ></div>

      {/* 커서 트레이스 모양 */}
      <div
        className="cursor__trace__inner"
        style={{ top: cursorPosition.y, left: cursorPosition.x }}
      ></div>

      {/* 리플 효과 */}
      {ripples.map((ripple, index) => (
        <span
          key={index}
          className="ripple"
          style={{ top: cursorPosition.y, left: cursorPosition.x }}
          onAnimationEnd={() => {
            removeRipple(index);
          }}
        ></span>
      ))}
    </div>
  );
};

export default MouseCursor;
