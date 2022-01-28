// based on fireship io
import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue?: string) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value

      setStoredValue(valueToStore)

      window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

const useDarkMode = () => {
  const [enabled, setEnabled] = useLocalStorage('dark-theme')
  //@ts-ignore
  const isEnabled = typeof enabledState === 'undefined' && enabled

  useEffect(() => {
    const className = 'dark'
    const body = window.document.documentElement

    isEnabled ? body.classList.add(className) : body.classList.remove(className)
    isEnabled
      ? body.style.setProperty('color-scheme', 'dark')
      : body.style.setProperty('color-scheme', 'light')
  }, [enabled, isEnabled])

  return [enabled, setEnabled]
}

export default useDarkMode
