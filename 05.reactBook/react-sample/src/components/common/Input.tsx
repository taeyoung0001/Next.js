import styles from "style/common/Input.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type InputProps = {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  type?: string;
  label?: string;
};

const Input = (props: InputProps) => {
  const { label, type, onChange, name, placeholder } = props;
  return (
    <label className={cx("label")}>
      {label}
      <input
        className={cx("input")}
        type={type}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
      />
    </label>
  );
};

export default Input;
