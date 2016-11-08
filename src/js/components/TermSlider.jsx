import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { setCurrentValue } from '../actions/index';
import { createSliderProps } from '../mixins/index';
import Slider from './Slider';
import SliderInputLabel from './SliderInputLabel';
import { sliderProps } from '../propTypes/index';
import Actions from '../actions/Actions';

const propTypes = Object.assign({}, sliderProps, {
  dispatch: PropTypes.func.isRequired,
});

const TermSlider = ({ min, max, step, value, dispatch }) => {
  const onChange = (v) => {
    dispatch(setCurrentValue(Actions.SET_CURRENT_TERM, v));
  };

  return (
    <div>
      <Slider
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
      />
      <SliderInputLabel currentValue={value} onChange={onChange} />
    </div>
  );
};

TermSlider.propTypes = propTypes;

function mapStateToProps(state) {
  return createSliderProps(
    state.calculator.get('term'),
    state.calculator.get('currentTerm')
  );
}

export default connect(mapStateToProps)(TermSlider);
