import { Flex } from '@chakra-ui/react'
import React from 'react'
import FogottenPasswordForm from '../components/FogottenPasswordForm'

const ForgottenPassword = () => {
  return (
    <Flex
      justifyContent={"center"}
      alignItems={"center"}
      w={"100vw"}
      h={"100vh"}
    >
      <FogottenPasswordForm />
    </Flex>
  );
}

export default ForgottenPassword
