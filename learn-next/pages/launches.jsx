import React, { useState, useEffect } from "react";

export default function Launches({ data }) {
  // const [data, setData] = useState(null)
  // useEffect(() => {
  //         const fetchLaunches = async () =>{
  //             const res = await fetch("https://api.spacexdata.com/v3/launches")
  //             const data = await res.json();
  //             setData(data)
  //         };

  //         fetchLaunches();

  // }, [])
  if (data === null) {
    return null;
  }
  return (
    <div>
      <ul>
        {data.map((launch, i) => {
          return <li key={i}>{launch.mission_name}</li>;
        })}
      </ul>
    </div>
  );
}
export async function getStaticProps(context) {
  //얘는 새로고침 한다고 다시 불리지 않음. build할 때 어딘가에 저장해가지고 콘솔로그 안할거임.
  const res = await fetch("https://api.spacexdata.com/v3/launches");
  const data = await res.json();
  console.log("getStaticProps");
  return {
    props: { data }, // will be passed to the page component as props
  };
}

// export async function getServerSideProps(context) { //이렇게 해야 서버사이트 렌더링이 됨.
//     const res = await fetch("https://api.spacexdata.com/v3/launches")
//     const data = await res.json()
//     console.log("getServerSideProps")
//     return {
//       props: {data}, // will be passed to the page component as props
//     }
//   }
