import { useState, useEffect } from "react";

export interface Member {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetchapi = (url: string) => {
  const [member, setMember] = useState<Member[] | []>();

  const fetchdata = async () => {
    const res = await fetch(url);
    const json = await res.json();

    setMember(json);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return {
    member,
  }

};

export default useFetchapi;
