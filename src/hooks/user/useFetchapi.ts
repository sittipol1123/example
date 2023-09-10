import { useState, useEffect } from "react";

export interface Member {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const useFetchapi = (url: string) => {
  const [member, setMember] = useState<Member[] | []>();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchdata = async () => {
    const res = await fetch(url);
    const json = await res.json();

    setMember(json);
    setLoading(false);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  return {
    member,
    loading,
  }

};

export default useFetchapi;
