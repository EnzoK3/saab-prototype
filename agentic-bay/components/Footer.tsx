import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[var(--border)] bg-[var(--secondary)] py-12">
            <div className="container-custom">
                <div className="grid gap-8 md:grid-cols-4">
                    <div>
                        <h4 className="mb-4 font-bold text-[var(--foreground)]">Agentic Bay</h4>
                        <p className="text-sm text-[var(--muted)]">
                            The leading platform for web scraping and automation.
                        </p>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold text-[var(--foreground)]">Product</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Actors</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Proxy</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Storage</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold text-[var(--foreground)]">Resources</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">API Reference</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Blog</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="mb-4 font-bold text-[var(--foreground)]">Company</h4>
                        <ul className="space-y-2 text-sm text-[var(--muted)]">
                            <li><Link href="#" className="hover:text-[var(--foreground)]">About</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Careers</Link></li>
                            <li><Link href="#" className="hover:text-[var(--foreground)]">Contact</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-200 pt-8 text-center text-sm text-[var(--muted)]">
                    &copy; {new Date().getFullYear()} Agentic Bay. All rights reserved.
                </div>
            </div>
        </footer>
    );
};
