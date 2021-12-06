import React from "react";
import './Button.scss';
import classNames from "classnames";

// size : large, medium, small
// color : blue, pink, gray
function Button({children, size, color, outline, fullWidth,className, ...rest}) {
    return(
        <button {...rest} className={classNames('Button', size, color, {
            outline,
            fullWidth
        }, className)}>
            {children}
        </button>
    );
}

Button.defaultProps = {
    size : 'medium',
    color : 'blue'
}

export default Button;