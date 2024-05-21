import React from "react";
import { useParams } from "react-router-dom";

export default function Product_detail() {
  const { id } = useParams();
  return (
    <div className="h-screen">
      <div className="flex px-14 py-7 h-96 w-full justify-center items-center bg-cover bg-no-repeat object-cover" style={{backgroundImage : `url(https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/main_product_breadcrumb_bg.jpg?1713464283843)`}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur in itaque assumenda nam consequuntur dolorem soluta dolor doloremque voluptas facere explicabo neque praesentium, non quae impedit officia ea quos?</p>
      </div>
      <div>
        <h1>Product Detail</h1>
        <p>Product ID: {id}</p>
        <p>lorem</p>
      </div>
    </div>
  );
}
