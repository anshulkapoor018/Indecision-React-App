class IndecisionApp extends React.Component{
    render(){
        const title = 'IndecisionApp';
        const subTitle = 'Put your life in the hands of a computer';
        const options = ['Thing 1', 'Thing 2', 'Thing 3'];
        return(
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action/>
                <Options options = {options}/>
                <AddOptions/>
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return(
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick(){
        alert("Pressed");
    }

    render(){
        return(
            <div>
                <button onClick = {this.handlePick}>What should i do?</button>
            </div>
        );
    }
};

class Options extends React.Component {
    constructor(props){
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }
    handleRemoveAll(){
        console.log(this.props.options);
    }
    render(){
        return(
            <div>
                <button onClick={this.handleRemoveAll}>Remove ALL</button>
                {
                    this.props.options.map((option) => <Option key = {option} optionText={option}/>)
                }
            </div>
        );
    }
};

class Option extends React.Component {
    render(){
        return(
            <div>
                Option: {this.props.optionText}
            </div>
        );
    }
};

class AddOptions extends React.Component {
    handleAddOption(event){
        event.preventDefault();

        const option = event.target.elements.option.value.trim();

        if(option){
            alert("Option Added");
        }

    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
};


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))


/*****Run Command in terminal *******/
//Command 1 --->  babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//Command 2 ---> live-server public