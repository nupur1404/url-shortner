import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {Button} from "./ui/button" ;
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu" ;
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import { LinkIcon, LogOut } from 'lucide-react';
import { UrlState } from '../context';
import useFetch from '../hooks/use-fetch';
import { logout } from '../db/apiAuth';
import { BarLoader } from 'react-spinners';

const Header = () => {

    const navigate = useNavigate() ;

    const {user, fetchUser} =  UrlState()

    const {loading, fn: fnLogout} = useFetch(logout) ;
    
  return (
    <>
      <nav className='py-4 flex justify-between items-center'>
      <Link to="/">
            <img src="public/url-logo.png" className="h-16 mt-5  ml-15" alt='Trimmer logo' />
      </Link>

      <div>
        { !user ? (
          <Button onClick={()=>navigate("/auth")} >Login</Button>
        )
            
            : (
                <DropdownMenu>
                <DropdownMenuTrigger className="w-16 mr-15 mt-5 rounded-full overflow-hidden">
                <Avatar>
                    <AvatarImage src={user?.user_metadata?.profilepic} className="object-contain "/>
                    <AvatarFallback>NS</AvatarFallback>
                </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>{user?.user_metadata?.name}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    
                    <DropdownMenuItem>
                    <Link to="/dashboard" className="flex">
                      <LinkIcon className='mr-2 h-4 w-4' />
                      My Links
                    </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-red-400">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span onClick={()=>{
                        fnLogout().then(()=>{
                          fetchUser() ;
                          navigate("/") ;
                        })
                        
                      }}>
                        Logout
                    </span>
                    
                    </DropdownMenuItem>
                </DropdownMenuContent>
                </DropdownMenu>
            )
        }
           
           

      </div>

    </nav>
    {loading && <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />}
    </>
  );
};

export default Header ;
