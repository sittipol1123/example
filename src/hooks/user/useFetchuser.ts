import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface Kuy {
    userId: number | null;
    id: number | null;
    title: string;
    completed: boolean | null;
}

const useFetchuser = (url: string) => {
  const [detail, setDetail] = useState<Kuy>({
    userId: null,
    id: null,
    title: "",
    completed: null
  });
  const [loading, setLoading] = useState<boolean>(true);
  const param: any = useParams();

  const fetchdata = async () => {
    const res = await fetch(`${url}/${param.id}`);
    const json = await res.json();

    setDetail(json);
    setLoading(false);
  };

  useEffect(() => {
    fetchdata();
  }, [detail])

  return {
    detail,
    loading,
  }

};


const dta = {
  name: 'sittipol',
  email: 'admin@admin.com',
  tel: '0987654321',
  activate: false,
  id: 2
}

interface Eaklong {
  name: string;
  email: string;
  tel: string;
  activate: boolean;
  id: number;

}

const aaa: Eaklong = dta;

console.log(aaa.id);


export default useFetchuser;
