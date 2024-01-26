import { Dispatch, FC, PropsWithChildren, SetStateAction, createContext, useEffect, useState, } from 'react'
import { Text, View } from 'react-native'
import type { IUser } from '@/types/user.interface'

import * as Splash from 'expo-splash-screen'

export type TypeUserState = IUser | null

interface IContext {
    user: IUser
    setUser: Dispatch<SetStateAction<TypeUserState>>
}


export const AuthContext = createContext({})

let ignore = Splash.preventAutoHideAsync()

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>({} as IUser)

    useEffect(() => {
        let isMounted = false

        const getUserFromStorage = async () => {
            if (isMounted) {

            }

            await Splash.hideAsync()
        }

        let ignore = getUserFromStorage()




        return () => {
            isMounted = false
        }
    })

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider