import Link from 'next/link'; // Import the Link component from Next.js for client-side routing.
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer
} from '@chakra-ui/react'; // Import Chakra UI components for styling.
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'; // Import icons from the react-icons library.
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  // Define a functional component called Navbar.
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    {/* Create a Flex container for the navigation bar with padding and a bottom border. */}
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      {/* Create a Box for the brand/logo. */}
      <Link href='/' paddingLeft='2'>
        {/* Create a link using Next.js routing to the home page. */}
        Realtor
        {/* Display the text "Realtor" as the brand/logo. */}
      </Link>
    </Box>
    <Spacer />
    {/* Create a Spacer to push menu items to the right. */}
    <Box>
      {/* Create a Box for the menu. */}
      <Menu>
        {/* Create a dropdown menu using Chakra UI's Menu component. */}
        <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='red.400' />
        {/* Display an icon (hamburger menu) for the menu button. */}
        <MenuList>
          {/* Create a list of menu items. */}
          <Link href='/' passHref>
            {/* Create a link to the home page. */}
            <MenuItem icon={<FcHome />}>Home
            {/* Display the "Home" menu item with a home icon. */}
            </MenuItem>
          </Link>
          <Link href='/search' passHref>
            {/* Create a link to the search page. */}
            <MenuItem icon={<BsSearch />}>Search
            {/* Display the "Search" menu item with a search icon. */}
            </MenuItem>
          </Link>
          <Link href='/search?purpose=for-sale' passHref>
            {/* Create a link to the buy property page. */}
            <MenuItem icon={<FcAbout />}>Buy Property
            {/* Display the "Buy Property" menu item with a property icon. */}
            </MenuItem>
          </Link>
          <Link href='/search?purpose=for-rent' passHref>
            {/* Create a link to the rent property page. */}
            <MenuItem icon={<FiKey />}>Rent Property
            {/* Display the "Rent Property" menu item with a key icon. */}
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar; // Export the Navbar component.
