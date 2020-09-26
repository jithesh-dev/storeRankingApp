import React, { useState, useEffect } from "react";

import "./StoreTable.Style.scss";
import { AiOutlineStock } from "react-icons/ai";

import getStoreData from "../../api/storeRank.API";

const StoreTable = () => {
  const [store, setStore] = useState([]);

  useEffect(() => {
    console.log(process.env.API_URL);
    getStoreData()
      .then((res) => setStore(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <table className="StoreTable">
        <thead>
          <tr>
            <th>Your Stores</th>
            <th>
              Total footfall <AiOutlineStock />
            </th>
            <th>
              New footfall <AiOutlineStock />
            </th>
            <th>
              Returning footfall <AiOutlineStock />
            </th>
            <th>
              Total time spent in the shop <AiOutlineStock />
            </th>
            <th>
              Total departments visited <AiOutlineStock />
            </th>
            <th>
              Average department visit time <AiOutlineStock />
            </th>
            <th>
              Bounce rate <AiOutlineStock />
            </th>
            <th>Store performance</th>
          </tr>
        </thead>
        <tbody>
          {store?.map((store) => (
            <tr key={store.id}>
              <td>
                <span className="StoreTable__StoreName"> {store.st_name}</span>
              </td>
              <td>{store.st_total_footfall}</td>
              <td>{store.st_total_footfall - store.st_returning_footfall}</td>
              <td>{store.st_returning_footfall}</td>
              <td>{store.st_time_spent} h</td>
              <td>
                {store.st_tot_dep_visited} / {store.st_tot_departments}
              </td>
              <td>{store.st_avg_dep_time} h</td>
              <td>{store.st_bounce_rate}%</td>
              <td>{store.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default StoreTable;
