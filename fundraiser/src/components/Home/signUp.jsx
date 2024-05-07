import React from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function SignUp(){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);
    return(
        <div className="signup">
                <Button onClick={onOpen}>Sign Up</Button>
          
                <Modal
                  initialFocusRef={initialRef}
                  finalFocusRef={finalRef}
                  isOpen={isOpen}
                  onClose={onClose}
                >
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input ref={initialRef} placeholder="Username" />
                      </FormControl>
          
                      <FormControl mt={4}>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" placeholder="Email" />
                      </FormControl>
          
                      <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" placeholder="Password" />
                      </FormControl>
                    </ModalBody>
          
                    <ModalFooter>
                      <Button colorScheme="blue" mr={3}>
                        Sign Up
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>

        </div>
    )
}