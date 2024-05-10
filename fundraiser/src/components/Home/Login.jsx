import React from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import SignUp from "./signUp.jsx"; 

export default function Login(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    return(
        <div className='login'>
          <Button onClick={onOpen}>Login</Button>
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={isOpen}
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Login</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={6}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input ref={initialRef} placeholder="Username" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Password</FormLabel>
                  <Input type="password" placeholder="Password" />
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3}>
                  Login
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
              <Text mt={2} textAlign="center">
                Don't have an account? <span style={{textDecoration: "underline", cursor: "pointer"}} onClick={onOpen}><SignUp/></span>
              </Text>
            </ModalContent>
          </Modal>
        </div>
    )
}


