import * as React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="flex w-full bg-brand-50">
            <div className="flex grow items-center justify-between p-4 shadow-md md:px-6 2xl:px-11">
                <p className="text-brand-700">Footer</p>
            </div>
        </footer>
    );
};
