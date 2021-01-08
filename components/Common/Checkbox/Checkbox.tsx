import _noop from 'lodash/noop';

import useStyles from './styles';

interface Props {
	checked: boolean,
	disabled: boolean,
	className?: string,
	label?: string | number,
	onChange?: Function,
}

export const Checkbox: React.FC<Props> = ({
  checked,
  className = '',
  onChange = _noop,
  label,
	disabled,
}) => {
  const styles = useStyles({ checked });
  return (
    <div
      role="presentation"
      onClick={onChange}
      className={styles.checkboxRoot}
    >
      {label && <span>{label}</span>}
      <input
	      type="checkbox"
	      checked={checked}
	      disabled={disabled}
	      readOnly
      />
    </div>
  );
};
