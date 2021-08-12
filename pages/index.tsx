/* eslint-disable react/jsx-key */
//import { GetServerSidePropsContext, GetStaticPropsContext } from "next";
import React from "react";
import { services } from "../data";
import ServiceCard from "../components/ServiceCard";

const index = () => {
  return (
    <div className="flex flex-col flex-grow px-6 pt-1">
      <h5 className="my-3 font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, eius
        impedit? Atque, ipsa. Enim accusantium optio fugiat dolorum vitae ab
        minus, velit tenetur doloremque quod eligendi esse alias.
      </h5>
      <div
        className="p-4 mt-10 bg-gray-200 rounded-lg"
        style={{ marginLeft: -"1.5rem", marginRight: -"1.5rem" }}
      >
        <h6 className="my-3 text-xl font-bold tracking-wide">My Skills:</h6>
        <div className="grid gap-6 rounded-lg lg:grid-cols-2">
          {services.map((service) => (
            <div className="grid gap-6 lg:col-span-1">
              <ServiceCard service={service} key={service.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default index;

// export const getServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("Server:", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const res = await fetch("http://localhost:3000/api/services");
//   const data = await res.json();
//   console.log("Server:", services);

//   return {
//     props: {
//       services: data.services,
//     },
//   };
// };
