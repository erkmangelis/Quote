function Display(randomQuote) {
    return (
        <div className='Display'>
            <p>{randomQuote.text}</p>
            <p>{randomQuote.author.split(",")[0]}</p>
        </div>
    );
}

export default Display;