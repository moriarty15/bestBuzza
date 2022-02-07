import { useState, forwardRef } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Icon,
  Modal,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  BGcolor: {
    backgroundColor: "#f5ebdc",
    color: "#87604f;",
  },
  link: {
    color: "#87604f;",
  },
}));

const SignInBody = forwardRef((props, ref) => <SignIn {...props} />)
const SignUpBody = forwardRef((props, ref) => <SignUp {...props}/>)

function Header() {
  const [openSignIn, setOpenSignIn] = useState(false);
  const [openSignUp, setOpenSignUp] = useState(false);

  const handleOpenSignIn = () => {
    setOpenSignIn(true);
  };
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignIn = () => {
    setOpenSignIn(false);
  };
  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.BGcolor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            aria-label="menu"
            sx={{ flexGrow: 1 }}
          >
            <Icon>menu</Icon>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Best Buzza
          </Typography>
          <Button color="inherit" onClick={handleOpenSignIn}>
            Вход
          </Button>
          <Button color="inherit" onClick={handleOpenSignUp}>
            Регистрация
          </Button>
        </Toolbar>
      </AppBar>
      <Modal
        open={openSignIn}
        onClose={handleCloseSignIn}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignInBody/>
      </Modal>
      <Modal
        open={openSignUp}
        onClose={handleCloseSignUp}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SignUpBody/>
      </Modal>
    </>
  );
}

export default Header;
