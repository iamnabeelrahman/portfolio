'use client'
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode'
import { siteConfig } from '@/libs/configs/site.config'
import { Box, Button, Flex, HStack, IconButton, Link, Stack, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { IoBriefcaseOutline, IoHomeOutline, IoMailOpenOutline, IoMenu } from 'react-icons/io5'
import { PiProjectorScreen } from 'react-icons/pi'
import { RxCross2 } from 'react-icons/rx'
import { Avatar } from './ui/avatar'
import { MyContainer } from './ui/container'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { toggleColorMode } = useColorMode()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }
  return (
    <MyContainer zIndex={20} position="sticky" top={3}>
      <Box
        mb={10}
        borderRadius="xl"
        bg="bg"
        boxShadow="md"
        px={4}
        py={3}
        backdropFilter="blur(10px)"
        borderWidth="1px"
        // borderColor="gray.200"
      >
        <Flex justify="space-between" align="center" flexWrap="wrap">
          {/* Profile */}
          <HStack>
            <Avatar size="sm" name={siteConfig.profile.name} src={siteConfig.profile.avatar} />
            <Text fontWeight="semibold" fontSize="md">
              {siteConfig.profile.name}
            </Text>
          </HStack>

          {/* Desktop Nav */}
          <HStack display={{ base: 'none', md: 'flex' }}>
            {navitems.map((nav) => (
              <Link
                key={nav.href}
                href={nav.href}
                px={3}
                py={2}
                borderRadius="md"
                fontWeight="medium"
                _hover={{ bg: 'gray.700', textDecoration: 'none' }}
              >
                {nav.label}
              </Link>
            ))}
            <Link
              href={siteConfig.social.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              _hover={{ textDecoration: 'none' }}
            >
              <Button variant="solid" colorScheme="blue" size="sm" fontWeight="medium">
                Connect
              </Button>
            </Link>
            <ColorModeButton onClick={toggleColorMode} />
          </HStack>

          {/* Mobile Menu Toggle */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            variant="outline"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <RxCross2 /> : <IoMenu />}
          </IconButton>
        </Flex>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <Box mt={4} display={{ base: 'block', md: 'none' }}>
            <Stack>
              {navitems.map((nav) => (
                <Link
                  key={nav.href}
                  href={nav.href}
                  py={2}
                  fontWeight="medium"
                  _hover={{ bg: 'gray.100', textDecoration: 'none' }}
                >
                  {nav.label}
                </Link>
              ))}
              <Link
                href={siteConfig.social.linkedinHref}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: 'none' }}
              >
                <Button variant="outline" colorScheme="blue" size="sm" width="100%">
                  Connect on LinkedIn
                </Button>
              </Link>
              <ColorModeButton />
            </Stack>
          </Box>
        )}
      </Box>
    </MyContainer>
  )
}
type NavLink = {
  label: string
  icon: React.ReactNode
  href: string
}
const navitems: NavLink[] = [
  {
    label: 'Home',
    icon: <IoHomeOutline />,
    href: '/',
  },
  {
    label: 'Work',
    icon: <IoBriefcaseOutline />,
    href: '#work',
  },
  {
    label: 'Projects',
    icon: <PiProjectorScreen />,
    href: '#projects',
  },

  {
    label: 'Contact',
    icon: <IoMailOpenOutline />,
    href: '#contact',
  },
]
