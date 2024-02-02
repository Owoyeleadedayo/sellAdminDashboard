import React from 'react';
import { Flex } from '@chakra-ui/react';
import SignInForm from '../components/SignInForm';

const SignIn = () => {
  return (
    <Flex justifyContent={'center'} alignItems={'center'} w={'100vw'} h={'100vh'}>
      <SignInForm />
    </Flex>
  );
}

export default SignIn
