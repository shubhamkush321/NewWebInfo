// import { createContext, useEffect, useState } from "react";
// import axios from "axios";
// import { SERVERAPI } from "../../common/common";

// const InfoContext = createContext(null);

// const InfoProvider = ({ children }) => {
//     const [infoDetails, setInfoDetails] = useState([]);

//     useEffect(() => {
//         const fetchInfo = async () => {
//             try {
//                 const response = await axios.get(`${SERVERAPI}/api/title`);
//                 setInfoDetails(response.data);
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };
//         fetchInfo();
//     }, []);


//   const values = {
//     infoDetails,
//     setInfoDetails
//   }

//     return (
//         <InfoContext.Provider value={values}>
//             {children}
//         </InfoContext.Provider>
//     );
// };

// export { InfoProvider, InfoContext };
