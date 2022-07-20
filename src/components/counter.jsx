import React, { Component } from 'react'

class Counter extends Component{
    state = {
        values: this.props.counter.value//local
    };

    handleIncrement =() => {  
        this.setState({ values: this.state.values + 1 });
    };

    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatcount()}
                </span>
                <button 
                    onClick={this.handleIncrement} 
                    className="btn btn-primary btn-sm">Increment
                </button>
                <button 
                   onClick={() => this.props.onDelete(this.props.counter.id)}
                   className='btn btn-danger btn-sm m-2'>Delete</button>
            </div>
        );
    }
    getBadgeClasses() {  
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