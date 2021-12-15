export default function ContentHeader(props: {
    children,
}) {
    return (
        <div className="relative flex flex-col items-center justify-center text-center border-b border-gray-200">
            <div className="absolute inset-0 overflow-hidden bg-white">
                <div className="absolute w-1/2 rounded-full animate-blob-short aspect-square blur-2xl mix-blend-multiply -top-1/4 bg-violet-400 opacity-5"></div>
                <div className="animate-blob aspect-square blur-2xl mix-blend-multiply rounded-full absolute -top-[20%] left-0 w-full bg-blue-400 opacity-5 z-10"></div>
                <div className="absolute right-0 w-1/2 bg-green-400 rounded-full animate-blob-short aspect-square blur-2xl mix-blend-multiply -bottom-1/4 opacity-5"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {props.children}
            </div>
        </div>
    )
}