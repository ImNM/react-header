import { useMediaQuery } from 'react-responsive'

export const PC = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 960 })
  return isDesktop ? children : null
}

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 960 })
  return isMobile ? children : null
}
/*
export const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}
export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
 */