import styles from "style/common/button.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ButtonProps = {
  className?: "circle" | "square";
  title?: string;
  onClick?: () => void;
  type?: "submit" | "button" | "reset";
};

const Button = (props: ButtonProps) => {
  const { className, title, onClick, type } = props;
  return (
    <div>
      <button type={type} onClick={onClick} className={cx(`${className}`)}>
        {title}
      </button>
    </div>
  );
};

export default Button;
