export default function ContentHeader(props: {
    children,
}) {
    return (
        <div className="relative flex flex-col items-center justify-center text-center border-b border-gray-200 bg-gray-50">
            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {props.children}
            </div>
        </div>
    )
}