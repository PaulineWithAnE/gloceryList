import { Component } from "react";

export class GloceryList extends Component {
    state = {
        userInput: '',
        gloceryList: []
    }

    onChangeEvent(e) {
        this.setState({
            userInput: e
        })
        console.log(this.state.userInput)
    }

    addItem(input) {
        
        if (input === '') {
            alert('Please enter an item')
        }
        else {
        let listArray = this.state.gloceryList;
        if (listArray.length === 9) {
            alert('already 9')
            this.setState({
                userInput: ''
            })
        }
        else {
        listArray.push(input)
        this.setState({
            gloceryList: listArray,
            userInput: ''
        })
        }
    }
    }

    croddesWord(e) {
        const li = e.target;
        li.classList.toggle('crossed');
    }

    deleteAll() {
        let listArray = this.state.gloceryList;
        listArray = [];
        this.setState({
            gloceryList: listArray
        })
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render() {
        return(
            <div>
                <div className="delete">
                    <button onClick={() => {this.deleteAll()}}>Delete All</button>
                </div>
            <form onSubmit={this.onFormSubmit}>
            <div>
                <div>
                    <input placeholder="What do u need to buy?"
                    type="text"
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className="button">
                    <button onClick={() => {this.addItem(this.state.userInput)}}>Add</button>
                </div>
                <ul>
                    {this.state.gloceryList.map((item, index) => (
                    <li onClick={this.croddesWord} key={index}>
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width='20px' height='20px'><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M10 14.3C10.5207 14.7686 10.8126 15.0314 11.3333 15.5L14 12.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9 6V5C9 3.34315 10.3431 2 12 2C13.6569 2 15 3.34315 15 5V6" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> <path d="M20.2235 12.5257C19.6382 9.40452 19.3456 7.84393 18.2347 6.92196C17.1238 6 15.5361 6 12.3605 6H11.6393C8.46374 6 6.87596 6 5.76506 6.92196C4.65416 7.84393 4.36155 9.40452 3.77633 12.5257C2.9534 16.9146 2.54194 19.1091 3.74157 20.5545C4.94119 22 7.17389 22 11.6393 22H12.3605C16.8259 22 19.0586 22 20.2582 20.5545C20.9542 19.7159 21.1079 18.6252 20.9536 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg> {item}</li>
                ))}
                </ul>
            </div>
            </form>
            </div>
        )
    }
}
