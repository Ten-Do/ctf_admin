import React from 'react'
import styles from './styles.module.css'

export const Checkboxes = ({ options, children }: { options: string[]; children: React.ReactNode }) => {
  return (
    <>
      <div className={styles.dropdown_menu + ' btn '}>
        <p>{children || 'select'}</p>
        {options.map((option) => (
          <label key={option} className={'card ' + styles.item}>
            <input type='checkbox' value={option} name='categories' />
            {option}
          </label>
        ))}
      </div>
    </>
  )
}
