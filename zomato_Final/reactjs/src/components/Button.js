const Button = ({ text, css, openPopup, style }) => {
    return (
        <>
            <button className={css} onClick={() => { openPopup() }} style={style}>
                {text}
            </button>
        </>
    )
}
export default Button