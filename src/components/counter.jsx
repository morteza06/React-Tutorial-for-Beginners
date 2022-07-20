import React, { Component } from 'react'

class Counter extends Component{
    componentDidUpdate(prevProps, prevState) {
        console.log('prevProps', prevProps);
        console.log('prevState', prevState);
        if (prevProps.counter.value !== this.props.counter.value){
            // Ajax call and get new data from the server
        }
    }

    render() {
        console.log('Counter - Rendered');
        
        return (
            <div>
                <span className={this.getBadgeClasses()}>
                    {this.formatcount()}
                </span>
                <button 
                    onClick={() => this.props.onIncrement(this.props.counter)} 
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
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatcount(){
        const { value } = this.props.counter;
        return value === 0  ? "Zero" : value;
    }
}

export default Counter;