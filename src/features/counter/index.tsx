import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
} from './counter.reducer';
import { RouteComponentProps } from 'react-router-dom';

import styles from './counter.module.scss';

import { IRootState } from '../../shared/redux/reducer';

export interface ICounterProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}


export const Counter = (props: ICounterProps) => {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => props.increment()}
        >+
        </button>
        <span className={styles.value}>{props.value}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => props.decrement()}
        >-
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            props.incrementByAmount(Number(incrementAmount) || 0)
          }
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => props.incrementByAmount(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
};

// export default Counter;

const mapStateToProps = ({ counter }: IRootState) => ({
  value: counter.value
});

const mapDispatchToProps = {
  increment,
  decrement,
  incrementByAmount
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(mapStateToProps, mapDispatchToProps)(Counter);