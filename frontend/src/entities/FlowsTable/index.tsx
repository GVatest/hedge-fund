import box from "assets/flows/box.svg";
import deposit from "assets/flows/deposit.svg";
import wallet from "assets/flows/wallet.svg";
import { ThreeDots } from "react-loader-spinner";
import { useGetFlowsQuery } from "./api";
import "./styles.scss";
import { Flow } from "./types";

function FlowsTable() {
  const { data, isLoading } = useGetFlowsQuery();

  return (
    <table className='flows_table'>
      <tbody>
        {isLoading ? (
          <tr className='flows_table__loader'>
            <td>
              <ThreeDots color='#8960FF' />
            </td>
          </tr>
        ) : (
          <>
            {data?.length ? (
              <FlowsTableItems flows={data} />
            ) : (
              <tr className='flows_table__loader'>
                <td>{`Nothing )=`}</td>
              </tr>
            )}
          </>
        )}
      </tbody>
    </table>
  );
}

function FlowsTableItems({ flows }: { flows: Flow[] }) {
  const flowsTypesToInfo = {
    DT: [deposit, "Взнос"],
    PT: [wallet, "Выплата"],
    BT: [box, "Бонус за приглашение"],
  };
  return (
    <>
      {flows.map((item, i) => (
        <tr className='flows_table__item' key={i}>
          <th>
            <img src={flowsTypesToInfo[item.type][0]} alt='Traffic type' />
          </th>
          <th className='flows_table__item__id'>
            <span className='block_bg'>
              {item.user.length > 9 ? item.user.slice(0, 7) + "..." : item.user}
            </span>
          </th>
          <th>
            {item.type === "BT" || item.type === "PT" ? "+" : null}
            {`${item.amount}$`}
          </th>
          <th>{flowsTypesToInfo[item.type][1]}</th>
          <th className='flows_table__item__date'>
            {item.date
              .slice(5, item.date.length)
              .split("T")[0]
              .split("-")
              .join(".")}
          </th>
        </tr>
      ))}
    </>
  );
}

export default FlowsTable;
