import React from 'react';

interface TableProps {
    title: string;
}

interface TableState {
    x: number;
    y: number;
}

class Table extends React.Component<TableProps, TableState> {
    state = {
        x: 10,
        y: 30
    }

    constructor(props: TableProps) {
        super(props);


        setTimeout(() => {
            this.setState({y: 70})
        }, 3000);
    }

    render() {
        return <div>Table - {this.props.title} - {this.state.y}</div>
    }
}

export default Table;