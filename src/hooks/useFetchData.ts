import {useCallback, useEffect, useMemo, useState} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type ItemType = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const useFetchData = () => {
  const [data, setData] = useState<ItemType[]>([]);
  const [page, setPage] = useState(1);
  const limit = 20;
  const insets = useSafeAreaInsets();
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`,
        {method: 'GET'},
      );
      const buffer = await res.json();
      setData(prevData => [...prevData, ...buffer]);
    };
    fetchData();
  }, [page]);

  const memoizedData = useMemo(() => data, [data]);

  const handleLoadData = useCallback(() => {
    setPage(prevPage => prevPage + 1);
  }, []);
  return {memoizedData, handleLoadData, insets};
};

export default useFetchData;
