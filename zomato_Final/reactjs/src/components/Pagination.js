// import { useState } from "react"

// export default Pagination = (perPageRecords,totalPageRecords) => {
//     const totalPages = Math.ceil(totalPageRecords/perPageRecords)
//     const[firstPageI,setFirstPageI] = useState(0)
//     const[lastPageI,setLastPageI] = useState(perPageRecords - 1)
//     const[currentPageI,setCurrentPageI] = useState(1)
//     const displayPage = (pageNo) => {
//         setCurrentPageI(pageNo)
//         let lastPageI = (perPageRecords * pageNo) - 1
//         let firstPageI = (perPageRecords * pageNo) - perPageRecords
//         setFirstPageI(firstPageI)
//         if(lastPageI > totalPageRecords){
//             setLastPageI(totalPageRecords - 1)
//         }else{
//             setLastPageI(lastPageI)
//         }
//     }
//     return [
//         totalPages,firstPageI,lastPageI,currentPageI,displayPage
//     ]
// }
