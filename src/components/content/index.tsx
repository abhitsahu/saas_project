import * as React from 'react';

export const Content: React.FC = () => {
    return (
        <main className="flex-1 flex items-center justify-center">
            <section className="bg-white dark:bg-gray-950">
                <div className="flex flex-col items-center justify-center max-w-7xl mx-auto px-4 md:px-6 2xl:px-11">
                    <div className="text-center">
                        <h1 className="text-2xl md:text-4xl font-semibold text-brand-700 dark:text-white">
                            Welcome to your sample layout
                        </h1>
                        <p className="mt-3 text-gray-600 dark:text-gray-300">
                            This is a responsive content section with a hero and
                            a feature grid.
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
};
