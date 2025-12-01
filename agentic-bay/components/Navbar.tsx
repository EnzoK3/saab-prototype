"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="glass px-6 py-3 rounded-full flex items-center justify-between gap-8 w-full max-w-5xl">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center gap-2 shrink-0">
                        <Image src="/beehive.svg" alt="Agentic Bay Logo" width={32} height={32} />
                        <span className="text-xl font-bold text-[var(--foreground)] hidden sm:block">BeeHive</span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link href="#" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Product</Link>
                        <Link href="#" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Solutions</Link>
                        <Link href="#" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Developers</Link>
                        <Link href="#" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Resources</Link>
                        <Link href="#" className="text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] transition-colors">Pricing</Link>
                    </div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                    <Link href="#" className="hidden text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] lg:block">Contact sales</Link>
                    <Link href="#" className="hidden text-sm font-medium text-[var(--muted)] hover:text-[var(--foreground)] lg:block">Account</Link>
                    <Button size="sm" className="bg-gradient-to-b from-yellow-500 to-neutral-900 text-white border-0 hover:opacity-90 transition-opacity rounded-2xl">My Projects</Button>
                </div>
            </div>
        </motion.nav>
    );
};
