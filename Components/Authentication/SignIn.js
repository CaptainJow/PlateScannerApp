import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Text, Heading, VStack, FormControl, Input, Button, Link,HStack, Center, NativeBaseProvider } from "native-base";


const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
  });
  
initialValues={ email: '', password: '' }
export default function SignIn(props) {

  return (
    <NativeBaseProvider>
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => { 
            console.log(values);
            resetForm();
            props.navigation.navigate('Home');
        }}
        >

        {({ handleChange, handleBlur, handleSubmit, values ,errors,touched ,resetForm}) => (
            <Center w="100%" h="100%">
            <Box safeArea p="2" py="8" w="90%" maxW="290">
                <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
                 Sign In
                </Heading>

                <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
                 You will need to SignIn to access the app
                </Heading>

                <VStack space={3} mt="5">
                <FormControl isInvalid={touched.email && errors.email}>
                    <FormControl.Label>Email ID</FormControl.Label>
                    <Input type="email" onChangeText={handleChange('email')} onBlur={handleBlur('email')} value={values.email} />
                    {touched.email && errors.email && <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>}
                </FormControl>

                <FormControl isInvalid={touched.password && errors.password}>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input type="password" onChangeText={handleChange('password')} onBlur={handleBlur('password')} value={values.password} />
                    {touched.password && errors.password && <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>}
                </FormControl>

                <Button mt="2" colorScheme="indigo" onPress={handleSubmit}>
                    Sign in
                </Button>

                <HStack mt="6" justifyContent="center">
                    <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                    I'm a new user.{" "}
                    </Text>
                    <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => {
                       
                        resetForm();
                        props.navigation.navigate('SignUp');
                        }}>
                    Sign Up
                    </Link>
                </HStack>
                </VStack>
            </Box>
            </Center>
        )}
        </Formik>
    </NativeBaseProvider>
  )
}