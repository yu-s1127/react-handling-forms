import React, { ChangeEvent, FormEvent, useState, FocusEvent } from 'react';

const SimpleInput = () => {
  const [enteredName, setEnteredName] = useState<string>('');
  const [enteredNameTouched, setEnteredNameTouched] = useState<boolean>(false);

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEnteredNameTouched(true);
  };

  const nameInputChangeHandker = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredName(event.target.value);
  };

  const formSubmitHandler = (event: FormEvent) => {
    event?.preventDefault();

    setEnteredNameTouched(true);
    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName('');
    setEnteredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputChangeHandker}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
