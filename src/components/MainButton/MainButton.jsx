import PropTypes from "prop-types";
import s from './MainButton.module.scss';

export default function MainButton({text, onClick, width, height, fontSize}) {
    return (
        <button
            type='button'
            onClick={onClick}
            className={s.button}
            style={{width: width, height: height, fontSize: fontSize}}
        >{text}</button>
    )
}

MainButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.number,
};