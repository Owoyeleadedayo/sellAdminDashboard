import React, { useState } from 'react'
import { Flex, Image, Text, Input, Button, Box } from "@chakra-ui/react";
import { IoEyeOff } from "react-icons/io5";
import { IoEye } from "react-icons/io5";
import Colors from '../constants/colors'
import Logo from '../assets/images/Logo.svg'

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <Flex
      flexDirection={"column"}
      py="48px"
      px={"16px"}
      bg={Colors.white}
      borderRadius="16px"
      width={"100%"}
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
        <Text
          color={Colors.gray900}
          fontFamily={"Graphik"}
          fontSize={"16px"}
          fontWeight={500}
          lineHeight={"24px"}
        >
          Provide your details to login in to your account
        </Text>
      </Flex>
      <Box>
        <Flex
          flexDirection={"column"}
          alignItems={"flex-start"}
          width={"full"}
          gap={"4px"}
          mb={"24px"}
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
            gap={"10px"}
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
          position={'relative'}
          flexDirection={"column"}
          alignItems={"flex-start"}
          width={"full"}
          gap={"4px"}
        >
          <Text
            fontFamily={"Graphik"}
            fontSize={"16px"}
            fontWeight={600}
            lineHeight={"normal"}
          >
            Password
          </Text>
          <Input
            placeholder={"Password"}
            bg={Colors.gray200}
            height={"48px"}
            fontWeight={"400px"}
            fontSize={"14px"}
            fontStyle={"normal"}
            color={Colors.text001}
            padding={"14px"}
            gap={"10px"}
            alignSelf={"stretch"}
            borderRadius={"8px"}
            position={"relative"}
            pr="4rem"
            type={show ? "text" : "password"}
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
          <Button
            onClick={handleClick}
            position={"absolute"}
            my={"25px"}
            right={'5px'}
            border={"none"}
            outline={"none"}
            _focus={{
              border: `1px solid transparent`,
              outline: "none",
            }}
            _focusVisible={{
              border: `1px solid transparent`,
              outline: "none",
            }}
          >
            {show ? (
              <IoEyeOff fontSize={"24px"} />
            ) : (
              <IoEye fontSize={"24px"} />
            )}
          </Button>
        </Flex>
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
        <Button
          w={"full"}
          fontSize={"18px"}
          fontWeight={500}
          backgroundColor={Colors.brown900}
          color={Colors.white}
          borderRadius={"8px"}
          _hover={{
            color: Colors.white,
            backgroundColor: Colors.brown900,
          }}
        >
          Sign In
        </Button>
      </Flex>
    </Flex>
  );
}

export default SignInForm
