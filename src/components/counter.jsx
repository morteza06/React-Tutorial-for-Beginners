import React, { Component } from 'react'

class Counter extends Component{
    state = {
        count: 0, 
        imageUrl: "https://picsum.photos/201"
    };

    styles = {
        fontSize: 18 ,
        fontWeight: 'bold'
    };

    render() {
        return(
            <div>
                <img  src={this.state.imageUrl} alt=""/>
                
                <span style={this.styles} class="badge bg-primary mt-2">{this.formatcount()}</span>

                <button class="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }
    formatcount(){
        const { count } = this.state;
        return count === 0  ? "Zero" : count;
    }
}

export default Counter;