import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setAuth } from "../redux/authSlice";
import axios from "axios";

const useLoadingWithRefresh = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/refresh`, {
          withCredentials: true,
        });

        dispatch(setAuth(data));

        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  return { loading };
};

export default useLoadingWithRefresh;
