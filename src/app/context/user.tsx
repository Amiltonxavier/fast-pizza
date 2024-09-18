'use client'
import type { userTypes } from "@/types/user";
import { UserStorage } from "@/utils/localstorage";
import { createContext, type ReactNode, useContext, useState } from "react"


type userProps = {
    user: userTypes | undefined
    registerUser: (user: userTypes) => void
    updateUser: (user: userTypes) => void
}

type UserContextProviderProps = {
    children: ReactNode
}


export const UserContext = createContext({} as userProps)



export function UserContextProvider({ children }: UserContextProviderProps) {
    const userStorage = new UserStorage()


    const [user, setUser] = useState<userTypes | undefined>(userStorage.get());


    const registerUser = ({ fullname, address, email, phone }: userTypes) => {
        setUser({
            fullname,
            address,
            email,
            phone,
            //id: uuidv4()
        })

        userStorage.register({ fullname, address, email, phone })
    }

    const updateUser = ({ address, email, phone }: Omit<userTypes, 'fullname'>) => {

        setUser(state => {
            if (!state) return state
            return {
                ...state,
                ...(email && { email }),
                ...(phone && { phone }),
                ...(address && { address }),
                fullname: state.fullname,
            }
        });

    };
    return (
        <UserContext.Provider value={{ user, registerUser, updateUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
