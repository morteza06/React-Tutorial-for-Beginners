import React, { Component } from 'react'

class Counter extends Component{
    state = {
        values: this.props.value
    };

    handleIncrement =() => {  
        this.setState({ values: this.state.values + 1 });
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                {/* {this.props.children} */}
                {/* <h4>{this.props.id}</h4> */}

                <span className={this.getBadgeClasses()}>
                    {this.formatcount()}
                </span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-primary btn-sm">Increment
                </button>
            </div>
        );
    }
    getBadgeClasses() {  //create with refactor
        let classes = "badge m-2 bg-";
        classes += this.state.values === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        const values = this.state.values;
        return values === 0  ? "Zero" : values;
    }
}

export default Counter;