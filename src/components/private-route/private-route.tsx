import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../const.ts';
import {useAppSelector} from '../../hooks';
import LoadingSpinner from '../loading-spinner/loading-spinner.tsx';

type PrivateRouteProps = {
  redirectTo: string;
  children: JSX.Element;
}
export default function PrivateRoute(props: PrivateRouteProps) {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const {children, redirectTo} = props;
  if (authorizationStatus === AuthorizationStatus.Unknown) {
    return <LoadingSpinner/>;
  }
  return (
    authorizationStatus === AuthorizationStatus.Auth ? children : <Navigate to={redirectTo}/>
  );
}
