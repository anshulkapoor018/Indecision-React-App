class IndecisionApp extends React.Component{
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this); 
        this.handlePick = this.handlePick.bind(this); 
        this.handleAddOption = this.handleAddOption.bind(this); 
        
        this.state = {
             options : []
        }; 
    }

    handleDeleteOptions(){
        this.setState(() => {
            return {
                options : []
            };
        });
    }

    handlePick(){
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    handleAddOption(option){
        if(!option){
            return 'Enter Valid Value to add';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }

        this.setState((prevState) => {
            
            return {
                options : prevState.options.concat(option)
            };
        });
    }

    render(){
        const title = 'IndecisionApp';
        const subTitle = 'Put your life in the hands of a computer';
        return(
            <div>
                <Header title = {title} subTitle = {subTitle}/>
                <Action 
                    hasOptions = {this.state.options.length > 0}
                    handlePick = {this.handlePick}    
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                />
                <AddOptions
                    handleAddOption = {this.handleAddOption}
                />
            </div>
        )
    }
}

const Header = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subTitle}</h2>
        </div>
    );
}

const Action = (props) => {
    return(
        <div>
            <button 
                onClick = {props.handlePick}
                disabled = {!props.hasOptions}
            >
                What should i do?
            </button>
        </div>
    ); 
}

const Options = (props) => {
    return(
        <div>
            <button onClick={props.handleDeleteOptions}>Remove ALL</button>
            {
                props.options.map((option) => <Option key = {option} optionText={option}/>)
            }
        </div>
    );
}


const Option = (props) => {
    return(
        <div>
            Option: {props.optionText}
        </div>
    );
}

class AddOptions extends React.Component {
    constructor(props){
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error : undefined
        };
    }
    handleAddOption(event){
        event.preventDefault();
        
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => {
            return {error};
        });
    
    }
    render(){
        return(
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
};


//Stateless Functional Component
// const User = (props) => {
//     return(
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age : {props.age}</p>            
//         </div>
//     )
// };


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))