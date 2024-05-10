
import React, { useState } from "react";
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, FormControl, FormLabel, Input, Checkbox, Stack } from "@chakra-ui/react";

export default function SignUp() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedRole, setSelectedRole] = useState('donor');
  const [securityKey, setSecurityKey] = useState('');
  const [showSecurityKeyInput, setShowSecurityKeyInput] = useState(false);

  const handleRoleChange = (e) => {
    const { value } = e.target;
    setSelectedRole(value);
    if (value === 'administrator' || value === 'organization') {
      setShowSecurityKeyInput(true);
    } else {
      setShowSecurityKeyInput(false);
    }
  };

  return (
    <div className="signup">
      <Button onClick={onOpen}>Sign Up</Button>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your account</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Stack spacing={3} mt={3}>
              <Checkbox
                isChecked={selectedRole === 'donor'}
                onChange={(e) => handleRoleChange(e)}
                value="donor"
              >
                Donor
              </Checkbox>
              <Checkbox
                isChecked={selectedRole === 'administrator'}
                onChange={(e) => handleRoleChange(e)}
                value="administrator"
              >
                Administrator
              </Checkbox>
              <Checkbox
                isChecked={selectedRole === 'organization'}
                onChange={(e) => handleRoleChange(e)}
                value="organization"
              >
                Organization
              </Checkbox>
            </Stack>
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Email" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Username</FormLabel>
              <Input placeholder="Username" />
            </FormControl>
            {showSecurityKeyInput && (
              <FormControl mt={4}>
                <FormLabel>Security Key</FormLabel>
                <Input
                  type="password"
                  value={securityKey}
                  onChange={(e) => setSecurityKey(e.target.value)}
                  placeholder="Enter security key"
                />
              </FormControl>
            )}
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
  );
}
