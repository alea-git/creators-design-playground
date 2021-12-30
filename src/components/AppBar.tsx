import classNames from "classnames"
import { motion } from "framer-motion"

export default function AppBar(props: {
    showMenuIcon?: boolean
    title?: string
}) {
    return (
        <div className="sticky top-0 z-20 h-16 text-white bg-gray-900 border-b border-gray-800">
            <div className="w-full h-full mx-auto max-w-7xl">
                <div className="flex flex-row items-center justify-between h-full space-x-4">
                    <div className="w-40">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex items-center justify-center flex-shrink-0 w-10 h-10 border border-gray-800 rounded-full cursor-pointer"
                        >
                            {props.showMenuIcon ? <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg> : <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>}
                        </motion.button>
                    </div>

                    <h1 className="flex flex-row text-xl font-semibold">
                        <span className={classNames(props.title ? "text-gray-400" : "text-white")}>
                            Fudeo
                        </span>

                        {props.title && <>
                            <div className="w-3 mx-3 my-1" style={{ background: 'linear-gradient(to top left, rgba(0,0,0,0) 0%, rgba(0,0,0,0) calc(50% - 0.8px), #777 50%, rgba(0,0,0,0) calc(50% + 0.8px), rgba(0,0,0,0) 100%)' }} />

                            <span>
                                {props.title}
                            </span>
                        </>}
                    </h1>


                    <div className="flex flex-row items-center w-40 space-x-6">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="flex flex-row items-center justify-center w-10 h-10 space-x-4 border border-gray-800 rounded-full focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </motion.button>

                        <div className="h-6 w-[1px] bg-gray-700" />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full focus:outline-none" style={{ backgroundImage: 'url(https://media-exp1.licdn.com/dms/image/C4E03AQHO9fs7VQUjtw/profile-displayphoto-shrink_400_400/0/1594903913636?e=1644451200&v=beta&t=k9GKFQ_2QBzDf0cPhyH6lskIanwIYJE9jtpumViCKPw)' }} />
                    </div>
                </div>
            </div>
        </div >
    )
}