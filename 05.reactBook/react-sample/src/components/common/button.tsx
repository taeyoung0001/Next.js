import styles from "style/common/button.module.scss";
import cn from "classnames/bind";

const cx = cn.bind(styles);

type ButtonProps = {
  className?: "circle" | "square";
  title?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  const { className, title, onClick } = props;
  return (
    <div>
      <button onClick={onClick} className={cx(`${className}`)}>
        {title}
      </button>
    </div>
  );
};

export default Button;
