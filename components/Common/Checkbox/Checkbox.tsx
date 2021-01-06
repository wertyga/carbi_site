import _noop from 'lodash/noop';

import useStyles from './styles';

interface Props {
	checked: boolean,
	className?: string,
	label?: string | number,
	onChange?: Function,
}

export const Checkbox: React.FC<Props> = ({
  checked,
  className = '',
  onChange = _noop,
  label,
}) => {
  const styles = useStyles({ checked });
  return (
    <div
      role="presentation"
      onClick={onChange}
      className={styles.checkboxRoot}
    >
      {label && <span>{label}</span>}
      <span
        className={`${styles.checkbox} ${className}`}
      >
        {checked && <span className={styles.check} />}
      </span>
    </div>
  );
};
