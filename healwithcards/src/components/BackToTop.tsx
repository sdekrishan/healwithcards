import { useEffect, useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <IconButton
          aria-label="Back to top"
          position="fixed"
          bottom="30px"
          right="30px"
          colorScheme="purple"
          borderRadius="full"
          size="lg"
          onClick={scrollToTop}
          boxShadow="sm"
          _hover={{ transform: "scale(1.1)" }}
          transition="transform 0.2s ease"
        >
          <FaArrowUp color="white"/>
        </IconButton>
      )}
    </>
  );
}
