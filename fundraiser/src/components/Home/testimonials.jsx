
import React from "react";
import { Card, CardBody, Image, Stack, Heading, Text } from "@chakra-ui/react";

export default function Testimonial() {
    return (
    <Card maxW="sm">
    <CardBody>
        <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5ay_I4fQMfRIknHYt_iva3_-Hmat46b0Fh1HvUOXlNw&s"
            alt="testimonial"
            borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
            <Heading size="md">title</Heading>
            <Text>description</Text>
        </Stack>
    </CardBody>
    </Card>
);
}
