import React from 'react';
import Calculator from '../containers/Calculator';
import {render, fireEvent} from '@testing-library/react';

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = render(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.getByTestId('number4');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button4);
    expect(runningTotal.textContent).toEqual('4');
  })

  it('should add 1 and 4 and get 5', () => {
    const button1 = container.getByTestId('number1');
    const buttonadd = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4');
    const buttonequals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonadd);
    fireEvent.click(button4);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('5');
  })

  it('should subtract 4 from 7 and get 3', () => {
    const button4 = container.getByTestId('number4');
    const buttonsub = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button7);
    fireEvent.click(buttonsub);
    fireEvent.click(button4);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.getByTestId('number3');
    const buttonmult = container.getByTestId('operator-multiply');
    const button5 = container.getByTestId('number5');
    const buttonequals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button3);
    fireEvent.click(buttonmult);
    fireEvent.click(button5);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('15');
  })

  it('should divide 21 by 7 and get 3', () => {
    const button2 = container.getByTestId('number2')
    const button1 = container.getByTestId('number1')
    const buttondiv = container.getByTestId('operator-divide');
    const button7 = container.getByTestId('number7')
    const buttonequals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    fireEvent.click(buttondiv);
    fireEvent.click(button7);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('3');
  })

  it('should concatenate multiple number button clicks', () => {
    const button2 = container.getByTestId('number2');
    const button1 = container.getByTestId('number1');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button2);
    fireEvent.click(button1);
    expect(runningTotal.textContent).toEqual('21');
  })

  it('should chain multiple operations together', () => {
    const button1 = container.getByTestId('number1');
    const buttonadd = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4');
    const buttonsub = container.getByTestId('operator-subtract');
    const button7 = container.getByTestId('number7');
    const buttonequals = container.getByTestId('operator-equals');
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonadd);
    fireEvent.click(button4);
    fireEvent.click(buttonsub);
    fireEvent.click(button7);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('-2');
  })

  it('should clear the running total without affecting the calculation', () =>{
    const button1 = container.getByTestId('number1');
    const buttonadd = container.getByTestId('operator-add')
    const button4 = container.getByTestId('number4');
    const buttonclear = container.getByTestId('clear')
    const buttonequals = container.getByTestId('operator-equals')
    const runningTotal = container.getByTestId('running-total');
    fireEvent.click(button1);
    fireEvent.click(buttonadd);
    fireEvent.click(button4);
    fireEvent.click(buttonadd);
    fireEvent.click(buttonclear);
    fireEvent.click(button1);
    fireEvent.click(buttonequals);
    expect(runningTotal.textContent).toEqual('6');
  })

})

