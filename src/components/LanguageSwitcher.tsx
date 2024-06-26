"use client"

import React from 'react'
import { useTranslation } from 'react-i18next'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }
    return (
    <div className='flex items-center gap-4'>
      <button onClick={() => changeLanguage('en')} >English</button>
      <button onClick={() => changeLanguage('es')} >Spanish</button>
    </div>
  )
}

export default LanguageSwitcher
