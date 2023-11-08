import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';

import Property from '../components/Property';
import { baseUrl, fetchApi } from '../utils/fetchApi';

// This exports the 'Banner' component as a named export from this module.
export const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  // This component accepts several props, which are destructured from the object passed to it.

  // A Flex component is used to create a flexible container for the banner content.
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    // An Image component is used to display an image with the specified URL, width, and height.
    <Image src={imageUrl} width={500} height={300} />

    // A Box component is used to create a box that contains the text content of the banner.
    <Box p='5'>
      // Text components are used to display text with specific styles.
      // 'purpose' is displayed in small gray text with medium font weight.
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>{purpose}</Text>

      // 'title1' and 'title2' are displayed in a larger font size with bold font weight.
      <Text fontSize='3xl' fontWeight='bold'>{title1}<br />{title2}</Text>

      // 'desc1' and 'desc2' are displayed in a large font size with gray text color.
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>

      // A Button component is used to create a button with specific styling.
      <Button fontSize='xl' bg="blue.300" color="white">
        // A Link component is used to create a hyperlink.
        <Link href={linkName}><a>{buttonText}</a></Link>
      </Button>
    </Box>
  </Flex>
);



const Home = ({ propertiesForSale, propertiesForRent }) => (
  <Box>
    <Banner
      purpose='RENT A HOME'
      title1='Rental Homes for'
      title2='Everyone'
      desc1=' Explore from Apartments, builder floors, villas'
      desc2='and more'
      buttonText='Explore Renting'
      linkName='/search?purpose=for-rent'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
    />
    <Flex flexWrap='wrap'>
      {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
      purpose='BUY A HOME'
      title1=' Find, Buy & Own Your'
      title2='Dream Home'
      desc1=' Explore from Apartments, land, builder floors,'
      desc2=' villas and more'
      buttonText='Explore Buying'
      linkName='/search?purpose=for-sale'
      imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
    />
    <Flex flexWrap='wrap'>
      {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
  </Box>
);

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}

export default Home;
