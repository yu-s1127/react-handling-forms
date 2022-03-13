import { ChangeEvent, useReducer } from 'react';

interface State {
  value: string;
  isTouched: boolean;
}
interface Action {
  type: string;
  value?: string;
}

const initialInputState = {
  value: '',
  isTouched: false,
};
const inputStateReducer = (state: State, action: Action): State => {
  if (action.type === 'INPUT') {
    return { value: action.value ?? '', isTouched: true };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialInputState;
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'INPUT', value: event.target.value });
  };

  const inputBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch({ type: 'BLUR' });
  };

  const reset = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
