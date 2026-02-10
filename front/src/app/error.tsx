"use client";

export default function Error({
    error,
    reset,
} : {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h1>An error occured</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try again</button>
        </div>
    )
}