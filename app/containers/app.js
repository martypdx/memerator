import React from "react";
import Css from "./app.css";

const Images = {
    bat: require('../images/bat_purple.png'),
    cat: require('../images/blue_cat.png'),
    cow: require('../images/green_cow.png'),
    lobster: require('../images/red_lobster.png')
}

const Orly = React.createClass({
    render() {
        const { top, author, title, image } = this.props;

        return (
            <div className={Css.imageContainer}>
                <img src={Images[image]} />
                <div className={Css.top}>{top}</div>
                <div className={Css.author}>{author}</div>
                <div className={Css.title}>{title}</div>
            </div>
        );
    }
})

const App = React.createClass({
    getInitialState() {
        return {
            top: 'clever top line...',
            title: 'witty title',
            author: 'Nerdy McNerd',
            image: 'bat'
        };
    },
    handleChange( field, e) {
        this.setState({ [ field ]: e.target.value });
    },
    render() {
        const images = Object.keys(Images)
        return (
            <div className={Css.container}>
                <div className={Css.inputs}>
                    {[ 'top', 'author', 'title'].map( field => {
                        return (
                            <div key={field}>
                                <label>
                                    {field}: 
                                    <input value={this.state[field]} placeholder={field} onChange={e => this.handleChange( field, e )} />
                                </label>
                            </div>
                        );
                    })}  
                    <select value={this.state.image} onChange={e => this.handleChange( 'image', e )}>
                        { images.map( img => <option key={img} value={img}>{img}</option> ) }
                    </select>
                </div>
                <Orly {...this.state}/>
            </div>
        )
    }
})

export default App;