import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count :0
    };

    render() {
        let classes = this.getBadgeClasses();//Refactor 
  
        return(
            <div>
                <span class={classes}>{this.formatcount()}</span>
                <button class="btn btn-primary btn-sm">Increment</button>
            </div>
        );
    }
    getBadgeClasses() {
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