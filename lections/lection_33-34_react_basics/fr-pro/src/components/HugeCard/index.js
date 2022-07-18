import React from "react";

const onResize = () => {
    console.log('resize');
};


class HugeCard extends React.Component {
    state = {
        x: 10,
        spinnerVisible: false,
    }

    timerId = undefined
    
    constructor(props) {
        super(props);

        console.log('Constructor');
        // debugger;

        setTimeout(() => {
            // this.forceUpdate();
            // this.de
        }, 5000)

        this.timerId = setInterval(() => {
            console.log(Date.now());
        }, 2000)
    }

    static getDerivedStateFromProps(...params) {
        console.log('getDerivedStateFromProps', params);

        // debugger;

        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');

        // debugger;
       
        this.setState({ spinnerVisible: true });
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=50.451400&lon=30.472484&appid=fe147517cb42a8032190ecae01b8741c&units=imperial')
        .then(resp => resp.json())
        .then(data => {
            this.setState({ weather: data, spinnerVisible: false })
        })


        window.addEventListener('resize', onResize);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerId);
        window.removeEventListener('resize', onResize);
    }

    onBlaBlaClick() {}

    render() {
        const content = this.state.x > 5 ? '!' : '?';
        // debugger;

        return (
            <>
                <span>HugeCard {content}</span>
                <div>{JSON.stringify(this.state.weather)}</div>
                {this.state.spinnerVisible && (
                    <div>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif?20151024034921"/> 
                    </div>
                )}
            </>
        );
    }
}


export default HugeCard;