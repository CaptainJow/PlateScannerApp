import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box, Text, Heading, VStack, FormControl, Input, Button, Link,HStack, Center, NativeBaseProvider } from "native-base";



const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Required'),
    passwordConfirmation: Yup.string()
     .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });
  
initialValues={ email: '', password: '',passwordConfirmation:'' }

export default function SignUp(props) {
  return (
    <NativeBaseProvider>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={(values, { resetForm }) => { 
        console.log(values);
        resetForm();
    }}
    >

    {({ handleChange, handleBlur, handleSubmit, values ,errors,touched ,resetForm}) => (
        <Center w="100%" h="100%">
        <Box safeArea p="2" py="8" w="90%" maxW="290">
            <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{ color: "warmGray.50" }}>
             Sign Up
            </Heading>

            <Heading mt="1" _dark={{ color: "warmGray.200" }} color="coolGray.600" fontWeight="medium" size="xs">
            
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

            <FormControl isInvalid={touched.passwordConfirmation && errors.passwordConfirmation}>
                <FormControl.Label>Password</FormControl.Label>
                <Input type="password" onChangeText={handleChange('passwordConfirmation')} onBlur={handleBlur('passwordConfirmation')} value={values.passwordConfirmation} />
                {touched.passwordConfirmation && errors.passwordConfirmation && <FormControl.ErrorMessage>{errors.passwordConfirmation}</FormControl.ErrorMessage>}
            </FormControl>
            <Button mt="2" colorScheme="indigo" onPress={handleSubmit} >
                Sign Up
            </Button>

            <HStack mt="6" justifyContent="center">
                <Text fontSize="sm" color="coolGray.600" _dark={{ color: "warmGray.200" }}>
                already have an account?.{" "}
                </Text>
                <Link _text={{ color: "indigo.500", fontWeight: "medium", fontSize: "sm" }} onPress={() => {
                   
                    resetForm();
                    props.navigation.navigate('SignIn');
                    }}>
                 SignIn
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