export const ACTION_TYPES = {
  INCREMENT: 'counter/INCREMENT',
  DECREMENT: 'counter/DECREMENT',
  INCREMENT_BY_AMOUNT: 'counter/INCREMENT_BY_AMOUNT',
  INCREMENT_ASYNC: 'counter/INCREMENT_ASYNC',
};

const initialState = {
    value: 0
};

export type CounterState = Readonly<typeof initialState>;

const counter = (state: CounterState = initialState, action: any): CounterState => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
        return {
        ...state,
        value: state.value + 1,
    };
    case ACTION_TYPES.DECREMENT:
        return {
        ...state,
        value: state.value - 1,
    };
    case ACTION_TYPES.INCREMENT_BY_AMOUNT:
        return {
        ...state,
        value: state.value + action.payload,
    };
    case ACTION_TYPES.INCREMENT_ASYNC:
        return {
        ...state,
        value: state.value + action.payload,
    };
    default:
      return state;
  }
};

export default counter

export const increment = () => ({
  type: ACTION_TYPES.INCREMENT
});

export const decrement = () => ({
  type: ACTION_TYPES.DECREMENT
});

export const incrementByAmount = (amount: number) => ({
  type: ACTION_TYPES.INCREMENT_BY_AMOUNT,
  payload: amount
});

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched
export const incrementAsync = (amount: number) => (dispatch: any) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state) => state.counter.value)`
// export const selectCount = state => state.counter.value;

export const selectCount = (state: CounterState) => state.value;
