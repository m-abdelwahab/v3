import { useState, useRef } from 'react'
import useOuterClick from './useOuterClick'

export default () => {
  const [isOpen, setOpen] = useState(false)
  const containerRef = useRef()
  const togglerRef = useRef()

  useOuterClick({
    toggle: setOpen,
    isOpen,
    ref: containerRef,
    togglerRef,
  })

  const getContainerProps = () => ({
    position: 'relative',
    'aria-expanded': isOpen ? 'true' : 'false',
    'aria-haspopup': 'listbox',
    
  })

  const getTogglerProps = () => ({
    onClick: e => setOpen(!isOpen),
    'aria-label': isOpen ? 'close popup' : 'open popup',
    ref: togglerRef,
    
  })

  const getMenuProps = () => ({
    role: 'listbox',
    ref: containerRef,
    isOpen,
  })

  const getItemProps = () => ({
    tabIndex: isOpen ? 0 : -1,
    role: 'option',
    
  })

  return {
    isOpen,
    setOpen,
    getContainerProps,
    getTogglerProps,
    getMenuProps,
    getItemProps,
  }
}
