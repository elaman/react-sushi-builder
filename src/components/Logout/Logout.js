import { useEffect } from "react"
import { logout } from "../../store/actions/auth";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    logout(dispatch);
    history.replace("/");
  }, [dispatch, history]);

  return null;
}