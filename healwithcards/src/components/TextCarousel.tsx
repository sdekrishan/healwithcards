import { useState, useEffect } from "react";
import { Box, Heading, Text, IconButton } from "@chakra-ui/react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

type Slide = {
  heading: string;
  subHeading: string;
};

interface TextCarouselProps {
  slides: Slide[];
}

export default function TextCarousel({ slides }: TextCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(false);

  const prevSlide = () => {
    setFadeIn(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setFadeIn(false);
    }, 700);
  };

  const nextSlide = () => {
    setFadeIn(true);
    setTimeout(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setFadeIn(false);
    }, 700);
  };

  // Auto move every 1 second with fade
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // change time here
    return () => clearInterval(interval);
  }, []);

  if (!slides || slides.length === 0) return null;

  return (
    <Box
      maxW="90%"
      w="90%"
      mx="auto"
      p={6}
      border="2px solid black"
      borderColor="purple.500"
      borderRadius="lg"
      bg="purple.50"
      color="purple.800"
      fontFamily="heading"
      position="relative"
      textAlign="center"
      boxShadow="lg"
    >
      <Box opacity={fadeIn ? "0" : "1"} transition={"all .5s ease-in"}>
        <Heading fontSize="2xl" mb={3} minH="3.6rem">
          {slides[current].heading}
        </Heading>
        <Text fontSize="lg" fontWeight="medium" minH="1.8rem">
          {slides[current].subHeading}
        </Text>
      </Box>

      {/* Navigation Buttons */}

      <IconButton
        border="1px solid green"
        aria-label="Previous"
        onClick={prevSlide}
        variant="ghost"
        colorScheme="purple"
        size="lg"
        position="absolute"
        top="50%"
        left="10"
      >
        <FaChevronLeft size={6} />
      </IconButton>

      <IconButton
        aria-label="Next"
        onClick={nextSlide}
        variant="ghost"
        colorScheme="purple"
        size="lg"
        position="absolute"
        top="50%"
        right="10"
      >
        <FaChevronRight size={6} />
      </IconButton>
    </Box>
  );
}
