import * as React from 'react';

export const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-[999] flex w-full bg-brand-50">
            <div className="flex grow items-center justify-between p-4 shadow-md md:px-6 2xl:px-11">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <p className="text-brand-700 font-semibold">Header</p>
                    </div>
                </div>
            </div>
        </header>
    );
};
