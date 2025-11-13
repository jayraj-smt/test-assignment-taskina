import React, { useState } from 'react'
import './PageSelector.css'

function PageSelector() {
  const [checkedItems, setCheckedItems] = useState({
    allPages: false,
    page1: false,
    page2: false,
    page3: false,
    page4: false,
  })

  const handleCheckboxChange = (key) => {
    setCheckedItems((prev) => {
      const newState = { ...prev }

      if (key === 'allPages') {
        const newAllPagesState = !prev.allPages
        newState.allPages = newAllPagesState
        newState.page1 = newAllPagesState
        newState.page2 = newAllPagesState
        newState.page3 = newAllPagesState
        newState.page4 = newAllPagesState
      } else {
        newState[key] = !prev[key]
        const allPagesSelected =
          newState.page1 && newState.page2 && newState.page3 && newState.page4
        newState.allPages = allPagesSelected
      }

      return newState
    })
  }

  const handleDone = () => {
    console.log('Done button clicked')
  }

  const pages = [
    { key: 'allPages', label: 'All pages' },
    { key: 'page1', label: 'Page 1' },
    { key: 'page2', label: 'Page 2' },
    { key: 'page3', label: 'Page 3' },
    { key: 'page4', label: 'Page 4' },
  ]

  return (
    <div className='page-selector'>
      <div className='page-selector-content'>
        <div className='page-list'>
          {pages.map((page, index) => (
            <div
              key={page.key}
              className={`page-item ${
                page.key === 'page1' ? 'page-item-first' : ''
              } ${page.key === 'page4' ? 'page-item-last' : ''}`}
              onClick={() => handleCheckboxChange(page.key)}
            >
              <span className='page-item-text'>{page.label}</span>
              <label
                className='checkbox-container'
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type='checkbox'
                  checked={checkedItems[page.key]}
                  onChange={() => handleCheckboxChange(page.key)}
                />
                <span className='checkbox-custom'>
                  <span
                    className={`check-icon ${
                      checkedItems[page.key]
                        ? 'check-icon-checked'
                        : 'check-icon-hover'
                    }`}
                  ></span>
                </span>
              </label>
            </div>
          ))}
        </div>
        <button className='done-button' onClick={handleDone}>
          Done
        </button>
      </div>
    </div>
  )
}

export default PageSelector
