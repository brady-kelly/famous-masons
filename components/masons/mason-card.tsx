import Link from 'next/link';
import Image from 'next/image';
import { Mason } from '@/types/mason';

export type MasonCardProps = {
    mason: Mason;
};


export default function MasonCard({ mason }: MasonCardProps) {
    return (
        <Link href={`/masons/${mason.slug}`} className="group">
            <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 dark:bg-gray-800 dark:border-gray-700">
                {/* Profile Image */}
                <div className="relative aspect-square overflow-hidden">
                    <Image
                        src={mason.imageUrl}
                        alt={mason.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                </div>

                {/* Content */}
                <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                            {mason.category}
                        </span>
                        <span className="text-xs text-gray-500">{mason.birthDate}</span>
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                        {mason.name}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                        {mason.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
