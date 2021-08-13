// Updating LocalStorage or SessionStorage
// As part of some of our products, we populate a 'shopping basket'. This keeps a track of what a user has been doing.
// Sometimes, we want this to persist even if they navigate away from our site, refresh the page, or close the browser.
// To achieve this, we use a combination of localStorage and sessionStorage

// React itself doesn't provide any hooks for storing data in localStorage or sessionStorage,
// but we wanted a consistent experience with useState. Realistically,
// it shouldn't be any harder to use localStorage than it would be to use state normally.

// For example, we might want to use localStorage to keep track of a user's input.

const storageComponent = () => {
  const [value, setValue] = useLocalStorage('storage_key', 'default_value')

  return <input value={value} onChange={e => setValue(e.target.value}/>
}

// Our hooks to achieve this look like the following:

const useStorage = (key, initialValue, storage) => {
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = storage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      // Update storage every time the value is changed
      storage.setItem(key, JSON.stringify(storedValue))
    } catch (e) {
      console.error(e)
    }
  }, [storedValue, storage, key])

  return [storedValue, setStoredValue]
}

export const useLocalStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.localStorage)
}

export const useSessionStorage = (key, initialValue) => {
  return useStorage(key, initialValue, window.sessionStorage)
}