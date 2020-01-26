class ExpressError extends Error{
    status: number;
    messageToConsole: string;
}

export default ExpressError;