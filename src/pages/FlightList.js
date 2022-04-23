import React, { useEffect, useState } from "react";
import axios from "axios";
// import { showLoading } from '../../utils/helpers'
// import axios from '../../api/axiosClient'
// import ENDPOINT from '../../api/endpoint'
import flight from "../api/flight";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";


function FlightList(props) {
  const [usersList, setUsersList] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    getUsersList();
  }, []);

  const getUsersList = async (go = keyword, arrive = page, chair = pageSize) => {
    try {
      const params = {
        departurePlace: go,
        destination: arrive,
        classType: chair,
      };
      const res = await axios.post(flight, params);
      if (res.data && res.data.messageCode === 200) {
        setUsersList(res.data.result);
        setTotalCount(res.data.numberOfResult);
        setOffset(res.data.offset);
      }
    } catch (error) {
      console.log("Call API Users List Error: ", error);
    }
  };

  const handleSearch = () => {
    const kw = keyword;
    getUsersList(kw);
  };

  const prevPage = async () => {
    const pg = page === 1 ? 1 : page - 1;
    getUsersList(pg);
    setPage(pg);
  };

  const nextPage = async () => {
    const pg = page < Math.ceil(totalCount / pageSize) ? page + 1 : page;
    getUsersList(pg);
    setPage(pg);
  };

  const thCls =
    "px-3 py-3 border-b-2 border-gray-200 bg-gray-200 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider text-left";
  const tdCls = "px-3 py-2 text-sm text-left";

  return (
    <>
      <div className="px-2 py-5  bg-gray-100">
        <div className="px-4 px-8 py-4 overflow-x-auto">
          <div className="searchbox">
            <div
              className="flex items-center justify-between"
              style={{ display: "flex" }}
            >
              <input
                type="text"
                className="focus:border-blue-500 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                placeholder="Search..."
                style={{ width: "90%" }}
                onChange={(e) => setKeyword(e.target.value)}
              />
              <button
                type="button"
                className="ml-4 align-middle bg-primary hover:bg-blue-600 text-center px-4 py-2 text-white text-sm font-semibold rounded inline-block shadow-lg"
                onClick={handleSearch}
              >
                Search
              </button>
            
            </div>
          </div>
          {/* <div className="mt-8 inline-block min-w-full shadow rounded-lg overflow-hidden"></div> */}
          <div className="mt-8 inline-block min-w-full shadow rounded-lg " style={{overflowX:"scroll"}}>
            <table className="min-w-full leading-normal">
              <thead >
                <tr style={{ backgroundColor: "#999", width: "100%" , overflowX:"scroll"}}>
                  <th className={thCls}>FlightID</th>
                  <th className={thCls}>FlightCode</th>
                  <th className={thCls}>Name</th>
                  <th className={thCls}>AirlineID</th>
                  <th className={thCls}>FlightStatus</th>
                  <th className={thCls}>Depature</th>
                  <th className={thCls}>QuantilyTicket</th>
                  <th className={thCls}>DepaturePlace</th>
                  <th className={thCls}>Destination</th>
                  <th className={thCls}>GateID</th>
                  <th className={thCls}>Status</th>
                  <th className={thCls}>CreaBy</th>
                  <th className={thCls}>CreaBy</th>
                </tr>
              </thead>

              <tbody className="customer-list">
              {/* <ul>
        {list.map((flight) => (
          <li key={flight.flightId}>{flight.name}</li>
        ))}
      </ul> */}
                {usersList.map((flight) => (
                  <tr
                    key={flight.flightId}
                    className="cursor-pointer bg-white even:bg-gray-100 hover:bg-gray-200"
                  >
                    <td className={tdCls}>{flight.depaturePlace}</td>
                    <td className={tdCls}>{flight.destinaton}</td>
                    <td className={tdCls}>{flight.quantity}</td>
                    <td className={tdCls}>{flight.classType}</td>
                  </tr>
                ))}
                <tr>
                  <td style={{ textAlign: "center" }}> 1</td>
                  <td> CBVNSGNTODAD</td>
                  <td> TpHCM_đến_ĐàNẵng</td>
                  <td style={{ textAlign: "center" }}> 2</td>
                  <td> DANG_BAY</td>
                  <td> 2022-05-04</td>
                  <td style={{ textAlign: "center" }}> 85</td>
                  <td> TP.HCM,ViệtNam</td>
                  <td> ĐàNẵng,ViệtNam</td>
                  <td style={{ textAlign: "center" }}> 2</td>
                  <td> GATE001VNN</td>
                  <td> ACTIVE</td>
                  <td> ADMIN</td>
                  {/* <td > 2022-03-01</td> */}
                </tr>
              </tbody>
            </table>
            <div
              className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between"
              style={{ textAlign: "center" }}
            >
              <span className="text-xs xs:text-sm text-gray-900">
                Showing {totalCount === 0 ? 0 : offset + 1} to{" "}
                {offset + pageSize > totalCount
                  ? totalCount
                  : offset + pageSize}{" "}
                of {totalCount} Records
              </span>
              <div className="inline-flex mt-2 mt-0">
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                  onClick={prevPage}
                >
                  Prev
                </button>
                <button
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                  onClick={nextPage}
                >
                  Next
                </button>
              </div>
              <div>
              <Link to='/flightList' className="nav-link">
                <button
                  variant="contained"
                  class="btn btn-primary"
                  type="button"
                  style={{ width: "15%", position: "relative", left:"10%" }}
                  // onClick={submitForm}
                >
                  {" "}
                  Tìm chuyến bay
                </button>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FlightList;
