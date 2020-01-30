import React ,{Component,Fragment} from 'react'
import './style.css'


class App extends Component{
    constructor(props){
        super(props)
        this.state = {
            show:true
        }
    }
    render(){
        return (
            <Fragment>
                <div className = {this.state.show?'show':'hide'}>hide</div>
                <button onClick={this.traggle.bind(this)}>改变</button>

            </Fragment>
        )
    }
    traggle(){
        this.setState(()=>({
            show: this.state.show?false:true
        }))
    }
}

export default App