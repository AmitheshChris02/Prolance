import { useRef, Suspense } from "react";
import useOnScreen from "../hooks/useOnScreen";

const LazyLoadComponent = ({ children, className = "min-h-[10rem]", id }) => {
    const ref = useRef(null);
    const isVisible = useOnScreen(ref, "200px"); // Start loading 200px before it enters viewport

    return (
        <div ref={ref} className={className} id={id}>
            {isVisible ? (
                <Suspense fallback={<div className="w-full h-full flex justify-center items-center p-10">Loading...</div>}>
                    {children}
                </Suspense>
            ) : (
                <div className="w-full h-full" /> /* Placeholder fills the container's min-height */
            )}
        </div>
    );
};

export default LazyLoadComponent;
