import React, {Component} from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {

    render() {
        return (
            <ColorContext.Consumer>
                {(colorValue)=>
                    <button className={`ui button ${colorValue}`}>
                        <LanguageContext.Consumer>
                            {(value)=> value.language === 'english' ? 'Submit' : 'Voorlaggen'}
                        </LanguageContext.Consumer>
                    </button>
                }
            </ColorContext.Consumer>
        );
    }
}

export default Button;