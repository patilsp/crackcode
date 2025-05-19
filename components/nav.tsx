"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const Nav = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="absolute right-0.5">
      <div className="flex items-center gap-4">
        {session?.user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="bg-white p-0 rounded-full">
                <Image
                  src={session.user.image}
                  width={40}
                  height={40}
                  className="rounded-full border"
                  alt="profile"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 bg-white">
              <DropdownMenuLabel className="flex items-center gap-2">
                <Image
                  src={session.user.image}
                  width={32}
                  height={32}
                  className="rounded-full border"
                  alt="profile"
                />
                <div className="p-1">
                  <div className="font-medium text-sm">{session.user.name}</div>
                  <div className="text-xs text-muted-foreground">{session.user.email}</div>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuItem asChild>
                <Link href="/create-post">Create post</Link>
              </DropdownMenuItem> */}
              <DropdownMenuItem asChild>
                <Link href="/">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile">My Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()} className="text-red-600 cursor-pointer">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <Button
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  variant="outline"
                  className="group relative overflow-hidden bg-slate-700 hover:bg-slate-900 text-white px-7 py-2 text-sm rounded-md shadow"
                >
                  Sign in
                </Button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
