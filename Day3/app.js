const heading = (
    <h1>Namaste React</h1>
);

const HeadingComponant = () => {
    return (

        <div>
        {heading}
        <h2>From Functional Comoonant </h2>
        <h3> Good Bye </h3>
    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponant/>);