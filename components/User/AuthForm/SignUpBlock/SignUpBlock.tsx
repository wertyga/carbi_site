import { gfBot } from 'goldfish/gfBot';

import useStyles from './styles';

const SignUpBlock = () => {
  const styles = useStyles();
  return (
    <div>
      <span>To get entry password, please, visit </span>
      <a
        href={gfBot.botAddress}
        target="_blank"
        className={styles.signUpLink}
      >
        our Telegram bot
      </a>
    </div>
  );
};

export default SignUpBlock;
