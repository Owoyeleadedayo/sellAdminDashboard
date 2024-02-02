import { Box, Button, Flex, Heading, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import Logo from "../assets/images/Logo.svg";
import Colors from '../constants/colors';

const FogottenPasswordForm = () => {
  return (
    <Flex
      flexDirection={"column"}
      py="48px"
      px={"0px"}
      justifyContent={"center"}
      alignItems={"center"}
      bg={Colors.white}
      borderRadius="16px"
      width={{ md: "520px", base: "100%" }}
      maxWidth={"520px"}
      gap={"32px"}
    >
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        bg={Colors.white}
        gap={"24px"}
      >
        <Image src={Logo} />
        <Box>
          <Heading
            as="h4"
            size="md"
            color={Colors.black500}
            fontSize={"24px"}
            fontWeight={"600"}
            mb={"8px"}
            textAlign={"center"}
          >
            Forgotten password
          </Heading>
          <Text
            color={Colors.gray900}
            fontFamily={"Graphik"}
            fontSize={"16px"}
            fontWeight={500}
            lineHeight={"24px"}
            textAlign={"center"}
          >
            Provide your details to login in to your account
          </Text>
        </Box>
      </Flex>
      <Flex
        flexDirection={"column"}
        alignItems={"flex-start"}
        width={"full"}
        gap={"4px"}
        px={"16px"}
      >
        <Text
          fontFamily={"Graphik"}
          fontSize={"16px"}
          fontWeight={600}
          lineHeight={"normal"}
        >
          Email
        </Text>
        <Input
          placeholder={"Enter your email address"}
          bg={Colors.gray200}
          height={"48px"}
          fontWeight={"400px"}
          fontSize={"14px"}
          fontStyle={"normal"}
          color={Colors.text001}
          padding={"14px"}
          alignSelf={"stretch"}
          borderRadius={"8px"}
          size="sm"
          _hover={{
            border: `1px solid ${Colors.brown900}`,
            outline: "none",
          }}
          _focus={{
            border: `1px solid ${Colors.brown900}`,
            outline: "none",
          }}
          _focusVisible={{
            border: `1px solid ${Colors.brown900}`,
            outline: "none",
          }}
        />
      </Flex>
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        width={"full"}
        px={"16px"}
      >
        <Button
          w={"full"}
          fontSize={"18px"}
          fontWeight={500}
          backgroundColor={Colors.brown900}
          color={Colors.white}
          mb={'16px'}
          borderRadius={"8px"}
          _hover={{
            color: Colors.white,
            backgroundColor: Colors.brown900,
          }}
        >
          Verify Email
        </Button>
        <Flex flexDir={"row"} alignItems={"center"} gap={'2px'}>
          <Text
            color={Colors.gray900}
            fontSize={"16px"}
            fontWeight={"500px"}
            lineHeight={"24px"}
          >
            Remember password?
          </Text>
          <Text color={Colors.black} fontWeight={"600px"} lineHeight={"24px"}>
            Sign in
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default FogottenPasswordForm
