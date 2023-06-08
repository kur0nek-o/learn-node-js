import React from "react"

interface ErrorProps {
    error: string
}

const DisplayError: React.FC<ErrorProps> = ({ error }) => {
    return (
        <div className={`mb-5 ${error ? '' : 'hidden'} text-center bg-red-300 border border-red-400 text-red-900 px-3 py-4 rounded-lg`}>
            <p>{error}</p>
        </div>
    )
}

export default DisplayError