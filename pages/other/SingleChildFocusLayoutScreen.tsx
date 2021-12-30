import React, { useEffect, useRef, useState } from "react";

export default function SingleChildFocusLayoutScreen() {
    const { singleChildFocusParentProps, singleChildFocusChildProps } = useSingleChildFocusLayout()

    return (
        <div className="flex items-center justify-center w-screen min-h-screen p-12 bg-gray-600">
            <div
                {...singleChildFocusParentProps}
                className="grid w-full grid-cols-4 gap-8 p-12 bg-white max-w-7xl group"
            >
                {[...Array(10)].map((_, index) => (
                    <div
                        {...singleChildFocusChildProps(index)}
                        className="m-2 transition-opacity duration-200 bg-gray-300 rounded cursor-pointer h-80"></div>
                ))}
            </div>
        </div>
    )
}

const useSingleChildFocusLayout = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number>()
    const hoveredIndexRef = useRef<number>()
    const interruptHoverDisabilitation = useRef(false)

    useEffect(() => {
        hoveredIndexRef.current = hoveredIndex
    }, [hoveredIndex])

    const onMouseEnter = (index: number) => {
        interruptHoverDisabilitation.current = true
        setHoveredIndex(index)
    }

    const onMouseLeave = (index: number) => {
        setTimeout(() => {
            if (hoveredIndexRef.current === index && !interruptHoverDisabilitation.current) {
                setHoveredIndex(undefined)
            }
            interruptHoverDisabilitation.current = false
        }, 750)
    }

    return {
        singleChildFocusParentProps: {
            onMouseLeave: () => setHoveredIndex(undefined),
        },
        singleChildFocusChildProps: (index: number) => ({
            onMouseEnter: () => onMouseEnter(index),
            onMouseLeave: () => onMouseLeave(index),
            style: { opacity: hoveredIndex !== undefined && hoveredIndex !== index ? "20%" : "100%" }
        })
    }
}