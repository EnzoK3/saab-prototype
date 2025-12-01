import React from 'react';
import Image from 'next/image';

export interface ScraperData {
    title: string;
    description: string;
    author: string;
    authorIcon?: string;
    icon: string; // URL or path to icon
    users: string;
    rating: number;
    slug: string;
}

interface ScraperCardProps {
    data: ScraperData;
}

export const ScraperCard: React.FC<ScraperCardProps> = ({ data }) => {
    return (
        <div className="group relative flex flex-col rounded-xl border border-[var(--border)] bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1">
            <div className="mb-4 flex items-start justify-between">
                <div className="flex items-center gap-3">
                    <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                        {/* Placeholder for icon if not provided, or use Image component */}
                        {data.icon ? (
                            <Image src={data.icon} alt={data.title} width={40} height={40} className="object-cover" />
                        ) : (
                            <div className="h-full w-full bg-gray-200" />
                        )}
                    </div>
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)]">{data.title}</h3>
                        <p className="text-xs text-[var(--muted)]">{data.slug}</p>
                    </div>
                </div>
            </div>

            <p className="mb-6 line-clamp-3 text-sm text-[var(--muted)] flex-grow">
                {data.description}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-[var(--border)] pt-4">
                <div className="flex items-center gap-2">
                    {/* Author Icon placeholder */}
                    <div className="h-5 w-5 rounded-full bg-gray-200 overflow-hidden">
                        {data.authorIcon && <Image src={data.authorIcon} alt={data.author} width={20} height={20} />}
                    </div>
                    <span className="text-sm font-medium text-[var(--foreground)]">{data.author}</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        {data.users}
                    </div>
                    <div className="flex items-center gap-1">
                        <svg className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {data.rating}
                    </div>
                </div>
            </div>
        </div>
    );
};
