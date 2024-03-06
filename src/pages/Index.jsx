import React, { useState } from "react";
import { Box, Flex, Heading, Input, InputGroup, InputRightElement, Stack, Text, IconButton, Wrap, WrapItem, Tag, Image, useMediaQuery, useColorModeValue } from "@chakra-ui/react";
import { FaSearch, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const newsCategories = ["Teknologi", "Vetenskap", "Ekonomi", "Hälsa", "Miljö", "Utbildning"];

const newsArticles = [
  {
    id: 1,
    title: "Innovativ teknologi kan revolutionera industrin",
    summary: "En ny uppfinning lovar att förändra hur vi ser på tillverkning och produktion.",
    image: 'https://images.unsplash.com/photo-1705129472480-2145aecb9aaa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aXZlJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3MDk3NTMzNTF8MA&ixlib=rb-4.0.3&q=80&w=1080',
    category: "Teknologi",
  },
  // ... fler nyhetsartiklar här
];

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");
  const bg = useColorModeValue("gray.50", "gray.900");
  const color = useColorModeValue("gray.900", "gray.50");

  const handleSearchChange = (event) => setSearchQuery(event.target.value);

  const filteredArticles = searchQuery ? newsArticles.filter((article) => article.title.toLowerCase().includes(searchQuery.toLowerCase())) : newsArticles;

  return (
    <Box bg={bg} color={color} minH="100vh" py="20px">
      <Flex direction="column" align="center" mx="auto" maxW="1200px" px="15px">
        {/* Header */}
        <Heading as="h1" mb="8">
          Nyheter Framtiden
        </Heading>

        {/* Search */}
        <InputGroup mb="8" w={isLargerThan600 ? "50%" : "100%"}>
          <Input placeholder="Sök nyhetsartiklar..." value={searchQuery} onChange={handleSearchChange} />
          <InputRightElement>
            <IconButton
              aria-label="Sök"
              icon={<FaSearch />}
              onClick={() => {}} // Placeholder for search functionality
            />
          </InputRightElement>
        </InputGroup>

        {/* Categories */}
        <Wrap spacing="15px" justify="center" mb="8">
          {newsCategories.map((category) => (
            <WrapItem key={category}>
              <Tag size="lg" variant="solid" colorScheme="teal">
                {category}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        {/* Articles */}
        <Stack spacing="20px" w="100%">
          {filteredArticles.map((article) => (
            <Box key={article.id} p="5" shadow="md" borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Flex direction={isLargerThan600 ? "row" : "column"} align="center">
                <Box flexShrink={0}>
                  <Image borderRadius="lg" src={article.image} alt={`Bild för artikeln "${article.title}"`} width={isLargerThan600 ? "200px" : "100%"} height={isLargerThan600 ? "auto" : "200px"} objectFit="cover" mr="5" />
                </Box>
                <Box mt={isLargerThan600 ? 0 : 4}>
                  <Heading as="h3" size="lg">
                    {article.title}
                  </Heading>
                  <Text mt={2}>{article.summary}</Text>
                </Box>
              </Flex>
            </Box>
          ))}
        </Stack>

        {/* Social Media Share */}
        <Flex justify="center" mt="8" mb="4">
          <IconButton
            aria-label="Dela på Facebook"
            icon={<FaFacebook />}
            isRound
            size="lg"
            m="1"
            colorScheme="facebook"
            onClick={() => {}} // Placeholder for share functionality
          />
          <IconButton
            aria-label="Dela på Twitter"
            icon={<FaTwitter />}
            isRound
            size="lg"
            m="1"
            colorScheme="twitter"
            onClick={() => {}} // Placeholder for share functionality
          />
          <IconButton
            aria-label="Dela på LinkedIn"
            icon={<FaLinkedin />}
            isRound
            size="lg"
            m="1"
            colorScheme="linkedin"
            onClick={() => {}} // Placeholder for share functionality
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
