function Button(props) {
    return (
        <button onClick={props.handleClick}>CLICK ME</button>
    )
}


function App() {
    const clickAButton = (e) => {
        console.log(e);
        alert('CLICKED, EXECUTED FN FROM PARENT')
    }
    return (
        <>
            <Button handleClick={clickAButton} />
        </>
    );
}