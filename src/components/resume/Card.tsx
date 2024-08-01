import React, { useEffect, useState } from 'react'

// 객체 타입 정의
interface CardProps {
  title: string
  subtitle: string
  date: string
  description: string
  allOpen: boolean
}

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  date,
  description,
  allOpen
}) => {
  // useState에 타입을 명시
  const [showInfo, setShowInfo] = useState<boolean>(false)

  useEffect(() => {
    setShowInfo(allOpen)
  }, [allOpen])

  return (
    <div className="resume__item">
      <div
        className="resume__header"
        onClick={() => {
          setShowInfo(prevShowInfo => !prevShowInfo)
        }}>
        <div className="resume__subtitle">{title}</div>
        <div className="resume__icon">{showInfo ? '-' : '+'}</div>
      </div>
      <div className={`${showInfo ? 'show-content' : ''} resume__content`}>
        <div className="resume__date-title">
          <h3 className="resume__title">{subtitle}</h3>
          <span className="resume__date text-cs">{date}</span>
        </div>
        <p className="resume__description">{description}</p>
      </div>
    </div>
  )
}

export default Card
