"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const elem = document.getElementById(targetId);

        if (elem) {
            const targetPosition = elem.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 500; // 0.5 seconds
            let start: number | null = null;

            const animation = (currentTime: number) => {
                if (start === null) start = currentTime;
                const timeElapsed = currentTime - start;
                const run = ease(timeElapsed, startPosition, distance, duration);
                window.scrollTo(0, run);
                if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            // Easing function (easeInOutQuad)
            const ease = (t: number, b: number, c: number, d: number) => {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t + b;
                t--;
                return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
        }
    };

    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6"
        >
            <div className="glass px-8 py-3 rounded-full flex items-center gap-8 text-sm font-medium text-white/90">
                <Link href="#stack" onClick={(e) => handleScroll(e, "#stack")} className="hover:text-white transition-colors">
                    button1
                </Link>
                <Link href="#me" onClick={(e) => handleScroll(e, "#me")} className="hover:text-white transition-colors">
                    button2
                </Link>
                <Link href="#projects" onClick={(e) => handleScroll(e, "#projects")} className="hover:text-white transition-colors">
                    button3
                </Link>
            </div>
        </motion.nav>
    );
}
