import { Suspense } from "react";

const LazyLoadComponent = ({ children, className = "min-h-[10rem]", id }) => {

    return (
        <div className={className} id={id}>
            <Suspense fallback={<div className="w-full h-full flex justify-center items-center p-10">Loading...</div>}>
                {children}
            </Suspense>
        </div>
    );
};

export default LazyLoadComponent;
