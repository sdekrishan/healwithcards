import { Box, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const services = [
    "tarot-reading",
    "rituals",
    "spells",
    "remedies",
    "switch-words",
  ];
  return (
    <Flex
      justifyContent="space-between"
      alignItems={"center"}
      padding="2"
      borderBottom={'1px solid lightgray'}
    >
      <Box height="50px" width="50px"  ml="10">
        <Image src={logo} borderRadius="50%" border="1px solid gray" />
      </Box>
      <Box
        height="70px"
        minW="80%"
        display="flex"
        justifyContent="center"
        alignItems="center"
        px={10}
        gap={10}
      >
        {services.map((service) => {
          return <Link key={service} style={{color: 'black', fontWeight: '200'}} to={`/${service}`}>{service}</Link>;
        })}
      </Box>
    </Flex>
  );
};

export default Navbar;
