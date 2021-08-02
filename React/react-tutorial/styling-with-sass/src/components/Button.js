import React from 'react';
import './Button.scss';
import classNames from 'classnames';

function Button({children, size, color, outline, fullWidth, className, ...rest}){
//   return <button className={`Button ${size}`}>{children}</button>
    // return <button className={classNames('Button', size || 'medium')}>{children}</button>
    return <button className={
            classNames('Button', size, color, {
                outline,
                fullWidth
            },
            className
        )}
        {...rest}
        // onClick={onClick}
        // onMouseMove={onMouseMove}
    >{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
}

export default Button;
