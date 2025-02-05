
import CompiniesDetails from "@/pages/organisationDetails";
// import NavBar from "@/components/navbar"; 
// import Router from "next/router";

// import Login from "@/components/Login";


export default function Home() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      
          {/* <h1>Hello</h1> */}
          {/* <NavBar/> */}
          <CompiniesDetails/>
          {/* <Login/> */}
       
    </div>
  );
}
