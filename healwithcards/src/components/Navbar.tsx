import { Box, Button, Flex, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const sections = [
    { label: "Tarot Reading", id: "tarot-reading" },
    { label: "Rituals", id: "rituals" },
    { label: "Spells", id: "spells" },
    { label: "Remedies", id: "remedies" },
    { label: "Switch Words", id: "switch-words" },
  ];

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems={"center"}
      padding="2"
      borderBottom={"1px solid lightgray"}
    >
      <Box height="50px" width="50px" ml="10">
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
        {sections.map((section) => {
          return (
            <Button
              onClick={() => handleScroll(section.id)}
              as="a"
              variant="ghost"
              border="none"
              color="black"
              bg="white"
            >
              {section.label}
            </Button>
          );
        })}
      </Box>
    </Flex>
  );
};

export default Navbar;
