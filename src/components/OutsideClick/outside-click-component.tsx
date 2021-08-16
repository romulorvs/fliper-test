import React, { useRef, useEffect, useCallback } from 'react'

import { IOutsideClick } from './outside-click-types'

function OutsideClick({
  className,
  onClickOutside,
  children,
  runOnEsc,
  ignore,
}: IOutsideClick) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)

  const handleClickOutside = useCallback(
    event => {
      if (wrapperRef.current && !wrapperRef?.current.contains(event.target)) {
        onClickOutside()
      }
    },
    [wrapperRef, ignore]
  )

  const handleEscPress = useCallback(
    event => {
      if (runOnEsc && event.key === 'Escape') {
        onClickOutside()
      }
    },
    [wrapperRef, ignore]
  )

  useEffect(() => {
    document.removeEventListener('mousedown', handleClickOutside)

    if (runOnEsc) {
      document.removeEventListener('keydown', handleEscPress)
    }

    if (!ignore) {
      document.addEventListener('mousedown', handleClickOutside)

      if (runOnEsc) {
        document.addEventListener('keydown', handleEscPress)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)

      if (runOnEsc) {
        document.removeEventListener('keydown', handleEscPress)
      }
    }
  }, [wrapperRef, ignore])

  return (
    <div
      style={{ display: 'flex', alignItems: 'center' }}
      className={className}
      ref={wrapperRef}
    >
      {children}
    </div>
  )
}

export default OutsideClick
