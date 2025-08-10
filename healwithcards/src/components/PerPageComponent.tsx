import ServiceCard from "@/components/ServiceCard";
import TextCarousel from "@/components/TextCarousel";
import type { Service, Slide } from "@/utils/types";
import { Flex, Heading } from "@chakra-ui/react";
import BackToTopButton from "./BackToTop";

type Props = {
  sectionId: string;
  name: string;
  slides: Slide[];
  services: Service[];
};

const PerPageComponent = ({ sectionId, slides, services, name }: Props) => {
  return (
    <Flex
      id={sectionId}
      direction="column"
      rowGap="10"
      w="100vw"
      minH="calc(100vh - 80px)"
      borderBottom="1px solid gray"
      p="20"
    >
      <Heading
        marginBottom="10"
        fontFamily="cursive"
        fontSize="4xl"
        fontWeight="700"
      >
        {name}
      </Heading>
      <TextCarousel slides={slides} />
      <Flex justifyContent="space-between" p="10">
        {services.map((service) => (
          <ServiceCard key={service.heading} service={service} />
        ))}
      </Flex>
      <BackToTopButton/>
    </Flex>
  );
};

export default PerPageComponent;
