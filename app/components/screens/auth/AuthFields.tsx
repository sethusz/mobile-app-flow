import { FC } from 'react'
import { Text, TextInput, View } from 'react-native'
import cn from 'clsx';
import { validEmail } from './email.rgx'
import { Control, Controller } from 'react-hook-form'
import { IAuthFormData } from '@/types/auth.interface';


const AuthFields: FC<{ control: Control<IAuthFormData> }> = ({ control }) => {
    return (
        <>


            <Controller
                control={control}
                name='email'
                rules={{
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Your Email is invalid'
                    }
                }}
                render={({
                    field: {
                        value, onChange, onBlur
                    },
                    fieldState: { error }
                }) => (
                    <>
                        <View className={cn('rounded bg-[#272541] text-white border pb-4 pt-2.5 px-4 mt-2', !!error ?
                            'border-red-500' : 'border-transparent')}>

                            <TextInput
                                placeholder='Enter email'
                                value={value}
                                placeholderTextColor={'#8D8A97'}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                autoCapitalize='none'
                                className='text-white text-lg'
                            />

                        </View>

                        {error && <Text className='text-red-500'>{error.message}</Text>}

                    </>
                )}>

            </Controller>


            <Controller
                control={control}
                name='password'
                rules={{
                    required: 'Password is required',
                    minLength: {
                        value: 6,
                        message: 'Password must be at least 6 characters'
                    }
                }}
                render={({
                    field: {
                        value, onChange, onBlur
                    },
                    fieldState: { error }
                }) => (
                    <>
                        <View className={cn('rounded bg-[#272541] text-white border pb-4 pt-2.5 px-4 mt-2', !!error ?
                            'border-red-500' : 'border-transparent')}>

                            <TextInput
                                placeholder='Enter password'
                                value={value}
                                placeholderTextColor={'#8D8A97'}
                                onChangeText={onChange}
                                onBlur={onBlur}
                                autoCapitalize='none'
                                className='text-white text-lg'
                                // secureTextEntry='true'
                            />

                        </View>

                        {error && <Text className='text-red-500'>{error.message}</Text>}

                    </>
                )}>

            </Controller>





        </>
    )
}

export default AuthFields