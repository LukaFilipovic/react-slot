class App extends React.Component {
    render(){
        return(
            <div>
                <Machine s1 = "1" s2 = "1" s3 = "3"/>
                <Machine s1 = "2" s2 = "2" s3 = "2"/>
                <Machine s1 = "1" s2 = "1" s3 = "3"/>
            </div>
        );
    }
}
ReactDOM.render( <App />, document.getElementById('root'))