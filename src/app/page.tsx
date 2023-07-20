import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/header";
import Tree from "../../public/signup-image.png"

export default function Home() {
  return (
    <main className="bg-white h-100 w-100 d-flex flex-column justify-content-center align-items-center">
      <div className="bg-info py-12 px-12 rounded-circle mb-12"></div>
      <h1 className="text-dark font-weight-boldest mb-8 w-33 text-center display-4 ">Harvest the Joy of Reading: Manga Harvest - Kindle's Best Companion!</h1>
      <div className="form-group col-2">
          <select className="form-control form-control-lg mb-4" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          <select className="form-control form-control-lg mb-4" id="exampleSelect1">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
					<input className="form-control form-control-lg mb-4" type="text" id="example-search-input"/>
					<input className="form-control form-control-lg mb-4" type="text" id="example-search-input"/>
          <button className="btn btn-info btn-shadow  btn-lg w-100">GENERATE VOLUME 📕</button>
			</div>
    </main>
  );
}
