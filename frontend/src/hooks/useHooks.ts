import axios from "axios";
import { useEffect, useState } from "react";

interface HTTPRequestProps {
  url: string;
  initialState: object;
  method: requestTypes;
}

interface HTTPRequestReturn {
  data: object;
  status: number;
  loading: boolean;
  refresh: () => void;
}

type requestTypes = "GET" | "POST" | "PUT" | "DELETE";

const httpRequest = ({
  url,
  initialState,
  method,
}: HTTPRequestProps): HTTPRequestReturn => {
  const [data, setData] = useState(initialState ?? null);
  const [loading, setLoading] = useState(false);
  const [refreshToggle, setRefreshToggle] = useState(false);
  const [status, setStatus] = useState(-1);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await axios({
        method: method,
        url: url,
        data: data,
      });
      setData(response.data);
      setStatus(response.status);
      setLoading(false);
    };
    fetchData();
  }, [url, refreshToggle]);

  const refresh = () => {
    setRefreshToggle(!refreshToggle);
  };

  return { data, status, loading, refresh };
};

export { httpRequest };
