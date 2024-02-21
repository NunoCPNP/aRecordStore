import { en } from './languages/en'
import { pt } from './languages/pt'

type Dictionaries = { [key: string]: () => { [key: string]: string } }

const defaultLanguage = 'pt'
const dictionaries: Dictionaries = {
  en: () => en,
  pt: () => pt,
}

export const getLanguages = (locale = defaultLanguage) => dictionaries[locale]()
