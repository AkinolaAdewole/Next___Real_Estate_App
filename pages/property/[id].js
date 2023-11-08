import { Box, Flex, Spacer, Text } from '@chakra-ui/layout';
import { Avatar } from '@chakra-ui/avatar';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) => (
  // Define a functional component called PropertyDetails, which receives property details as props.

  <Box maxWidth='1000px' margin='auto' p='4'>
    {/* Create a container for property details with a maximum width. */}
    {photos && <ImageScrollbar data={photos} />}
    {/* Display a scrollbar with property photos if available. */}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center'>
        <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box>
        {/* Display a verification icon if the property is verified. */
        <Text fontWeight='bold' fontSize='lg'>
          AED {price} {rentFrequency && `/${rentFrequency}`}
        </Text>
        <Spacer />
        <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        {/* Display the agency's logo as an Avatar. */
      </Flex>
      <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
        {rooms}<FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        {/* Display property details like rooms, baths, area, and a grid icon. */
      </Flex>
    </Box>
    <Box marginTop='2'>
      <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
      <Text lineHeight='2' color='gray.600'>{description}</Text>
      {/* Display the property title and description. */
    </Box>
    <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space between'>
      {/* Display property type, purpose, and furnishing status. */
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Type</Text>
        <Text fontWeight='bold'>{type}</Text>
      </Flex>
      <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
        <Text>Purpose</Text>
        <Text fontWeight='bold'>{purpose}</Text>
      </Flex>
      {furnishingStatus && (
        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
          <Text>Furnishing Status</Text>
          <Text fontWeight='bold'>{furnishingStatus}</Text>
        </Flex>
      )}
    </Flex>
    <Box>
      {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilities:</Text>}
        <Flex flexWrap='wrap'>
          {amenities?.map((item) => (
              item?.amenities?.map((amenity) => (
                <Text key={amenity.text} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                  {amenity.text}
                </Text>
              ))
          ))}
        </Flex>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  // Define a server-side function to fetch property details based on the property's external ID.

  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  // Fetch property details from the API.

  return {
    props: {
      propertyDetails: data,
    },
  };
  // Pass the fetched property details as props to the PropertyDetails component.
}
