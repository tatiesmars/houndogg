import React from "react"

import classNames from "classnames";
import styles from '../css/App.module.css'

export default (props) => {
    const {
        children,
        line,
        bottom,
        space,
        spaceBetween,
        sideMargin,
        xsSpace,
        center,
        top,
        shrink,
        column,
        row,
        grow,
        style = {},
        onKeyPress,
        onClick,
        className
    } = props;

    return (
        <div onKeyPress={onKeyPress} onClick={onClick} style={style} className={classNames({
            [styles.row]: row,
            [styles.column]: column,
            [styles.rowTop]: top,
            [styles.rowCenter]: center,
            [styles.shrink]: shrink,
            [styles.grow]: grow,
            [styles.shrink]: shrink || line,
            [styles.rowSpace]: space,
            [styles.rowXsSpace]: xsSpace,
            [styles.rowBottom]: bottom,
            [styles.columnSpaceBetween]: spaceBetween,
            [styles.line]: line,
            [styles.sideMargin]: sideMargin,
        }, className)}>
            {children}
        </div>
    )
}
