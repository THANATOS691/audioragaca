import { IconButton } from '@chakra-ui/react'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'

import { isNavOpen, toggleNav } from 'store/UISlice'

const MenuIcon = (): JSX.Element => {
  const navOpen = useSelector(isNavOpen)
  const dispatch = useDispatch()

  return (
    <IconButton
      aria-label={navOpen ? 'Close Menu' : 'Open Menu'}
      mr={{ sm: '2.625rem', lg: 0 }}
      variant="unstyled"
      isRound={true}
      lineHeight={0}
      onClick={() => dispatch(toggleNav())}
      display={{ base: 'auto', lg: 'none' }}
      icon={
        navOpen ? (
          <Image
            src="/images/shared/tablet/icon-close-menu.svg"
            width={16}
            height={15}
          ></Image>
        ) : (
          <Image
            src="/images/shared/tablet/icon-hamburger.svg"
            width={16}
            height={15}
          ></Image>
        )
      }
    ></IconButton>
  )
}

export default MenuIcon
