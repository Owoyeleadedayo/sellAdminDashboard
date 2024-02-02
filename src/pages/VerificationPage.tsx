import { Flex } from '@chakra-ui/react'
import React from 'react'
import VerificationCode from '../components/VerificationCode';

const VerificationPage = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
    >
        <VerificationCode />
    </Flex>
  );
}

export default VerificationPage
