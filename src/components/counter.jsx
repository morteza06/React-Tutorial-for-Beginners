import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count: 0
    };


    handleIncrement = product => {   //bind Eventhandler with[ =() =>   ] cleaner and simpler
        console.log(product);
        this.setState({ count: this.state.count + 1 });
    };

    doHandlerIncrement =() =>{
        this.handleIncrement({ id: 1});
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
                <button 
                    onClick={this.doHandlerIncrement} //inline function have a error => onClick={() => {this.handleIncrement(product) } 
                    className="btn btn-primary btn-sm">Increment
                </button>
            </div>
        );
    }
    getBadgeClasses() {  //create with refactor
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        const { count } = this.state;
        return count === 0  ? "Zero" : count;
    }
}

export default Counter;