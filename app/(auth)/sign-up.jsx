import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '../../constants'
import { Image } from 'react-native'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'

import { Link } from 'expo-router'
import { createUser } from '../../lib/appwrite'

const SignUp = () => {
  const [form, setForm] = useState({
    email:"",
    password: "", 
  })

  const[isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () => {
    if (form.username === "" || form.email === "" || form.password === "") {
      Alert.alert("Error", "Please fill in all fields");
    }

    setSubmitting(true);
    try {
      const result = await createUser(form.email, form.password, form.username);
      setUser(result);
      setIsLogged(true);

      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className='w-full justify-center min-h-[85vh] px-4 my-6'>
        <Image source={images.logo}
        resizeMode='contain' className='w-[115px] h-[35px]' />

        <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>
          Sign up to Aora
        </Text>
        <FormField 
          title='Username'
          value={form.username}
          handleChangeText={(e) => setForm({...form, username: e})}
          otherStyles='mt-7'
          
        />
        <FormField 
          title='Email'
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          otherStyles='mt-7'
          
        />
        <FormField 
          title='Password'
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          otherStyles='mt-7'
        />
        <CustomButton
          title='Sing Up'
          handlePress={submit}
          containerStyles='mt-7'
          isLoading={isSubmitting}
         />
         <View className='justify-center pt-5 flex-row gap-2'>
          <Text className='text-lg text-gray-100 font-pregular'>
            Have an account?
          </Text>
          <Link href='/sign-in' className='text-lg font-psemibold text-secondary'>
            Sign Up
          </Link>
         </View>
      </View> 
    </SafeAreaView>
  )
}


export default SignUp