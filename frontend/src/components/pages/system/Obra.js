import React, {useState} from 'react';
import { withRouter } from 'react-router-dom';

 class Obra extends React.Component {

    state = {
        id: 0,
        obra: {},
      };

    componentDidMount(){
        const id = this.props.match.params.id;
        this.setState({ id: id});
    }

    render(){
        return (
            <>
                Hola, {this.state.id}
            </>
        );
    }
    
}

export default withRouter(Obra);

