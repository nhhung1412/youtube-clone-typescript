import React, { useState } from 'react'
import { categoryLinks } from '../assets/categoryLink'

export const CategoriesBar: React.FC = () => {
  const [activeElement, setActiveElement] = useState<string>('All')

  const handleActiveElement = (item: string): void => {
    setActiveElement(item)
  }

  return (
    <>
      {categoryLinks.map((item: string, index: number) => (
        <div
          key={index}
          onClick={() => handleActiveElement(item)}
          className={
            activeElement === item
              ? 'bg-black text-white ct-category-items'
              : 'bg-gray-100 text-black hover:bg-gray-200 ct-category-items'
          }
        >
          <span> {item}</span>
        </div>
      ))}
    </>
  )
}
