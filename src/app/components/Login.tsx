import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import React from 'react'
import Avatar from "./Avatar";
import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Login = () => {
    const { data: session } = useSession();
    console.log("session : ", session);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="dropdown hover:drop-shadow-xl"> 
                    {
                        session && session.user ? (
                            <Image 
                            src={session.user.image} 
                            alt='login-user-image' 
                            width={32} 
                            height={32} />
                        ) :
                        <Avatar />
                    }
                </div>
            </DropdownMenuTrigger>
            {/* Apply z-index using Tailwind class */}
            <DropdownMenuContent className="z-[1100]">
                {
                    session ? (
                        <DropdownMenuItem onClick={() => signOut({
                            callbackUrl: 'http://localhost:3000'
                        })}>
                            Sign Out
                        </DropdownMenuItem>
                    ) : (
                        <DropdownMenuItem onClick={() => signIn('google', 
                            { callbackUrl: 'http://localhost:3000' })}>
                            Login
                        </DropdownMenuItem>
                    )
                }
                <DropdownMenuSeparator />
                <DropdownMenuItem>Signup</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Airbnb Your Home</DropdownMenuItem>
                <DropdownMenuItem>Help Center</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
export default Login;
