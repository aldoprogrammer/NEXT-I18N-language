"use client"

import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
    const { t } = useTranslation('common')
    return (
        <div>
            <h1>{t('welcome')}</h1>
        </div>
    )
}

export default HomePage