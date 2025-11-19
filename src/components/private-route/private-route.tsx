import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const.ts';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: string;
  children: JSX.Element;
}
export default function PrivateRoute(props: PrivateRouteProps) {
  const {authorizationStatus, children, redirectTo} = props;
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={redirectTo}/>
  );
}
