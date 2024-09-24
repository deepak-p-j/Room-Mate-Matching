'use client';
import { useEffect } from "react";
import AppLogo from "./AppLogo";
import Login from "./Login"
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  useEffect (() => {
    const element = document.querySelector('.parent-container');

    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 3) {
        element?.classList.add('show-item');
      } else {
        element?.classList.remove('show-item');
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])
  return (
    <>
    <div className="main-header border-b-[1px] border-solid pl-20 pr-20">
      <div className="flex h-20 items-center justify-between">
        <AppLogo />
        <div className="flex gap-6 primary-header">
          <div className="font-medium">Stays</div>
          <div className="text-muted-foreground">Experiences</div>
          <div className="text-muted-foreground">Online Experiences</div>
        </div>
        <div className="flex gap-4 items-center">
          <Login />
        </div>
      </div>
      <div className="primary-header flex w-full justify-center mb-4">
      </div>
    </div>

    </>
  )
}

export default Header;