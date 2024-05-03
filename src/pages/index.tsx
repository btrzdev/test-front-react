/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Inter } from "next/font/google";
import { FaDoorOpen } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { DATA } from "./data";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [inputValues, setInputValues] = useState({
    input1: "label",
    input2: "label",
    input3: "label",
    input4: "label",
  });

  const [foundedItem, setFoundedItem] = useState("");
  const [searchTextField, setSearchTextField] = useState("");

  const handleInputFill = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.value.length > 3) {
      setInputValues({
        ...inputValues,
        [evt.target.id]: "input",
      });
    }
    if (evt.target.value.length < 3) {
      setInputValues({
        ...inputValues,
        [evt.target.id]: "label",
      });
    }
  };

  const handleSearch = (evt: React.ChangeEvent<HTMLInputElement>) => {
    handleInputFill(evt);

    const inputValue = evt.target.value;
    const foundItem = DATA.find((item) => item.value === inputValue);
    setSearchTextField("Localizando valores...");

    if (foundItem) {
      setSearchTextField("");
      setFoundedItem(inputValue);
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="flex items-center">
        <h2 className="text-[#2542E0] font-semibold text-[20px]">Grupo Uni</h2>
        <div className="absolute flex justify-between items-center gap-2 right-10 text-[#2542E0]">
          <FaDoorOpen size={30} /> <span>Sair</span>
        </div>
      </div>
      <div className="w-full pt-[42px] absolute top-[300px] h-[256px] bg-gradient-to-b px-[50px] from-[#2542E0] via-[#443BC6] to-[#6F30A2] flex-col items-center justify-center">
        <h3 className="text-[20px] font-semibold text-white text-center mb-[35px]">
          Adicionar novo saldo de Bonificação
        </h3>

        <div className="h-[419px] rounded-[16px] w-full p-[22px] bg-white border border-[#BBBBBB]">
          <div className="flex gap-[16px]">
            <div className="flex-col">
              <div className="label w-[420px] h-[74px]">
                <p>Informe o código do produto ou SKU</p>
              </div>
              <div className="label w-[420px] h-[74px]">
                <p>Quanto será consumido do saldo ?</p>
              </div>
              <div className="label w-[420px] h-[74px]">
                <p>
                  Saldo dia Atual 50 Unidades, quanto quer consumir para ser
                  notificado ?
                </p>
              </div>
              <div className="label w-[420px] h-[74px]">
                <p>De qual nota será consumido o Saldo ?</p>
              </div>
            </div>
            <div className="flex-col flex-nowrap">
              <div className="flex items-center gap-[12px]">
                <input
                  className={`${inputValues.input1} w-[420px] h-[74px]`}
                  type="text"
                  onChange={(evt) => handleInputFill(evt)}
                  id="input1"
                />
                <img
                  src="check-icon.png"
                  alt="check icon"
                  className={`${
                    inputValues.input1 === "label" ? "hidden" : "flex"
                  } w-[29px] h-[29px]`}
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <input
                  className={`${inputValues.input2} w-[420px] h-[74px]`}
                  type="text"
                  onChange={(evt) => handleInputFill(evt)}
                  id="input2"
                />
                <img
                  src="check-icon.png"
                  alt="check icon"
                  className={`${
                    inputValues.input2 === "label" ? "hidden" : "flex"
                  } w-[29px] h-[29px]`}
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <input
                  className={`${inputValues.input3} w-[420px] h-[74px]`}
                  type="text"
                  onChange={(evt) => handleInputFill(evt)}
                  id="input3"
                />
                <img
                  src="check-icon.png"
                  alt="check icon"
                  className={`${
                    inputValues.input3 === "label" ? "hidden" : "flex"
                  } w-[29px] h-[29px]`}
                />
              </div>
              <div className="flex items-center gap-[12px]">
                <input
                  className={`${inputValues.input4} w-[420px] h-[74px]`}
                  type="text"
                  onChange={(evt) => handleSearch(evt)}
                  id="input4"
                />
                <img
                  src="check-icon.png"
                  alt="check icon"
                  className={`${
                    inputValues.input4 === "label" ? "hidden" : "flex"
                  } w-[29px] h-[29px]`}
                />
              </div>
            </div>
            <div className="flex-col flex-nowrap">
              <div className="border border-[#BBBBBB] w-[295px] h-[300px] rounded-2xl">
                <h3>{searchTextField}</h3>
                <table className="text-[#BBBBBB] w-full mt-[30px]">
                  <thead className="font-semibold border-b-2">
                    <tr className="">
                      <th
                        scope="col"
                        className="text-left text-[16px] flex-1 px-4"
                      >
                        Nota
                      </th>
                      <th
                        scope="col"
                        className="text-right text-[16px] flex-1 px-4"
                      >
                        Saldo Atual
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-[##D9D9D93D] font-semibold">
                    {DATA.map((item) => (
                      <tr
                        className={
                          item.value === foundedItem
                            ? "bg-[#D9D9D93D] font-bold"
                            : ""
                        }
                        key={item.id}
                      >
                        <td className="py-[10px] px-4">{item.value}</td>
                        <td className="text-right px-4">{item.balance}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
