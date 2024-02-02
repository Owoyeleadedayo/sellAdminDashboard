/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Flex, Image, Input, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Colors from '../constants/colors';
import Logo from "../assets/images/Logo.svg";


const VerificationCode = () => {
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);

    const handleChange = (e: any, index: any) => {
      const input = e.target.value;

      if (/^[0-9]$/.test(input)) {
        const newOtp = [...otp];
        newOtp[index] = input;
        setOtp(newOtp);

        if (e.target.value && e.target.nextSibling) {
          e.target.nextSibling.focus();
        }
      } else if (input === "" && index > 0 && e.target.previousSibling) {
        // Handle backspace: move focus to the previous input and clear the value
        e.target.previousSibling.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    };

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
        <Flex flexDirection={"column"} alignItems={"center"} gap={"8px"}>
          <Text fontSize={"24px"} fontWeight={600} color={Colors.black}>
            Enter Verification Code
          </Text>
          <Text
            color={Colors.gray900}
            fontFamily={"Graphik"}
            fontSize={"16px"}
            fontWeight={500}
            lineHeight={"24px"}
          >
            Kindly enter the six digit code sent to your mail
          </Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} gap={"9px"}>
        {otp.map((digit: any, index) => (
          <Input
            key={index}
            type="text"
            value={digit}
            maxLength={1}
            onChange={(e) => handleChange(e, index)}
            width={"58px"}
            height={"56px"}
            paddingY={"12px"}
            paddingX={"22px"}
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={"12px"}
            borderRadius={"12px"}
            border={`1px solid ${Colors.gray500}`}
            background={Colors.gray200}
            color={Colors.black500}
            fontSize={"21px"}
            fontWeight={400}
            lineHeight={"32px"}
            _focus={{
              border: `1px solid ${Colors.brown900}`,
              outline: "none",
            }}
            _focusVisible={{
              border: `1px solid ${Colors.brown900}`,
              outline: "none",
            }}
          />
        ))}
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
          mb={"16px"}
          borderRadius={"8px"}
          _hover={{
            color: Colors.white,
            backgroundColor: Colors.brown900,
          }}
        >
          Verify Code
        </Button>
        <Flex flexDir={"row"} alignItems={"center"} gap={"2px"}>
          <Text
            color={Colors.gray900}
            fontSize={"16px"}
            fontWeight={"500px"}
            lineHeight={"24px"}
          >
            Did not receive code?  
          </Text>
          <Text color={Colors.black} fontWeight={"600px"} lineHeight={"24px"}>
            Resend
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default VerificationCode
