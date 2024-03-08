import { DEFAULT_LANGUAGE } from '@/shared/constants'

import { en } from './languages/en'
import { pt } from './languages/pt'

type Dictionaries = { [key: string]: () => { [key: string]: string } }

const dictionaries: Dictionaries = {
  en: () => en,
  pt: () => pt,
}

export const getLanguages = (locale = DEFAULT_LANGUAGE) => dictionaries[locale]()
