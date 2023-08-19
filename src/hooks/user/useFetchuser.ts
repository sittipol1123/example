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
  const param: any = useParams();

  const fetchdata = async () => {
    const res = await fetch(`${url}/${param.id}`);
    const json = await res.json();

    setDetail(json);
  };

  useEffect(() => {
    fetchdata();
  }, [])

  return {
    detail,
  }

};

export default useFetchuser;
