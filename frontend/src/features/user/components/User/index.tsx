import cross from "assets/cross.svg";
import { useLogoutMutation } from "features/auth";
import { useWithdrawMutation } from "features/user/store";
import { useEffect } from "react";
import { IUser } from "shared/models";
import { ErrorResponse } from "shared/types";
import { alerts } from "shared/utils";
import "./styles.scss";

type UserProps = {
  user: IUser;
};

// TODO: alert user about success withdraw request

function User({ user }: UserProps) {
  const [withdraw, { error, data }] = useWithdrawMutation();
  const [logout] = useLogoutMutation();

  useEffect(() => {
    if (data) {
      alerts.success(data.success);
    } else if (error) {
      alerts.error((error as ErrorResponse)?.data?.error);
    }
  }, [data, error]);

  return (
    <>
      <div className='user__wrapper'>
        <span>
          {user.name.length > 9 ? user.name.slice(0, 7) + "..." : user.name}
        </span>
        <img
          onClick={() => logout()}
          className='user__cross'
          src={cross}
          alt='Logout'
        />
      </div>
      <div className='user__info'>
        <div className='user__info__wrapper block_bg'>
          <span>Прибыль</span>
          <span className='user__info__value'>{user.profit}$</span>
        </div>
      </div>
      <div className='user__info'>
        <div className='user__info__wrapper block_bg'>
          <span>Взнос</span>
          <span className='user__info__value'>{user.balance}$</span>
        </div>
      </div>
      <button onClick={() => withdraw()} className='user__withdraw block_bg'>
        Вывод
      </button>
    </>
  );
}

export default User;
