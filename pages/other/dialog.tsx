import { Transition, Dialog } from "@headlessui/react";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";
import React, { Fragment, useEffect, useState } from "react"
import Confetti from 'react-confetti'
import { useWindowSize } from "react-use";

export default function dialog() {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <div className="flex items-center justify-center w-screen min-h-screen p-12 bg-gray-600">
            <div className="fixed inset-0 flex items-center justify-center">
                <button
                    type="button"
                    onClick={openModal}
                    className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
            </div>

            <AnimatePresence>
                {isOpen && <DialogPoppingCenter onClose={() => setIsOpen(false)}>
                    <div></div>
                </DialogPoppingCenter>}
            </AnimatePresence>
        </div>
    )
}

const DialogPoppingCenter: React.FC<{
    onClose: () => void,
}> = (props) => {
    return (
        <Dialog className="fixed inset-0 z-10" onClose={props.onClose} open={true}>
            <Dialog.Overlay
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.2, ease: [0.36, 0.66, 0.04, 1] },
                }}
                className="fixed inset-0 bg-black/40"
            />

            <motion.div
                initial={{
                    x: "50vw",
                    y: "50vh",
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                animate={{
                    scale: [0, 1, 1.05, 1],
                    transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
                }}
                exit={{
                    scale: [1, 0.95, 1, 0],
                    transition: { duration: 0.2, ease: [0.36, 0.66, 0.04, 1] },
                }}
                className="z-0 flex flex-col bg-white rounded shadow-xl w-[50rem] h-[30rem]"
            >
                {props.children}
            </motion.div>
        </Dialog>
    )
}

const DialogSlidingUp: React.FC<{
    onClose: () => void,
}> = (props) => {
    return (
        <Dialog className="fixed inset-0 z-10" onClose={props.onClose} open={true}>
            <Dialog.Overlay
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
                }}
                className="fixed inset-0 bg-black/40"
            />

            <motion.div
                initial={{ y: "100%" }}
                animate={{
                    y: 0,
                    transition: { duration: 0.4, ease: [0.36, 0.66, 0.04, 1] },
                }}
                exit={{
                    y: "100%",
                    transition: { duration: 0.3, ease: [0.36, 0.66, 0.04, 1] },
                }}
                className="z-0 flex flex-col w-full h-full bg-white rounded-t-lg shadow-xl"
            >
                {props.children}
            </motion.div>
        </Dialog>
    )
}