import React, { useEffect, useState, useContext, createContext } from 'react'
import LocalizedStrings from 'react-localization';
import siteStrings from '../utils/siteStrings.json';

const LangContext = createContext()

export default function LangProvider({ children }) {
  const [ lang, setLang ] = useState('en')

  let strings = new LocalizedStrings(
    siteStrings
   );

  useEffect(() => {
    const langStorage = localStorage.getItem("lang");
    if(langStorage){
      //console.log('exist storage', langStorage)
      setLang(langStorage)
      strings.setLanguage(langStorage);
    }else{
        localStorage.setItem("lang","en");
        strings.setLanguage("en");
        //console.log('dont exist storage, creating')
    }
  }, [])

  useEffect(()=> {
    localStorage.setItem("lang", lang);
  }, [lang])

  return (
    <LangContext.Provider value={{ lang, setLang, strings }}>
        {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const context = useContext(LangContext)
  if (!context) throw new Error('useLang must be used within a LangProvider')
  const { lang, setLang, strings } = context
  return { lang, setLang, strings }
}