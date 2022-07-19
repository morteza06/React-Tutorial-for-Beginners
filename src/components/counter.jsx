import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count: 0
    };

    // constructor() {
    //     super();
    //     //console.log("Constructor", this);
    //     this.handleIncrement =  this.handleIncrement.bind(this);
    // }

    handleIncrement = () => {
        console.log("Increment Clicked", this);
        //obj.method();
        // function();
    }

    render() {
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.formatcount()}</span>
                <button onClick={this.handleIncrement} 
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