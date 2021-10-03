import React from "react";

class Textbox extends React.Component {
    state = {term: ""};

    onFormSubmit = event => {
        event.preventDefault();

        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSbubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={(e) => this.setState({ term: e.target.value })}
                        />
                    </div>
                </form>
           </div>
        );
    }
}

export default Textbox;