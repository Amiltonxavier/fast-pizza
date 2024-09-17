'use client'
import { createContext, ReactNode, useContext, useState } from "react"

type userTypes = {
    fullname: string
    email?: string,
    address?: string
    phone?: string
}


type userProps = {
    user: userTypes | undefined
    registerUser: (user: userTypes) => void
}

type UserContextProviderProps = {
    children: ReactNode
}


export const UserContext = createContext({} as userProps)



export function UserContextProvider({ children }: UserContextProviderProps) {
    const [user, setUser] = useState<userTypes | undefined>();

    const registerUser = ({ fullname, address, email, phone }: userTypes) => {
        setUser({
            fullname,
            address,
            email,
            phone
        })
    }
    return (
        <UserContext.Provider value={{ user, registerUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)
