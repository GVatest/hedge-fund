import { useAppSelector } from "app/store/hooks";
import ellipse from "assets/ellipse.png";
import { Login, selectUser, useGetUserQuery } from "features/auth";
import { User } from "features/user";
import { ThreeDots } from "react-loader-spinner";
import "./styles.scss";

function Account() {
  const { isLoading } = useGetUserQuery();
  const user = useAppSelector(selectUser);
  return (
    <div className='account block_bg'>
      {isLoading ? (
        <div className='account__loader'>
          <div className='account__loader__wrapper'>
            <ThreeDots color='#8960FF' />
          </div>
        </div>
      ) : (
        <>{user ? <User user={user} /> : <Login />}</>
      )}

      <img className='account__ellipse' src={ellipse} alt='Ellipse art' />
    </div>
  );
}

export default Account;
