import Link from 'next/link';
import Image from 'next/image';
import { Box, Flex, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import DefaultImage from '../assets/images/house.jpg';

const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID } }) => (
  // Define a functional component called Property that takes a property object as a prop.
  <Link href={`/property/${externalID}`} passHref>
    {/* Create a link to the property's details page using Next.js routing. */}
    <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
      {/* Create a Flex container to display property information. */}
      <Box>
        <Image src={coverPhoto ? coverPhoto.url : DefaultImage} width={400} height={260} />
        {/* Display the property's cover photo or a default image if not available. */}
      </Box>
      <Box w='full'>
        {/* Create a container for property details. */}
        <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
          {/* Display property price and optionally the rent frequency. */}
          <Flex alignItems='center'>
            <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
            {/* Display a verification icon if the property is verified. */}
            <Text fontWeight='bold' fontSize='lg'>AED {price}{rentFrequency && `/${rentFrequency}`}</Text>
          </Flex>
          <Box>
            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
            {/* Display the agency's logo as an Avatar. */}
          </Box>
        </Flex>
        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
          {/* Display the number of rooms, baths, area, and a grid icon. */}
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize='lg'>
          {/* Display the property title, truncating it if it's too long. */}
          {title.length > 30 ? title.substring(0, 30) + '...' : title}
        </Text>
      </Box>
    </Flex>
  </Link>
);

export default Property; // Export the Property component.
