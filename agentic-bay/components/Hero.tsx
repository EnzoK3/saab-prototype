import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
    return (
        <section className="py-20 pt-32 text-center bg-white">
            <div className="container-custom relative z-10">

                {/* Announcement Badge */}
                <div className="mb-8 flex justify-center">
                    <a href="#" className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 shadow-sm">
                        <span className="rounded-md bg-yellow-100 px-2 py-0.5 text-xs font-bold text-yellow-800">New</span>
                        Join the BeeHive now to win $1k of Compute!
                        <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </div>

                {/* Headline */}
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-[var(--foreground)] md:text-6xl lg:text-7xl">
                    Get an Automation for your Workflow!
                </h1>

                {/* Subheadline */}
                <p className="mx-auto mb-10 max-w-3xl text-lg text-[var(--muted)] leading-relaxed">
                    BeeHive provides all kinds of AI apps and agents You might need for your business,
                    social media monitoring, competitive intelligence, lead generation, and product research.
                </p>

                {/* Search / CTA */}
                <div className="mx-auto flex max-w-xl items-center gap-2">
                    <div className="relative flex-grow">
                        <input
                            type="text"
                            placeholder="i.e. Support Ticket Agent"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-lg text-gray-900 shadow-sm focus:border-yellow-500 focus:outline-none focus:ring-1 focus:ring-yellow-500"
                        />
                    </div>
                    <Button
                        size="lg"
                        className="shrink-0 bg-gradient-to-b from-yellow-500 to-neutral-900 text-white border-0 hover:opacity-90 transition-opacity"
                    >
                        Search
                    </Button>
                </div>
            </div>
        </section>
    );
};